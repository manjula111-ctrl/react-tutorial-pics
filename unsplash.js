import axios from 'axios';

export default axios.create({
baseURL: 'https://api.unsplash.com',
 headers: {
     Authorization:
     'Client-ID C3suRatGj_FHp5PBEqlLw0M55HjQa9sfghu39TCXCF4'
    }
});