import styled from 'styled-components'

export const Container = styled.footer`
    grid-area: footer;
    height: 77px;
    width: 100%;
    border-bottom: none;
    display: flex;
    justify-content: space-around ;
    margin-top: 48px;
    padding: 25px 1px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    grid-template-areas: footer;
    position: relative;
    font-size: 20px;
`;

