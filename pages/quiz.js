import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import HomeButton from '../src/components/Button';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
    return (
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>Página do Quiz</h1>
            </Widget.Header>
            <Widget.Content>
              <p>Lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Content>
              <h1>Quizes da galera</h1>
              <p>Lorem ipsum dolor sit amet...</p>
              <HomeButton localization="/" value="Voltar para o inicio">
                teste
                </HomeButton>
            </Widget.Content>
          </Widget>
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/vitorsoratto"/>
      </QuizBackground>
    )
  }