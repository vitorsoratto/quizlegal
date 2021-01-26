import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import LinkButton from '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';

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

export default function QuizPage() {
  const router = useRouter();
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz - Quiz Legal - Imersão React/NextJS</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
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
            <form onSubmit={function (event) {
              event.preventDefault();
              router.push('/');
            }}
            >
              <LinkButton type="submit">
                Voltar para o inicio
              </LinkButton>
            </form>
          </Widget.Content>
        </Widget>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/vitorsoratto/quizlegal" />
    </QuizBackground>
  );
}
