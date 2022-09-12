import './Mouse.scss'
export function Title() {
    return (
        <div className="container-title">
            <div className="title">
                <h1>Mouse Runner</h1>
                <img src={require('./mouse.png')} />
            </div>
        </div>
    )
}
