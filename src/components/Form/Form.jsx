import PropTypes from "prop-types";

const Form = (props) => {
  const {
    onSubmit: onFormSubmit,
    onChange: onFieldChange,
    form,
  } = props;

  return (
    <form className='form' onSubmit={(e) => {
      e.preventDefault();
      onFormSubmit(form);
    }}>
        <div className='form__field form__name-field'>
          <label htmlFor='name'>Название</label>
          <input 
            className='form__name-input' 
            name='name'
            type='text'
            value={form.name}
            onChange={onFieldChange }
            required
          />
        </div>

        <div className='form__field form__tzone-field'>
          <label htmlFor='tzone'>Временная зона</label>
          <input 
            className='form__tzone-input' 
            name='tzone'
            // type='number'
            value={form.tzone}
            onChange={onFieldChange}
            required
          />
        </div>
      <button className='form__submit-btn'>Добавить</button>
    </form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
}

export default Form;