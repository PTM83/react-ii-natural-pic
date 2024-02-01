import { useContext, useEffect } from 'react';
import { ApiContext } from '../context/ContextApi.jsx'
import { HeartIcons } from '../components/HeartIcons.jsx'

const Gallery = () => {

    const { data, setData, setHeart } = useContext(ApiContext);

    const toggleLike = (id) => {
        // Create a new array with the updated liked status for the clicked picture
        const updatedData = data.map((picture) => {
          if (picture.id === id) {
            return { ...picture, liked: !picture.liked };
          }
          return picture;
        });

        // Update the context data with the new array
        setData(updatedData);

        const likedPhotos = updatedData.filter(picture => picture.liked)
        setHeart(likedPhotos)
    };

    if(!data || data.length===0){
    return null
    }

  return (
  <div className="gallery grid-columns-5 p-3">
    {data.map(picture => (

        <article onClick={()=> toggleLike(picture.id) }
            key={picture.id}
            className='photo'
            style ={{backgroundImage: `url(${picture.src.small})`}}
            >
            <HeartIcons fillcolor={picture.liked ? '#FF0000':'#FFFFFF'} />

            <div className='photo-info'>
                <h3 className='photo-title'> {picture.alt}</h3>
                <small className='photographer'> {picture.photographer} </small>
            </div>
        </article>
    ))}

  </div>);
};
export default Gallery;
