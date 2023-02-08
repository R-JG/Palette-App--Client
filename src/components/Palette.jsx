import { useState } from 'react';
import PaletteSettingsMenu from './PaletteSettingsMenu';

const Palette = ({
    paletteId,
    name,
    colors,
    editPaletteName,
    deletePalette,
}) => {

    const [editPaletteMode, setEditPaletteMode] = useState(false);

    const handleSettingsButton = () => setEditPaletteMode(true);

    const handleDeleteButton = () => deletePalette(paletteId);

    return (
        <div className='Palette'>
            <div className='palette-header'>
                {(editPaletteMode) 
                    ? <PaletteSettingsMenu 
                        paletteId={paletteId}
                        name={name}
                        handleDeleteButton={handleDeleteButton}
                        setEditPaletteMode={setEditPaletteMode}
                        editPaletteName={editPaletteName}
                    />
                    : <div className='palette-info'>
                        <h3>{name}</h3>
                        <button 
                            className='button--palette-settings'
                            onClick={handleSettingsButton}>
                            Settings
                        </button>
                    </div>
                }
            </div>
        </div>
    );
};

export default Palette;