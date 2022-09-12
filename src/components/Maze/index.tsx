import { KeyboardEvent, useEffect, useState } from 'react'
import './Maze.scss'
export function Maze() {
    const [key, setKey] = useState('')
    useEffect(() => {
        const keypress = (e: any) => {
            console.log(e.key)
            setKey(e.key)
        }
        window.addEventListener('keypress', keypress)
    }, [])
    return (
        <section className="container-maze">
            <div className="maze">
                <h1>{key}</h1>
            </div>
        </section>
    )
}
