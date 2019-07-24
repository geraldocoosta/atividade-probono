import React from 'react';
import PropTypes from 'prop-types';

import BoxSentencasComponent from '../boxSentencaComponent/BoxSentencasComponent';

function NovoComponent(props) {
  NovoComponent.propTypes = {
    sentencas: PropTypes.arrayOf(
      PropTypes.object,
    ).isRequired,
  };
  const { sentencas } = props;
  return (
    <BoxSentencasComponent sentencas={sentencas} origin="novo" />
  );
}


export default NovoComponent;
