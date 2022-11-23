

function TemporaryName() {
    return (
        <div>
            <img src="React-icon.png" width="40px" />
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

ReactDOM.render(<TemporaryName />, document.getElementById("root"))
