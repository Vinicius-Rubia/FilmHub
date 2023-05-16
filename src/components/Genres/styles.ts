import styled from "styled-components";

export const Container = styled.div`
  &.genres {
  display: flex;
  gap: 5px;

  .genre {
    background-color: ${({ theme}) => theme.pink};
    padding: 3px 5px;
    font-size: 12px;
    border-radius: 4px;
    color: white;
    white-space: nowrap;
  }
}
`;
