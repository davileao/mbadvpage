import styles from './welcome.module.scss';
import Carousel from "./carousel";
import Areas from "../areas";
import union from '../../assets/images/union.png';


export default function Welcome() {
    return (
        <div className={styles.welcome}>

            <div className={styles.welcomeCarousel}>
                <Carousel/>
            </div>

            <div className={styles.welcomeText}>
                <img className={styles.union} src={union}/>
            </div>

            <div className={styles.welcomeArea}>
                <Areas/>
            </div>

        </div>
    );
}