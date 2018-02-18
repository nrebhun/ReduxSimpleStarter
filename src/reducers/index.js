import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import SelectedUnit from './reducer_selected_unit';

const rootReducer = combineReducers({
    weather: WeatherReducer,
    selectedUnit: SelectedUnit
});

export default rootReducer;
