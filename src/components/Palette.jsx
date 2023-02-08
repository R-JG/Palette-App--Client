import { useState } from 'react';
import PaletteSettingsMenu from './PaletteSettingsMenu';

const Palette = ({
    paletteId,
    name,
    colors,
    deletePalette,
}) => {

    const [editPaletteMode, setEditPaletteMode] = useState(false);

    const handleSettingsButton = () => setEditPaletteMode(true);

    const handleDeleteButton = () => deletePalette(paletteId);

    return (
        <div className='Palette'>
            <div className='palette-header'>
                <h3>{name}</h3>
                <div className='palette-settings-container'>
                    {(editPaletteMode) 
                        ? <PaletteSettingsMenu 
                            handleDeleteButton={handleDeleteButton}
                        />
                        : <button 
                            className='button--palette-settings'
                            onClick={handleSettingsButton}>
                            Settings
                        </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Palette;