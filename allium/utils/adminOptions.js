const AdminBro = require("admin-bro");
const AdminBroSequelize = require("@admin-bro/sequelize");
const sequelize = require("../db.js");
const translation = require("./adminTranslation");

AdminBro.registerAdapter(AdminBroSequelize);

const adminBro = new AdminBro({
    databases: [sequelize],
    rootPath: "/admin",
    branding: {
      companyName: 'allium',
      logo: false,
      softwareBrothers: false,
      theme: {
        colors: {
          primary100: "#e07a5f",
          primary80: '#eab69f',
          primary60: '#efd4bf',
          primary40: '#f3d199',
          primary20: '#f4f1de',

          accent: '#8f5d5d',
          filterBg: '#8f5d5d',
          hoverBg: '#664f5c',
        }
      }
    },
    locale: {
      translations: translation
    },
    dashboard: {
      component: AdminBro.bundle('../views/my-dashboard-component.jsx')
    },
});

module.exports = adminBro;
