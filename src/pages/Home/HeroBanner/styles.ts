import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 450px;
  background-color: ${({ theme }) => theme.black};
  display: flex;
  align-items: center;
  position: relative;

  @media (min-width: 768px) {
    height: 700px;
  }

  .backdrop-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
    overflow: hidden;

    .lazy-load-image-background {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
`;

export const OpacityLayer = styled.div`
  width: 100%;
  height: 250px;
  background: linear-gradient(180deg, rgba(4, 21, 45, 0) 0%, #04152d 79.17%);
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  text-align: center;
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  .title {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 10px;

    @media (min-width: 768px) {
      margin-bottom: 0;
      font-size: 90px;
    }
  }

  .subTitle {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 40px;

    @media (min-width: 768px) {
      font-size: 24px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;

  input {
    width: calc(100% - 100px);
    height: 50px;
    background-color: #fff;
    outline: none;
    border: 0;
    border-radius: 30px 0 0 30px;
    padding: 0 15px;
    font-size: 14px;

    @media (min-width: 768px) {
      width: calc(100% - 150px);
      height: 60px;
      font-size: 20px;
      padding: 0 30px;
    }
  }

  button {
    width: 100px;
    height: 50px;
    background: ${({ theme }) => theme.gradient};
    color: #fff;
    outline: none;
    border: 0;
    border-radius: 0 30px 30px 0;
    font-size: 16px;
    cursor: pointer;

    @media (min-width: 768px) {
      width: 150px;
      height: 60px;
      font-size: 18px;
    }
  }
`;
