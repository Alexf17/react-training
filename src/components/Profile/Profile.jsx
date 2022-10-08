import {
  Wrap,
  Description,
  Img,
  Name,
  Info,
  StatsList,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ user }) => {
  const { username, tag, avatar, location } = user;
  const { followers, views, likes } = user.stats;
  return (
    <Wrap>
      <Description>
        <Img src={avatar} alt={username} />
        <Name>{username}</Name>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Description>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </StatsList>
    </Wrap>
  );
};
Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
