const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const wxContext = cloud.getWXContext();

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

// 获取用户是否授权头像、昵称权限
function getUserAuthStatus(event, context) {
  return new Promise((resolve, reject) => {
    db.collection('user').where({
      open_id: wxContext.OPENID,
      is_auth: 1
    }).count().then(
      res => {
        resolve({
          res: res.total > 0,
          code: 0,
          msg: "成功"
        })
      }
    ).catch(err => reject(err))
  })
}

exports.main = (event, context) => {
  try {
    switch (event.func) {
      case 'getUserList':
        return getUserList(event, context)
      case 'getUserAuthStatus':
        return getUserAuthStatus(event, context)
    }
  } catch (e) {
    return {
      success: true,
      data: 'create collection success'
    }
  }
}