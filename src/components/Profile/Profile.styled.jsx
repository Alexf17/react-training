import styled from 'styled-components';

export const Wrap = styled.div`
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

export const Info = styled.p`
  font-size: 12px;
  font-weight: 400;
`;

export const StatsList = styled.ul`
  display: flex;
  /* list-style: none; */
`;

export const StatsItem = styled.li`
  background-color: gray;
`;

export const Label = styled.span`
  font-size: 20px;
  font-weight: 400;
`;
export const Quantity = styled.span`
  font-size: 30px;
  font-weight: 700;
`;
