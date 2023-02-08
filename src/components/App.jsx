import { useState, useEffect } from 'react';
import paletteApi from '../api/paletteApi';
import Palette from './Palette';

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
            .edit(paletteId, newName)
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

    console.log(palettes);

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
                        />
                    )}
                </div>
            </main>
        </div>
    );
};

export default App;