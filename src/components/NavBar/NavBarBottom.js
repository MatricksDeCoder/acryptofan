import React               from 'react';
import {Link}              from 'react-router-dom';
import styled              from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavBarBottom() {

		return (
		
			<nav className="navbar navbar-expand-lg">			
			<NavWrapper>
				<ul className="navbar-nav mr-auto ml-2 mt-0 mt-lg-0">
				  <li className="nav-item">
				    <Link className = "nav-link" to="/terms">
								<FontAwesomeIcon
									className = "fontIcon"
									icon      = "file-contract"
									size      = "lg"
								/>
								<span className="ml-1">Terms</span>
					</Link>
				  </li>
				  <li className="nav-item">
					<Link className = "nav-link" to="/privacy">
								<FontAwesomeIcon
									className = "fontIcon"
									icon      = "user-secret"
									size      = "lg"
								/>
								<span className="ml-1">Privacy</span>
					</Link>
				  </li>
				  <li className="nav-item">
					<Link className = "nav-link" to="/disclaimer">
								<FontAwesomeIcon
									className = "fontIcon"
									icon      = "book-reader"
									size      = "lg"
								/>
								<span className="ml-1">Disclaimer</span>
					</Link>
				  </li>
				  <li className="nav-item">
				        <Link className = "nav-link" to="/copyright">
								<FontAwesomeIcon
									className = "fontIcon"
									icon      = "copyright"
									size      = "lg"
								/>
								<span className="ml-1">Copyright and Intellectual Property</span>
						</Link>
				  </li>
				  <li className="nav-item">
				        <Link className = "nav-link" to="/toprated">
								<FontAwesomeIcon
									className = "fontIcon"
									icon      = "thumbs-up"
									size      = "lg"
								/>
								<span className="ml-1">Top Rated</span>
						</Link>
				        
				   </li>
				  
				</ul>
				<ul className="navbar-nav mt-2">
				   <li className="nav-item">
				       <div className = "nav-link" >
					   <p className="text ml-1"><span>Simple website created by a Crypto Fan learning React, Front End Development and Software Development thanks to:  <a className="text" href="http://freecodecamp.org" target="_blank" rel="noopener noreferrer"> FreeCodeCamp</a></span></p>
				       </div>
				   </li>
				</ul>
	            
			</NavWrapper>
			</nav>

			
		);
}

const NavWrapper = styled.div`
	.nav-link, .text , a .text {
		color: var(--textColorNav) !important;
		font-size: var(--fontSizeSm);
	};

`
 