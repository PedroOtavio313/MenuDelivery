import styled from 'styled-components'

export const Container = styled.input`
    height: 48px;
    width: 316px;
    background-color: ${({ theme }) => theme.COLORS.NAVY_100};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: 0;
    border-radius: 8px;
    margin-bottom: 32px;
    font-weight: 400;
    font-size: 20px;
    padding: 8px ;
   `;