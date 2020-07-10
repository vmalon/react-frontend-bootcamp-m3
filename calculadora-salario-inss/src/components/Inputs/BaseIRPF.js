import React, { Component } from 'react'
import { formatNumber } from '../Helpers/FormatNumber';
import css from '../inputs.module.css';

export default class BaseIRPF extends Component {
    render() {
        const { baseIRPF } = this.props;
        return (
            <div>
                <span>Base IRPF</span>
                <input type="text" value={formatNumber(baseIRPF)} placeholder="Base IRPF" readOnly />
            </div>
        )
    }
}
