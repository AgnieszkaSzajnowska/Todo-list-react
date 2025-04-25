import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`

&:active {
    color: ${({ theme }) => theme.color.crimson};
}`;

export const Container = styled.div`
    max-width: 900px;
    padding: 20px;
    margin: 0 auto;
`;