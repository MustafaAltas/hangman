import React, { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux";
import { searchWord } from '../redux/action';
import randomWord from '../utils/words';

function Game() {
    const dispatch = useDispatch();
    const {text,word} = useSelector((state) => state.searchReducer);
    console.log(text);
    useEffect(() =>{
        console.log(randomWord().length);
    },[])
  return (
    <div className='game'>
      <input type="text" value={text} onChange={(e) =>dispatch(searchWord(e.target.value))}/>
      <div className='game-word'>
      {
        Array.from(word,(__,index) => {
            return <div></div>
        })
      }
      </div>
    </div>
  )
}

export default Game
