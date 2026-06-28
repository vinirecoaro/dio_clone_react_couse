import { IconContainer, InputContainer, InputText } from "./styles"

const Input = ({leftIcon, name, placeholder="", type=""}) => {
    return(
        <InputContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
            <InputText name={name} placeholder={placeholder} type={type}></InputText>
        </InputContainer>
    )
}

export {Input}