import { Auth } from '@/components/Auth/Auth';
import { Controller } from 'react-hook-form';
import NextLink from 'next/link';
import Head from 'next/head';
import { RoutesEnum } from '@/constants/routes';
import { useSignIn } from '@/hooks/useSignIn';

export const SignIn = () => {
    const { Heading, TextField, Button, Link } = Auth;
    const { control, errors, handleLogin } = useSignIn();

    return (
        <Auth onSubmit={handleLogin}>
            <Head>
                <title>Войти</title>
            </Head>
            <Heading>Вход</Heading>
            <Controller
                name="email"
                control={control}
                render={({ field: { value, onChange } }) => (
                    <TextField
                        type="email"
                        label="Email"
                        placeholder="Введите email"
                        value={value}
                        onChange={onChange}
                        errorMessage={errors.email?.message}
                        error={errors.hasOwnProperty('email')}
                    />
                )}
            />

            <Controller
                name="password"
                control={control}
                render={({ field: { value, onChange } }) => (
                    <TextField
                        type="password"
                        label="Пароль"
                        placeholder="Введите пароль"
                        value={value}
                        onChange={onChange}
                        errorMessage={errors.password?.message}
                        error={errors.hasOwnProperty('password')}
                    />
                )}
            />
            <Button onClick={handleLogin}>Войти</Button>
            <Link>
                Нет аккаунта?&nbsp;
                <NextLink href={RoutesEnum.Register} className="link">
                    Зарегистрироваться
                </NextLink>
            </Link>
        </Auth>
    );
};
