import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Comment {
    id: number;
    text: string;
    name: string;
}

interface Post {
    id: number;
    title: string;
    content: string;
    comments: Comment[];
}

interface PostsState {
    posts: Post[];
}

const initialState: PostsState = {
    posts: [],
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost(state, action: PayloadAction<Post>) {
            state.posts.push(action.payload);
        },
        setPosts(state, action: PayloadAction<Post[]>) {
            state.posts = action.payload;
        },
        addComment(state, action: PayloadAction<{ postId: number; comment: Comment }>) {
            const { postId, comment } = action.payload;
            const post = state.posts.find(post => post.id === postId);
            if (post) {
                post.comments.push(comment);
            }
        },
    },
});


export const { addPost, setPosts, addComment } = postsSlice.actions;


export default postsSlice.reducer;