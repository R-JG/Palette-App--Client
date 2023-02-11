import { useState } from 'react';
import Color from './Color';
import PaletteSettingsMenu from './PaletteSettingsMenu';

const Palette = ({
    paletteId,
    name,
    colors,
    editPaletteName,
    deletePalette,
    addColorToPalette,
    deleteColorFromPalette
}) => {

    const [colorCode, setColorCode] = useState('hex');
    const [colorInputValue, setColorInputValue] = useState('');
    const [editPaletteMode, setEditPaletteMode] = useState(false);

    const handleColorInputChange = event => {
        setColorInputValue(event.target.value);
    };

    const handleAddColorButton = () => {
        addColorToPalette(paletteId, colorInputValue, colorCode);
        setColorInputValue('');
    };

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
                        editPaletteName={editPaletteName}
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
                <div className='color-entry'>
                    <input 
                        className='input--color'
                        type='text'
                        placeholder={
                            (colorCode === 'hex') 
                            ? '#FFFFFF' 
                            : '255, 255, 255'}
                        value={colorInputValue}
                        onChange={handleColorInputChange}
                    />
                    <button 
                        className='button--add-color'
                        onClick={handleAddColorButton}>
                        +
                    </button>
                </div>
            </div>
            <div className='color-container'>
                {colors.map(color => 
                    <Color 
                        key={color._id}
                        colorId={color._id}
                        paletteId={paletteId}
                        rgbColor={color}
                        editPaletteMode={editPaletteMode}
                        deleteColorFromPalette={deleteColorFromPalette}
                    />
                )}
            </div>
        </div>
    );
};

export default Palette;