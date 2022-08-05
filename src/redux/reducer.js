import randomWord from "../utils/words";
import { BUTTON_LETTER, SEARCH_WORD, WORD_CONT } from "./types";

const intial_value = {
    text : "",
    word : randomWord(),
    letter_words :[],
    word_control : 0

}
export const searchReducer = (state = intial_value,action) => {
    switch (action.type) {
        case SEARCH_WORD:
            return{
                ...state,
                text : action.payload
            }
        case BUTTON_LETTER:

            return{
                ...state,
                letter_words : state.letter_words.indexOf(action.payload) === -1 ? [...state.letter_words,action.payload] : state.letter_words
            }
        case WORD_CONT:
            return{
                ...state,
                word_control : state.word_control + 1
            }
    
        default:
            return state;
    }
}