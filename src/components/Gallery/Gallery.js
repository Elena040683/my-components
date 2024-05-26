import PropTypes from 'prop-types';
import {GalleryItem} from '../GalleryItem/GalleryItem';

export function Gallery ({title, description, images, children}){
  // console.log("title", title);
  // console.log("img", images);
  
  return (
    <section>
      {children}
      {/* <p>{description}</p> */}
      <ul>
        {
          images.map(({id, source}) => (
            <GalleryItem id={id} source={source}/>
            // <li key={id}>
            //   <img src={source} alt={id}/>
            // </li>
          ))
        }
        
      </ul>
    </section>
  )
}

// Gallery.defaultProps = {
//   description: 'Default text for description',
// }

Gallery.propTypes = {
  description: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    source: PropTypes.string,
    })
  ),
  children: PropTypes.arrayOf(PropTypes.element)
}