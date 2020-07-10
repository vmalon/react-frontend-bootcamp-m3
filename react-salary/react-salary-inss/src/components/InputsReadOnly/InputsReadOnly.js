import React, { Component } from 'react'
import { formatNumber } from '../Helpers/FormatNumber'

export default class InputsReadOnly extends Component {
    render() {
        const { baseINSS, discountINSS, baseIRPF, discountIRPF, netSalary, percentagemINSS, percentagemIRPF, netSalaryPercentage } = this.props;

        return (
            <div>
                <label>Base INSS</label>
                <input type="text" value={`${formatNumber(baseINSS)} (${percentagemINSS.toFixed(2)}%)`} readOnly />
                <label>Desconto INSS</label>
                <input type="text" value={formatNumber(discountINSS)} readOnly />
                <label>Base IRPF</label>
                <input type="text" value={`${formatNumber(baseIRPF)} (${percentagemIRPF.toFixed(2)}%)`} readOnly />
                <label>Desconto IRPF</label>
                <input type="text" value={formatNumber(discountIRPF)} readOnly />
                <label>Salário Líquido</label>
                <input type="text" value={`${formatNumber(netSalary)} (${netSalaryPercentage.toFixed(2)}%)`} readOnly/>
            </div>
        )
    }
}
