import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--font-family-wotfard);
        font-weight: var(--font-weight-400);
    }

    html{
        @media (max-width: 768px){
            font-size: 75%
        }

        
    }

    body{
        color: #fff;
        background: #1b1b1b;
        overflow-x: hidden;
    }

    h2{
        font-weight: var(--font-weight-300);
        font-size: 4rem;
    }

    h4{
        font-weight: var(--font-weight-500);
    }

    p{
        padding: 3rem 0;
        color: #ccc;
        font-size: .8rem;
        line-height: 150%;
    }

    span{
        font-weight: var(--font-weight-500);
        color: #23d997;
    }

    a{
        text-decoration: none;
    }

    button{
        font-size: 1.1.rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: #fff;
        transition: all .5s ease;

        &:hover{
            background-color: #23d997;
            color: #fff;
        }
    }
`;

export default GlobalStyle;
