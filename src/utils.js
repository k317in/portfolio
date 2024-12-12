export const getContrastColor = (backgroundColor) => {
    const rgb = backgroundColor
      .match(/\w\w/g) // Match hex pairs
      .map((hex) => parseInt(hex, 16)); // Convert to decimal values
  
    const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    return brightness > 125 ? "#000000" : "#FFFFFF"; // Black for light backgrounds, white for dark
  };