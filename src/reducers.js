import { 
    CHANGE_SEARCH_FIELD, 
    REQUEST_COUNTRIES_FAILED,
    REQUEST_COUNTRIES_SUCCESS,
    REQUEST_COUNTRIES_PENDING
} from "./constants";

const initialStateSearch = {
    searchField: ""
}

export const searchCountries = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload};
        default:
            return state; 
    }
}

const initialStateRequestCountries = {
    isPending: false,
    countries: [],
    error: ""
}

export const requestCountries = (state=initialStateRequestCountries, action={}) => {
    switch(action.type) {
        case REQUEST_COUNTRIES_PENDING:
            return {...state, isPending: true};
        case REQUEST_COUNTRIES_SUCCESS:
            return {...state, countries: action.payload, isPending: false};
        case REQUEST_COUNTRIES_FAILED:
            return {...state, error: action.payload, isPending: false};
        default:
            return state;
    }
}