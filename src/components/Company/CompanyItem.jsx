import {
  Avatar,
  ItemList,
  H3,
  Info,
  ListInfo,
  Paragr,
  ItemWrap,
  Circle,
  CircleText,
} from './CompanyItem.styled';
import { Gi3DHammer, Gi3DMeeple, GiAbstract027 } from 'react-icons/gi';

export const CompanyItem = ({ company }) => {
  return (
    <ItemList key={company.id}>
      <H3>{company.name}</H3>
      <ItemWrap>
        <Avatar src={company.avatar} alt={company.name}></Avatar>
        <Info>
          <ListInfo>
            <Gi3DHammer />
            <Paragr>{company.position}</Paragr>
          </ListInfo>
          <ListInfo>
            <Gi3DMeeple />
            <Paragr>{company.email}</Paragr>
          </ListInfo>
          <ListInfo>
            <GiAbstract027 />
            <Paragr>{company.location}</Paragr>
          </ListInfo>
        </Info>
        <Circle>
          <CircleText>{company.reviews}</CircleText>
        </Circle>
      </ItemWrap>
    </ItemList>
  );
};
