import React, { Component } from 'react';
import mergeByKey from 'array-merge-by-key';

import Api from '../../api/Api';

import HistoricComponent from '../historicComponent/HistoricComponent';
import ToogleInicialComponent from '../toogleInicialComponent/ToogleInicialComponent';
import NovoComponent from '../novoComponent/NovoComponent';

class SentencasComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentencas: [],
      historicOn: false,
    }
  }

  handleChange = () => {
    const historicOn = !this.state.historicOn;
    this.setState({
      historicOn: historicOn,
    });
    this.getData();
  }

  getData = async () => {
    try {
      const responseCase = await Api.get('/lawsuits');
      const responseDetails = await Api.get('/lawsuitDetails');

      const merge = mergeByKey('id', responseCase.data, responseDetails.data);

      this.setState({
        sentencas: merge,
      });
    } catch (error) {
      console.error(error);
    }
  }

  renderCondicional = () => {
    const { historicOn, sentencas } = this.state
    if (historicOn) {
      return <HistoricComponent sentencas={sentencas} />;
    }
    return <NovoComponent />;
  }


  render() {

    return (
      <div>
        <div className="flex-center flex-row">
          <ToogleInicialComponent onChange={this.handleChange} />
        </div>
        {this.renderCondicional()}
      </div>
    );
  }
}

export default SentencasComponent;