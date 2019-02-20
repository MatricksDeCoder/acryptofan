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
import {cryptoInfo}             from "./data/MyTopCrypto";

  
const AppContext = React.createContext();

let assetPrices   = [];
let mytopcrypto   = cryptoInfo;
let topAssets     = mytopcrypto.map(obj=>obj.title);

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
	  assetPrices: assetPrices
  }
  
  
  componentDidMount() {	
    
	this.getData();
	this.timer = setInterval(this.getData, 900000);
  }
  
  componentWillUnmount() {
	  clearInterval(this.timer);
  }
  
  getData() {
		
		const API_KEY = process.env.REACT_APP_CRYPTOCOMPARE_API_KEY;
		const url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=' + topAssets.toString() +  '&tsyms=USD&api_key=' + API_KEY; 
		
		fetch(url).then(response => response.json())
				  .then(priceData => {
					assetPrices = topAssets.map(asset => {
							let assetIn = priceData[asset]
						if(assetIn) {
							return {[asset]: priceData[asset]['USD']};
						}else {
							return {[asset]: asset}
						}
					});
					//console.log(assetPrices);
					mytopcrypto = mytopcrypto.map((item,i) => {
						return {id:item.id,
								title:item.title,
								price:assetPrices[i][item.title],
								info:item.info,
								url:item.url,
								img:item.img,
								tag:item.tag}
					});
					console.log(mytopcrypto);
					this.setState({
						mytopcrypto:mytopcrypto
					})
				  })
				  .catch(err => {
					 console.log(err);
				   });
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
		             handleResource:this.handleResource,
					 assetPrices:assetPrices
		   }}
	   >
		  {this.props.children}
	  </AppContext.Provider>
    );
  }
  
}


const ContextConsumer = AppContext.Consumer;

export {ContextProvider, ContextConsumer}