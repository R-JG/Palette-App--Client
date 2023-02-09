import { useState } from 'react';

const PaletteSettingsMenu = ({
    paletteId,
    name,
    paletteColorCode,
    handleDeleteButton,
    setEditPaletteMode,
    editPaletteProperties,
}) => {

    const [nameInputValue, setNameInputValue] = useState(name);
    const [colorCodeInputValue, setColorCodeInputValue] = useState(paletteColorCode);

    const handleInputChange = event => {
        setNameInputValue(event.target.value);
    };

    const handleFinishEditButton = () => {
        if ((nameInputValue !== name) 
        || (colorCodeInputValue !== paletteColorCode)) {
            const paletteProps = {};
            if (nameInputValue !== name) {
                paletteProps.name = nameInputValue;
            };
            if (colorCodeInputValue !== paletteColorCode) {
                paletteProps.paletteColorCode = colorCodeInputValue;
            };
            editPaletteProperties(paletteId, paletteProps);
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