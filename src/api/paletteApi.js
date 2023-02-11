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

const updatePaletteName = (paletteId, name) => {
    if ((!paletteId) || (!name)) return;
    const newNameObj = { name };
    const request = axios.put(`${baseUrl}/${paletteId}`, newNameObj);
    return request.then(updatedPalette => updatedPalette.data);
};

const deletePalette = paletteId => {
    if (!paletteId) return;
    const request = axios.delete(`${baseUrl}/${paletteId}`);
    return request.then(deletedPalette => deletedPalette.data);
};

const addColor = (paletteId, rgbColor) => {
    if ((!paletteId) || (!rgbColor)) return;
    const requestBody = { rgbColor };
    const request = axios.post(`${baseUrl}/${paletteId}/colors`, requestBody);
    return request.then(updatedPalette => updatedPalette.data);
};

const deleteColor = (paletteId, colorId) => {
    if ((!paletteId) || (!colorId)) return;
    const request = axios.delete(`${baseUrl}/${paletteId}/colors/${colorId}`);
    return request.then(updatedPalette => updatedPalette.data);
};

export default { 
    getAll, 
    create, 
    updatePaletteName, 
    deletePalette,
    addColor,
    deleteColor
};