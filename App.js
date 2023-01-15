import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import AdModel from './AdModel';
import EquityManagement from './EquityManagement';
import TransferAgent from './TransferAgent';
import SmartContract from './SmartContract';
import Staking from './Staking';
import Payment from './Payment';
import SalesProgress from './SalesProgress';
import KPI from './KPI';
import Pricing from './Pricing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SurveyForm />
        <AdModel />
        <EquityManagement />
        <TransferAgent />
        <SmartContract />
        <Staking />
        <Payment />
        <SalesProgress />
        <KPI />
        <Pricing />
      </div>
    );
  }
}

export default App;
