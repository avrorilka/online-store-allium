const Sequelize = require('sequelize');
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    mail: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "mail"
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    password_hash: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "mail",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mail" },
        ]
      },
    ]
  });
  User.associate = function(models) {};

  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password_hash);
};

User.beforeSave((user, options) => {
    const {
      password_hash
    } = user;
    console.log(password_hash);
    var saltRounds = 10;
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(password_hash, salt);
    console.log(hash);
    user.password_hash = hash;
});

User.beforeBulkCreate((users, options) => {
    for (const user of users) {
        const {
          password_hash
        } = user;

        var saltRounds = 10;
        var salt = bcrypt.genSaltSync(saltRounds);
        var hash = bcrypt.hashSync(password_hash, salt);
        user.password_hash = hash;
    }
});

User.beforeBulkUpdate((users, options) => {
    for (const user of users) {
        const {
          password_hash
        } = user;

        var saltRounds = 10;
        var salt = bcrypt.genSaltSync(saltRounds);
        var hash = bcrypt.hashSync(password_hash, salt);
        user.password_hash = hash;
    }
});
return User;
};
