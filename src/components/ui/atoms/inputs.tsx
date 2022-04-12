import styled from "styled-components";

export const StyledInput = styled.input`
    font-family: 'Roboto', sans-serif;
    padding: 0.5rem 0.2rem;

    display: block;
    width: 100%;
    border: 3px solid currentColor;
    padding: calc(var(--size-bezel) * 1.5) var(--size-bezel);
    color: currentColor;
    border-radius: var(--size-radius);
    margin-bottom: 1rem;
`