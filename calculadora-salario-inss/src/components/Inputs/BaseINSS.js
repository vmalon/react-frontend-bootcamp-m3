import React, { Component } from 'react'
import { formatNumber } from '../Helpers/FormatNumber';
import css from '../inputs.module.css';

export default class BaseINSS extends Component {
    render() {
        const { baseINSS, porcentagemINSS } = this.props;
   
        return (
            <div>
                <span className={css.font}>Base INSS</span>
                <input type="text" value={`${formatNumber(baseINSS)} (${porcentagemINSS})`} placeholder="Base INSS" readOnly />
            </div>
        )
    }
}
