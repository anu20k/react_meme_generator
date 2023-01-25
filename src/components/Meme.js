import React from 'react'
import memedata from '../memedata'
export default function Meme() {
  const [meme, setMeme] = React.useState({
    
    toptext:" ",
    bottomtext:" ",
    memeimage: "https://i.ndtvimg.com/i/2017-03/rowan-atkinson_640x480_71490079191.jpg"
    
  })

  const [Image, setImage] = React.useState(memedata)

  function getimage() {
    const memearray = Image.data.memes
    const randomeme = Math.floor(Math.random() * memearray.length)

    const memeImage = memearray[randomeme].url
     console.log(randomeme)
    setMeme((prevMeme) => ({
      ...prevMeme,
      memeimage: memeImage,
    }))
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
}

  return (
    <div className="meme">
      <div className="form1">
        <input
          type="text"
          className="top-input"
          placeholder="top text"
          name="toptext"
          onChange={handleChange}
          value={meme.toptext}
        />
        <input
          type="text"
          className="bootom-input"
          placeholder="bottom text"
          name="bottomtext"
          onChange={handleChange}
          value={meme.bottomtext}
        />
        <button className="form-button" onClick={getimage}>
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={meme.memeimage} alt="dd"></img>
        <h2 className="meme-text top">{meme.toptext}</h2>
        <h2 className="meme-text bottom">{meme.bottomtext}</h2>
      </div>
    </div>
  )
}
