export function generateContrastColor(colors) {

    const newContrastColors = {};
    
    Object.keys(colors).forEach( (key) => 
        (newContrastColors[key] = "#" + Math.random().toString(16).substr(-6)))

    newContrastColors.secondary = '#' + ('000000' + (0xFFFFFF ^ parseInt(newContrastColors.primary.substring(1), 16)).toString(16)).substr(-6);
    newContrastColors.quaternary = '#' + ('000000' + (0xFFFFFF ^ parseInt(newContrastColors.tertiary.substring(1), 16)).toString(16)).substr(-6);
    console.log(newContrastColors);
        
    return newContrastColors;
 
};
export default generateContrastColor;