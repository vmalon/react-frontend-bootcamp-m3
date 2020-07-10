import React, { Component } from 'react';
import SalarioLiquido from './components/Inputs/SalarioLiquido';
import DescontoIRPF from './components/Inputs/DescontoIRPF';
import BaseINSS from './components/Inputs/BaseINSS';
import DescontoINSS from './components/Inputs/DescontoINSS';
import BaseIRPF from './components/Inputs/BaseIRPF';
import SalarioBruto from './components/Inputs/SalarioBruto';
import { calculateSalaryFrom } from './components/Helpers/salary';
import css from './components/inputs.module.css';
import ProgressBar from './components/ProgressBar';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      valorSalarioBruto: 0,
      porcentagemINSS: 0,
      porcentagemIRPF: 0,

    }

  }

  handleChangeSalarioBruto = (value) => { 
    this.setState({
      valorSalarioBruto: value
    });
  };

  render() {
    const { valorSalarioBruto } = this.state;
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary
    } = calculateSalaryFrom(valorSalarioBruto);

    const porcentagemINSS = (discountINSS / valorSalarioBruto) * 100;
    const porcentagemIRPF = (discountIRPF / valorSalarioBruto) * 100;

   
    return (
      <div className="container">
        <h1>React Salário</h1>
        <div>
          <SalarioBruto value={valorSalarioBruto} onChangeSalarioBruto={this.handleChangeSalarioBruto} />
          <div className={css.flexRow}>
            <BaseINSS className={css.input} baseINSS={baseINSS}/>
            <DescontoINSS discountINSS={discountINSS} />
            <BaseIRPF baseIRPF={baseIRPF} porcentagemINSS={porcentagemINSS}/>
            <DescontoIRPF discountIRPF={discountIRPF} porcentagemIRPF={porcentagemIRPF}/>
          </div>
          <SalarioLiquido netSalary={netSalary} />
        </div>
        <ProgressBar />
        <ProgressBar/>
        <ProgressBar/>
      </div>
    )
  }
}
