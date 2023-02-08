import { useState } from 'react';

const PaletteSettingsMenu = ({
    paletteId,
    name,
    handleDeleteButton,
    setEditPaletteMode,
    editPaletteName,
}) => {

    const [nameInputValue, setNameInputValue] = useState(name);

    const handleInputChange = event => {
        setNameInputValue(event.target.value);
    };

    const handleFinishEditButton = () => {
        if (nameInputValue !== name) {
            editPaletteName(paletteId, nameInputValue);
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
                onChange={handleInputChange}
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