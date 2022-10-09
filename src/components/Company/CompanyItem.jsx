import { Avatar } from "./CompanyItem.styled" 


export const CompanyItem = ({company}) => {
  return (
<li key={company.id} >
<h3>{company.name}</h3>
<div>
    <Avatar src={company.avatar} alt={company.name}></Avatar>
    <ul>
          <li>
          <p>{company.position}</p>
          </li>
          <li>
          <p>{company.email}</p>
          </li>
          <li>
          <p>{company.location}</p>
          </li>
    </ul>
</div>
<div>{company.reviews}</div>
</li>
  )

}
