
function Page(){
    return(
<div>
    <header>
        <nav>
            <img src="react-2.svg" width="50px"></img>
        </nav>
    </header>
    <h1>Reasons I'm excited to learn React</h1>
    <ol>
        <li>It is a popular library,so i will be able to fit in with the cool kids!</li>
        <li>I'm more likely to det a job as a developer if i know React</li>
        
    </ol>

    <footer>
        <small>&copy;2022 Placide development. All rights reserved.</small>
    </footer>

</div>

    )
}

ReactDOM.render(<Page/>, document.getElementById('root'))
