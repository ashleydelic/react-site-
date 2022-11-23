
function Header() {
    return (
        <header>
            <nav>
            <img src="React-icon.png" width="40px" />
            </nav>
        </header>
    )
}

function Page() {
    return (
        <div>
            <h1>My awesome page in React</h1>
            <h3>Reasons I love React</h3>
            <ol>
                <li>It's composable</li>
                <li>It's declarative</li>
                <li>It's hirable</li>
                <li>It's actively maintained by skilled people</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2022 Delic development. All rights reserved.</small>
        </footer>
    )
}
function TemporaryName() {
    return (
        <div>
        <Header />,
        <Page />,
        <Footer />
        </div>

    )
}

ReactDOM.render(<TemporaryName />, document.getElementById("root"))
