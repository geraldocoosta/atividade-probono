import React from 'react';

import Api from '../../api/Api';

import InfoComponent from '../helperComponents/InfoComponent';
import InputTextArea from '../formComponent/InputTextArea';

export class FormDispositivoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoCase: {},
      infoDetails: {},
      dispositivo: '',
      aconteceu: '',
      acontecera: '',
    }
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const responseCase = await Api.get(`/lawsuits/${id}`);
    const responseDetails = await Api.get(`/lawsuitDetails/${id}`);
    this.setState({
      infoCase: responseCase.data,
      infoDetails: responseDetails.data,
    });
  } catch(error) {
    console.error(error);
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { infoCase, infoDetails, dispositivo, aconteceu, acontecera } = this.state;
    return (
      <div>
        <FormLayoutComponent infoCase={infoCase} infoDetails={infoDetails} >
          <form>
            <div>
              <InputTextArea label="Dispositivo:" name="dispositivo" onChange={this.handleChange} value={dispositivo} />
              <InputTextArea label="O que aconteceu?" name="aconteceu" onChange={this.handleChange} value={aconteceu} />
              <InputTextArea label="O que vai acontecer?" name="acontecera" onChange={this.handleChange} value={acontecera} />
            </div>
          </form>
        </FormLayoutComponent>
      </div>
    );
  }
}

export class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoCase: {},
      infoDetails: {},
      aconteceu: '',
      acontecera: '',
    }
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const responseCase = await Api.get(`/lawsuits/${id}`);
    const responseDetails = await Api.get(`/lawsuitDetails/${id}`);
    this.setState({
      infoCase: responseCase.data,
      infoDetails: responseDetails.data,
    });
  } catch(error) {
    console.error(error);
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { infoCase, infoDetails, aconteceu, acontecera } = this.state;
    return (
      <div>
        <FormLayoutComponent infoCase={infoCase} infoDetails={infoDetails} >
          <form>
            <div>
              <InputTextArea label="O que aconteceu?" name="aconteceu" onChange={this.handleChange} value={aconteceu} />
              <InputTextArea label="O que vai acontecer?" name="acontecera" onChange={this.handleChange} value={acontecera} />
            </div>
          </form>
        </FormLayoutComponent>
      </div>
    );
  }
}

export function FormLayoutComponent(props) {
  const { infoCase, infoDetails } = props;
  return (
    <div>
      <div className="center-item">
        <div className="setenca-box setenca-box-form">
          <header className="flex-row flex-space-between align-center header-sentenca-box header-sentenca-form">
            <h2 className="titulo-setenca-box">Sentença</h2>
            <p className="numero-setenca-box">#{infoCase.id}</p>
          </header>
          <div className="container">
            <InfoComponent
              primaryInfoLabel="Nome"
              primaryInfo={infoCase.user}
              secundaryInfoLabel="CPF"
              secundaryInfo={infoCase.userCPF}
            />
            <InfoComponent
              primaryInfoLabel="Nº do Processo"
              primaryInfo={infoDetails.processNumber}
              secundaryInfoLabel="Ex Adverso"
              secundaryInfo={infoCase.exAdverso}
            />
            <InfoComponent
              primaryInfoLabel="E-mail"
              primaryInfo={infoCase.userEmail}
              secundaryInfoLabel="Tel."
              secundaryInfo={infoCase.userPhone}
            />
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}