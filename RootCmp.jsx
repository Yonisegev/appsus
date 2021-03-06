import { HomePage } from './pages/HomePage.jsx';
import { MainHeader } from './cmps/MainHeader.jsx';
import { EmailApp } from './apps/MisterEmail/pages/EmailApp.jsx';
import { EmailDetails } from './apps/MisterEmail/pages/EmailDetails.jsx';
import { KeepApp } from './apps/MissKeep/pages/KeepApp.jsx';
import { BookApp } from './apps/MissBooks/pages/BookApp.jsx';
import { BookDetails } from './apps/MissBooks/cmps/BookDetails.jsx';
import { ReviewAdd } from './apps/MissBooks/cmps/ReviewAdd.jsx';
import { About } from './pages/About.jsx';

const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

export function RootCmp() {
    return (
        <Router>
            <section className="app">
                <MainHeader />

                <Switch>
                    <Route path="/email/inbox/:compose?" component={EmailApp} />
                    <Route path="/email/:emailId" component={EmailDetails} />
                    {/* <Route path="/email/:compose=true/:body?" component={EmailApp} /> */}

                    {/* <Route path="/keep/:keepId?" component={KeepDetails} /> */}
                    <Route path="/keep/:mail?" component={KeepApp} />
                    <Route path="/book/review/:bookId?" component={ReviewAdd} />
                    <Route path="/book/:bookId" component={BookDetails} />
                    <Route path="/book" component={BookApp} />
                    <Route path='/about' component={About} />
                    <Route path='/' component={HomePage} />
                </Switch>
            </section>
        </Router>
    )
}

// Using Class:
// export class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <header>
//                     <h1>Lets Play</h1>
//                 </header>
//                 <main>
//                     <Home />
//                 </main>
//             </div>
//         )
//     }
// }

