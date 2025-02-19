import { useActions } from '@/hooks/useActions';
   import { useRef } from 'react';
   import { useOnClickOutside } from 'usehooks-ts';
   import { Logo } from '@/UI/Logo/Logo';
   import { Burger } from './components/Burger/Burger';
   import { Dropdown } from './components/Dropdown/Dropdown';
   import { RoutesEnum } from '@/constants/routes';
   import styles from './Header.module.scss';
   import classNames from 'classnames';
   import Link from 'next/link';

   export const Header = () => {
       const ref = useRef<HTMLDivElement | null>(null); 
       const { toggleMenu } = useActions();

       useOnClickOutside(ref as React.RefObject<HTMLDivElement>, () => toggleMenu(false));

       return (
           <header className={styles.header}>
               <div className={classNames('container', styles.container)}>
                   <div ref={ref} className={styles.left}>
                       <Burger />
                       <Logo className={styles.logo} />
                       <Dropdown />
                   </div>
                   
                   <Link href={RoutesEnum.Login} className={styles.link}>
                       Войти
                   </Link>
               </div>
           </header>
       );
   };