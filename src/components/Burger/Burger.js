import React from "react";
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';

const Burger = ({ open, setOpen }) => {
  return (
    //setOpen func 호출 Open props를 toggle 한다.
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
