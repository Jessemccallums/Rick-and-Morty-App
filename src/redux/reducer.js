import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER, ALL_FAVORITE } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],

            }
        case ALL_FAVORITE:
            return {
                ...state,
                allCharacters: state.myFavorites

            }
        case REMOVE_FAVORITE:
            return { ...state, myFavorites: state.myFavorites.filter((char) => char.id !== action.payload) }
        // case FILTER:
        //     const { allCharacters } = state
        //     return { ...state, allCharacters: state.myFavorites.filter((char) => char.gender !== action.payload) }

        case ORDER:
          
            return { ...state, allCharacters: ordenardata(action.payload, state.allCharacters) }
        default:
            return { ...state };
    }
}
const ordenardata = (tipo, array) => {

    if(tipo === 'Ascendente'){

        let result = array.sort((a,b) => {return a.id - b.id})
        return result
    } else { 
        
        let result = array.sort((a,b) => {return b.id - a.id})
        return result

    }
}
export default rootReducer