import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Popup from 'reactjs-popup';
import InfoPage from './InfoBox';


function Block({site, picture}) {
    return (
        <Popup trigger={
            <ImageListItem key={site.id_no}>
                <img
                    src={require(`./thousand_images/${picture}.jpg`)}
                    alt={site.name_en}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={site.name_en}
                    subtitle={site.states_name_en}
                />
            </ImageListItem>} modal>
            <InfoPage site_info={site} />
        </Popup>
    )
}

export default Block;