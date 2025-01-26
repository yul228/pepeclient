import { RoutesEnum } from '@/constants/routes';
import { useRouter } from 'next/router';
import { FiMap, FiHome, FiHeart } from 'react-icons/fi';
import { BiCart } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useEffect } from 'react';
import { useActions } from '@/hooks/useActions';
import classNames from 'classnames';
import Link from 'next/link';
import styles from './Dropdown.module.scss';

export const Dropdown = () => {
    const items = [
        { icon: <FiHome />, href: RoutesEnum.Home, text: 'Главная' },
        { icon: <FiMap />, href: RoutesEnum.Map, text: 'Карта' },
        { icon: <BiCart />, href: RoutesEnum.Store, text: 'Магазин' },
        { icon: <FaUser />, href: RoutesEnum.Login, text: 'Войти' },
        { icon: <FiHeart />, href: RoutesEnum.News, text: 'Новости' },
    ];

    const { pathname, events } = useRouter();
    const { toggleMenu } = useActions();

    useEffect(() => {
        events.on('routeChangeComplete', () => toggleMenu(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { openedMenu } = useTypedSelector((state) => state.toggle);

    return (
        <div className={classNames(styles.dropdown, openedMenu && styles.dropdownOpen)}>
            <ul className={classNames('list-reset', styles.list)}>
                {items.map((el) => {
                    const isCurrentPage = pathname === el.href;

                    return (
                        <li key={el.text} className={styles.item}>
                            <Link href={el.href} className={classNames(styles.link, isCurrentPage && styles.linkActive)}>
                                {el.icon}
                                {el.text}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};