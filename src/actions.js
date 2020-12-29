import { 
    CHANGE_SEARCH_FIELD, 
    REQUEST_COUNTRIES_FAILED,
    REQUEST_COUNTRIES_SUCCESS,
    REQUEST_COUNTRIES_PENDING
} from "./constants";

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestCountries = () => (dispatch) => {
    dispatch({ type: REQUEST_COUNTRIES_PENDING });

    fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_COUNTRIES_SUCCESS,
                                      payload: data}))
        .catch(error => dispatch ({ type: REQUEST_COUNTRIES_FAILED,
                                        payload: error}))
}