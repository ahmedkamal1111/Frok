import React from 'react';
import Photo from './Photo';

const PhotoContainer=props=>{
const displayPhotos=()=>{
return props.Menu.map(photo=>{
    return <Photo url={photo.image_url} id={photo.id}  key={photo}/>;
});
};

return(
<section>
    {displayPhotos()}
    </section>
)
};

export default PhotoContainer;