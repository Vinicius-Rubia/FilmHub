import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.black3};
  padding: 50px 0;
  color: ${({ theme }) => theme.white};
  position: relative;

  .contentWrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const MenuItems = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 30px;
    gap: 30px;
  }

  li {
    transition: all ease 0.3s;
    cursor: pointer;
    font-size: 12px;

    @media (min-width: 768px) {
      font-size: 16px;
    }

    &:hover {
      color: ${({ theme }) => theme.pink};
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  a {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.black};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all ease 0.3s;

    &:hover {
      box-shadow: 0 0 0.625em ${({ theme }) => theme.pink};
      color: ${({ theme }) => theme.pink};
    }
  }
`;

export const InfoText = styled.p`
  font-size: 12px;
  line-height: 20px;
  opacity: 0.5;
  text-align: center;
  max-width: 800px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 14px;
    margin-bottom: 30px;
  }
`;
