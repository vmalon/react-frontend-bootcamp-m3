import React, { Component } from 'react'
import { formatNumber } from '../Helpers/FormatNumber';
import css from '../inputs.module.css';

export default class DescontoINSS extends Component {
    render() {
        const { discountINSS } = this.props;
        return (
            <div>
                <span>Desconto INSS</span>
                <input type="text" value={formatNumber(discountINSS)} placeholder="Desconto INSS" readOnly />
            </div>

        )
    }
}
