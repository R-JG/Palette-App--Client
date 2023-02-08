
const PaletteSettingsMenu = ({
    handleDeleteButton,
}) => {
    return (
        <div className='PaletteSettingsMenu'>
            <button 
                className='button--delete-palette'
                onClick={handleDeleteButton}>
                Delete
            </button>
        </div>
    );
};

export default PaletteSettingsMenu;