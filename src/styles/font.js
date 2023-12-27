import { css } from "styled-components";

const fontGenerator = (weight, size) => css`
  font-family: "GmarketSansMedium";
  font-weight: ${weight};
`;

export const font = {
    Text300: fontGenerator(300),
    Text300: fontGenerator(300),
    Text700: fontGenerator(700)
}

export default font;