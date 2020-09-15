const remark = require('remark')
const remarkHTML = require('remark-html')
const deepMap = require('deep-map')
const _ = require('lodash')
const gitRepoInfo = require('git-repo-info')
const path = require('path')

const makeHTMLNodes = (value, key) =>
  _.isString(value) && _.isString(key) && key.slice(-3) === '_MD' // process any node with the _MD suffix as MarkDown
    ? remark().use(remarkHTML).processSync(value).toString()
    : value

exports.transformFrontmatterMD = (node) => {
  if (node.frontmatter) {
    deepMap(node.frontmatter, makeHTMLNodes, { inPlace: true })
  }
}

exports.setBranchEnvironment = () => {
  const { branch } = gitRepoInfo()
  if (process.env.NETLIFY) {
    process.env.GATSBY_CMS_BRANCH = process.env.HEAD
  } else {
    process.env.GATSBY_CMS_BRANCH = branch
  }
}

function findMd(input) {
  const output = []
  if (Array.isArray(input)) {
    input.forEach((item) => output.push(findMd(item)))
  } else if (typeof input === 'object' && input !== null) {
    Object.keys(input).forEach((key) => {
      if (key.indexOf('_MD') !== -1) {
        output.push(input[key])
      } else {
        output.push(findMd(input[key]))
      }
    })
  }
  return output.length ? output : null
}

exports.extractInlineImages = (node) => {
  const { rawMarkdownBody: html } = node
  const mdKeys =
    node.frontmatter && node.frontmatter
      ? _.flatMapDeep(findMd(node.frontmatter), (i) => i).filter((i) => i)
      : null
  if (!mdKeys && !html) {
    return []
  }
  const regex = new RegExp(/(\/img\/.+\.(jp(e)?g|png))/gm)

  const matches = []
  mdKeys.forEach((item) => {
    matches.push(item.match(regex))
  })
  matches.push(html.match(regex))
  const flat = _.flattenDeep(matches.filter((i) => i))

  return flat.map((item) => {
    const basename = item.replace('src=', '').replace(/('|")/g, '')
    return path.relative(
      path.dirname(node.fileAbsolutePath),
      path.join(__dirname, './static', basename),
    )
  })
}

exports.addTrailingSlash = (path) => {
  if (path === '/') {
    return path
  }
  return `/${path
    .split('/')
    .filter((x) => x)
    .join('/')}/`
}
