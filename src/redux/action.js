import { BUTTON_LETTER, SEARCH_WORD, WORD_CONT } from "./types"

export const searchWord = (payload) => {
    return{
        type:SEARCH_WORD,
        payload : payload
    }
}

export const letterWords =(payload) => {
    return{
        type:BUTTON_LETTER,
        payload : payload
    }
}

export const wordCont = () =>{
    return{
        type:WORD_CONT,

    }
}