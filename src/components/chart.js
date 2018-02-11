import React from 'react';
import {
    Sparklines,
    SparklinesLine,
    SparklinesReferenceLine
} from 'react-sparklines';

function average(data) {
    return (data.reduce((x, y) => x + y) / data.length).toFixed(2);
}

export default props => {
    return (
        <div>
            <Sparklines svgHeight={160} svgWidth={280} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>Average: {average(props.data)}</div>
        </div>
    );
};
