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

    const deletePalette = paletteId => {};

    console.log(palettes);

    return (
        <div className='App'>
            <header className='header'>
                <button className='button--create-palette'>
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
                            deletePalette={deletePalette}
                        />
                    )}
                </div>
            </main>
        </div>
    );
};

export default App;