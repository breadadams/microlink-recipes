'use strict'

const mql = require('@microlink/mql')

module.exports = async (url, opts) => {
  const { data } = await mql(url, {
    meta: false,
    data: {
      html: {
        selector: 'html'
      }
    },
    ...opts
  })

  return data.html
}
