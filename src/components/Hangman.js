import React from 'react'
import {useSelector} from "react-redux";
function Hangman() {
    const{word_control} = useSelector(state => state.searchReducer);
  return (
    <div className='hangman'>
      <div className='direk'></div>
      <div className='askı'></div>
      <div className={`${word_control >= 1 ? "baş active" : "baş"}`}></div>
      <div className={`${word_control >= 2 ? "gövde active" : "gövde"}`}></div>
      <div className={`${word_control >= 3 ? "sol-kol active" : "sol-kol"}`}></div>
      <div className={`${word_control >= 4 ? "sağ-kol active" : "sağ-kol"}`}></div>
      <div className={`${word_control >= 5 ? "sol-bacak active" : "sol-bacak"}`}></div>
      <div className={`${word_control >= 6 ? "sağ-bacak active" : "sağ-bacak"}`}></div>
    </div>
  )
}

export default Hangman
