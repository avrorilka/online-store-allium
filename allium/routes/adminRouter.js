const AdminBroExpress = require("@admin-bro/express");
const adminBro = require('../utils/adminOptions');
const sequelize = require("../db");
const User = sequelize.models.user;

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    authenticate: async (email, password) => {
      const user = await User.findOne({ email })
        if (user) {
          // if (password === user.password_hash) {
          //   return user
          // }
          if (user.validPassword(password)){
            return user
          }
        }
      return false
    },
    cookiePassword: 'session Key',
  });

module.exports = router;