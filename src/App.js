import './App.css';
import { useState } from 'react';
import Form from './components/Form/Form';
import ClockContainer from './components/Clock/ClockContainer';
import Clock from './components/Clock/Clock';
import shortid from 'shortid';
import data from './data';

function App() {
  const [clock, setClock] = useState(data);
  const [form, setForm] = useState({name: '', tzone: ''});

  function onFormSubmit(form) {
    //change of data, so clock adding after submit
    // data.push({
    //   id: shortid.generate(),
    //   name: form.name,
    //   tzone: form.tzone,
    // })
    // setClock(data);

    // no change of data object
    setClock(prevState => [...prevState, {
      id: shortid.generate(), 
      ...form
    }])

    setForm({name: '', tzone: ''});
  }

  function onFieldChange({target}) {
    const{ name, value } = target;

    setForm(prev => ({...prev, [name]: value}));
  }

  function deleteHandler(id) {
    setClock(prevState => {
      const newClock = prevState.filter(clock => clock.id !== id);
      setClock(newClock);
    })
  }

  return (
    <div className="container">
      <Form 
        onSubmit={onFormSubmit}
        onChange={onFieldChange}
        form={form}>
      </Form>
      <ClockContainer>
        {clock.map(each => {
          return <Clock 
            key={each.id}
            deleteClock={deleteHandler}
            clock={each}/>
        })}
      </ClockContainer>
    </div>
  );
}

export default App;
