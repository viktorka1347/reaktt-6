import PropTypes from 'prop-types';
import arrow from '../img/arrow.png';

function ClockFace(props) {
  const { hourAngle, minAngle, secAngle, onButtonClick } = props;

  return (
    <div className="ClockFace">
      <div className="ClockFace-hand-hour" style={{ transform: `rotate(${hourAngle}deg)` }}>
        <img className="ClockFace-arrow" src={arrow} width="10px" alt="arrow" /> 
      </div>
      <div className="ClockFace-hand-minute" style={{ transform: `rotate(${minAngle}deg)` }}>
        <img className="ClockFace-arrow" src={arrow} width="10px" alt="arrow" /> 
      </div>
      <div className="ClockFace-hand-second" style={{ transform: `rotate(${secAngle}deg)` }}>
      </div>
      <button className="ClockFace-button" type="button" onClick={onButtonClick}>x</button>
    </div>
  );
}

ClockFace.propTypes = {
  hourAngle: PropTypes.number.isRequired,
  minAngle: PropTypes.number.isRequired,
  secAngle: PropTypes.number.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

export default ClockFace;