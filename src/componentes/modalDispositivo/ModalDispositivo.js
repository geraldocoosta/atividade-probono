import React from 'react';
import PropTypes from 'prop-types';

import { ButtonModalDispositivo } from '../buttonsComponents/ButtonsComponent';

import './styles.css';

class ModalDispositivo extends React.Component {
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
    const { exibirModal, infos, label } = this.props;
    return (
      <div className={`modal-dispositivo ${exibirModal ? 'exibir-modal' : ''}`}>
        <header className="header-modal flex-row flex-space-between center-item">
          <h1>Sentença</h1>
          <p>{`#${infos.id}`}</p>
        </header>
        <div className="flex-column align-center flex-space-around body-modal">
          <p>{label}</p>
          <ButtonModalDispositivo infos={infos} />
        </div>
      </div>
    );
  }
}

ModalDispositivo.propTypes = {
  exibirModal: PropTypes.bool.isRequired,
  infos: PropTypes.shape({
    id: PropTypes.string,
    createdAt: PropTypes.string,
    user: PropTypes.string,
    userCPF: PropTypes.string,
    exAdverso: PropTypes.string,
    userEmail: PropTypes.string,
    userPhone: PropTypes.string,
    processNumber: PropTypes.number,
    lawsuit: PropTypes.number,
  }).isRequired,
  label: PropTypes.string.isRequired,
};

export default ModalDispositivo;
