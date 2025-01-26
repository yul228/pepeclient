import { useStore as useReduxStore } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store'; 

export const useStore = () => {
    const store = useReduxStore();
    return {
        store,
        dispatch: store.dispatch as AppDispatch,
    };
};