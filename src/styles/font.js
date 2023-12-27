import { css } from "styled-components";

const fontGenerator = (weight) => css`
  font-family: "GmarketSansMedium";
  font-weight: ${weight};
`;

export const font = {
    Text300: fontGenerator(300),
    Text500: fontGenerator(500),
    Text700: fontGenerator(700)
}

export default font;