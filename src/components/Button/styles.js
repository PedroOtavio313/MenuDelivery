import styled, {keyframes} from 'styled-components'

const slideIn = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateY(0); }
`;

export const Container = styled.button`
    padding: 0 16px;
    border-radius: 5px;
    color: white;
    height: 48px;
    width: 316px;
    background-color: ${({ theme }) => theme.COLORS.RED};
    margin-top: 32px;
    letter-spacing: 0.15rem;
    font-weight: bold;
    border: none;

    position: relative;
    overflow: hidden;
    transition: all 1s;

    animation: ${slideIn} 0.5s ease-out;

`;


