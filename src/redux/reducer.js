import randomWord from "../utils/words";
import { SEARCH_WORD } from "./types";

const intial_value = {
    text : "",
    word : randomWord()
}
export const searchReducer = (state = intial_value,action) => {
    switch (action.type) {
        case SEARCH_WORD:
            return{
                ...state,
                text : action.payload
            }
    
        default:
            return state;
    }
}