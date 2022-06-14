import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import Block from './PicTile-Block';
import Header from './PicTile-Header';


function SearchList({ filteredSites }) {
  return (
    <ImageList sx={{ width: 'auto', height: 'auto' }}>
        <Header/>
        {filteredSites.map((site) => {
            let picture = site.id_no
            try {
              if (require(`./thousand_images/${picture}.jpg`)) {}
            } catch (err) {
              picture = 'blank'
            }
            return (
              <Block site={site} picture={picture}/>
            )
        })}
    </ImageList>
  );
}

export default SearchList;