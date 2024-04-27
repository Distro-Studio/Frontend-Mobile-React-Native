import {Dimensions} from 'react-native';
export function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
export function getResponsive(valueInPixel, deviceDimension) {
  const dimension = Dimensions.get('window')[deviceDimension];
  const valuePercentage = valueInPixel / dimension;
  return dimension * valuePercentage;
}
