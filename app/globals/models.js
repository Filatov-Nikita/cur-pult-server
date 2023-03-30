import { sequelize } from './sequlize.js';
import CreateItem from '#app/models/item.js';
import CreateCategory from '#app/models/category.js';
import CreateUser from '#app/models/user.js';

class Models {
  constructor() {
    this.Item = CreateItem(sequelize, this);
    this.Category = CreateCategory(sequelize, this);
    this.User = CreateUser(sequelize, this);

    this.assocAll();
  }

  assocAll() {
    this.Item.$assoc();
    this.Category.$assoc();
  }
}

const models = new Models();

export const ItemModel = models.Item;
export const CategoryModel = models.Category;
export const UserModel = models.User;
