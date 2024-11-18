import styled from 'styled-components'

import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    margin: 0 40px;

`

export const Form = styled.form`
    padding: 0 50px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    > h1 {
        font-size: 70px;
    }

    > h2 {
        font-size: 30px;
        margin-top: 10px;
        margin-bottom: 70px;
        
    }

    > a {
        margin-top: 28px;
    }

    h1, h2, a {
        color: ${({ theme }) => theme.COLORS.RED}
    }

`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center;
    height: 560px;
    width: 608px;
    margin-left: 50px;
    justify-content: center;
    background-size: cover;
`