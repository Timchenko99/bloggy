import styled from 'styled-components'

import { AccentButton } from '../ui/atoms/buttons'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();

  return (
    <>
        <NotFoundStyled>What are you doing here?! Get out of my property!!</NotFoundStyled>
        <AccentButton onClick={()=> navigate("/")}>GO BACK</AccentButton>
    </>
  )
}

export default NotFound

const NotFoundStyled = styled.div`
    display: grid;
    place-items: center;
    font-size: 2rem;
    font-weight: bold;
`