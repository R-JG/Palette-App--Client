const Color = ({
    colorId,
    paletteId,
    colorCode,
    codeType,
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

    const generateColorStyleObj = (colorCode, codeType) => {
        if (codeType === 'hex') {
            return { backgroundColor: `#${colorCode}` };
        };
    };

    return (
        <div 
            className='Color'
            style={generateColorStyleObj(colorCode, codeType)}
            onClick={handleClick}>
        </div>
    );
};

export default Color;