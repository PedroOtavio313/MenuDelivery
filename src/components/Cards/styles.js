import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid #000204;
    border-radius: 8px;
    width: 305px;
    height: 462px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_950};
    margin-top: 131px;
    z-index: 1;
    text-align: center;

    img {
        width: 175px;
        height: 175px;
        border-radius: 8px;
        margin-bottom: 16px;
        margin: 24px;
    }

    h4 {
        margin: 15px 24px;
    }

    `
