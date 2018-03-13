import { ADD_PRINCIPLE, REMOVE_PRINCIPLE } from '../constants';

const initialData = [
  {
    id: '1',
    message: 'Always Be Closing',
  },
  {
    id: '2',
    message: 'Greed is good',
  },
  {
    id: '3',
    message: "There's always money in the banana stand",
  },
  {
    id: '4',
    message: 'Everything is awesome!!',
  },
  {
    id: '5',
    message: 'Heros get remembered, but legends never die',
  },
];

export default (state = initialData, action) => {
  if (!action) return state;
  switch (action.type) {
    case ADD_PRINCIPLE: {
      return [...state, action.payload];
    }

    case REMOVE_PRINCIPLE: {
      const id = action.payload.id;
      return state.filter(principle => id !== principle.id);
    }

    default:
      return state;
  }
};
