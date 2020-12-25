import { NoteInput } from '../cmps/NoteInput.jsx'
import { keepService } from '../services/keepService.js'
import { NoteList } from '../cmps/NoteList.jsx'
import { PinnedNotesList } from '../cmps/PinnedNotesList.jsx'
import { NoteFilter } from '../cmps/NoteFilter.jsx'

export class KeepApp extends React.Component {

    state = {
        notes: [],
        pinnedNotes: [],
        filterBy: {
            txt: ''
        }
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        keepService.query()
            .then(notes => this.setState({ notes }))
    }

    get notesForDisplay() {
        const { filterBy } = this.state
        const filterRegex = new RegExp(filterBy.txt, 'i')
        return this.state.notes.filter(note => filterRegex.test(note.info.txt))
    }



    onNoteAdd = (note) => {
        keepService.saveNote(note)
        this.loadNotes()
        // .then(notes => {
        //     const copyNotes = [...this.state.notes]
        //     copyNotes = notes
        //     this.setState({ notes: copyNotes })

        // })
    }

    onNoteDelete = (noteId) => {
        keepService.deleteNote(noteId)
            .then(this.loadNotes)

    }

    onNoteEdit = (newTxt, note) => {
        keepService.updateNote(note, newTxt)
            .then(this.loadNotes())
    }

    onNoteColorChange = (color, noteId) => {
        keepService.changeColor(color, noteId)
            .then(this.loadNotes())
            .then(console.log(this.state.notes))
    }

    onNotePin = (noteId) => {
        keepService.pinNote(noteId)
            .then(this.loadNotes())
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy })
    }

    render() {
        const notesForDisplay = this.notesForDisplay;
        return (
            <div className='keep-app keep-main-layout'>
                <NoteInput onAdd={this.onNoteAdd} />
                <NoteFilter setFilter={this.onSetFilter} />
                <PinnedNotesList notes={notesForDisplay} onDelete={this.onNoteDelete} onEdit={this.onNoteEdit} onColor={this.onNoteColorChange} onPin={this.onNotePin} />
                <NoteList notes={notesForDisplay} onDelete={this.onNoteDelete} onEdit={this.onNoteEdit} onColor={this.onNoteColorChange} onPin={this.onNotePin} />
            </div>
        )
    }
}
