import styled from 'styled-components';

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
`;
export const ItemList = styled.li`
  display: flex;
  flex-direction: column;
`;

export const H3 = styled.h3`
  font-weight: 700;
  font-size: 15px;
`;
export const ItemWrap = styled.div`
  display: flex;
`;
export const Info = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const ListInfo = styled.li`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Paragr = styled.p`
  font-weight: 400;
  font-size: 12px;
  margin-left: 10px;
`;
export const Circle = styled.div`
  position: relative;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 5px solid red;
  border-radius: 50%;
`;
export const CircleText = styled.span`
  display: block;
  /* &:before {
    top: 0;
    left: 0;
    position: absolute;
    content: '';
    width: 50px;
    height: 50px;
    border-right: solid green 8px;
    border-radius: 50%;
    transform: rotate(45deg); */
  /* } */
`;
