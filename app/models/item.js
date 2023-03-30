import { DataTypes } from 'sequelize';

export default (sequelize, models) => {
  const Item = sequelize.define('Item', {
    icon: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    period: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    trend: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      validate: {
        isBoolean(value) {
          if(value && typeof value !== 'boolean') {
            throw new Error('trend должен быть boolean');
          }
        }
      }
    },
    size: {
      type: DataTypes.ENUM('sm', 'md', 'lg', 'xl'),
      allowNull: true,
      defaultValue: 'md',
      validate: {
        isIn: [['sm', 'md', 'lg', 'xl']],
      }
    },
    x: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      validate: {
        isInt: true
      }
    },
    y: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      validate: {
        isInt: true
      }
    },
  });

  Item.$assoc = function () {
    Item.belongsTo(models.Category);
  }

  return Item;
}
