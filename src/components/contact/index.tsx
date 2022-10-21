import styles from './contact.module.scss';

export default function Contact() {
    return (
        <div id={'contato'} className={styles.contact}>

            <h1 className={styles.contatoTitle}>Contato</h1>

            <div className={styles.maps}>
                <iframe
                    title={'Map'}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15924.860831128526!2d-38.49356675793452!3d-3.763283544722748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74602790121a9%3A0xf2ab65a62f3e1194!2sR.%20Firmino%20Rocha%20Aguiar%2C%20801%20-%20Guararapes%2C%20Fortaleza%20-%20CE%2C%2060810-165!5e0!3m2!1spt-BR!2sbr!4v1669308851448!5m2!1spt-BR!2sbr"
                    width="400" height="300" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>


            <div className={styles.contatoContainer}>
                <h2 className={styles.contatoSubTitle}>Endereço</h2>
                <a target={'_blank'} rel={'noreferrer'} href={'https://www.google.com/maps/place/R.+Firmino+Rocha+Aguiar,+801+-+Guararapes,+Fortaleza+-+CE,+60810-165/@-3.763305,-38.484812,16z/data=!4m6!3m5!1s0x7c74602790121a9:0xf2ab65a62f3e1194!8m2!3d-3.763305!4d-38.484812!16s%2Fg%2F11gf9hv4dl'}>
                    <p className={styles.contatoText}>Rua Firmino Rocha Aguiar, 801</p> </a> <a target={'_blank'} rel={'noreferrer'} href={'https://www.google.com/maps/place/R.+Firmino+Rocha+Aguiar,+801+-+Guararapes,+Fortaleza+-+CE,+60810-165/@-3.763305,-38.484812,16z/data=!4m6!3m5!1s0x7c74602790121a9:0xf2ab65a62f3e1194!8m2!3d-3.763305!4d-38.484812!16s%2Fg%2F11gf9hv4dl'}>
                    <p className={styles.contatoText}>Fortaleza - Ceará . Cep 60.810-165</p> </a>

            </div>

            <div className={styles.contatoContainer}>
                <h2 className={styles.contatoSubTitle}>E-mail</h2>
                <p className={styles.contatoText}><a href='mailto: marcusbraz@gmail.com' target='_blank' rel='noreferrer'>marcusbraz@gmail.com</a></p>
            </div>

        </div>
    )
}