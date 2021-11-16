import shortid from 'shortid';

const data = [
  {
    id: shortid.generate(),
    name: 'Moscow',
    tzone: +3,
  },
  {
    id: shortid.generate(),
    name: 'London',
    tzone: 0,
  },
]

export default data;