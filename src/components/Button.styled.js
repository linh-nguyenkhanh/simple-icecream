import styled from "styled-components";

export const AddStyledButtons = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 30px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 30px;
  font-weight: 700;
  padding: 10px 30px;
  background-color: ${({ bg }) => bg || "#f3e5ab"};
  color: ${({ color }) => color || "#333"};
  z-index: 99;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export const RemoveStyledButtons = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 30px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 30px;
  font-weight: 700;
  padding: 10px 30px;
  background-color: ${({ bg }) => bg || "#f3e5ab"};
  color: ${({ color }) => color || "#333"};
  z-index: 99;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
