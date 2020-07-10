import React, { Component } from 'react';
import InputBaseSalary from './components/InputBaseSalary/InputBaseSalary';
import InputsReadOnly from './components/InputsReadOnly/InputsReadOnly';
import { calculateSalaryFrom } from './components/Helpers/Calculators/salary';
import ProgressBar from './components/Helpers/ProgressBar';

let percentagemINSS = 0;
let percentagemIRPF = 0;
let netSalaryPercentage = 0;

export default class App extends Component {



  constructor() {
    super();
    this.state = {
      baseSalary: '0'
    }
  }

  handleBaseSalary = (newValue) => {
    const baseSalary = newValue;
    this.setState({
      baseSalary: baseSalary
    });
  };




  render() {
    const { baseSalary } = this.state;

    const { baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary } = calculateSalaryFrom(baseSalary);

    percentagemINSS = (discountINSS * 100) / baseSalary;
    percentagemIRPF = (discountIRPF * 100) / baseSalary;
    netSalaryPercentage = (netSalary / baseSalary) * 100;

    return (
      <div className="container">
        <h1>React Salário</h1>
        <InputBaseSalary salary={baseSalary} onChange={this.handleBaseSalary} />

        <InputsReadOnly
          baseINSS={baseINSS}
          discountINSS={discountINSS}
          baseIRPF={baseIRPF}
          discountIRPF={discountIRPF}
          netSalary={netSalary}
          percentagemINSS={percentagemINSS}
          percentagemIRPF={percentagemIRPF}
          netSalaryPercentage={netSalaryPercentage}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ProgressBar value={percentagemINSS} color="#e67e22" />
          <ProgressBar value={percentagemIRPF} color="#c0392b" />
          <ProgressBar value={netSalaryPercentage} color="#16a085" />
        </div>
      </div>
    );
  }
}
