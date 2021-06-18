import {
    useReducer,
    createContext
} from 'react'

const AppContext = createContext();

const initialState = { showAddRecipe: false };

export const actionTypes = {
    TOGGLE_ADD_RECIPE: "toggle_add_recipe"
};

function reducer(state, action) {
    switch (action.type) {
        case actionTypes.TOGGLE_ADD_RECIPE:
            return { ...state, showAddRecipe: action.value };
        default:
            throw new Error();
    }
}

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext
