import { useState } from 'react';

const PaletteSettingsMenu = ({
    paletteId,
    name,
    paletteColorCode,
    handleDeleteButton,
    setEditPaletteMode,
    editPaletteName,
}) => {

    const [nameInputValue, setNameInputValue] = useState(name);
    const [colorCodeInputValue, setColorCodeInputValue] = useState(paletteColorCode);

    const handleNameInputChange = event => {
        setNameInputValue(event.target.value);
    };

    const handleFinishEditButton = () => {
        if (nameInputValue !== name) {
            editPaletteName(paletteId, nameInputValue);
        };

        if (colorCodeInputValue !== paletteColorCode) {
            // fix
        };

        setEditPaletteMode(false);
    };

    return (
        <div className='PaletteSettingsMenu'>
            <button 
                className='button--finish-edit'
                onClick={handleFinishEditButton}>
                ✓
            </button>
            <input 
                className='input--palette-name'
                type='text' 
                value={nameInputValue}
                onChange={handleNameInputChange}
            />
            <button 
                className='button--delete-palette'
                onClick={handleDeleteButton}>
                Delete
            </button>
        </div>
    );
};

export default PaletteSettingsMenu;