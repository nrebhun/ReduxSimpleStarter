import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class TempSelector extends Component {
    constructor(props) {
        super(props);

        this.state = { selectedUnit: 'Kelvin' };
    }

    handleClick(event) {
        this.setState({ selectedUnit: event.target.value });
        // this.props.onChange(event.target.value);
    }

    render() {
        return <div>doop!</div>;
    }
}
