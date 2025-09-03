import ContainerGallery from "../../containers/GalleryContainer/GalleryContainer";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <div className={styles.page}>
      <ContainerGallery/>
    </div>
  );
};

export default Projects;