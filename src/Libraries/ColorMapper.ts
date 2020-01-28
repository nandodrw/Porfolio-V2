import colors from "../css-modules/variables.scss";

function stringColorParser(colorString: string) {
  let hexSection = colorString.replace("#", "");
  if (hexSection.length === 3) {
    hexSection = hexSection + hexSection;
  }
  return parseInt(hexSection, 16);
}

const importedColors = {
  hightContrastLight: stringColorParser(colors.hightContrastLight),
  mainDark: stringColorParser(colors.mainDark),
  darkText: stringColorParser(colors.darkText),
  darkComplement: stringColorParser(colors.darkComplement),
  patelLight: stringColorParser(colors.patelLight),
  callToAction: stringColorParser(colors.callToAction),
  callToActionComplement: stringColorParser(colors.callToActionComplement),
  ambient1: stringColorParser(colors.ambient1),
  ambient2: stringColorParser(colors.ambient2),
  ambient3: stringColorParser(colors.ambient3),
  ambient4: stringColorParser(colors.ambient4),
  planetMiddleTone: stringColorParser(colors.planetMiddleTone),
  planetOutline: stringColorParser(colors.planetOutline),
  particlesBody: stringColorParser(colors.particlesBody)
};

export default importedColors;
