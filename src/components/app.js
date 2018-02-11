import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import TempSelector from '../containers/temperature_selector';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <TempSelector />
                <WeatherList />
            </div>
        );
    }
}
