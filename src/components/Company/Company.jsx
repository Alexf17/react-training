import { Section } from './Company.styled';
import { CompanyList } from './CompanyList/CompanyList';

export const Company = ({ company }) => {
  return (
    <Section>
      <CompanyList company={company}></CompanyList>
    </Section>
  );
};
