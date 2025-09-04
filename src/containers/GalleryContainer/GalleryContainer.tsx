import Container3dGallery from "../Gallery3dContainer/Gallery3dContainer";
import styles from "./GalleryContainer.module.scss";



const ContainerGallery: React.FC = () => {
  
  return (
    <div className={styles.containerGallery}>
      <Container3dGallery/>
    </div>
  );
};

export default ContainerGallery;