import  { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`

:root{
    --background:#F0F2F5;
    --red:#e52e4d;
    --blue:#5429cc;
    --blue-light:#6933ff;
    --text-title:#363f5f;
    --text-body:#969cb3;
    --background:#F0F2F5;
    --shape:#ffffff;
    --green:#33cc95;
}

*{
   margin: 0;
   padding: 0;
   box-sizing:border-box; 
}

html{
    @media(max-width:1000px){
        font-size: 93.75%;
    }
    @media(max-width:1000px){
        font-size: 87.5%;
    }
}

body{
    background: var(--background);
    --webkit-font-smoothing:antialised;
}

body, input, textarea, button {
    font-family: 'Poppins' ,sans-serif;
    font-weight: 400;
}

h1,h2,h3,h4,h5,h6,strong {
    font-weight: 600;
}

button {
    cursor:pointer;
}

[disable]{
    opacity: 0.6;
    cursor: not-allowed;
}

`