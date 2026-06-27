import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Container, TextContent, Title, TitleHighLight } from './styles'
import bannerImage from '../../assets/banner.png'

const Home = () => {
    return (
        <>
            <Header></Header>
            <Container>
                <div>
                    <Title>
                        <TitleHighLight>
                            Implemente
                            <br />
                            o seu futuro global agora !
                        </TitleHighLight>
                        <TextContent>
                            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                            desafio profissional, evoluindo em comunidade com os melhores experts. 
                        </TextContent>
                        <Button title={"Começar agora"} variant='secondary' onClick={() => null}></Button>
                    </Title>
                </div>
                <div>
                    <img src={bannerImage} alt="Imagem principal" />
                </div>
            </Container>
        </>
        
    )
}

export default Home