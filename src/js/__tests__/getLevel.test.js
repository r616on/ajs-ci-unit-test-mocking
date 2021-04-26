import getLevel from '../getLevel';
import fetchData from '../fetchData';

jest.mock('../fetchData');
beforeEach(() => {
  jest.resetAllMocks();
});

test('getlevel test request and respons_OK', () => {
  const resp = {
    status: 'ok',
    level: 3,
  };
  fetchData.mockReturnValue(resp);
  getLevel(5);
  expect(fetchData).toHaveBeenCalledWith('https://server/user/5');
  expect(getLevel(5)).toBe('Ваш текущий уровень: 3');
});

test('getlevel test response_NO', () => {
  const resp = {
    status: 'no',
  };
  fetchData.mockReturnValue(resp);
  getLevel(2);
  expect(getLevel(2)).toBe('Информация об уровне временно недоступна');
});
