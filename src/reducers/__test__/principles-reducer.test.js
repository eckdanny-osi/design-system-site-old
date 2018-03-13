import { ADD_PRINCIPLE, REMOVE_PRINCIPLE } from '../../constants';
import principlesReducer from '../principles-reducer';

describe('principles-reducer', () => {
  it('responds to ADD_PRINCIPLE actions', () => {
    const myAction = { type: ADD_PRINCIPLE, payload: 'FOO' };
    const out = principlesReducer([], myAction);
    expect(out.length).toBe(1);
  });

  it('responds to REMOVE_PRINCIPLE actions', () => {
    const data = [{ id: 'my-id' }, { id: 'other' }];
    const myAction = { type: REMOVE_PRINCIPLE, payload: { id: 'my-id' } };
    const out = principlesReducer(data, myAction);
    expect(out.length).toBe(1);
  });

  it('has default initial state', () => {
    const out = principlesReducer();
    expect(out.length).toBe(5);
  });

  it('returns state when no matching actions are found', () => {
    const data = [{ id: '1' }, { id: '2' }];
    const out = principlesReducer(data, { type: 'DNE' });
    expect(out).toEqual(data);
  });
});
