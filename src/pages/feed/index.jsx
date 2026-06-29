import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Card } from '../../components/Card'
import { Container, Column, Title, TitleHighlight } from './styles'
import bannerImage from '../../assets/banner.png'
import { UserInfo } from '../../components/UserInfo'

const Feed = () => {
    return (
        <>
            <Header autenticado={true}></Header>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                    <UserInfo percentual={40} name={"Vinicius Recoaro"} image={"https://avatars.githubusercontent.com/u/123481891?v=4"}/>
                    <UserInfo percentual={20} name={"Vinicius Recoaro"} image={"https://avatars.githubusercontent.com/u/123481891?v=4"}/>
                    <UserInfo percentual={60} name={"Vinicius Recoaro"} image={"https://avatars.githubusercontent.com/u/123481891?v=4"}/>
                    <UserInfo percentual={75} name={"Vinicius Recoaro"} image={"https://avatars.githubusercontent.com/u/123481891?v=4"}/>
                </Column>
            </Container>
        </>
        
    )
}

export default Feed