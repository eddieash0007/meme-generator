import React from "react"
import memes from "../memes.js"

export default function Meme() {

        // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")

        const [meme, setMeme] = React.useState({
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        })

        function getMemeimage(){
            const memesArray = memes.data.memes
            const randomNumber = Math.floor(Math.random() * memesArray.length)
            const url = memesArray[randomNumber].url
            setMeme(prevMeme => ({
                ...prevMeme,
                randomImage: url
            }))
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
            <img src={meme.randomImage} alt="meme" className="meme--image"/>
        </main>
    )
}