const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()

function getUserList(event, context) {
  return new Promise((resolve , reject) => {
    db.collection('user').get()
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
  try {
    switch (event.func) {
      case 'getUserList':
        return getUserList(event, context)
    }
  } catch (e) {
    return {
      success: true,
      data: 'create collection success'
    }
  }
}