import React                 from "react";
import {ContextConsumer}     from "../Context";


export default function Details() {

		return (
			<ContextConsumer >
			   {(value ) => {
				 const{title, price, info, url, img, tag} = value.exampleResource;
				 return (
				   
					<div className ="container py-5" >
						<div className="row">
							<div className="col-10 mx-auto text-center my-5">
								<h3>{title}</h3>
								<a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info">Price: {price}</a>
							</div>
						</div>
						<div className="row">
							<div className="col-4 mx-auto col-md-6 my-3">								
								<a href={url} target="_blank" rel="noopener noreferrer">
								<img alt="resource" className="img-fluid img-thumbnail" src={img} />
								</a>
							</div>
							<div className="col-8 mx-auto col-md-6 my-3">
								<h4>{tag}</h4>
								<p className="text-muted lead">{info}</p>
								<div className="btn-group text-center my-5" role="group">
									<a role="button" className="btn btn-info" href={url} target="_blank" rel="noopener noreferrer"> Access Now-Get It Now!</a>								
								</div>
							</div>
						</div>
					</div>			
				 )	
			   }				 
			   }
			</ContextConsumer>

		);
}



