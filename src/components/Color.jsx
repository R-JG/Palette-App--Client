const Color = ({
    colorCode,
    codeType,
    editPaletteMode,
}) => {

    const handleClick = () => {
        if (editPaletteMode) {
            // delete the color
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
            style={generateColorStyleObj(colorCode, codeType)}>

        </div>
    );
};

export default Color;