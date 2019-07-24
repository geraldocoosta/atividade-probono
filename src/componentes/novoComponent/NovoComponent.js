import React from 'react';
import PropTypes from 'prop-types';

import BoxSentencasComponent from '../boxSentencaComponent/BoxSentencasComponent';

class NovoComponent extends React.Component {
  render() {
    const { sentencas } = this.props;
    return (
      <BoxSentencasComponent sentencas={sentencas} origin="novo" />
    );
  }
}
NovoComponent.propTypes = {
  sentencas: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default NovoComponent;
