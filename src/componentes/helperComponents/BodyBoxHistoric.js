import React from 'react';

import InfoComponent from './InfoComponent';
import { ButtonConcluirCadastro } from '../buttonsComponents/ButtonsComponent';


export default function BodyBoxHistoric(props) {

  const userEmailPhoneInfos = (item) => {
    const { userEmail, userPhone } = item;
    if (userEmail && userPhone) {
      return (<InfoComponent
        primaryInfoLabel="Email"
        primaryInfo={userEmail}
        secundaryInfoLabel="Telefone"
        secundaryInfo={userPhone}
      />);
    }
    return null;
  }

  const otherInfos = (item) => {
    const { acontecera, aconteceu, dispositivo } = item;
    if (acontecera && aconteceu && dispositivo) {
      return (
        <div className="text-details">
          <h2>Dispositivo:</h2>
          <p>{dispositivo}</p>
          <h2>O que aconteceu?</h2>
          <p>{aconteceu}</p>
          <h2>O que ira acontecer?</h2>
          <p>{acontecera}</p>
        </div>
      );
    }

    return null;
  }

  const originHistoric = props.origin === "historic";

  const notHistoricComponents = () => {
    if (originHistoric) {
      return null;
    }
    return (
      <div>
        <div>
          {userEmailPhoneInfos(item)}
        </div>
        <div>
          {otherInfos(item)}
        </div>
        <div>
          <ButtonConcluirCadastro infos={item} />
        </div>
      </div>
    );
  }


  const { item } = props;

  return (
    <div className="container margin-top-container-modal">
      <InfoComponent
        primaryInfoLabel="Nome"
        primaryInfo={item.user}
        secundaryInfoLabel="CPF"
        secundaryInfo={item.userCPF}
      />
      <InfoComponent
        primaryInfoLabel="Nº do Processo"
        primaryInfo={item.processNumber}
        secundaryInfoLabel="Ex Adverso"
        secundaryInfo={item.exAdverso}
      />
      {notHistoricComponents()}
    </div>
  );
}