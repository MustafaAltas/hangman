import React from 'react'
import {useSelector} from "react-redux";
function Hangman() {
    const{text} = useSelector(state => state.searchReducer);
  return (
    <div className='hangman'>
      <div className='direk'></div>
      <div className='askı'></div>
      <div className={`${text.length >= 1 ? "baş active" : "baş"}`}></div>
      <div className={`${text.length >= 2 ? "gövde active" : "gövde"}`}></div>
      <div className={`${text.length >= 3 ? "sol-kol active" : "sol-kol"}`}></div>
      <div className={`${text.length >= 4 ? "sağ-kol active" : "sağ-kol"}`}></div>
      <div className={`${text.length >= 5 ? "sol-bacak active" : "sol-bacak"}`}></div>
      <div className={`${text.length >= 6 ? "sağ-bacak active" : "sağ-bacak"}`}></div>
    </div>
  )
}

export default Hangman
