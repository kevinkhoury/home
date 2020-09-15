const handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')
const yaml = require('yaml-front-matter')

const data = yaml.loadFront(
  fs.readFileSync(path.resolve(__dirname, '../src/pages/sitedata.md'), 'utf8'),
)

const template = handlebars.compile(
  fs.readFileSync(
    path.resolve(__dirname, '../gatsby-config.handlebars'),
    'utf8',
  ),
)

const compiled = template(data)

fs.writeFileSync(path.resolve(__dirname, '../gatsby-config.js'), compiled)
