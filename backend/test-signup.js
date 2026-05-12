import axios from 'axios';

const testSignup = async () => {
  try {
    const res = await axios.post('http://localhost:5000/api/user/signup', {
      username: 'test',
      email: `test${Date.now()}@test.com`,
      password: 'password'
    });
    console.log('Signup Success:', res.data);
  } catch (err) {
    console.error('Signup Failed:', err.response?.status, err.response?.data || err.message);
  }
};

testSignup();
