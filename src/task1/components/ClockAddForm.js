import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ClockInput from './ClockInput';

function ClockAddForm(props) {
  const { onFormSubmit } = props;

  const [error, setError] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    if (!name) {
      setError('Введите название города в поле "Название"');
      return;
    }

    let timezone = event.target.timezone.value;
    const timezoneError = 'Введите число от -12 до 12 в поле "Временная зона"';

    if (!timezone && timezone !== '0') {
      setError(timezoneError);    
      return;
    }

    timezone = Math.trunc(+timezone);
    if ((isNaN(timezone)) || (timezone < -12) || (timezone > 12)) {
      setError(timezoneError);    
      return;   
    }

    setError('');
    event.target.name.value = '';
    event.target.timezone.value = '';
    onFormSubmit(name, timezone);    
  }

  return (<React.Fragment>
    <form className="ClockAddForm" onSubmit={onSubmit}>
      <ClockInput title="Название" name="name" placeholder="Название города"/>
      <ClockInput title="Временная зона" name="timezone" placeholder="Число от -12 до 12" />
      <button type="submit">Добавить</button>
    </form>
    {error && <p className="ClockAddForm-error">{error}</p>}
  </React.Fragment>);
}

ClockAddForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired
};

export default ClockAddForm;