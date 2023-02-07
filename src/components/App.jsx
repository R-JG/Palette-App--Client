import { useState, useEffect } from 'react';
import paletteApi from '../api/paletteApi';

const App = () => {

    const [palettes, setPalettes] = useState(null);

    useEffect(() => {
        paletteApi
            .getAll()
            .then(paletteData => setPalettes(paletteData))
            .catch(error => console.error(error));
    }, []);

    if (!palettes) return console.log('fetching palette data...');

    console.log(palettes);

    return (
        <div className='App'>
            <header className='header'>
                <button className='button--create-palette'>
                    Create Palette
                </button>
            </header>
            <main className='main'></main>
        </div>
    );
};

export default App;