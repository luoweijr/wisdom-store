const user = require('./user/index')
const stu = require('./stu/index')

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case 'user':
      return user.main(event, context)
    case 'stu':
      return stu.main(event, context)
  }
}
