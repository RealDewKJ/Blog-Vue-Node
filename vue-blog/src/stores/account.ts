import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import { defineStore } from 'pinia';
interface UserType {
    id: number;
    username: string;
    email: string;
    isAdmin: boolean;
    firstname: string;
    lastname: string;
}

interface SignInResponse {
    user: UserType;
}

export const useAccountStore = defineStore('account', {
    state: () => ({
        isAdmin: false,
        isLoggedIn: false,
        user: {} as UserType,
        profile: {},
    }),
    actions: {
        async checkAuth(){
            const token = localStorage.getItem('user');
            if (token) {
                this.isLoggedIn = true;
                const decodedToken = jwtDecode(token);
                this.user = decodedToken;
                this.isAdmin = this.user.isAdmin;
            }
        },
        async signUp(email: string, password: string, firstname: string, lastname: string) {
            
        },
        async signIn(email: string, password: string) {
            try {
                const data = {
                    email: email,
                    password: password
                }
                const response = await axios.post('http://localhost:3000/api/user/signin',data,{withCredentials: true});
                if (response) {
                    this.isLoggedIn = true;
                    this.user = response.data;
                    localStorage.setItem('user', JSON.stringify(response.data.token));
                    this.isAdmin = this.user.isAdmin;
                } 
            } catch (err) {
                // Handle error
                console.error('Error during sign-in:', err);
            }
        },
    },
});
