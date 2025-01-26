import { RoutesEnum } from '@/constants/routes';
import { FiMap , FiHome, FiHeart } from 'react-icons/fi';
import { BiCart } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import classNames from 'classnames';
import styles from './BottomNavigation.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ButtonBase } from '@/UI/ButtonBase/ButtonBase';

export const BottomNavigation = () => {
	const items = [
		{ icon: <FiHome />, href: RoutesEnum.Home, text: 'Главная' },
		{ icon: <FiMap />, href: RoutesEnum.Map, text: 'Карта' },
		{ icon: <BiCart />, href: RoutesEnum.Store, text: 'Магазин' },
		{ icon: <FaUser />, href: RoutesEnum.Login, text: 'Войти' },
		{ icon: <FiHeart />, href: RoutesEnum.News, text: 'Новости' },
	];

	const { pathname, push } = useRouter();

	return (
		<ul className={classNames('list-reset', styles.list)}>
			{items.map((el) => {

				const isCurrentPage = pathname === el.href;

				return (
					<li key={el.text} className={styles.item}>
						<ButtonBase
							ripple
							animationDuration={800}
							onClick={() => push(el.href)}
							className={classNames(styles.link, isCurrentPage && styles.linkActive)}
						>
							{el.icon}
							{el.text}
						</ButtonBase>
					</li>
				);
			})}
		</ul>
	);
};
