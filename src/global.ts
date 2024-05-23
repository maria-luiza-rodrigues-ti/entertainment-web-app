import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }
    
    body {
        background: ${(props) => props.theme["dark-blue"]};
        color: ${(props) => props.theme["white"]};
        font-feature-settings: 'clig' off, 'liga' off;


        @media (min-width: 600px) {
            padding: 1.5rem 1.5rem 0;
        }

        @media (min-width: 1024px) {
            padding: 2rem 2rem 0;
        }
    }

    body, input, textarea, button {
        font-family: 'Outfit', sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        font-feature-settings: 'clig' off, 'liga' off;
        font-weight: 400;
        font-size: 1rem;
        font-feature-settings: 'clig' off, 'liga' off;
        -webkit-font-smothing: antialiased;
    }
`;
