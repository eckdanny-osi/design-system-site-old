import * as Actions from '../principles-action-creator';

describe('Principle Action creators', () => {
  describe('addPrinciple()', () => {
    it('creates an ADD_PRINCIPLE action', () => {
      const action = Actions.addPrinciple('hello world');
      expect(action.type).toBeDefined();
      expect(action.payload).toEqual({
        message: 'hello world',
        id: 'new-1',
      });
    });
  });

  describe('removePrinciple()', () => {
    it('creates an REMOVE_PRINCIPLE action', () => {
      const action = Actions.removePrinciple('my-id');
      expect(action.type).toBeDefined();
      expect(action.payload).toEqual({
        id: 'my-id',
      });
    });
  });
});
