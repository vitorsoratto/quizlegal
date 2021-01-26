/* eslint-disable react/button-has-type */
import styled from 'styled-components';

const LinkButton = styled.button`
    margin: 0 auto;
    margin-top: 5px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 5px;
    font-size: 1.5rem;
    font-family: Lato, sans-serif; 
    align-items: center;
    color: ${({ theme }) => theme.colors.contrastText};
    /*&:hover {
        cursor: pointer;
    }*/
    &:disabled {
      background-color: ${({ theme }) => theme.colors.disabled};
      border: 1px solid ${({ theme }) => theme.colors.contrastText};
      color: #222;
      cursor: no-drop;
    }
    a {
      color: ${({ theme }) => theme.colors.contrastText};
      text-decoration: none;
    }
`;

export default LinkButton;
