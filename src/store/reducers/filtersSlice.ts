import { getCurrentYear } from '@/helpers/getCurrentYear/getCurrentYear';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	filters: {
		year: `1960-${getCurrentYear()}`,
		
	},
};

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setFiterYears: (state, action) => {
			state.filters.year = action.payload;
		},
		
		resetFilters: (state) => {
			state.filters = initialState.filters;
		},
	},
});

export const { setFiterYears,  resetFilters } =
	filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
