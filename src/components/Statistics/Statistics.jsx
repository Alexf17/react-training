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
        {/* {console.log(data)} */}
        {data.map(({ id, label, percentage }) => (
          <StatisticsItem key={id}>
            <StatsListItem label={label} percentage={percentage} />
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};
