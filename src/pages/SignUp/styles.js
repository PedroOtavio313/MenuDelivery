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

    > h1, h2, h3, a {
        color: ${({ theme }) => theme.COLORS.RED}
    }

    > h1 {
        font-size: 70px;
        
    }

    > h2 {
        font-size: 30px;
        margin-top: 10px;
        margin-bottom: 70px;   
    }

    > h3 {
        font-size: 25px;
        margin-bottom: 20px;
    }

    > p {
        text-align: left;
    }

    > ::placeholder {
        color: #8c8c8c;
    }

    > input {
        margin-bottom: 32px;
    }

    > a {
        margin-top: 28px;
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