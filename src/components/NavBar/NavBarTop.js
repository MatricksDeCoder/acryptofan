import React               from 'react';
import {Link}              from 'react-router-dom';
import styled              from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CookieConsent       from "react-cookie-consent";

export default function NavBarTop() {

		return (
		
			<nav className="navbar navbar-expand-lg">
			<CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
			<NavWrapper>
				<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
				  <li className="nav-item active">
					<Link className = "nav-link" to="/">
								<FontAwesomeIcon
									className = "fontIcon"
									icon      = "home"
									size      = "lg"
								/>
								<span className="ml-1">Home</span>
					</Link>
				  </li>
				  <li className="nav-item">
					<Link className = "nav-link" to="/exchanges">
								<FontAwesomeIcon
									className = "fontIcon"
									icon      = "exchange-alt"
									size      = "lg"
								/>
								<span className="ml-1">Exchanges</span>
					</Link>
				  </li>
				  <li className="nav-item">
					<Link className = "nav-link" to="/faucets">
								<FontAwesomeIcon
									className = "fontIcon"
									icon      = "fill-drip"
									size      = "lg"
								/>
								<span className="ml-1">Free Bitcoin</span>
					</Link>
				  </li>
				  <li className="nav-item">
						<Link className = "nav-link" to="/hardwarewallets">
									<FontAwesomeIcon
										className = "fontIcon"
										icon      = "wallet"
										size      = "lg"
									/>
									<span className="ml-1">Hardware Wallets</span>
						</Link>
				   </li>
				   <li className="nav-item">
						<Link className = "nav-link" to="/toprated">
									<FontAwesomeIcon
										className = "fontIcon"
										icon      = "thumbs-up"
										size      = "lg"
									/>
									<span className="ml-1">Top Rated!</span>
						</Link>
				   </li>
				    <li className="nav-item">
						<a className="nav-link" href="https://twitter.com/BlockchainSavv1" target="blank" rel="noopener noreferrer">
							<img className="img-fluid" width="45" src="https://res.cloudinary.com/matricksdecoder/image/upload/v1550477444/Twitter_drymje.png" alt="twitter" />
							<span className="twitter ml-1">Follow Blockchain Savvy</span>
						</a>
				   </li>
				</ul>				
			</NavWrapper>
			</nav>

			
		);
}

const NavWrapper = styled.div`
	.nav-link , .twitter {
		color: var(--textColorNav) !important;
		font-size: var(--fontSizeMid);
	};
`
