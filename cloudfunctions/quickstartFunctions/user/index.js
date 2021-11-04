const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const wxContext = cloud.getWXContext();

function getUserList(event, context) {
  return new Promise((resolve, reject) => {
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
      _id: wxContext.OPENID,
      is_auth: true
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

// 更新用户授权数据
function updateUserAuthStatus(event, context) {
  const OPENID = wxContext.OPENID
  return new Promise((resolve, reject) => {
    db.collection('user').where({
      _id: OPENID
    }).get().then(
      res => {
        user = res.data.length > 0 ? res.data[0] : user
        if (Object.keys(user).length === 0) {
          db.collection('user').add({
            data: {
              _id: OPENID,
              ...event.userInfo
            }
          }).then(
            res => {
              resolve({
                res: '',
                code: 0,
                msg: '成功'
              })
            }
          ).then(
            err => reject(err)
          )
        } else {
          db.collection('user').doc(OPENID).update({
            data: {...event.userInfo}
          }).then(
            res => {
              resolve({
                res: '',
                code: 0,
                msg: '成功'
              })
            }
          ).catch(err => reject(err))
        }
      }
    ).catch(err => reject(err))

    // db.collection('user').where({
    //   open_id: wxContext.OPENID
    // }).set({
    //   data: event.userInfo
    // }).then(
    //   res => {
    //     resolve({
    //       res: '',
    //       code: 0,
    //       msg: "成功"
    //     })
    //   }
    // ).catch(err => reject(err))
  })
}

exports.main = (event, context) => {
  try {
    switch (event.func) {
      case 'getUserList':
        return getUserList(event, context)
      case 'getUserAuthStatus':
        return getUserAuthStatus(event, context)
      case 'updateUserAuthStatus':
        return updateUserAuthStatus(event, context)
    }
  } catch (e) {
    return {
      success: true,
      data: 'create collection success'
    }
  }
}