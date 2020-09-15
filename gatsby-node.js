const _ = require('lodash')
const path = require('path')
const moment = require('moment-timezone')
const { execSync } = require('child_process')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const {
  transformFrontmatterMD,
  extractInlineImages,
  addTrailingSlash,
} = require('./utils')

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }
    type Fields {
      slug: String!
      gitAuthorTime: Date
      gitCreatedTime: Date
      inlineImages: [File] @fileByRelativePath
    }
    type Frontmatter @dontInfer {
      templateKey: String!
      published: Boolean
      schemaType: String!
      pageSlug: String
      pageTitle: String!
      metaDescription: String!
      header: String!
      subheader: String
      date: Date @dateformat(formatString: "MMM D, YYYY")
      featuredImage: FeaturedImage
      missionStatement: String
      shortBiography: String
      showRecentPosts: Boolean
      longBiography_MD: String
      learnMoreButton: LearnMoreButton
      formText: FormText
      menuItems: [MenuItems]
      name: String
      jobTitle: String
      siteName: String
      siteUrl: String
      socialLinks: SocialLinks
      favicon: File @fileByRelativePath
      fallbackImage: File @fileByRelativePath
      themeOptions: ThemeOptions
    }
    type LearnMoreButton {
      label: String!
      link: String!
    }
    type FeaturedImage {
      src: File @fileByRelativePath
      alt: String
      caption: String
    }
    type FormText {
      name: String!
      email: String!
      message: String!
      submit: String!
    }
    type MenuItems {
      slug: String!
      label: String!
    }
    type SocialLinks {
      twitter: SocialLink
      facebook: SocialLink
      linkedin: SocialLink
      pinterest: SocialLink
      instagram: SocialLink
    }
    type SocialLink {
      url: String
      show: Boolean
    }
    type ThemeOptions {
      colorScheme: String!
      fontScheme: String!
      showThemeSwitcher: Boolean
    }
  `
  createTypes(typeDefs)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            templateKey: { nin: ["site-data", "menu-data"] }
            published: { eq: true }
          }
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }
    // Create pages
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((edge) => {
      const id = edge.node.id
      const template =
        edge.node.frontmatter.templateKey.indexOf('-page') !== -1
          ? 'page'
          : edge.node.frontmatter.templateKey
      createPage({
        path: addTrailingSlash(edge.node.fields.slug),
        // tags: edge.node.frontmatter.tags,
        component: path.resolve(`src/templates/${String(template)}.js`),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images
  transformFrontmatterMD(node) // convert markdown frontmatter to HTML
  if (node.internal.type === `MarkdownRemark`) {
    const gitAuthorTime = execSync(
      // last commit to repo time
      `git log -1 --pretty=format:%aI "${node.fileAbsolutePath}"`,
    ).toString()
    const gitCreatedTime = execSync(
      // first commit to repo time
      `git log --pretty=format:%at --follow -- "${node.fileAbsolutePath}" | tail -n 1`,
    ).toString()
    createNodeField({
      node,
      name: 'gitAuthorTime',
      value: moment(gitAuthorTime).tz('America/Los_Angeles').format(),
    })
    createNodeField({
      node,
      name: 'gitCreatedTime',
      value: moment.unix(gitCreatedTime).tz('America/Los_Angeles').format(),
    })
    // generate slug
    createNodeField({
      name: `slug`,
      node,
      value: createFilePath({ node, getNode }),
    })
    // get inline images for use in HTMLContent
    createNodeField({
      node,
      name: 'inlineImages',
      value: extractInlineImages(node),
    })
  }
}
