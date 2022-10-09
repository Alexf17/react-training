import PropTypes from 'prop-types';
import { Title } from './StatisticsTitle';
import { StatsListItem } from './StatisticsItem';
import {
  StatisticsSection,
  StatisticsList,
  StatisticsItem,
} from './Statistics.styled';
export const Statistics = ({ data, titleText }) => {
  return (
    <StatisticsSection>
      {titleText && <Title titleText={titleText} />}

      <StatisticsList>
        {data.map(({ id, label, percentage }) => (
          <StatisticsItem key={id}>
            <StatsListItem label={label} percentage={percentage} />
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),

  titleText: PropTypes.string,
};
