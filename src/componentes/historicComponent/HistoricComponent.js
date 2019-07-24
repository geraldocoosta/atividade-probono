import React from 'react';

import BoxSetencas from '../boxSetenca/BoxSentencas';


class HistoricComponent extends React.Component {
  render() {
    const { sentencas } = this.props;
    return (
      <BoxSetencas sentencas={sentencas} origin='historic' />
    );
  }
}

export default HistoricComponent;
