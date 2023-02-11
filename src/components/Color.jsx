const Color = ({
    colorId,
    paletteId,
    rgbColor,
    editPaletteMode,
    deleteColorFromPalette
}) => {

    const handleClick = () => {
        if (editPaletteMode) {
            deleteColorFromPalette(paletteId, colorId);
        } else {
            // copy the color code to the clipboard
        };
    };

    return (
        <div 
            className='Color'
            style={{ 
                backgroundColor: `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})` 
            }}
            onClick={handleClick}>
        </div>
    );
};

export default Color;