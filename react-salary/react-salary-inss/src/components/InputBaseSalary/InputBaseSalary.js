import React, { Component } from 'react'
import {formatNumber} from '../Helpers/FormatNumber'

export default class InputBaseSalary extends Component {
    handleChangeBaseSalay = (event) => {
        const baseSalary = event.target.value;
        this.props.onChange(baseSalary);
    }


    render() {
        const {salary} = this.props;

        return (
            <div>
                <label>Salário Bruto</label>
                <input type="text" onChange={this.handleChangeBaseSalay} />
            </div>
        )
    }
}
