import { DataTypes } from 'sequelize';

export default (sequelize, models) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Category.$assoc = function () {
    Category.hasMany(models.Item);
  }

  return Category;
}
