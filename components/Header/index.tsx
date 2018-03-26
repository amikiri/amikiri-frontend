const Header: React.SFC = () => (
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
                Amikiri
            </a>

            <div className="navbar-burger">
            </div>
        </div>
        <div className="navbar-menu">
            <div className="navbar-start">
                <div className="navbar-item">
                    <a href="#">Home</a>
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-item has-dropdown">
                    <div className="navbar-link">
                        <a href="#">Profile</a>
                    </div>
                    <div className="navbar-dropdown">
                        <div className="navbar-item">
                            <a href="#">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
);

export default Header;