/* eslint-disable react/jsx-no-bind */
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import LinkButton from '../src/components/Button';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
  }
`;

const NameInput = styled.input`
  width: 100%;
  max-width: 350px;
  margin: auto;
  padding: 10px 10px 10px 7px;
  background-color: ${({ theme }) => theme.colors.mainBg};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.contrastText};
  font-weight: bold;
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Inicio - Quiz Legal - Imersão React/NextJS</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Programação</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (event) {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo o submit');

              // router joga pra proxima pagina
            }}
            >
              <NameInput
                placeholder="Digite o seu nome"
                id="name"
                onChange={function (event) {
                  // name = event.target.value;
                  setName(event.target.value);
                }}
              />
              <LinkButton type="submit" disabled={name.length === 0}>
                JOGAR
              </LinkButton>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>Lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/vitorsoratto/quizlegal" />
    </QuizBackground>
  );
}
