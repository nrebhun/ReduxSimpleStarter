import axios from 'axios';

const API_KEY = '9a77f74792f1edbec3a1801e941a1bfe';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const GET_SELECTED_UNIT = 'GET_SELECTED_UNIT';

// These are the functions used by components to get the application state
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

export function selectedUnit(unit) {
    return {
        type: GET_SELECTED_UNIT,
        payload: unit
    };
}
