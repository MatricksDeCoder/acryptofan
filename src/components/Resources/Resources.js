import React               from 'react';
import {ContextConsumer}   from "../../Context";
import Resource            from "./Resource";
import Title               from "../Title";

export default function Resources({type}) {
 
    return (
		<div className="py-5">		    
			<ContextConsumer>
				{
					(value) => {
						
						let info  = value.topics[type];
						let handleResource = value.handleResource;
						let title = <Title  name     = {info.title} 
											subtitle = {info.subtitle}
											icon     = {info.icon}			   
									/>
						let resources = value[type].map((resource,i) => {
							return (							    
								<Resource key = {i} type={type} handleClick = {handleResource} id = {resource.id} item= {resource}/>
							)
						})
						return (
						   <div className ="container">
						       {title}
							   <div className="row">
							   {resources}
							   </div>
						   </div>
						)
						
					}
				}
				
			</ContextConsumer>	
		</div>
    );

}

