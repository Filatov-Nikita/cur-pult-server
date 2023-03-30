import '#app/config/index.js';
import { sequelize } from '#app/globals/sequlize.js';
import '#app/globals/models.js';

sequelize.sync({ force: true });
