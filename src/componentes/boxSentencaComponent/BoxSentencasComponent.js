import React from 'react';

import BodyBoxHistoric from '../helperComponents/BodyBoxHistoric';
import PaginationComponent from '../paginationComponent/PaginationComponent'
import { ButtonNovoComponent, ButtonHitoricComponent } from '../buttonsComponents/ButtonsComponent';
import { FormInputPrimaryComponent, FormInputSecundaryComponent } from '../formComponent/FormComponents';

export default class BoxSentencasComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pageOfItens: [],
    }
  }

  onChangePage = (pageOfItens) => this.setState({ pageOfItens });

  isHistoryMap = () => this.props.origin === 'historic';

  render() {
    const { pageOfItens } = this.state;
    const { sentencas, origin } = this.props;

    return (
      <div>
        <div className="flex-column align-center">
          {
            this.isHistoryMap() ? (
              pageOfItens.map(item =>
                <BoxLayoutComponent key={item.id} item={item} origin={origin} />
              )
            ) : (
                <BoxLayoutComponent origin={origin} />
              )
          }
        </div>
        <PaginationComponent items={sentencas} onChangePage={this.onChangePage} />
      </div>
    )
  }
}

export class BoxLayoutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      userCPF: '',
      processNumber: '',
      exAdverso: '',
    }
  }

  isBoxHistory = (item) => !!item;

  gerarButtons = (item = {}, origin) => {
    if (origin === 'novo') {
      const item = this.state;
      return <ButtonNovoComponent labelButton="Informar" origin="box" infos={item} />
    } else if (origin === 'historic') {
      return <ButtonHitoricComponent infos={item} />
    } else {
      return null;
    }
  }

  changeHandler = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  bodyBoxNewItem = () => {
    const { user, userCPF, processNumber, exAdverso } = this.state;
    return (
      <div>
        <form>
          <div className="flex-row flex-space-between row-infos">
            <FormInputPrimaryComponent type="text" placeholder="Nome:" name="user" value={user} onChange={this.changeHandler} />
            <FormInputSecundaryComponent type="text" placeholder="CPF:" name="userCPF" value={userCPF} onChange={this.changeHandler} />
          </div>
          <div className="flex-row flex-space-between row-infos">
            <FormInputPrimaryComponent type="text" placeholder="Nº do processo:" name="processNumber" value={processNumber} onChange={this.changeHandler} />
            <FormInputSecundaryComponent type="text" placeholder="Ex Adverso:" name="exAdverso" value={exAdverso} onChange={this.changeHandler} />
          </div>
        </form>
      </div>
    );
  }

  render() {
    const { item, origin } = this.props;
    const isBoxHistory = this.isBoxHistory(item);

    return (
      <div className={`setenca-box setenca-box-inicial ${isBoxHistory ? '' : 'sentenca-box-novo'}`}>
        <header className="flex-row flex-space-between align-center header-sentenca-box">
          <h2 className="titulo-setenca-box">Sentença</h2>
          {isBoxHistory ?
            (<p className="numero-setenca-box">#{item.id}</p>) : ''}
        </header>
        <div className="container">
          {isBoxHistory ? <BodyBoxHistoric origin="historic" item={item} /> : this.bodyBoxNewItem()}
        </div>
        {this.gerarButtons(item, origin)}
      </div>
    );
  }
}