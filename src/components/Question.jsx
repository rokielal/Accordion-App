import React, { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'


function Question({id, title, answer}) {
  
    const [showAnser, setShowAnser] = useState(false);

    const handleClick =()=>{
        setShowAnser(!showAnser);
    }
  return (
    <article className='question'>
        <header>
            <h4>{title}</h4>
            <button onClick={handleClick} className='btn'>
                {
                    showAnser ? <AiOutlineMinus/> : <AiOutlinePlus />
                }
            </button>
        </header>
        {showAnser && <p>{answer}</p>}
    </article>
  )
}

export default Question;
