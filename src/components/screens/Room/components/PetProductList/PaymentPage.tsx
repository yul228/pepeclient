// PaymentPage.tsx
import React from 'react';
import styles from './PaymentPage.module.scss';
import { Auth } from '@/components/Auth/Auth';
interface PaymentPageProps {
    totalAmount: number;
}
const { Button } = Auth;
const PaymentPage: React.FC<PaymentPageProps> = ({ totalAmount }) => {
    return (
        <div className={styles.paymentPage}>
            <h1>Платеж</h1>
            <h2>Итого: {totalAmount} Р</h2>
            <form className={styles.paymentForm}>
                <div className={styles.inputGroup}>
                    <label htmlFor="cardNumber">Номер карты</label>
                    <input type="text" id="cardNumber" placeholder="Номер карты" required />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="expiryDate">MM / ГГ</label>
                    <input type="text" id="expiryDate" placeholder="MM / ГГ" required />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="cvc">CVV / CVC</label>
                    <input type="text" id="cvc" placeholder="CVV / CVC" required />
                </div>
                <div className={styles.checkboxGroup}>
                    <input type="checkbox" id="rememberCard" />
                    <label htmlFor="rememberCard">Запомнить данные карты</label>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="email">E-mail для квитанции</label>
                    <input type="email" id="email" placeholder="E-mail для квитанции" required />
                </div>
                <Button>
                    Оплатить {totalAmount} Р
                </Button>
            </form>
            <div className={styles.paymentOptions}>
             
            </div>
        </div>
    );
};

export default PaymentPage;