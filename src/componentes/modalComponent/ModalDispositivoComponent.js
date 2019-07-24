import React from 'react';
import PropTypes from 'prop-types';

import { ButtonModalDispositivo } from '../buttonsComponents/ButtonsComponent';

class ModalDispositivoComponent extends React.Component {
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
    const { exibirModal, label, infos } = this.props;
    return (
      <div className={`modal ${exibirModal ? 'exibir-modal' : ''}`}>
        <header className="header-modal flex-row flex-space-between center-item">
          <h1>Sentença</h1>
        </header>
        <div className="flex-column align-center flex-space-around body-modal">
          <p>{label}</p>
          <ButtonModalDispositivo dados={infos} />
        </div>
      </div>
    );
  }
}

ModalDispositivoComponent.propTypes = {
  exibirModal: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default ModalDispositivoComponent;
