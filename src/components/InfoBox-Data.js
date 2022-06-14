


function Data({site_info}) {
    return (
        <div>
            <p>
                Site ID: {site_info.id_no}<br/>
                Location: {site_info.states_name_en}<br />
                Region: {site_info.region_en}<br/>
                Coordinates:
                <a href={`https://maps.google.com/?q=${site_info.latitude},${site_info.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer">
                    {site_info.latitude},
                    {site_info.longitude}</a><br />
                Area Hectares: {site_info.area_hectares}<br/>
            </p>
        </div>
    )
}

export default Data;