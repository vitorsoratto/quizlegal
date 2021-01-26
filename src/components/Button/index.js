import styled from 'styled-components';

const Button = styled.button`
    margin: 0 auto;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 5px;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.contrastText};
    &:hover {
        cursor: pointer;
    }
`;

export default function HomeButton({ localization, value }) {
    return (
        <a href={localization} target="_blank">
            <Button> 
                {value}
            </Button>
        </a>

    );
};