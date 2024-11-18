import styled from 'styled-components'

export const Container = styled.header`
    grid-area: header;
    height: 105px;
    width: 100%;
    border-bottom: none;
    display: flex;
    justify-content: space-around ;
    padding: 30px 123px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const HomeButton = styled.button`
    background: none;
    border: none;
    list-style-type: none;
    font-size: 35px;
    text-decoration: none;

    a:hover {
    color: #f4511e;
    }
    `

export const Searchbar = styled.input`
    width: 581px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    font-size: 18px;
    color: white;
    border-radius: 5px;
    border: none;
    
    `
    
export const AnimatedButton = styled.button`
    background: #750310;
    width: 215px;
    border-radius: 5px;
    color: white;
    border: none;
    overflow: hidden;
    transition: all 0.5s;
    

    span {
        display: inline-block;
        position: relative;
        transition: 0.5s;
    }

    span:after {
        content: '>>';
        position: absolute;
        opacity: 0;
        top: 0;
        transition: right 0.3s ease, opacity 0.3s ease;;
    }

    &:hover span {
        padding-right: 30px;
    } 

    &:hover span:after {
        opacity: 1;
        right: 0;
    }

    `

export const LogOutButton = styled.button`
    background: none;
    border: none;
    color: white;


    &:hover {
        color: #f4511e;
    }
    `    