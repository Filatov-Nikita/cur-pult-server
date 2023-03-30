import '#app/config/index.js';
import { CategoryModel } from '#app/globals/models.js';

CategoryModel.bulkCreate([
  { name: 'Экономика' },
  { name: 'Демография' },
  { name: 'Колл-центр' },
  { name: 'Оперативные службы' },
]);
