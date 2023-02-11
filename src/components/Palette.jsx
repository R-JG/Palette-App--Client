import { useState } from 'react';
import Color from './Color';
import PaletteSettingsMenu from './PaletteSettingsMenu';
import colorConverter from '../utils/colorConverter';
import '../css/palette.css';

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

    const handleColorCodeClick = newCode => {
        if (newCode === colorCode) return;
        setColorCode(newCode)
    };

    const generateCopyCode = rgbColor => {
        const { r, g, b } = rgbColor;
        if (colorCode === 'hex') return colorConverter.rgbToHexColor(r, g, b);
        if (colorCode === 'rgb') return `${r}, ${g}, ${b}`;
    };

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
                    </div>
                }
                <div className='color-codes'>
                    <span className={
                        `color-codes--rgb 
                        ${(colorCode === 'rgb') ? 'selected-code' : ''}`}
                        onClick={() => handleColorCodeClick('rgb')}>
                        RGB
                    </span>
                    <span className={
                        `color-codes--hex 
                        ${(colorCode === 'hex') ? 'selected-code' : ''}`}
                        onClick={() => handleColorCodeClick('hex')}>
                        Hex
                    </span>
                </div>
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
                        copyColor={generateCopyCode(color)}
                        editPaletteMode={editPaletteMode}
                        deleteColorFromPalette={deleteColorFromPalette}
                    />
                )}
            </div>
        </div>
    );
};

export default Palette;