
import React from "react";
import ReactDOM from "react-dom";
import Web3 from 'web3';
import TruffleContract from 'truffle-contract';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'bootstrap/dist/css/bootstrap.css'
import "react-tabs/style/react-tabs.css";

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

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