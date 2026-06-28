import styled from "styled-components";

export const InputContainer = styled.div`
    width:100%;
    max-width:275px;
    height:30px;
    border-bottom: 1px solid #3b3450;
    display:flex;
    align-items:center;
    margin-bottom:20px;
    gap:10px;
`

export const IconContainer = styled.div`
    margin-right: 0;
`

export const InputText = styled.input`
    background: transparent;
    color: #fff;
    border: 0;
    height: 30px;
    width: 100%;
    padding: 5px;

    &:focus {
        outline: none;
    };

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-text-fill-color: #fff !important;
        -webkit-box-shadow: 0 0 0 1000px #1e192c inset !important;
        box-shadow: 0 0 0 1000px #1e192c inset !important;
        caret-color: #fff;
    };
`

