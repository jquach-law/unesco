import React from "react";
import Data from "./InfoBox-Data"
import Description from "./InfoBox-Description"

function InfoPage({site_info}) {
    return (
        <div>
            <h1>{site_info.name_en}</h1>
            <Data site_info={site_info}/>
            <Description site_info={site_info} />
        </div>
    )
}

export default InfoPage