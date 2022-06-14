

function Description({site_info}) {
    return (
        <div>
            <h2>Description</h2>
            <p>
                {site_info.short_description_en}
            </p>
            <h2>Justification</h2>
            <p>
                {site_info.justification_en}
            </p>
        </div>
    )
}

export default Description;