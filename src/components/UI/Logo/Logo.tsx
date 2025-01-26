import { FC } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import styles from './Logo.module.scss';
import Link from 'next/link';

interface LogoProps {
    className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => {
    return (
        <Link href="/" className={classNames(styles.logo, className)}>
            <div className={styles.imageWrapper}> 
                <Image
                    src="/logo192.png"
                    alt="Khvostiki"
                    fill 
                    style={{ objectFit: 'cover' }} 

                />
            </div>
        </Link>
    );
};