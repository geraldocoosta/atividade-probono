import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import logoProbono from './img/logo-probono.png';
import SentencasComponent from './componentes/sentencasComponent/SentencasComponent';
import { FormDispositivoComponent, FormComponent } from './componentes/formComponent/FormComponents';

class App extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <Link to="/"><img className="logo" src={logoProbono} alt="probono" /></Link>
        </header>
        <Switch>
          <Route exact path="/" component={SentencasComponent} />
          <Route path="/info/dispositivo/:id" component={FormDispositivoComponent} />
          <Route path="/info/:id" component={FormComponent} />
        </Switch>
      </div>
    );
  }
}

export default App;
