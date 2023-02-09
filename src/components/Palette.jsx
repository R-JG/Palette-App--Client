import { useState } from 'react';
import Color from './Color';
import PaletteSettingsMenu from './PaletteSettingsMenu';

const Palette = ({
    paletteId,
    name,
    paletteColorCode,
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
                        paletteColorCode={paletteColorCode}
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
                        <p className='palette-color-code'>{paletteColorCode}</p>
                    </div>
                }
                <div className='color-entry'>
                    <input type='text'/>
                    <button className='button--add-color'>
                        +
                    </button>
                </div>
            </div>
            <div className='color-container'>
                {colors.map(color => 
                    <Color 
                        key={color._id}
                        colorCode={color.code}
                        codeType={color.codeType}
                        editPaletteMode={editPaletteMode}
                    />
                )}
            </div>
        </div>
    );
};

export default Palette;