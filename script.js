



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
        <Header />
        <Page />
        <Footer />
        </div>

    )
}

ReactDOM.render(<TemporaryName />, document.getElementById("root"))
