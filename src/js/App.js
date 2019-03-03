
import React from "react";
import ReactDOM from "react-dom";
import Web3 from 'web3';
import TruffleContract from 'truffle-contract';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Election from '../../build/contracts/Election.json'
import OwnerToken from '../../build/contracts/OwnerToken.json'

import 'bootstrap/dist/css/bootstrap.css'
import "react-tabs/style/react-tabs.css";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      account: 0x0
    }
    if (typeof web3 != 'undefined') {
      this.web3Provider = web3.currentProvider
    } else {
      this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545')
    }

    this.web3 = new Web3(this.web3Provider)
    this.election = TruffleContract(Election)
    this.election.setProvider(this.web3Provider)
    this.ownertoken = TruffleContract(OwnerToken)
    this.ownertoken.setProvider(this.web3Provider)

    

  }

  
  componentDidMount() {
    this.web3.eth.getCoinbase((err, account) => {
      console.log(account);
      this.setState({ account });
      
    });
    /*
    this.ownertoken.deployed().then((tokenInstance) => {
      this.tokenInstance = tokenInstance;
      this.tokenInstance.totalSupply().then((supply) => {
        //this.setState({ totalSupply: supply});
        //
        return this.tokenInstance.balanceOf(this.state.account);
      }).then((balance) => {
        //console.log(balance.toNumber());
        //this.setState({bankBalance: balance.toNumber()})
      });
    });
    */
  }

  render() {
    return (
      <div className="row">
        <div className='col-lg-12 text-center' >
          <Tabs>
            <TabList>
              <Tab>Register Address</Tab>
              <Tab>Voting</Tab>
              <Tab>List of addresses</Tab>
            </TabList>

            <TabPanel>1</TabPanel>
            <TabPanel>2</TabPanel>
            <TabPanel>3</TabPanel>
          </Tabs>
        </div>
        
      </div>
    )
  }
  
}
/*
const Index = () => {
  return <div>ahhh</div>;
};
*/
ReactDOM.render(<App />, document.getElementById("index"));