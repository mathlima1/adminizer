import styles from './style.module.scss';
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header className={styles.container}>
            <div className={styles.logoWrap}>
                <Link to="/">
                    <h1>Adminizer</h1>
                </Link>
            </div>
        </header>
    )
}