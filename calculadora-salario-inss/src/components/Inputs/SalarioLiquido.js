import React, { Component } from 'react'
import {formatNumber} from '../Helpers/FormatNumber';
import css from '../inputs.module.css';
export default class SalarioLiquido extends Component {
    render() {
        const {netSalary} = this.props;
        return (
            <div>
                <span>Salário líquido</span>
                 <input type="text" placeholder="Salário líquido" value={formatNumber(netSalary)} readOnly/>
            </div>
        )
    }
}
