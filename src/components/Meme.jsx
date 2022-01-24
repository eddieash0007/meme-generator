import React from "react"
import memes from "../memes.js"

export default function Meme() {

        const [memeImage, setMemeImage] = React.useState("")

        function getMemeimage(){
            const memesArray = memes.data.memes
            const randomNumber = Math.floor(Math.random() * memesArray.length)
            // const url = memesArray[randomNumber].url
            setMemeImage(memesArray[randomNumber].url)
        }
    return (
        <main>
            <div className="form">
                <input placeholder="Top Text" className="form--input" type="text" />
                <input placeholder="Bottom Text" className="form--input" type="text" />
                <button className="form--button" onClick={getMemeimage}>
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImage} alt="meme" className="meme--image"/>
        </main>
    )
}