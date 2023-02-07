import axios from 'axios';

// ABSOLUTE --- change to relative for build 
const baseUrl = 'http://localhost:3000/api/palette';

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(palettes => palettes.data);
};

export default { getAll };