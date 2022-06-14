
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';

function Header() {
    return (
        <ImageListItem key="Subheader" cols={7}>
          <ListSubheader component="div">World Heritage sites</ListSubheader>
        </ImageListItem>
    )
}

export default Header;