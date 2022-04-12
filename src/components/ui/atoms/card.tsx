import styled from "styled-components"

const Card = styled.div`
  background: var(--color-background);
  padding: calc(4 * var(--size-bezel));
  margin-top: calc(4 * var(--size-bezel));
  border-radius: var(--size-radius);
  border: 3px solid var(--color-shadow, currentColor);
  box-shadow: .5rem .5rem 0 var(--color-shadow, currentColor);

  
`

export const StickyCard = styled(Card)`
position: sticky;
top: 1em;

`


export default Card