import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.color.teal};
    border: none;
    background-color: transparent;
    margin: 0 0 0 20px;
    transition: filter 0,3s;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
    }
`;