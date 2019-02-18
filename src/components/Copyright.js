import React                 from "react";
import Title                 from "./Title";
import {ContextConsumer}     from "../Context";
import styled                from 'styled-components';
import LayoutText            from "./LayoutText";

export default function Copyright()  {
	
    return (
	    <ContextConsumer >
		   {(value ) => {
			
			let name        = "copyright";
			let titleInfo   = value.topics[name];
		    return (
				<DivWrapper className="mt-0 mb-0 pb-5">
					<Title name     = {titleInfo.title}
						   subtitle = {titleInfo.subtitle}
						   icon     = {titleInfo.icon}
					/>
					<LayoutText value = {value} 
					            name  = {name} />		
				</DivWrapper>
				)
			}
		   }
		</ContextConsumer>

    );
}


const DivWrapper = styled.div`
	text-align: justify;
	p {
		font-size: var(--fontSizeSm) !important;
	}
` 