const cloud = require('wx-server-sdk')
wxContext = null

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()

function getOrderList(event, context) {
  return new Promise((resolve, reject) => {
    db.collection('stu_order').where({
      'status': 1
    }).get()
      .then(data => {
        resolve({
          res: data,
          code: 0,
          msg: "成功"
        })
      })
      .catch(err => reject(err))
  })
}

exports.main = (event, context) => {
  wxContext = cloud.getWXContext()
  try {
    switch (event.func) {
      case 'getOrderList':
        return getOrderList(event, context)
    }
  } catch (e) {
    return {
      success: true,
      data: 'create collection success'
    }
  }
}