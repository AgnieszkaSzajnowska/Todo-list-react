import styled from "styled-components";

export default styled.button`
  background: transparent;
  color: ${({ theme }) => theme.color.teal};
  margin-left: 20px;
  transition: 0.3s;
  border: none;
  font-size: 18px;

  @media (max-width: 767px) {
    margin: 0;
    display: flex;
  }

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;