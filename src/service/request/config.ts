let BASE_URL = ''
const TIME_OUT = 1000
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://coderwhy.org/dev'
  TIME_OUT
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderczp.org/pro'
  TIME_OUT
} else {
  BASE_URL = 'http://coderczp.org/test'
  TIME_OUT
}

export { BASE_URL, TIME_OUT }
