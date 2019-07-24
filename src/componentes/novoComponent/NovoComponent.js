import React from 'react';
import BoxSetencas from '../boxSetenca/BoxSentencas';

class NovoComponent extends React.Component {
  render() {
    const { sentencas } = this.props;
    return (
      <BoxSetencas sentencas={sentencas} origin="novo" />
    );
  }
}
export default NovoComponent;
