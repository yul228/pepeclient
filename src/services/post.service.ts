import axios from 'axios';
import { CreatePostDto, UpdatePostDto, Post } from '@/types/post';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export const PostService = {
    async getAllPosts() {
        const { data } = await axios.get(`${API_URL}/posts`);
        return data;
    },

    async createPost(postData: CreatePostDto) {
        const { data } = await axios.post(`${API_URL}/posts`, postData);
        return data;
    },

    async updatePost(id: number, postData: UpdatePostDto) {
        const { data } = await axios.patch(`${API_URL}/posts/${id}`, postData);
        return data;
    },

    async deletePost(id: number) {
        await axios.delete(`${API_URL}/posts/${id}`);
    },
};