import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
        'Bearer ueBII_mYrULqf47wSFPLN-7clxTl2QoxYF4lqrDEkNvrx8V6cWUPWxHs3m2bB9hOHmHBqausrhsdrBHjc4zhdfVN_4qLIWd9pfk0rebpdsIwU0Nl2NK8WTiRCx41Z3Yx'
    }
})
// udemy 100-101