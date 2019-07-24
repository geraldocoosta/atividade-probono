import React from 'react';
import PropTypes from 'prop-types';

import BoxSentencasComponent from '../boxSentencaComponent/BoxSentencasComponent';

function HistoricComponent(props) {
  const { sentencas } = props;
  return (
    <BoxSentencasComponent sentencas={sentencas} origin='historic' />
  );
}
HistoricComponent.propTypes = {
  sentencas: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default HistoricComponent;
