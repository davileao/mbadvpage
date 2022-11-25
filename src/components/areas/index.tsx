import styles from './areas.module.scss';
import {Card, Paper} from "@mui/material";


export default function Areas() {
    return (
        <div id={'especialidades'} className={styles.areas}>
            <h1 id='areasatuacao' className={styles.areasTitle}>Áreas de atuação</h1>

            <div className={styles.areasContent}>
                <Paper className={styles.areasCard}>
                    <h1 className={styles.areasCardTitle}>01</h1>
                    <h2 className={styles.areasCardTitle}>Civil</h2>
                </Paper>
                <Paper className={styles.areasCard2}>
                    <h1 className={styles.areasCardTitle}>02</h1>
                    <h2 className={styles.areasCardTitle}>Consumidor</h2>
                </Paper>
                <Paper className={styles.areasCard2}>
                    <h1 className={styles.areasCardTitle}>03</h1>
                    <h2 className={styles.areasCardTitle}>Família</h2>
                </Paper>
                <Paper className={styles.areasCard}>
                    <h1 className={styles.areasCardTitle}>04</h1>
                    <h2 className={styles.areasCardTitle}>Trabalho</h2>
                </Paper> <Paper className={styles.areasCard}>
                    <h1 className={styles.areasCardTitle}>05</h1>
                    <h2 className={styles.areasCardTitle}>Contratos</h2>
                </Paper> <Paper className={styles.areasCard2}>
                    <h1 className={styles.areasCardTitle}>06</h1>
                    <h2 className={styles.areasCardTitle}>Empresarial</h2>
                </Paper>

        </div>
        </div>
    )

}