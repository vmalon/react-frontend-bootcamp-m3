import React, { Component } from 'react'
import { formatNumber } from '../Helpers/FormatNumber';
import css from '../inputs.module.css';
export default class Inputs extends Component {

    handleChangeSalarioBruto = (event) => {
        const salarioBruto = event.target.value;
        this.props.onChangeSalarioBruto(salarioBruto)
    }

    render() {
        return (
            <div> <span>Salário Bruto</span>
                <input type="text" placeholder="Salário bruto" onChange={this.handleChangeSalarioBruto} />
            </div>
        )
    }
}
