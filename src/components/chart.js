import React from 'react';
import {
    Sparklines,
    SparklinesLine,
    SparklinesReferenceLine
} from 'react-sparklines';

function average(data) {
    return (data.reduce((x, y) => x + y) / data.length).toFixed(2);
}

function format(data, type, unit) {
    if (type === 'temperature') {
        if (unit === 'kelvin') {
            return data;
        } else if (unit === 'celcius') {
            return data.map(x => x - 273.15);
        } else if (unit === 'fahrenheit') {
            return data.map(x => x * (9 / 5) - 459.67);
        } else {
            console.log(`Error: Invalid unit selected: ${unit}`);
            return data;
        }
    } else {
        return data;
    }
}

export default ({ data, color, type, unit }) => {
    const formattedData = format(data, type, unit);
    return (
        <div>
            <Sparklines svgHeight={160} svgWidth={280} data={formattedData}>
                <SparklinesLine color={color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>
                Average: {average(formattedData)} ({unit})
            </div>
        </div>
    );
};
