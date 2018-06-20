// Simulates server calls

export const login = (user) => {
  const response = {
    status: user.id === 'test' && user.password === 'password' ? 'OK' : 'NG',
    token: '1a2b3c4d',
    data: {
      id: user.id,
      email: 'example@com',
      firstName: 'test',
      lastName: 'test',
    },
  };
  return response;
};
