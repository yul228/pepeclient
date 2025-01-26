import { getCurrentYear } from '@/helpers/getCurrentYear/getCurrentYear';
import { Logo } from '@/UI/Logo/Logo';
import { RoutesEnum } from '@/constants/routes';
import styles from './Footer.module.scss';
import classNames from 'classnames';
import Link from 'next/link';

export const Footer = () => {
    const items = [
        { href: RoutesEnum.Home, text: 'Главная' },
        { href: RoutesEnum.Register, text: 'Войти' },
        { href: RoutesEnum.Map, text: 'Карта' },
    ];

    return (
        <footer className={styles.footer}>
            <div className={classNames('container', styles.container)}>
                <Logo />
                <ul className={classNames('list-reset', styles.list)}>
                    {items.map((el) => (
                        <li key={el.text} className={styles.item}>
                            <Link href={el.href} className={styles.link}>
                                {el.text}
                            </Link>
                        </li>
                    ))}
                </ul>
                <span className={styles.copy}>© {getCurrentYear()} Khvostiki</span>
            </div>
        </footer>
    );
};