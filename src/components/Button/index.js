/* eslint-disable react/button-has-type */
import styled from 'styled-components';

const LinkButton = styled.button`
    margin: 0 auto;
    margin-top: 10px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 7px;
    font-size: 1rem;
    font-family: Lato, sans-serif; 
    align-items: center;
    color: ${({ theme }) => theme.colors.contrastText};
    font-weight: bold;
    cursor: pointer;
    /*&:hover {
        cursor: pointer;
    }*/
    &:disabled {
      background-color: ${({ theme }) => theme.colors.disabled};
      border: 1px solid ${({ theme }) => theme.colors.contrastText};
      color: #222;
      cursor: no-drop;
      font-weight: bold;
    }
    a {
      color: ${({ theme }) => theme.colors.contrastText};
      text-decoration: none;
    }
`;

export default LinkButton;
