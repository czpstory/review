let BASE_URL = ''
const TIME_OUT = 1000
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://coderwhy.org/dev'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderczp.org/pro'
} else {
  BASE_URL = 'http://coderczp.org/test'
}

export { BASE_URL, TIME_OUT }
