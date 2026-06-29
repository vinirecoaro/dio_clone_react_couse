import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Column, Container, CreateText, ForgetText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles'
import bannerImage from '../../assets/banner.png'
import { Input } from '../../components/Input'
import {MdEmail, MdLock} from 'react-icons/md'

const Login = () => {

    const navigate = useNavigate()
    const handleClickSignIn = () => {
        navigate('/feed')
    }

    return (
        <>
            <Header></Header>
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias
                        e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    </Wrapper>
                    <form action="">
                        <Input name={"email"} leftIcon={<MdEmail/>} placeholder="E-mail"></Input>
                        <Input name={"password"} leftIcon={<MdLock/>} placeholder="Senha" type="password"></Input>
                        <Button title={"Entrar"} variant='secondary' onClick={handleClickSignIn} type="button"></Button>
                        <Row>
                            <ForgetText>Esqueci minha senha</ForgetText>
                            <CreateText>Criar conta</CreateText>
                        </Row>
                    </form>
                </Column>
            </Container>
        </>

    )
}

export default Login