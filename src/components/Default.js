import React                 from "react";
import Title                 from "./Title";
import {ContextConsumer}     from "../Context";
import {Link}                from 'react-router-dom';
import styled                from 'styled-components';
import logo                  from "./website-logo.png"

export default function Default() {

    return (
	    <ContextConsumer >
		   {(value ) => {
		    return (
				<Div404 >
				    <div className="mt-0 col-10 mx-auto my-2 text-center">
					<p className="error">404</p>
					<Title name     = {value.topics.notFound.title}
						   subtitle = {value.topics.notFound.subtitle}
						   icon     = {value.topics.notFound.icon}
					/>
					<Link  to ="/">
					    <img src={logo} alt="website brand" />
					</Link>
					<p className="mt-3" >Not sure how you ended up here? High Five if you are a Crypto Fan!</p>
					</div>
					
				</Div404>
				)
			}
		   }
		</ContextConsumer>

    );

}

const Div404 = styled.div`
   	background : var(--mainBlue);
	.error {
		font-size: 6rem;
		color    :var(--mainYellow);
	}
	img {
		border-radius: 10px;
		border: 5px solid var(--mainGreen);
		
	}
` 