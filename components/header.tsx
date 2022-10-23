import s from './header.module.css';
import utilStyles from '../styles/util.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={utilStyles.contaienr}>
                <h1>
                    share to see
                </h1>
            </div>
        </header>

    );
}
export default Header;