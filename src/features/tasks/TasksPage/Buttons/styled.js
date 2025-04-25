import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: right;
  font-size: 18px;
`;
export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.green};
  border: none;
  color: ${({ theme }) => theme.color.white};
  width: 30px;
  height: 30px;
  margin: 10px;
  cursor: pointer;

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }

  &:active {
    filter: brightness(120%);
  }
`;

export const ButtonRemove = styled(Button)`
  background-color: ${({ theme }) => theme.color.red};
  margin-left: 150 px;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;

export const TasksButtons = styled.button`
  color: ${({ theme }) => theme.color.teal};
  background-color: transparent;
  border: none;

  &:active {
    filter: brightness(110%);
  }
  &:disabled {
    color: ${({ theme }) => theme.color.gray};
    cursor: not-allowed;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`;