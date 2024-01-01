import styled from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }

    &:disabled {
        background-color: #CCCCCC; /* Cor de fundo para desabilitado */
        border: 1px solid #CCCCCC; /* Cor da borda para desabilitado */
        color: #999999; /* Cor do texto para desabilitado */
        cursor: not-allowed; /* Altera o cursor para 'not-allowed' */
        opacity: 0.6;
        cursor:pointer;
    }
`