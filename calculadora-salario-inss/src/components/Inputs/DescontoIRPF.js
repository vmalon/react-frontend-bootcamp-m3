import React, { Component } from 'react'
import { formatNumber } from '../Helpers/FormatNumber';
import css from '../inputs.module.css';


export default class DescontoIRPF extends Component {
    render() {
        const { discountIRPF } = this.props;
        return (
            <div>
                <span>Desconto IRPF</span>
                <input type="text" value={formatNumber(discountIRPF)} placeholder="DescontoIRPF" readOnly />
            </div>

        )
    }
}
