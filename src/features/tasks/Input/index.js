import styled from "styled-components";

const StyledInput = styled.input`
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

export default StyledInput;