import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { searchReducer } from './reducers/searchSlice';

import { paginationReducer } from './reducers/paginationSlice';
import { filtersReducer } from './reducers/filtersSlice';
import { toggleReducer } from './reducers/toggleSlice';
import { useMemo } from 'react';
import postsReducer from './postsSlice'; 


let store: AppStore;
export const initStore = (preloadedState = {}) => {
    return configureStore({
        reducer: {
            posts: postsReducer, 
            search: searchReducer,
           
            filters: filtersReducer,
            pagination: paginationReducer,
            toggle: toggleReducer,
            
        },
        preloadedState,
        
    });
};

export const initializeStore = (preloadedState: PreloadedState<RootState>) => {
    let _store = store ?? initStore(preloadedState);

    if (preloadedState && store) {
        _store = initStore({ ...store.getState(), ...preloadedState });
    }

    if (typeof window === 'undefined') return _store;
    if (!store) store = _store;

    return _store;
};

export function useStore(initialState: RootState) {
    const store = useMemo(() => initializeStore(initialState), [initialState]);
    return store;
}

export type AppStore = ReturnType<typeof initStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;  
export const wrapper = createWrapper<AppStore>(initStore, { debug: false });