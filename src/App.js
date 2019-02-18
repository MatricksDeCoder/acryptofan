import React, { Component }                         from "react";
import {Switch,  Route}                             from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import { library }                                  from '@fortawesome/fontawesome-svg-core';
import {  
        faHome, 
		faUserNinja, 
		faInfoCircle,
		faShoppingCart,
		faForward,
	    faPause,
		faBackward,
		faUserSecret,
		faBookReader,
		faFrownOpen,
		faFileContract,
		faFillDrip,
		faExchangeAlt,
		faGraduationCap,
		faWallet,
		faCopyright,
		faLink,
		faDice,
		faThumbsUp,
		faAd,
		faHammer,
		faChartLine,
		faAward
        }                            from '@fortawesome/free-solid-svg-icons';

import Details                       from "./components/Details";
import NavBarTop                     from "./components/NavBar/NavBarTop";
import NavBarBottom                  from "./components/NavBar/NavBarBottom";
import Home                          from "./components/Home";
import Privacy                       from "./components/Privacy";
import Terms                         from "./components/Terms";
import Disclaimer                    from "./components/Disclaimer";
import Copyright                     from "./components/Copyright";
import Default                       from "./components/Default";
import Faucets                       from "./components/Faucets";
import Exchanges                     from "./components/Exchanges";
import BlockchainExplorers           from "./components/BlockchainExplorers";
import HardwareWallets               from "./components/HardwareWallets";
import Casinos                       from "./components/Casinos";
import Loans                         from "./components/Loans";
import CloudMining                   from "./components/CloudMining";
import TopRated                      from "./components/TopRated";
import TradingInvestment             from "./components/TradingInvestment";
import TopCrypto                     from "./components/TopCrypto";

library.add(
             faHome, 
			 faUserNinja, 
			 faInfoCircle,
             faShoppingCart,
			 faForward,
			 faPause,
			 faBackward,
			 faUserSecret,
			 faBookReader,
			 faFileContract,
			 faFrownOpen,
			 faFillDrip,
			 faExchangeAlt,
			 faGraduationCap,
			 faWallet,
			 faCopyright,
			 faLink,
			 faDice,
			 faThumbsUp,
			 faAd,
			 faHammer,
			 faChartLine,
			 faAward
			 );


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarTop/>
		<Switch>
		    <Route  path = "/home"            component = {Home} />
		    <Route  path = "/privacy"         component = {Privacy} />
			<Route  path = "/terms"           component = {Terms} />
			<Route  path = "/disclaimer"      component = {Disclaimer} />
			<Route  path = "/faucets"         component = {Faucets} />
			<Route  path = "/exchanges"       component = {Exchanges} />
			<Route  path = "/casinos"         component = {Casinos} />
			<Route  path = "/blockexplorers"  component = {BlockchainExplorers} />
            <Route  path = "/details"         component = {Details} />	
			<Route  path = "/hardwarewallets" component = {HardwareWallets} />
			<Route  path = "/copyright"       component = {Copyright} />
			<Route  path = "/loans"           component = {Loans} />
			<Route  path = "/cloudmining"     component = {CloudMining} />
			<Route  path = "/toprated"        component = {TopRated} />
			<Route  path = "/mytopcrypto"     component = {TopCrypto} />
			<Route  path = "/tradinginvestment"      component = {TradingInvestment} />
			<Route  path = "/"                component = {Home} />
            <Route  component = {Default} /> 	
		</Switch>
        <NavBarBottom />		
      </div>
    );
  }
}

export default App;
