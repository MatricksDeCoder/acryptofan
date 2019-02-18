import React               from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Title({name, subtitle, icon}) {

    return (		
		<div className = "row ">
			<div className="col-10 mx-auto my-2 text-center">
				<h4 className="text-capitalize">
					<span className="ml-1 mr-3">
						<FontAwesomeIcon icon={icon} className="fontIcon" />
					</span>{name}
				</h4>
				<h6 className="text-capitalize">{subtitle}</h6>
			</div>
		</div>
    );

}



