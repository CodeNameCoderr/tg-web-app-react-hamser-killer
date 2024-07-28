const { type } = require('@testing-library/user-event/dist/type')
const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define ('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    telegramID: {type: DataTypes.STRING, unique: true, allowNull: false},
    userAvatar: {type: DataTypes.STRING, unique: false, allowNull: false},
    username: {type: DataTypes.STRING, unique: false, allowNull: false},
    balance: {type: DataTypes.INTEGER, unique: false, defaultValue: '0'},
    level: {type: DataTypes.INTEGER, unique: false, defaultValue: '0'},
    energy: {type: DataTypes.INTEGER, unique: false, defaultValue: '7000'},
})

const Task = sequelize.define ('task', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: false, allowNull: false},
    description: {type: DataTypes.STRING, unique: false, allowNull: false},
    shortDescription: {type: DataTypes.STRING, unique: false},
    link: {type: DataTypes.STRING, unique: false, allowNull: false},
    price: {type: DataTypes.STRING, unique: false, allowNull: false},
    image: {type: DataTypes.STRING, unique: false, allowNull: false},
    isActive: {type: DataTypes.BOOLEAN, unique:false, allowNull:false, defaultValue: true},
})

Task.hasMany(User, {as: 'tasks'});
User.belongsTo(Task);

module.exports = {
    User, Task,
}