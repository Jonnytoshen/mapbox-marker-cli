const RGBToHex = require('./rgb-to-hex');

const colors = [
    [211, 47, 47],
    [123, 31, 162],
    [48, 63, 159],
    [25, 118, 210],
    [0, 121, 107],
    [56, 142, 60],
    [251, 192, 45],
    [245, 124, 0],
    [239, 83, 80],
    [171, 71, 188],
    [92, 107, 192],
    [66, 165, 245],
    [38, 166, 154],
    [102, 187, 106],
    [255, 238, 88],
    [255, 167, 38],
    [255, 255, 255],
    [232, 234, 237],
    [189, 193, 198],
    [128, 134, 139],
    [60, 64, 67],
    [0, 0, 0],
    [93, 64, 55],
    [141, 110, 99]
];

const sizes = [
    'l',
    'm',
    's'
];

const token = ''; /** mapbox token */

module.exports = function(symbol) {
    return colors.reduce((result, rgb) => {
        const color = RGBToHex(rgb);
        return [
            ...result,
            ...sizes.map(size => {
                return {
                    name: `${rgb.join('-')}-${size}-${symbol}.png`,
                    url: symbol !== 'none' 
                        ? `https://a.tiles.mapbox.com/v4/marker/pin-${size}-${symbol}+${color}.png?access_token=${token}`
                        : `https://a.tiles.mapbox.com/v4/marker/pin-${size}+${color}.png?access_token=${token}`
                };
            })
        ];
    }, []);
}