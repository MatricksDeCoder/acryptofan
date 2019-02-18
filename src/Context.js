import React, { Component }     from "react";
import {topics}                 from "./data/Topics";
import {privacy}                from "./data/Privacy";
import {terms}                  from "./data/Terms";
import {disclaimer}             from "./data/Disclaimer";
import {copyright}              from "./data/Copyright";
import {faucets}                from "./data/Faucets";
import {exampleResource}        from "./data/ExampleResource";
import {exchanges}              from "./data/Exchanges";
import {blockexplorers}         from "./data/BlockchainExplorers";
import {hardwarewallets}        from "./data/HardwareWallets";
import {casinos}                from "./data/Casinos";
import {loans}                  from "./data/Loans";
import {cloudmining}            from "./data/CloudMining";
import {toprated}               from "./data/TopRated";
import {tradinginvestment}      from "./data/TradingInvestment";
import {mytopcrypto}            from "./data/TopCrypto";
   
const AppContext = React.createContext();

class ContextProvider extends Component {
	
  state = {
	  topics : topics,
	  privacy: privacy,
	  terms  : terms,
	  disclaimer : disclaimer,
	  copyright : copyright,
	  faucets : faucets,
	  exampleResource: exampleResource,
	  exchanges: exchanges,
	  blockexplorers:blockexplorers,
	  hardwarewallets: hardwarewallets,
	  casinos: casinos,
	  loans:loans,
	  cloudmining:cloudmining,
	  toprated:toprated,
	  tradinginvestment:tradinginvestment,
	  mytopcrypto:mytopcrypto,
	  
  }
  
  componentDidMount() {
	  console.log("I have mounted");
  }
  

  getResource = (id, name) => {
	  const resource = this.state[name].find(item => id === item.id);
	  return resource;
  }
  
  handleResource = (id, name) => {
	const resource = this.getResource(id,name);
	this.setState({
		exampleResource: resource
	})
  }
  
 
  render() {
    return (
      <AppContext.Provider 
	       value = {{...this.state,
		             handleResource:this.handleResource
		   }}
	   >
		  {this.props.children}
	  </AppContext.Provider>
    );
  }
  
}

const ContextConsumer = AppContext.Consumer;

export {ContextProvider, ContextConsumer}