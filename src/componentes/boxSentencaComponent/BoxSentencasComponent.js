import React from 'react';

import PaginationComponent from '../paginationComponent/PaginationComponent'
import { ButtonNovoComponent, ButtonHitoricComponent } from '../buttonsComponents/ButtonsComponent';
import InfoComponent from '../helperComponents/InfoComponent';

export default class BoxSentencasComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pageOfItens: [],
    }
  }

  onChangePage = (pageOfItens) => this.setState({ pageOfItens });

  gerarButtons(item){
    const { origin } = this.props;

    if (origin === 'novo'){
      return <ButtonNovoComponent infos={item} />
    }else if(origin === 'historic'){
      return <ButtonHitoricComponent infos={item} />
    }else{
      return null;
    }
  }

  render() {
    const { pageOfItens } = this.state;
    const { sentencas } = this.props;

    return (
      <div>
        <div className="flex-column align-center">
          {
            pageOfItens.map(item =>
              <div key={item.id} className="setenca-box setenca-box-inicial">
                <header className="flex-row flex-space-between align-center header-sentenca-box">
                  <h2 className="titulo-setenca-box">Sentença</h2>
                  <p className="numero-setenca-box">#{item.id}</p>
                </header>
                <div className="container">
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
                </div>
                { this.gerarButtons(item) }
              </div>
            )
          }
        </div>
        <PaginationComponent items={sentencas} onChangePage={this.onChangePage} />
      </div>
    )
  }
}