import styled, {css} from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 15px;
  border-bottom: 1px solid #ddd;
  padding: 10px;

  ${({ $hidden }) => $hidden && `display: none;`}
`;

export const Button = styled.button`
  border: none;
  margin-right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: white;
  background-color: hsl(120, 100%, 30%);

  ${({ $done }) =>
    $done &&
    css`
      background-color: hsl(120, 100%, 30%);
      &:hover {
        background-color: hsl(120, 100%, 26%);
      }
    `}

  ${({ $remove }) =>
    $remove &&
    css`
      background-color: hsl(0, 100%, 60%);
      &:hover {
        background-color: hsl(0, 100%, 70%);
      }
    `}
`;

export const TasksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin: 20px 0;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.white};

  ${({ $done }) =>
    $done &&
    `
      text-decoration: line-through;
      color: ${({ theme }) => theme.color.alto};
    `}
`;

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.color.black};
    text-decoration: none;
`;