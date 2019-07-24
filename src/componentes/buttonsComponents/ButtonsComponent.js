import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import ModalDispositivo from '../modalComponent/ModalDispositivoComponent';
import ModalConcluirCadastro from '../modalComponent/ModalConcluirCadastroComponent';
import Api from '../../api/Api';

export class ButtonNovoComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      exibirModal: false,
      validado: false,
    }
  }

  mostrarModal = () => {
    this.setState({
      exibirModal: true,
    });
  }

  fecharModal = (e) => {
    e.stopPropagation();
    this.setState({
      exibirModal: false,
    });
  }


  renderModal = () => {
    const { exibirModal } = this.state;
    const { infos, origin } = this.props;

    if (origin === 'box') {
      return (<ModalDispositivo
        exibirModal={exibirModal}
        label="Tem dispositivo a ser inserido?"
        fecharModal={this.fecharModal}
        infos={infos} />)
    } else if (origin === 'cadastroDispositivo') {
      return (<ModalConcluirCadastro
        exibirModal={exibirModal}
        fecharModal={this.fecharModal}
        infos={infos} />)
    }
  }

  render() {
    const { labelButton, disabled } = this.props;
    return (
      <div>
        <div className="flex-row flex-center container">
          <button disabled={disabled} className="button-sentenca-box button-primary" onClick={this.mostrarModal}>{labelButton}</button>
        </div>
        {this.renderModal()}
      </div>
    );
  }
}

export class ButtonConcluirCadastro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    }

  }

  concluirCadastro = async () => {
    const { infos } = this.props;

    try {
      const toLawSuit = {
        user: infos.user,
        userCPF: infos.userCPF,
        exAdverso: infos.exAdverso,
        userEmail: infos.userEmail,
        userPhone: infos.userPhone,
      }

      let response = await Api.post('/lawsuits', toLawSuit);

      const toLawDetails = {
        processNumber: infos.processNumber,
        lawsuit: response.data.id,
      }

      const toLawsuitSteps = {
        lawsuit: response.data.id,
        dispositivo: infos.dispositivo,
        whatHappened: infos.aconteceu,
        willHappen: infos.acontecera,
      }

      response = await Api.post('/lawsuitDetails', toLawDetails);
      response = await Api.post('/lawsuitSteps', toLawsuitSteps);

      this.setState({
        redirect: true,
      });
    } catch (e) {
      console.error(e);
    }
  }

  render() {

    const { redirect } = this.state;
    if (redirect) {
      return (
        <Redirect to='/' />
      );
    }
    return (
      <div className="flex-row flex-center container" >
        <button className="button-sentenca-box button-primary" onClick={this.concluirCadastro}>Concluir</button>
      </div>
    );
  }
}

export class ButtonModalDispositivo extends React.Component {
  render() {
    const { dados } = this.props;
    return (
      <div className="flex-row flex-space-around buttons-model">
        <Link className="button-wrapper" to={{ pathname: '/create/dispositivo', state: { dados } }} >
          <button className="button-model">Sim</button>
        </Link>
        <div className="button-wrapper">
          <button className="button-model" disabled>Não</button>
        </div>
      </div>
    );
  }
}

export class ButtonHitoricComponent extends React.Component {
  render() {
    return (
      <div className="flex-row flex-space-between container">
        <button disabled className="button-sentenca-box button-primary">Informar</button>
        <button disabled className="button-sentenca-box button-secundary">Editar</button>
      </div>
    );
  }
}
