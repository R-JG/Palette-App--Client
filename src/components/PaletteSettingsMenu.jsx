import { useState } from 'react';

const PaletteSettingsMenu = ({
    paletteId,
    name,
    colorCode,
    handleDeleteButton,
    setEditPaletteMode,
    editPaletteName,
}) => {

    const [nameInputValue, setNameInputValue] = useState(name);
    const [colorCodeInputValue, setColorCodeInputValue] = useState(colorCode);

    const handleNameInputChange = event => {
        setNameInputValue(event.target.value);
    };

    const handleFinishEditButton = () => {
        if (nameInputValue !== name) {
            editPaletteName(paletteId, nameInputValue);
        };

        if (colorCodeInputValue !== colorCode) {
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