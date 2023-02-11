//############################### Num To Hex ###############################

const _hexLookupTable = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

/*
const _convertNumToHexRecursion = num => {
    const divisionResult = Math.floor(num / 16);
    const remainder = num % 16;
    if (divisionResult === 0) {
        return [remainder];
    };
    return [..._convertNumToHexRecursion(divisionResult), remainder];
};
*/

const _convertNumToHex = num => {
    let hexString = '';
    let divisionResult = num;
    while (divisionResult > 0) {
        hexString = _hexLookupTable[divisionResult % 16] + hexString;
        divisionResult = Math.floor(divisionResult / 16);
    };
    if (hexString.length === 0) hexString = '00';
    if (hexString.length === 1) hexString = '0' + hexString;
    return hexString;
};

const rgbToHexColor = (r, g, b) => {
    const hexR = _convertNumToHex(r);
    const hexG = _convertNumToHex(g);
    const hexB = _convertNumToHex(b);
    return ('#' + hexR + hexG + hexB);
};

//############################### Hex To Num ###############################

const _hexStringCharList = '0123456789ABCDEF';

const _convertHexToNum = hexString => {
    const numArray = hexString.split('').map(hexChar => 
        _hexStringCharList.indexOf(hexChar)
    );
    let baseTenNum = 0;
    numArray.forEach((num, index) => {
        const convertedNum = (num * Math.pow(16, numArray.length - index - 1));
        baseTenNum += convertedNum;
    }); 
    return baseTenNum;
};

const hexColorToRgb = hexColorString => {
    if (hexColorString.length === 7) {
        hexColorString = hexColorString.slice(1)
    };
    const hexR = hexColorString.slice(0, 2);
    const hexG = hexColorString.slice(2, 4);
    const hexB = hexColorString.slice(4);
    return {
        r: _convertHexToNum(hexR),
        g: _convertHexToNum(hexG),
        b: _convertHexToNum(hexB)
    };
};

export default { rgbToHexColor, hexColorToRgb };