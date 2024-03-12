import axios from 'axios';
import { defineStore } from 'pinia';
import type { Post } from '@/types/Post';
const BASE_URL = 'http://localhost:3000/api/post'

interface values {
    title: string;
    content: string;
    subContent: string;
    specialContent: string;
    subImage: string;
    image?: unknown;
}
export const usePostStore = defineStore('post', {
    state: () => ({
        posts: [] as Post[],
        post: {} as Post
    }),
    actions: {
        async getPosts() {
            try {
                const response = await axios.get(`${BASE_URL}`);
                this.posts = response.data.map((post:Post) => ({
                    ...post,
                    createdAt: new Date(post.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }),
                }));
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        },
        async getPost(id:string | string[]) {
            try {
                const response = await axios.get(`${BASE_URL}/${id}`);
                this.post = response.data
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        },
        async createPost(data:values) {
            try {
                const response = await axios.post(`${BASE_URL}/create`, data);
                return response.data;
            } catch (err) {

            }
        }
        
        
    }
})