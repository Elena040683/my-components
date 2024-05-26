import PropTypes from 'prop-types';
import {GalleryItem} from '../GalleryItem/GalleryItem';
import styled from 'styled-components';

const Styles = styled.div`
  .selector1 {
    font-size:50px;
  }
  .selector2 {
    border: 2px solid grey;
  }
`
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
            <GalleryItem key={id} id={id} source={source}/>
            // <li key={id}>
            //   <img src={source} alt={id}/>
            // </li>
          ))
        }
        
      </ul>
      <Styles>
      <p className="selector1">Lorem, ipsum dolor.</p>
      <p className="selector2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab magni dolore alias, sint enim dolorum impedit officia hic necessitatibus tempore corrupti explicabo? Excepturi dolor commodi consequuntur sequi porro temporibus voluptate accusamus aliquid dicta vero eum quod numquam quae aliquam eaque doloribus perspiciatis fuga atque possimus explicabo veniam, vitae sapiente sed.
      </p>
      </Styles>
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