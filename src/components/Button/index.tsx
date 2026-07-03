import { ButtonContainer } from "./styles"
import type types = require("./types")

const Button = ({title, variant="primary", onClick} : types.IButton) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
        {title}
    </ButtonContainer>
  )
}

export {Button}
