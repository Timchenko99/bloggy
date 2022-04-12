import styled from 'styled-components'

export const Button = styled.button`
    display: inline-block;
    border-radius: 3px;
    font-family: 'Roboto', sans-serif;
    padding: 0.5rem 0;
    width: 11rem;
    margin-bottom: 0.5rem;
    border: 2px solid black;
    font-weight: bold;
    margin-right: 1rem;

    &:hover{
        cursor: pointer;
        background-color: var(--color-signal);
    }
`

export const AccentButton = styled(Button)`
    background: var(--color-signal);
`