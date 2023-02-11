import { useState, useEffect } from 'react';
import paletteApi from '../api/paletteApi';
import Palette from './Palette';
import colorConverter from '../utils/colorConverter';
import '../css/app.css';

const App = () => {

    const [palettes, setPalettes] = useState(null);

    useEffect(() => {
        paletteApi
            .getAll()
            .then(paletteData => setPalettes(paletteData))
            .catch(error => console.error(error));
    }, []);

    if (!palettes) return console.log('fetching palette data...');

    const createPalette = () => {
        paletteApi
            .create()
            .then(createdPalette => 
                setPalettes(palettes.concat(createdPalette)))
            .catch(error => console.error(error));
    };

    const editPaletteName = (paletteId, newName) => {
        paletteApi
            .updatePaletteName(paletteId, newName)
            .then(updatedPalette => setPalettes(palettes.map(palette => {
                return (palette._id === updatedPalette._id) 
                    ? updatedPalette 
                    : palette;
            })))
            .catch(error => console.error(error));
    }; 

    const deletePalette = paletteId => {
        paletteApi
            .deletePalette(paletteId)
            .then(() => {
                setPalettes(palettes.filter(palette => 
                    palette._id !== paletteId
                ));
            })
            .catch(error => console.error(error));
    };

    const addColorToPalette = (paletteId, color, colorCode) => {
        if ((!paletteId) || (!color) || (!colorCode)) return;
        let rgbColor;
        if (colorCode === 'hex') rgbColor = colorConverter.hexColorToRgb(color);
        if (colorCode === 'rgb') {
            // add validation for the different possible ways of entering the rgb value...
            const rgbInputArray = color.split(', ');
            rgbColor = { 
                r: rgbInputArray[0],
                g: rgbInputArray[1],
                b: rgbInputArray[2]
            }; 
        };
        paletteApi
            .addColor(paletteId, rgbColor)
            .then(updatedPalette => setPalettes(palettes.map(palette => {
                return (palette._id === updatedPalette._id) 
                    ? updatedPalette 
                    : palette;
            })))
            .catch(error => console.error(error));
    };

    const deleteColorFromPalette = (paletteId, colorId) => {
        paletteApi
            .deleteColor(paletteId, colorId)
            .then(updatedPalette => setPalettes(palettes.map(palette => {
                return (palette._id === updatedPalette._id) 
                    ? updatedPalette 
                    : palette; 
            })))
            .catch(error => console.error(error));
    };

    return (
        <div className='App'>
            <header className='header'>
                <button 
                    className='button--create-palette'
                    onClick={createPalette}>
                    Create Palette
                </button>
            </header>
            <main className='main'>
                <div className='palette-container'>
                    {palettes.map(palette => 
                        <Palette 
                            key={palette._id}
                            paletteId={palette._id}
                            name={palette.name}
                            colors={palette.colors}
                            editPaletteName={editPaletteName}
                            deletePalette={deletePalette}
                            addColorToPalette={addColorToPalette}
                            deleteColorFromPalette={deleteColorFromPalette}
                        />
                    )}
                </div>
            </main>
        </div>
    );
};

export default App;