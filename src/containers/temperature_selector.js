import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectedUnit } from '../actions/index';

var classNames = {
    kelvin: 'btn btn-secondary',
    celcius: 'btn btn-secondary ',
    fahrenheit: 'btn btn-secondary '
};

class TempSelector extends Component {
    constructor(props) {
        super(props);

        this.state = { selectedUnit: 'kelvin' };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        // We need to set our selected unit
        this.props.selectedUnit(event.target.value);

        classNames[this.state.selectedUnit] = classNames[
            this.state.selectedUnit
        ].replace(' active', '');

        this.setState({ selectedUnit: event.target.value });
    }

    render() {
        classNames[this.state.selectedUnit] += ' active';

        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                <button
                    className={classNames['kelvin']}
                    type="button"
                    onClick={this.handleClick}
                    value="kelvin"
                    aria-pressed="true"
                >
                    Kelvin
                </button>
                <button
                    className={classNames['celcius']}
                    type="button"
                    onClick={this.handleClick}
                    value="celcius"
                    aria-pressed="false"
                >
                    Celcius
                </button>
                <button
                    className={classNames['fahrenheit']}
                    type="button"
                    onClick={this.handleClick}
                    value="fahrenheit"
                    aria-pressed="false"
                >
                    Fahrenheit
                </button>
            </div>
        );
    }
}

function mapStateToProps({ selectedUnit }) {
    return { selectedUnit };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectedUnit }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TempSelector);
