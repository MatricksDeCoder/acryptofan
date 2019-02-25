import React               from "react";
import Resources           from "./Resources/Resources";

export default function TopCrypto() {

    return (
	    <div>
			<p className="text-center text-danger">*Prices displayed below are in USD are just to give you an indicaton and are not realtime prices but obtained and updated approx every 15 minutes</p>
			<Resources type = "mytopcrypto" />
		</div>
    );

}