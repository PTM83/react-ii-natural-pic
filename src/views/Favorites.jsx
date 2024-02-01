import { useContext } from 'react';
import { ApiContext } from '../context/ContextApi.jsx'
import { HeartIcons } from '../components/HeartIcons.jsx'

const Favorites = () => {

const { heart } = useContext(ApiContext);


//Para que cargue la App cuando la data este contenida
//   if(!data || data.length===0){
//     return null
//   }

  return (
        <div>
          <h1>Fotos favoritas</h1>
            <div className="gallery grid-columns-4 p-3">

                {heart.map(picture => (

                    <article key={picture.id} className='photo' style ={{backgroundImage: `url(${picture.src.small})`}} >
                        <HeartIcons fillcolor={picture.liked ? '#FF0000':'#FFFFFF'} />

                        <div className='photo-info'>
                            <h3 className='photo-title'> {picture.alt}</h3>
                            <small className='photographer'> {picture.photographer} </small>
                        </div>
                    </article>
                ))}
            </div>
        </div>
  );
};
export default Favorites;
