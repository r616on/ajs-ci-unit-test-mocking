import fetchData from '../fetchData';

test('test Fetch', () => {
  expect(fetchData(1)).toBe('Mock this! 1');
});
