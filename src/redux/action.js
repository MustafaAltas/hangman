import { SEARCH_WORD } from "./types"

export const searchWord = (payload) => {
    return{
        type:SEARCH_WORD,
        payload : payload
    }
}