import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { SignInFormData } from '@/types/SignInFormData';
import { signInSchema } from '@/screens/SignIn/validation';
import { RoutesEnum } from '@/constants/routes';

export const useSignIn = () => {
    const { push } = useRouter();

    const {
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(signInSchema),
    });

    const handleLogin = handleSubmit(async (data) => {
        try {
            console.log('Успешная авторизация', data);
            push(RoutesEnum.Home);
            reset();
        } catch (error) {
            console.error('Ошибка авторизации:', error);
        }
    });

    return {
        control,
        errors,
        handleLogin,
    };
};
