import PropTypes from 'prop-types';

function ClockNumbers(props) {
  const { time } = props;

  return (
    <p className="ClockNumbers">{time}</p>
  );
}

ClockNumbers.propTypes = {
  time: PropTypes.string.isRequired
};

export default ClockNumbers;