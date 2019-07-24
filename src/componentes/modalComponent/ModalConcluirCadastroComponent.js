import React from 'react';

import BodyBoxHistoric from '../helperComponents/BodyBoxHistoric';

class ModalConcluirCadastro extends React.Component {
  componentDidUpdate() {
    const { exibirModal } = this.props;
    const body = document.querySelector('body');
    if (exibirModal) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }

  componentWillUnmount() {
    const body = document.querySelector('body');
    body.style.overflow = 'auto';
  }

  render() {
    const { exibirModal, infos } = this.props;


    return (
      <div className={`modal modal-cadastro ${exibirModal ? 'exibir-modal' : ''}`}>
        <header className="header-modal header-modal-cadastro ">
          <h1>Sentença</h1>
        </header>
        <BodyBoxHistoric item={infos} />
      </div>
    );
  }
}

export default ModalConcluirCadastro;
