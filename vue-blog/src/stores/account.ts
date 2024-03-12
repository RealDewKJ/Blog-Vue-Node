import {jwtDecode, type JwtPayload} from 'jwt-decode';
import axios from 'axios';
import { defineStore } from 'pinia';
interface UserType extends JwtPayload {
    id: number;
    username: string;
    email: string;
    isAdmin: boolean;
    firstname: string;
    lastname: string;
    exp: number;
    iat: number;
}

const BASE_URL = 'http://localhost:3000/api/user'

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
                this.user = decodedToken as UserType;
                console.log(this.user)
                this.isAdmin = this.user.isAdmin;
            }
        },
        async signUp(firstname: string, lastname: string,email: string, password: string ) {
            try {
                const data = {
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: password
                }
                console.log(data)
                const response = await axios.post(`${BASE_URL}/signup`,data)
                if (response) {
                    this.isLoggedIn = true;
                    this.user = response.data;
                    localStorage.setItem('user', JSON.stringify(response.data.token));
                    this.isAdmin = this.user.isAdmin;
                } 
            } catch (err) {
                console.log('Error during sign-up:', err);
            }
        },
        async signIn(email: string, password: string) {
            try {
                const data = {
                    email: email,
                    password: password
                }
                const response = await axios.post(`${BASE_URL}/signin`,data,{withCredentials: true});
                if (response) {
                    this.isLoggedIn = true;
                    this.user = response.data;
                    localStorage.setItem('user', JSON.stringify(response.data.token));
                    this.isAdmin = this.user.isAdmin;
                } 
            } catch (err) {
                console.error('Error during sign-in:', err);
            }
        },
        async signOut() {
            try {
                localStorage.removeItem('user');
                this.isLoggedIn = false;
                this.isAdmin = false;
            } catch (err) {

            }
        }
    },
});
