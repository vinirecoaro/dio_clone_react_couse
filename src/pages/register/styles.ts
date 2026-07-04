import styled from "styled-components";
import { IDefaultMargin } from "../../components/Input/types";

export const Container = styled.div`
    display:flex;
    align-items: start;
    justify-content: space-around;
    margin-top: 80px;
`

export const TitleHighLight = styled.p`
    font-size: 32px;
    font-weight: 700;
`

export const Text = styled.p`
    font-size: 18px;
`

export const Column = styled.div`
    max-width:380px;
`

export const DefaultMargin = styled.div<IDefaultMargin>`
    margin-top: ${({ margin }) => `${margin || 20}px`};
`;

export const SmallBoldText = styled.p`
    font-size:14px;
    font-weight:700;
`

export const LoginText = styled.span`
    font-size:14px;
    font-weight:700;
    color: rgb(47, 156, 47)
`