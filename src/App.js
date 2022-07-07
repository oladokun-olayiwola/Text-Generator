import React, { useState } from 'react';
import data from './data';
function App() {
  const [index, setIndex] = useState(0)
  const [paragraphs, setParagraphs] =useState([])
  


  const render = (e) => {
    e.preventDefault()

  const texts =  data.filter((text, i) => {
      return i < index 
    })

    setParagraphs(texts) 
  }

 
  return (
  <section className='section-center'>
    <h3>tired of boring lorem ipsum
      <form className="lorem-form">
        <label htmlFor="amount">Paragraphs:</label>
        <input type="number" name="amount" id="amount" value={index} onChange={e=> setIndex(e.target.value)}/>
        <button className="btn" onClick={render}>generate</button>       
      </form>
      <article className='lorem-text'>
        {paragraphs.length > 0 && (
          paragraphs.map(paragraph => (
            <p key={paragraph} className="result">{paragraph}</p>
          ))
        )}
        </article>
    </h3>
  </section>
    )
}

export default App;
