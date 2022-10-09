import { CompanyUl } from './CompanyList.styled';
import {CompanyItem} from '../CompanyItem'



export const CompanyList = ({ company }) => {
  return (
    <CompanyUl>
      {company.map(person => (
       <CompanyItem company={person}/>
        
    ))}
     
    </CompanyUl>
  );
};
