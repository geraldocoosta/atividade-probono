import React from 'react';
import { Link } from 'react-router-dom';

import ModalDispositivo from '../modalDispositivo/ModalDispositivo';

export class ButtonNovoComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      exibirModal: false,
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

  render() {
    const { exibirModal } = this.state;
    const { infos } = this.props;
    return (
      <div>
        <div className="flex-row flex-center container">
          <button className="button-sentenca-box button-primary" onClick={this.mostrarModal}>Informar</button>
        </div>
        <ModalDispositivo
          exibirModal={exibirModal}
          fecharModal={this.fecharModal}
          infos={infos}
          label="Tem dispositivo a ser inserido?" />
      </div>
    );
  }
}

export class ButtonModalDispositivo extends React.Component {
  render() {
    return (
      <div className="flex-row flex-space-around buttons-model">
        <Link className="button-wrapper" to={`info/dispositivo/${this.props.infos.id}`}>
          <button className="button-model" onClick={this.setTemDispositivo}>Sim</button>
        </Link>
        <Link className="button-wrapper" to={`info/${this.props.infos.id}`}>
          <button className="button-model" onClick={this.setNaoTemDispositivo}>Não</button>
        </Link>
      </div>
    )
  }
}

export class ButtonHitoricComponent extends React.Component {
  render() {
    return (
      <div className="flex-row flex-space-between container">
        <button className="button-sentenca-box button-primary">Informar</button>
        <button className="button-sentenca-box button-secundary">Editar</button>
      </div>
    );
  }
}
