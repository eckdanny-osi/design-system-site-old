import rootReducer from '../';

describe('root reducer', () => {
  it('combines other reducers', () => {
    const { routing, principles } = rootReducer();
    expect(routing).toBeDefined();
    expect(principles).toBeDefined();
  });
});
