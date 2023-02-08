import { useState } from 'react';
import PaletteSettingsMenu from './PaletteSettingsMenu';

const Palette = ({
    paletteId,
    name,
    colorCode,
    colors,
    editPaletteProperties,
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
                        colorCode={colorCode}
                        handleDeleteButton={handleDeleteButton}
                        setEditPaletteMode={setEditPaletteMode}
                        editPaletteProperties={editPaletteProperties}
                    />
                    : <div className='palette-info'>
                        <div>
                            <h3 className='palette-name'>{name}</h3>
                            <button 
                                className='button--palette-settings'
                                onClick={handleSettingsButton}>
                                Settings
                            </button>
                        </div>
                        <p className='palette-color-code'>{colorCode}</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Palette;