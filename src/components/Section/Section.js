import { Title } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title }) => {
  return <Title>{title}</Title>;
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
