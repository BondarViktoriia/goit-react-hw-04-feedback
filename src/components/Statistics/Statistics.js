import { StatisticContainer, StatisticItem } from './Statistics.styled';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <StatisticContainer>
      <StatisticItem>Good:{good} </StatisticItem>
      <StatisticItem>Neutral: {neutral}</StatisticItem>
      <StatisticItem>Bad: {bad} </StatisticItem>
      <StatisticItem>Total: {total} </StatisticItem>
      <StatisticItem>Positive FeedBack: {positivePercentage}% </StatisticItem>
    </StatisticContainer>
  );
};

export default Statistics;
