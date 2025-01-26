import { FiArrowRight } from 'react-icons/fi';
import { Button } from '@/UI/Button/Button';
import { Title } from '@/UI/Title/Title';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import styles from './Hero.module.scss';

import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from 'next/image'; 

export const Hero = () => {
    const { push } = useRouter();

    return (
        <section className={styles.section} style={{ backgroundImage: 'url(/stars-bg.png)' }}>
            <div className={classNames('container', styles.container)}>
                <div className={styles.content}>
                    <h1 className="visually-hidden">Khvostiki</h1>
                    
                    <p className={styles.desc}>
                        Идея взять питомца домой и сделать доброе дело включает в себя множество аспектов, 
                        которые могут изменить не только жизнь животного, но и вашу собственную.
                    </p>
                    
                    <Image
                        src="/pepe_1.png" 
                        alt="Царственный питомец"
                        className={styles.image} 
                        width={500} 
                        height={500} 
                    />
                    
                    <Button onClick={() => push('/faq')} className={styles.button}>
                        Узнать больше 
                    </Button>
                </div>
            </div>
        </section>
    );
};