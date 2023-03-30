import '#app/config/index.js';
import { ItemModel } from '#app/globals/models.js';

ItemModel.sync({ alter: true });
