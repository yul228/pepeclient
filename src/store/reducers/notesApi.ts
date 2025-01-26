import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Note {
    id: string;
    content: string;
    coords: { lat: number; lng: number };
}

export const notesApi = createApi({
    reducerPath: 'notesApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    tagTypes: ['Notes'],
    endpoints: (builder) => ({
        getNotes: builder.query<Note[], void>({
            query: () => '/notes',
            providesTags: ['Notes'],
        }),
        addNote: builder.mutation<void, Partial<Note>>({
            query: (newNote) => ({
                url: '/notes',
                method: 'POST',
                body: newNote,
            }),
            invalidatesTags: ['Notes'],
        }),
    }),
});


export const { useGetNotesQuery, useAddNoteMutation } = notesApi;