const API_KEY = '9a77f74792f1edbec3a1801e941a1bfe';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
    return {
        type: FETCH_WEATHER
    };
}
