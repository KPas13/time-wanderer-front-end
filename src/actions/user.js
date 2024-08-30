import axios from 'axios';

export const registration = async (nickname, email, password) => {
    try {
        const response = await axios.post('https://time-wanderer-api.vercel.app/auth/registration', {
            nickname,
            email,
            password
        });
        console.log(response.data.message);
    } catch (e) {
        if (e.response) {
            if (e.response.status === 409) {
                throw new Error(e.response.data.message || 'Registration failed');
            } else {
                throw new Error('Registration failed');
            }
        } else {
            throw new Error('Network error or server not responding');
        }
    }
}

export const login = async (nickname, password) => {
        try {
            const response = await axios.post('https://time-wanderer-api.vercel.app/auth/login', {
                nickname,
                password
            });
            localStorage.setItem('token', response.data.token);
            console.log(response.data);
        } catch (e) {
            console.log(e);
            throw new Error('Invalid nickname or password');
        }
}

export const profile = async (token) => {
    try{
        const response = await axios.get('https://time-wanderer-api.vercel.app/users/profile', {headers:{
            Authorization: `Bearer ${token}`
        }});
        console.log(response.data);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export const updateProfile = async (token, body) => {
    try{
        const response = await axios.put('https://time-wanderer-api.vercel.app/users/profile', body,{headers:{
                Authorization: `Bearer ${token}`
            }});
        console.log(response.data);
        return response.data;
    }catch (e) {
        alert(e);
    }
}

export const deleteProfile = async (token) => {
    try{
        const response = await axios.delete('https://time-wanderer-api.vercel.app/users/profile',{headers:{
                Authorization: `Bearer ${token}`
            }});
        console.log(response.data);
        return response.data;
    }catch (e) {
        alert(e);
    }
}