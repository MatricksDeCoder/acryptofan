import React               from 'react';
import {ContextConsumer}   from "../Context";
import Title               from "./Title";
import HomeItem            from "./Resources/HomeItem";

export default function Home() {
 
    return (
		<div className="py-5">		    
			<ContextConsumer>
				{
					(value) => {
						
						let info  = value.topics.home;
						let resources = Object.keys(value.topics).map((key) => { return {key:key,item:value.topics[key]}})
                                                                 .filter(obj=> obj.item.onHome===true);

						
						let title = <Title  name     = {info.title} 
											subtitle = {info.subtitle}
											icon     = {info.icon}			   
									/>
						let output = resources.map((resource,i) => {
							return (							    
								<HomeItem key = {i} name = {resource.key} resource = {resource.item} />
							)
						})
						return (
						   <div className ="container">
						       {title}
							   <div className="row">
							   {output}
							   </div>
						   </div>
						)
						
					}
				}
				
			</ContextConsumer>	
		</div>
    );

}
