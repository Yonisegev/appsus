const { Link } = ReactRouterDOM;

export function AppGrid() {

    return (
        <div className="menu-tab-parent cursor-pointer">
            <div className="menu-tab">
                <svg className="menu-icon" viewBox="0 0 20 20" version="1.1">
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="noun_797089_cc" fill="#000000" fillRule="nonzero">
                            <g id="Group">
                                <path d="M12.1,7.5 L7.9,7.5 C7.7,7.5 7.5,7.7 7.5,7.9 L7.5,12.1 C7.5,12.3 7.7,12.5 7.9,12.5 L12.1,12.5 C12.3,12.5 12.5,12.3 12.5,12.1 L12.5,7.9 C12.5,7.7 12.3,7.5 12.1,7.5 Z" id="Shape"></path>
                                <path d="M19.1,14.5 L14.9,14.5 C14.7,14.5 14.5,14.7 14.5,14.9 L14.5,19.1 C14.5,19.3 14.7,19.5 14.9,19.5 L19.1,19.5 C19.3,19.5 19.5,19.3 19.5,19.1 L19.5,14.9 C19.5,14.7 19.3,14.5 19.1,14.5 Z" id="Shape"></path>
                                <path d="M5.1,7.5 L0.9,7.5 C0.7,7.5 0.5,7.7 0.5,7.9 L0.5,12.1 C0.5,12.3 0.7,12.5 0.9,12.5 L5.1,12.5 C5.3,12.5 5.5,12.3 5.5,12.1 L5.5,7.9 C5.5,7.7 5.3,7.5 5.1,7.5 Z" id="Shape"></path>
                                <path d="M19.1,7.5 L14.9,7.5 C14.7,7.5 14.5,7.7 14.5,7.9 L14.5,12.1 C14.5,12.3 14.7,12.5 14.9,12.5 L19.1,12.5 C19.3,12.5 19.5,12.3 19.5,12.1 L19.5,7.9 C19.5,7.7 19.3,7.5 19.1,7.5 Z" id="Shape"></path>
                                <path d="M5.1,14.5 L0.9,14.5 C0.7,14.5 0.5,14.7 0.5,14.9 L0.5,19.1 C0.5,19.3 0.7,19.5 0.9,19.5 L5.1,19.5 C5.3,19.5 5.5,19.3 5.5,19.1 L5.5,14.9 C5.5,14.7 5.3,14.5 5.1,14.5 Z" id="Shape"></path>
                                <path d="M5.1,0.5 L0.9,0.5 C0.7,0.5 0.5,0.7 0.5,0.9 L0.5,5.1 C0.5,5.3 0.7,5.5 0.9,5.5 L5.1,5.5 C5.3,5.5 5.5,5.3 5.5,5.1 L5.5,0.9 C5.5,0.7 5.3,0.5 5.1,0.5 Z" id="Shape"></path>
                                <path d="M12.1,0.5 L7.9,0.5 C7.7,0.5 7.5,0.7 7.5,0.9 L7.5,5.1 C7.5,5.3 7.7,5.5 7.9,5.5 L12.1,5.5 C12.3,5.5 12.5,5.3 12.5,5.1 L12.5,0.9 C12.5,0.7 12.3,0.5 12.1,0.5 Z" id="Shape"></path>
                                <path d="M19.1,0.5 L14.9,0.5 C14.7,0.5 14.5,0.7 14.5,0.9 L14.5,5.1 C14.5,5.3 14.7,5.5 14.9,5.5 L19.1,5.5 C19.3,5.5 19.5,5.3 19.5,5.1 L19.5,0.9 C19.5,0.7 19.3,0.5 19.1,0.5 Z" id="Shape"></path>
                                <path d="M12.1,14.5 L7.9,14.5 C7.7,14.5 7.5,14.7 7.5,14.9 L7.5,19.1 C7.5,19.3 7.7,19.5 7.9,19.5 L12.1,19.5 C12.3,19.5 12.5,19.3 12.5,19.1 L12.5,14.9 C12.5,14.7 12.3,14.5 12.1,14.5 Z" id="Shape"></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <div className="dropdown-grid flex">

                <Link to="/email/inbox"> <img src="./assets/img/grid-svg/mail.svg" alt="MisterEmail" title="MisterEmail" /></Link>
                <Link to="/keep"><img src="./assets/img/grid-svg/notes.svg" alt="MissKeep" title="MissKeep" /></Link>
                <Link to="/book"><img src="./assets/img/grid-svg/book.svg" alt="MissBook" title="MissBook" /></Link>
            </div>
        </div>
    )
}
