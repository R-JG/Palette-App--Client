import axios from 'axios';

// ABSOLUTE --- change to relative for build 
const baseUrl = 'http://localhost:3000/api/palette';

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(palettes => palettes.data);
};

const create = () => {
    const request = axios.post(baseUrl);
    return request.then(createdPalette => createdPalette.data);
};

const deletePalette = paletteId => {
    const request = axios.delete(`${baseUrl}/${paletteId}`);
    return request.then(deletedPalette => deletedPalette.data);
};

export default { getAll, create, deletePalette };