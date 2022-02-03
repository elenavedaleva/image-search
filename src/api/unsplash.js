import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID wS1aQtezzO0ATD7IsXkd3FpLSjrqjnhKH3OU8JWh4pk'
  }
});