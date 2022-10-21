import styles from './socialmedia.module.scss';

import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


export default function SocialMedia() {
    return (
        <div className={styles.socialMedia}>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <FaFacebookF className={styles.socialMediaIcon}/>
            </a>

            <a href="https://www.instagram.com/marcusbraz.adv" target="_blank" rel="noreferrer">
                <FaInstagram color={'primary'} className={styles.socialMediaIcon}/>

            </a>

        </div>
    )
}
