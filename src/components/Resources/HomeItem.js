import React               from 'react';
import {Link}              from 'react-router-dom';
import styled              from 'styled-components';
import CookieConsent       from "react-cookie-consent";

export default function HomeItem({resource, name}) {

	let route = "/"	+ name;
    return (
        
		<ResourceWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
			<Link to = {route} >
			<div className="card card-block bg-faded">
			    <h5 className ="card-header text-black">{resource.title}</h5>
				<div className="img-container p-5">					
						<img className="cardImage img-thumbnail d-flex align-self-center" src={resource.img} alt="resource" />				
				</div>
				<div className="card-footer d-flex justify-content-between">
					<p className="align-self-center mb-0">{resource.tag}</p>
				</div>
			</div>		
			</Link>
			<CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
		</ResourceWrapper>
    );

}

const ResourceWrapper = styled.div`
	.card {
		border: 1px solid black;
		transition: all 1s linear;
		
	}
	.card-footer {
		transition: all 0.5s linear;
		
	}
	&:hover {
	  .card {
		border: 3px solid black;
		box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.2);
		
	  }
	  .card-footer, .card-header {
		background: var(--mainBlue); 
		color:black;
		font-weight:bold;
	  }
	.img-container {
		position: relative;
		overflow: hidden;
	}
	.cardImage {
		transition: all 0.5s linear;
	}
	.img-container:hover .cardImage{
		transform:scale(1.5);
	}

`