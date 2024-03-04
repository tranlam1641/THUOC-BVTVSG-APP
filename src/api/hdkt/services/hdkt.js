'use strict';

/**
 * hdkt service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hdkt.hdkt');
