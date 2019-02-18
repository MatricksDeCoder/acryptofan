import React from "react";

export default function LayoutText({value, name}) {
	
	return (
	
		value[name].map((obj) => {
				return (
					<div className= "container">
						<h5>{obj.title}</h5>
							{obj.paras.map((para) => {
								return <p>{para}</p>
								})
							}
					</div>
						)
		})
			
	)
}
		

 