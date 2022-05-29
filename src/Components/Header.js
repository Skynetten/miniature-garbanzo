import '../Assets/Style/header.css';

function Header() {
    return (
        <header className='header-div'>
            <nav id="header-nav" className="navbar navbar-expand-lg">

                <div className="container-fluid">
                    <a className="navbar-brand" href="/#"><span>ABC Products</span></a>
                </div>


            </nav>
            <div className="container-fluid">
                <p>Invoice List</p>
            </div>
        </header>
    );
}

export default Header;