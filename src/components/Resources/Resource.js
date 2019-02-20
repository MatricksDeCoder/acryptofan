import React               from 'react';
import {Link}              from 'react-router-dom';
import styled              from 'styled-components';

export default function Resource({item, id, handleClick, type}) {

    return (		
		<ResourceWrapper key = {id} className="col-9 mx-auto col-md-6 col-lg-3 my-3">
			<div className="card card-block bg-faded">
			    <h5 className ="card-header">{item.tag}</h5>
				<div className="img-container p-5">
					<Link to = "/details" >
						<img onClick= {() => handleClick(item.id, type)} className="cardImage img-thumbnail d-flex align-self-center" src={item.img} alt="resource" />
					</Link>
				</div>
				<div className="card-footer d-flex justify-content-between">
					<p className="align-self-center mb-0">{item.title}</p>
					<p className="mb-0">Price: ${item.price}</p>
				</div>
			</div>		
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
	  .card-footer,.card-header {
		background: var(--mainBlue); 
		font-weight: bold;
	  }
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

