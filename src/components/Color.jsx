import '../css/color.css';

const Color = ({
    colorId,
    paletteId,
    rgbColor,
    copyColor,
    editPaletteMode,
    deleteColorFromPalette
}) => {

    const handleClick = () => {
        if (editPaletteMode) {
            deleteColorFromPalette(paletteId, colorId);
        } else {
            navigator.clipboard.writeText(copyColor);
        };
    };

    return (
        <div 
            className='Color'
            style={{ 
                color: `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`,
                backgroundColor: `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})` 
            }}
            onClick={handleClick}>
            {editPaletteMode 
                ? <div className='color-overlay'>Delete</div> 
                : <div className='color-overlay'>Copy</div>}
        </div>
    );
};

export default Color;