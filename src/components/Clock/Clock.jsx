import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import getTime from "../getTime";

const Clock = (props) => {
  const {
    clock,
    deleteClock,
  } = props;

  const myRef = useRef(null);
  
  const [hour, minute, second] = getTime(clock);

  const [time, setTime] = useState({
    hour, 
    minute, 
    second
  })

  let interval;
  useEffect(() => {
    myRef.current.interval = window.setInterval(setTime({
      hour, 
      minute, 
      second
    }), 1000);

    return () => {
      window.clearInterval(interval);
    }
  }, [hour, interval, minute, second, time])

  const onDelete = () => {
    const { id } = myRef.current.dataset;
    deleteClock(id);
  }

  return (
    <div className='clock__wrapper' ref={myRef} data-id={clock.id}>
      <div className='clock__title'>
        <h5>{clock.name}</h5>
        <div className='clock__delete' onClick={onDelete}>x</div>
      </div>
      <div className='clock__body'>
        <div className='arrow arrow__hour'
             style={{transform: `rotate(${hour * 30}deg)`}}>
        </div>
        <div className='arrow arrow__minute'
             style={{transform: `rotate(${minute * 6}deg)`}}>
        </div>
        <div className='arrow arrow__second'
             style={{transform: `rotate(${second * 6}deg)`}}>
        </div>
      </div>
    </div>
  )
}

Clock.propTypes = {
  clock: PropTypes.object.isRequired,
  deleteClock: PropTypes.func.isRequired,
}

export default Clock;
