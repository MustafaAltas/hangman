import React from 'react'
import Game from '../components/Game'
import Hangman from '../components/Hangman'

function Main() {
  return (
    <div className='main'>
      <Hangman/>
      <Game/>
    </div>
  )
}

export default Main
