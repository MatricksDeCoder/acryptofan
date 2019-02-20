import React from "react";

export default function LayoutText({value, name}) {
	
	return (
	
		value[name].map((obj,i) => {
				return (
					<div key={i} className= "container">
						<h5>{obj.title}</h5>
							{obj.paras.map((para,i) => {
								return <p key={i}>{para}</p>
								})
							}
					</div>
						)
		})
			
	)
}
		

 