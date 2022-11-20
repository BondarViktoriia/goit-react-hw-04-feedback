import styled from 'styled-components';

export const ButtonContainer = styled.ul`
  text-align: center;
`;

export const Button = styled.button`
  width: 100px;
  height: 60px;
  background-color: pink;
  color: #d44a4a;
  border: none;
  cursor: pointer;
  text-transform: uppercase;

  :not(:last-child) {
    margin-right: 20px;
  }
`;
