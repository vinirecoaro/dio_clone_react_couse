import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Column, Container, DefaultMargin, LoginText, SmallBoldText, Text, TitleHighLight } from "./styles"
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button } from "../../components/Button"
import { MdEmail, MdLock} from 'react-icons/md'
import { IoMdPerson } from "react-icons/io";

const Register = () => {

    const navigate = useNavigate()

     const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        navigate('/feed')
        return
    };

    return (
        <>
            <Header/>
            <Container>
                <Column>
                    <TitleHighLight>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</TitleHighLight>
                </Column>
                <Column>
                    <TitleHighLight>Comece agora grátis</TitleHighLight>
                    <DefaultMargin margin="5"/>
                    <Text>Crie sua conta e make the change._</Text>
                    <DefaultMargin/>
                    <form action="">
                        <Input name={"name"} placeholder={"Nome completo"} control={control} leftIcon={<IoMdPerson/>}></Input>
                        <Input name={"email"} placeholder={"E-mail"} control={control} leftIcon={<MdEmail/>}></Input>
                        <Input name={"password"} placeholder={"Senha"} control={control} leftIcon={<MdLock/>}></Input>
                    </form>
                    <DefaultMargin margin="30"/>
                    <Button title={"Criar minha conta"} variant="secondary" type="submit"></Button>
                    <DefaultMargin margin="30"/>
                    <Text>Ao clicar em "criar minha conta", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Text>
                    <DefaultMargin margin="10"/>
                    <SmallBoldText>Já tenho conta. <LoginText>Fazer login</LoginText></SmallBoldText>
                </Column>   
            </Container>
        </>
    )
}

export default Register