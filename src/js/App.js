
import React from "react";
import ReactDOM from "react-dom";
import Web3 from 'web3';
import TruffleContract from 'truffle-contract';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }

  render() {
    return (
      <div class="row">
        <div class='col-lg-12 text-center' >
          lllll
          <Tabs>
            <TabList>
            </TabList>
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