import test from 'ava'
import nock from 'nock'

import * as catActions from '../../client/actions/categories'
import * as recActions from '../../client/actions/recipes'
import * as bsActions from '../../client/actions/bakeshops'

test.cb('getCategories', t => {
  const scope = nock('http://localhost:80')
    .get('/api/categories')
    .reply(200)

    catActions.getCategories()((actual) => {
      t.is(actual.type, 'RECEIVE_CATEGORIES')
      t.end()
    })
})

test.cb('getRecipes', t => {
  const scope = nock('http://localhost:80')
    .get('/api/recipes')
    .reply(200)

    recActions.getRecipes()((actual) => {
      t.is(actual.type, 'RECEIVE_RECIPES')
      t.end()
    })
})

test.cb('getBakeshops', t => {
  const scope = nock('http://localhost:80')
    .get('/api/bakeshops')
    .reply(200)

    bsActions.getBakeshops()((actual) => {
      t.is(actual.type, 'RECEIVE_BAKESHOPS')
      t.end()
    })
})
