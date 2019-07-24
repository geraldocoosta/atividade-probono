import React from 'react';

import InputTextArea from '../formComponent/InputTextArea';
import { ButtonNovoComponent } from '../buttonsComponents/ButtonsComponent';

export class FormDispositivoComponent extends React.Component {
  constructor(props) {
    super(props);
    const additionalInformation = {
      dispositivo: '',
      aconteceu: '',
      acontecera: '',
      userEmail: '',
      userPhone: '',
    }
    const { dados = {} } = this.props.location.state;
    this.state = Object.assign({}, additionalInformation, dados);
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }


  validaInfos = (infos) => {
    return !(Object.keys(infos).map(key => [infos[key]]
    ).map((item) => item[0]).every((item) => !!item)) ;
  }


  render() {
    const { dispositivo, aconteceu, acontecera } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit} method="post">
          <FormLayoutComponent data={this.state} handleChange={this.handleChange} >
            <div>
              <InputTextArea label="Dispositivo:" name="dispositivo" onChange={this.handleChange} value={dispositivo} />
              <InputTextArea label="O que aconteceu?" name="aconteceu" onChange={this.handleChange} value={aconteceu} />
              <InputTextArea label="O que vai acontecer?" name="acontecera" onChange={this.handleChange} value={acontecera} />
            </div>
            <div>
              <ButtonNovoComponent
                labelButton="concluir"
                origin="cadastroDispositivo"
                disabled={this.validaInfos(this.state)}
                infos={this.state} />
            </div>
          </FormLayoutComponent>
        </form>
      </div>
    );
  }
}

export function FormInputPrimaryComponent(props) {
  return (
    <div className="primary-info">
      <label className="label-input">
        {props.placeholder}
        <input className="input-component primary-info infos" placeholder={props.placeholder} required type={props.type} name={props.name} value={props.value} onChange={props.onChange} />
      </label>
    </div>
  );
}

export function FormInputSecundaryComponent(props) {
  return (
    <div className="secundary-info">
      <label className="label-input">
        {props.placeholder}
        <input className="input-component secundary-info infos" placeholder={props.placeholder} required type={props.type} name={props.name} value={props.value} onChange={props.onChange} />
      </label>
    </div>
  );
}

export class FormLayoutComponent extends React.Component {
  render() {
    const { user, userCPF, processNumber, exAdverso, userEmail, userPhone } = this.props.data;
    const { handleChange } = this.props;
    return (
      <div>
        <div className="center-item">
          <div className="setenca-box setenca-box-form">
            <header className="flex-row flex-space-between align-center header-sentenca-box header-sentenca-form">
              <h2 className="titulo-setenca-box">Sentença</h2>
            </header>
            <div className="container">
              <div className="flex-row flex-space-between row-infos">
                <FormInputPrimaryComponent type="text" placeholder="Nome:" name="user" value={user} onChange={handleChange} />
                <FormInputSecundaryComponent type="text" placeholder="CPF:" name="userCPF" value={userCPF} onChange={handleChange} />
              </div>
              <div className="flex-row flex-space-between row-infos">
                <FormInputPrimaryComponent type="text" placeholder="Nº do processo:" name="processNumber" value={processNumber} onChange={handleChange} />
                <FormInputSecundaryComponent type="text" placeholder="Ex Adverso:" name="exAdverso" value={exAdverso} onChange={handleChange} />
              </div>
              <div className="flex-row flex-space-between row-infos">
                <FormInputPrimaryComponent type="email" placeholder="Email:" name="userEmail" value={userEmail} onChange={handleChange} />
                <FormInputSecundaryComponent type="text" placeholder="Telefone:" name="userPhone" value={userPhone} onChange={handleChange} />
              </div>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}