import '#app/config/index.js';
import { ItemModel } from '#app/globals/models.js';

const data = [
  [
    {
      icon: "01",
      name: "Инвестпроекты.<br/> Заявочная компания",
      value: "251 868",
      title: "млн ₽",
      period: "декабрь 2022 Г. ",
      trend: false,
      x: 0,
      y: 0
    },
    {
      icon: "02",
      name: "Объекты республиканской <br/> адресной инвест. программы",
      value: "96 150",
      title: "общий объём инвестиций, млн ₽",
      period: "01.01.22 - 31.12.22",
      trend: false,
      x: 0,
      y: 0
    },
    {
      icon: "03",
      name: "Инвестиции <br/> в основной капитал",
      value: "277.75",
      title: "млрд ₽",
      period: "III кв 2022 г.",
      trend: false,
      x: 0,
      y: 0
    },
    {
      icon: "04",
      name: "Инвестпроекты. <br/> Мониторинг реализации",
      value: "227 762",
      title: "млн ₽",
      period: "декабрь 2022 Г.",
      trend: false,
      x: 0,
      y: 0
    },
    {
      icon: "05",
      name: "Мониторинг реального <br/> сектора экономики",
      value: "102.8%",
      title: "индекс промышленного производства",
      period: "декабрь 2022 г.",
      trend: false,
      x: 0,
      y: 0
    },
    {
      icon: "06",
      name: "Привлечение <br/> инвестиций",
      value: "24 920",
      title: "объём заявленных инвестиций, млн ₽ ",
      period: "01.01.22 - 31.12.22",
      trend: false,
      x: 0,
      y: 0
    },
    {
      icon: "07",
      name: "Продукция сельского <br/> хозяйства",
      value: "219 065.4",
      title: "млн ₽",
      period: "декабрь 2022 г.",
      trend: false,
      x: 0,
      y: 0
    },
    {
      icon: "08",
      name: "Индекс <br/> потребительских цен",
      value: "106.5%",
      title: "индекс цен на товары и услуги",
      period: "01.01.22 - 31.12.22",
      trend: false,
      x: 0,
      y: 0
    },
    {
      icon: "09",
      name: "Благосостояние и социальная <br/> активность населения",
      value: "43 166.1",
      title: "номинальная ЗП, ₽  ",
      period: "01.01.22 - 31.12.22",
      trend: false,
      x: 0,
      y: 0
    },
    {
      icon: "10",
      name: "Малое и среднее <br/> предпринимательство",
      value: "126 348 ",
      title: "единиц",
      period: "декабрь 2022 г.",
      trend: false,
      x: 0,
      y: 0
    },
    {
      icon: "11",
      name: "Динамика развития <br/> инвестиционной деятельности",
      value: "5 место",
      title: "в рейтинге регионов",
      period: "ПО ИТОГАМ 2022 Г.",
      trend: false,
      x: 0,
      y: 0
    },
  ].map(el => el = { ...el, CategoryId: 1 }),
  [
    {
      icon: "12",
      name: "Численность населения",
      value: "4 091 423",
      title: "- 6 806",
      period: "01.01.22 - 31.12.22",
      trend: false,
      x: 0,
      y: 0
    },
    {
      icon: "13",
      name: "Миграционный прирост / прибывшие",
      value: "14 805",
      title: "k = 10.2",
      period: "01.01.22 - 31.12.22",
      trend: false,
      x: 0,
      y: 0
    },
    {
      icon: "14",
      name: "Естественный прирост / число родившихся",
      value: "29 560",
      title: "k = 14.9",
      period: "01.01.22 - 31.12.22",
      trend: false,
      x: 0,
      y: 0
    },
    {
      icon: "15",
      name: "Естественный прирост / число умерших",
      value: "36 366",
      title: "k = 4.1",
      period: "01.01.22 - 31.12.22",
      trend: false,
      x: 0,
      y: 0
    },
    {
      icon: "16",
      name: "Ожидаемая продолжительность жизни",
      value: "69.49",
      title: "k = 10.2",
      period: "01.01.22 - 31.12.22",
      trend: false,
      x: 0,
      y: 0
    },
    {
      icon: "17",
      name: "Миграционный прирост / выбывшие",
      value: "21 118",
      title: "- 4 956",
      period: "01.01.22 - 31.12.22",
      trend: false,
      x: 0,
      y: 0
    },
  ].map(el => el = { ...el, CategoryId: 2 }),
  [
    {
      icon: "18",
      name: "Общее количество звонков",
      value: "7 040",
      title: "портал «Забота»",
      period: "01.01.22 - 31.12.22",
      trend:false,
      x: 0,
      y: 0
    },
    {
      icon: "19",
      name: "Общее количество звонков",
      value: "509 349",
      title: "портал «Антиковид»",
      period: "01.01.22 - 31.12.22",
      trend:false,
      x: 0,
      y: 0
    },
    {
      icon: "20",
      name: "Решённых вопросов",
      value: "6 780",
      title: "портал «Забота»",
      period: "01.01.22 - 31.12.22",
      trend:false,
      x: 0,
      y: 0
    },
    {
      icon: "21",
      name: "Средняя продолжительность разговора ",
      value: "2:21",
      title: "портал «Забота»",
      period: "01.01.22 - 31.12.22",
      trend:false,
      x: 0,
      y: 0
    },
    {
      icon: "22",
      name: "Общее количество оформленных заявок",
      value: "326 588",
      title: "портал «Антиковид»",
      period: "01.01.22 - 31.12.22",
      trend:false,
      x: 0,
      y: 0
    },
    {
      icon: "23",
      name: "Максимальное количество звонков за 1 день",
      value: "10 376",
      title: "портал «Антиковид»",
      period: "01.01.22 - 31.12.22",
      trend:false,
      x: 0,
      y: 0
    },
  ].map(el => el = { ...el, CategoryId: 3 }),
  [
    {
      icon: "22",
      name: "Скорая помощь",
      value: "555 124",
      title: "количество вызовов",
      period: "01.01.22 - 31.12.22",
      trend:false,
      x: 0,
      y: 0
    },
    {
      icon: "23",
      name: "Пожарные службы",
      value: "17 197",
      title: "количество вызовов",
      period: "01.01.22 - 31.12.22",
      trend:false,
      x: 0,
      y: 0
    },
    {
      icon: "24",
      name: "Службы ЖКХ",
      value: "178 756",
      title: "количество вызовов",
      period: "01.01.22 - 31.12.22",
      trend:false,
      x: 0,
      y: 0
    },
    {
      icon: "25",
      name: "Газовые службы",
      value: "24 985",
      title: "количество вызовов",
      period: "01.01.22 - 31.12.22",
      trend:false,
      x: 0,
      y: 0
    },
    {
      icon: "26",
      name: "Полиция",
      value: "229 437",
      title: "количество вызовов",
      period: "01.01.22 - 31.12.22",
      trend:false,
      x: 0,
      y: 0
    },
    {
      icon: "27",
      name: "Служба Антитеррор",
      value: "1 150",
      title: "количество вызовов",
      period: "01.01.22 - 31.12.22",
      trend:false,
      x: 0,
      y: 0
    },
  ].map(el => el = { ...el, CategoryId: 4 })
].reduce((acc, arrChild) => {
  acc.push(...arrChild);
  return acc;
}, []);

ItemModel.bulkCreate(data);
