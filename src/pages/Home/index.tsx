import styles from './Home.module.scss';
import logo from '../../assets/images/logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {useNavigate} from "react-router-dom";


export default function Home() {

    const instagram = '#';
    const facebook = '#';
    const email = 'mailto:#';
    const whatsapp = '#';

    const especialidades = [
        {
            id: 1,
            title: 'Direito Trabalhista',
            img: 'assets/img/trabalho.png'
        },
        {
            id: 2,
            title: 'Direito Civil',
            img: 'assets/img/civil.png'
        },
        {
            id: 3,
            title: 'Direito Penal',
            img: 'assets/img/consumidor.png'
        },
        {
            id: 4,
            title: 'Direito Previdenciário',
            img: 'assets/img/previdenciario.png'
        }
        ]


    const navigate = useNavigate();

    return (
        <div className={styles.container}>
        <header className={styles.header}>
            <img src={logo} className={styles.logoImg} alt="logo" />
        </header>
            <main>
                <div className={styles.main__txt}>

                    <div className={styles.especialidades}>

                        <div className={styles.trabalho}>
                            <p>Direito Trabalho</p>
                        </div>
                        <div className={styles.civil}>
                            <p>Direito Trabalho</p>
                        </div>

                        <div className={styles.previdenciario}>
                            <p>Direito Trabalho</p>
                        </div>

                        <div className={styles.consumidor}>
                            <p>Direito Trabalho</p>
                        </div>

                    </div>


                </div>

                <div className={styles.contato}>
                    Contato
                    Endereço

                    Email


                    Telefone

                </div>

                <div className={styles.map}>
                    Mapa

                    Google maps api


                </div>

            </main>


            <footer className={styles.footer}>
                <div className={styles.footer__icons}>
                    <a href={instagram} target="_blank" rel="noreferrer" ><InstagramIcon fontSize='large'/></a>
                    <a href={facebook} target="_blank" rel="noreferrer" ><FacebookIcon fontSize='large'/></a>
                    <a href={email} target="_blank" rel="noreferrer" ><EmailIcon fontSize='large'/></a>
                    <a href={whatsapp} target="_blank" rel="noreferrer" ><WhatsAppIcon fontSize='large'/></a>
                </div>

                <div className={styles.footer__text}>
                    <p>Desenvolvido por <a href="https://www.linkedin.com/in/davileao/" target="_blank" rel="noreferrer">Davi Leao</a></p>
                </div>

            </footer>
        </div>
    );
}