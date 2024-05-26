import './App.css';
import {Gallery} from './components/Gallery/Gallery'
import Title from './components/Title/Title';

const galleryImages = {
  title: 'Images',
  // description: 'Best Img',
  images: [
    {
      id: '1',
      source:  'https://images.wallpaperscraft.ru/image/single/bmw_m5_chernyj_104943_300x168.jpg'
    },
    {
      id: '2',
      source: 'https://images.wallpaperscraft.ru/image/single/bmw_vision_efficientdynamics_97571_300x168.jpg'
    },
  ]
}

const {title, description, images } = galleryImages;
function App() {
  return (
    <div className="App">
      My-page
      {/* <Gallery galleryImages={galleryImages}/> */}
    
      <Gallery title={title} description={description} images={images}>
        {/* Это children */}
        {/* Условный рендер */}
        {title==='Images' && <Title value={title} />}
        
        <p>Just Text</p>
      </Gallery>
    </div>
  );
}

export default App;