import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  margin: 10px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  padding: 10px;
  height: 40px;
  box-sizing: border-box;
  font-size: 16px;

  &:active {
    border: ${({ theme }) => theme.color.black};
  }

  @media (max-width: 767px) {
    height: 40px;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  padding: 10px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.teal};
  border: none;
  transition: transform 0.25s linear, background 0.75s linear;
  height: 40px;
  font-size: 16px;
  box-sizing: border-box;

  &:hover {
    filter: brightness(110%);
    transform: scale(1.025);
    cursor: pointer;
  }

  &:active {
  filter: brightness(120%);
    transform: scale(1);
  }

  @media (max-width: 767px) {
    height: 40px;
    font-size: 16px;
  }
`;