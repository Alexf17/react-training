import { StatisticsLabel, StatisticsPercentage } from './Statistics.styled';
export const StatsListItem = ({ label, percentage }) => {
  return (
    <>
      <StatisticsLabel>{label}</StatisticsLabel>
      <StatisticsPercentage>{percentage}%</StatisticsPercentage>
    </>
  );
};
