import PropTypes from 'prop-types';

function ClockInput(props) {
  const { title, name, placeholder } = props;

  return (
    <label className="ClockInput">
      <p>{title}</p>
      <input type="text" name={name} placeholder={placeholder}/>
    </label>
  );
}

ClockInput.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default ClockInput;