import test from 'ava'
import nock from 'nock'

import * as api from '../../client/actions'


test.cb('Categories api receives category list', t => {
  let scope = nock('http://localhost:80')
    .get('/api/categories')
    .reply(200)

    api.getCategories()((actual) => {
      console.log(actual);
      t.is(actual.message, "categories rendered")
      t.end()
    })
})
