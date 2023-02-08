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

const edit = (paletteId, newProps) => {
    const request = axios.put(`${baseUrl}/${paletteId}`, newProps);
    return request.then(updatedPalette => updatedPalette.data);
};

const deletePalette = paletteId => {
    const request = axios.delete(`${baseUrl}/${paletteId}`);
    return request.then(deletedPalette => deletedPalette.data);
};

export default { getAll, create, edit, deletePalette };