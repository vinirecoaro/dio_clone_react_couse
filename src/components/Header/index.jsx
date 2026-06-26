import { Button } from '../Button'
import {
    BuscarInputContainer,
    Column,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'
import logo from '../../assets/logo-dio.png'

const Header = () => {
    return(
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da dio"></img>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar ...'></Input>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight href='#'>Home</MenuRight>
                    <Button title={"Entrar"}></Button>
                    <Button title={"Cadastrar"}></Button>
                </Row>
            </Container>
        </Wrapper>
    )
}

export {Header}