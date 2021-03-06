const path = require('path');

module.exports = appInfo => {
  const config = {};

  config.view = {
    mapping: {
      '.ejs': 'ejs',
      '.nj': 'nunjucks',
    },
  };

  config.security = {
    domainWhiteList: ['.dev800.com'],  // 安全白名单，以 . 开头
    csrf: {
      queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
      bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf,
      useSession: true, // 默认为 false，当设置为 true 时，将会把 csrf token 保存到 Session 中
      cookieName: 'csrfToken', // Cookie 中的字段名，默认为 csrfToken
      sessionName: 'csrfToken', // Session 中的字段名，默认为 csrfToken
    },
  };

  // https://eggjs.org/zh-cn/core/cookie-and-session.html
  config.session = {
    key: '_ss',
    // 91天
    maxAge: 24 * 3600 * 1000 * 91,
    httpOnly: true,
    encrypt: true,
    renew: true,
  };

  // https://eggjs.org/zh-cn/core/i18n.html
  config.i18n = {
    defaultLocale: 'zh-CN',
    queryField: 'locale',
    cookieField: 'locale',
    // Cookie 默认一年后过期， 如果设置为 Number，则单位为 ms
    cookieMaxAge: '1y',
  };

  return config;
};
