import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  transform: translateY(0);
  width: 100%;
  height: 60px;
  z-index: 2;
  display: flex;
  align-items: center;
  transition: all ease 0.5s;

  &.top {
    background: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(3.5px);
    -webkit-backdrop-filter: blur(3.5px);
  }

  &.show {
    background-color: ${({ theme }) => theme.black3};
  }

  &.hide {
    transform: translateY(-60px);
  }

  .contentWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    cursor: pointer;

    img {
      height: 40px;
    }
  }

  &.mobileView {
    background: ${({ theme }) => theme.black3};
  }
`;

export const MenuItems = styled.ul`
  list-style-type: none;
  display: none;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
  }

  li {
    height: 60px;
    display: flex;
    align-items: center;
    margin: 0 15px;
    color: white;
    font-weight: 500;
    position: relative;

    svg {
      font-size: 18px;
    }

    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.pink};
    }
  }

  &.mobileView {
    display: flex;
    position: absolute;
    top: 60px;
    left: 0;
    background: ${({ theme }) => theme.black3};
    flex-direction: column;
    width: 100%;
    padding: 20px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    animation: mobileMenu 0.3s ease forwards;

    li {
      font-size: 20px;
      width: 100%;
      height: auto;
      padding: 15px 20px;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      &:last-child {
        display: none;
      }
    }

    @keyframes mobileMenu {
      0% {
        transform: translateY(-130%);
      }

      100% {
        transform: translateY(0);
      }
    }
  }
`;

export const MobileMenuItems = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    display: none;
  }

  svg {
    font-size: 18px;
    color: white;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  height: 40px;
  margin-top: 10px;
  width: 100%;

  svg {
    font-size: 20px;
    flex-shrink: 0;
    margin-left: 10px;
    cursor: pointer;
  }

  input {
    width: 100%;
    height: 50px;
    background-color: white;
    outline: 0;
    border: 0;
    border-radius: 30px 0 0 30px;
    padding: 0 15px;
    font-size: 14px;

    @media (min-width: 768px) {
      height: 60px;
      font-size: 20px;
      padding: 0 30px;
    }
  }
`;

export const SearchBar = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  position: absolute;
  top: 60px;
  animation: mobileMenu 0.3s ease forwards;
`;
