import reducers from '../../../../redux/reducers';

test('reducers', () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({data:{token:null,isLoggedIn:false,errors:{},username:null}});
});
