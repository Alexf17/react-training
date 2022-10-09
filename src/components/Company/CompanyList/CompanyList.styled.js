import styled from 'styled-components';

export const CompanyUl = styled.ul`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3, calc((100%-30px) / 3));
`;
