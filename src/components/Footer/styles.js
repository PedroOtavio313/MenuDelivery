import styled from 'styled-components'

export const Container = styled.footer`
    grid-area: footer;
    height: 77px;
    width: 100%;
    border-bottom: none;
    display: flex;
    justify-content: space-around ;
    margin: 0;
    padding: 25px 1px;
    background: ${({ theme }) => theme.COLORS.RED};
    grid-template-areas: footer;
    position: relative;

    > span{
        font-size: 17px;
    }
`;

