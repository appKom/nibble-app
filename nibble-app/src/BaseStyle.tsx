import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const BaseStyle = createGlobalStyle`
    ${reset}
    body {
        font-family: Arial, Helvetica, sans-serif
    }
`;

export default BaseStyle;
