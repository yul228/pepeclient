import React, { useState } from 'react';
import Image from 'next/image'; 
import { Auth } from '@/components/Auth/Auth';
import { useRouter } from 'next/router'; 
import { RoutesEnum } from '@/constants/routes';
import styles from './PetProductList.module.scss';
import Link from 'next/link';

interface PetProduct {
    id: number;
    name: string;
    price: number;
    image: string;
}

const products: PetProduct[] = [
    { id: 1, name: 'Корм для собак', price: 1200, image: '/images/dog_food.png' },
    { id: 2, name: 'Корм для котов', price: 1000, image: '/images/cat_food.png' },
    { id: 3, name: 'Игрушка для собак', price: 800, image: '/images/dog_toy.png' },
    { id: 4, name: 'Игрушка для котов', price: 700, image: '/images/cat_toy.png' },
    { id: 5, name: 'Переноска для животных', price: 2500, image: '/images/pet_carrier.png' },
    { id: 6, name: 'Когтеточка', price: 1500, image: '/images/scratching_post.png' },
    { id: 7, name: 'Ветеринарная аптечка', price: 950, image: '/images/vet_kit.png' },
    { id: 8, name: 'Шампунь для собак', price: 600, image: '/images/dog_shampoo.png' },
];

const PetProductList: React.FC = () => {
    const [cart, setCart] = useState<PetProduct[]>([]);
    const { Button } = Auth;
    const router = useRouter(); 

    const addToCart = (product: PetProduct) => {
        setCart((prev) => [...prev, product]);
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

    const handlePayment = () => {
        // Здесь можно выполнить необходимую логику перед переходом.
        router.push('/payment'); 
    };

    return (
        <div className={styles.container}>
            <div className={styles.productsContainer}>
                {products.map((product) => (
                    <div 
                        key={product.id} 
                        className={styles.productCard} 
                        onClick={() => addToCart(product)}
                    >
                        <div className={styles.productImageContainer}>
                            <Image 
                                src={product.image} 
                                alt={product.name} 
                                className={styles.productImage} 
                                width={250} 
                                height={250} 
                            />
                        </div>
                        <div className={styles.productDetails}>
                            <h3 className={styles.productName}>{product.name}</h3>
                            <p className={styles.productPrice}>{product.price} ₽</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.cartContainer}>
                <h2>Корзина</h2>
                {cart.length > 0 ? (
                    <>
                        <ul>
                            {cart.map((item, index) => (
                                <li key={index}>
                                    {item.name} - {item.price} ₽
                                </li>
                            ))}
                        </ul>
                        <p>Общая сумма: {calculateTotal()} ₽</p>
                    </>
                ) : (
                    <p>Корзина пуста</p>
                )}
               
                  
                
					<Button onClick={handlePayment}> <Link href={RoutesEnum.Payment} className={styles.link}>
					Оплатить
                </Link></Button>
            </div>
        </div>
    );
};

export default PetProductList;