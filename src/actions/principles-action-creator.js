import { ADD_PRINCIPLE, REMOVE_PRINCIPLE } from '../constants';

let counter = 0;

export const addPrinciple = message => ({
  type: ADD_PRINCIPLE,
  payload: {
    message,
    id: `new-${++counter}`,
  },
});

export const removePrinciple = id => ({
  type: REMOVE_PRINCIPLE,
  payload: {
    id,
  },
});
