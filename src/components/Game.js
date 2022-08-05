import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { letterWords, searchWord ,wordCont} from "../redux/action";
import { buttons } from "../utils/buttons";
import Win from "./Win";


function Game() {
  const dispatch = useDispatch();
  const { text, word,letter_words } = useSelector((state) => state.searchReducer);
  const inputRef = useRef(null);
  const [allowInput,setAllowInput] = useState(false);
  const [responseControlData,setResponseControlData] = useState([]);
  const [compare,setCompare] = useState(false)



  const handleChange = (e) =>{
    setAllowInput(e.target.checked);
    if (allowInput) {
      inputRef.current.disabled = true
    }else{
      inputRef.current.disabled = false
    }
  };



  useEffect(() =>{
    if (![...word].includes(letter_words[letter_words.length - 1]) && letter_words.length > 0) {
      dispatch(wordCont());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[letter_words]);

  useEffect(() =>{
    let wordSort = [...new Set(word)].sort((a, b) => a.localeCompare(b));
    let buttonSort =  responseControlData.sort((a,b) => a.localeCompare(b));
    setCompare(wordSort.every((item,index) => buttonSort[index] === item))
    console.log(buttonSort);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[responseControlData]);
  console.log(compare);


  const handleButton = (e) =>{
    e.preventDefault();
    dispatch(letterWords(e.target.value));
    if ([...new Set(word)].includes(e.target.value)) {
       setResponseControlData([...responseControlData,e.target.value])
    } 
  }


  

  return (
    <div className="game">
      {
        compare && <Win/>
      }
      <div className="game-input">

        <input
          type="text"
          value={text}
          onChange={(e) => dispatch(searchWord(e.target.value))}
          placeholder="Word..."
          ref={inputRef}
          disabled
        />
        <input type="checkbox" value={allowInput} onChange={handleChange}/>
        <button type="button" disabled>Onay</button>
      </div>

      <div className="game-word">
        {Array.from(word, (item, index) => {
          return (
            <div key={index}>{letter_words.includes(item) ? item.toUpperCase() : null}</div>
            
          );
        })}
      </div>
      <div className="buttons">
        {
          buttons.map((item,index) =>{
            return(
              <button value={item} onClick={handleButton} key={index}>{item.toUpperCase()}</button>
            )
          })
        }
      </div>
    </div>
  );
}

export default Game;
