import PropTypes from 'prop-types';

function Note(props) {
  const { content, onButtonClick } = props;

  return (
    <div className="Note">
      <p className="Note-text">{content}</p>
      <button className="Note-button-delete" type="button" onClick={onButtonClick}>&#x274C;</button>
    </div>
  );
}

Note.propTypes = {
  content: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

export default Note;