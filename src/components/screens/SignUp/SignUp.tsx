import { AuthService } from '@/services/auth.service'; // Добавьте этот импорт
import { RoutesEnum } from '@/constants/routes';
import { Auth } from '@/components/Auth/Auth';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import NextLink from 'next/link';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import Head from 'next/head';
import axios from 'axios';
export const SignUp = () => {
  const { push } = useRouter();
  const { Heading, Inputs, TextField, Button, Link } = Auth;
  const messageRequired = 'Поле обязательно для заполнения';

  const schema = Yup.object().shape({

    email: Yup.string().email('Введите корректный email').required(messageRequired),
    password: Yup.string()
      .min(8, 'Пароль должен содержать не менее 8 символов')
      .required(messageRequired),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {

      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  // Обработчик регистрации с отправкой данных на сервер
// В обработчике регистрации добавлена более детальная обработка ошибок
const handleRegister = handleSubmit(async (data) => {
	try {
	  const response = await AuthService.register(data);
	  if (response.status === 201) {
		console.log('Успешная регистрация');
		push(RoutesEnum.Home);
		reset();
	  }
	} catch (error) {
	  if (axios.isAxiosError(error)) {
		console.error('Ошибка регистрации:', error.response?.data?.message || 'Произошла ошибка');
	  } else {
		console.error('Неизвестная ошибка:', error);
	  }
	}
  });
  
  return (
    <Auth onSubmit={handleRegister}>
      <Head>
        <title>Зарегистрироватся</title>
      </Head>
      <Heading>Регистрация</Heading>
    
      <Controller
        name="email"
        control={control}
        render={({ field: { value, onChange } }) => {
          return (
            <TextField
              type="email"
              label="Email"
              placeholder="Введите email"
              value={value}
              onChange={onChange}
              errorMessage={errors.email?.message}
              error={errors.hasOwnProperty('email')}
            />
          );
        }}
      />

      <Controller
        name="password"
        control={control}
        render={({ field: { value, onChange } }) => {
          return (
            <TextField
              type="password"
              label="Пароль"
              placeholder="Введите пароль"
              value={value}
              onChange={onChange}
              errorMessage={errors.password?.message}
              error={errors.hasOwnProperty('password')}
            />
          );
        }}
      />
      <Button type="submit">Зарегистрироваться</Button>
      <Link>
        Есть аккаунт?&nbsp;
        <NextLink href={RoutesEnum.Login}>
          Войти
        </NextLink>
      </Link>
    </Auth>
  );
};
