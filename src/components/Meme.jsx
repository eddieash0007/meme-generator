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

        function setText(event){
            const {name,value} = event.target
            setMeme(prevMeme => ({
                ...prevMeme,
                [name]:value
            }))
        }
    return (
        <main>
            <div className="form">
                <input 
                    placeholder="Top Text" 
                    className="form--input" 
                    type="text" 
                    name="topText"
                    value={meme.topText}
                    onChange={setText}
                />
                <input 
                    placeholder="Bottom Text" 
                    className="form--input" 
                    type="text" 
                    value={meme.bottomText}
                    name="bottomText"
                    onChange={setText}
                />
                <button className="form--button" onClick={getMemeimage}>
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}