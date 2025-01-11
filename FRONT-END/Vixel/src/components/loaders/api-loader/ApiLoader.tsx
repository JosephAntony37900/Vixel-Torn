import styles from './ApiLoader.module.scss';
import './ApiLoader.css'
import LoadingSpinner from '../../../img/Blocks@1x-1.0s-200px-200px.svg';

function ApiLoader() {
  return (
    <img src={LoadingSpinner} className='img_loader_spinner'></img>
  );
}

// <p className={styles.loader}>Initializing API</p>

export { ApiLoader };
