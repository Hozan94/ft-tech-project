//This is a footer component that will appear on every single page, although we only have one at the moment.

import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={styles.container}>
                <p> &#9400; Hozan Ali</p>
                <p>Data fetched from FT</p>
            </div>
        </footer>
    );
}

export default Footer;