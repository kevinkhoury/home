import { siteMetadata } from '../../../gatsby-config'

const socialLink = (label) => ({
  label,
  name: label.toLowerCase(),
  widget: 'object',
  fields: [
    {
      label: `${label} URL`,
      name: 'url',
      widget: 'string',
      hint: `The URL of your ${label} page, if you have one. Must start with "https://".`,
      pattern: ['https://.+', 'Must start with "https://"."'],
      required: false,
    },
    {
      label: 'Show in social menu',
      name: 'show',
      widget: 'boolean',
      default: true,
    },
  ],
})

const siteDataFields = [
  {
    label: 'Template Key',
    name: 'templateKey',
    widget: 'hidden',
    default: 'site-data',
  },
  {
    label: 'Published',
    name: 'published',
    widget: 'hidden',
    default: false,
  },
  {
    label: 'Name',
    name: 'name',
    widget: 'string',
    required: true,
    hint: 'Your full name, e.g. John Smith',
  },
  {
    label: 'Job Title',
    name: 'jobTitle',
    widget: 'string',
    required: true,
    hint:
      "Your job title as you'd like it shown next to your name, e.g. CEO of ABC Widget Corp.",
  },
  {
    label: 'Site Name',
    name: 'siteName',
    widget: 'string',
    required: true,
    hint:
      'The name of your website, e.g. "JohnSmith.com" or "John Smith\'s Blog"',
  },
  {
    label: 'Site URL',
    name: 'siteUrl',
    widget: 'string',
    required: true,
    hint: 'The URL of your website. Must start with "https://".',
    pattern: ['https://.+', 'Must start with "https://"."'],
  },
  {
    label: 'Google Analytics ID',
    name: 'siteAnalytics',
    widget: 'string',
    required: false,
    hint: 'If you use Google Analytics, insert your ID, e.g. UA-123456789-1',
  },
  {
    label: 'Favicon',
    name: 'favicon',
    widget: 'image',
    hint:
      'A square favicon to show in the corner of the browser tab on your site. You can use a free online favicon generator to make one. Upload the verison that is 32x32 in PNG format.',
  },
  {
    label: 'Default Fallback Image',
    name: 'fallbackImage',
    widget: 'image',
    required: true,
    hint:
      "The default image that will be used for pages that don't have their own featured image. Your headshot is usually a good choice for this.",
  },
  {
    label: 'Social Media Links',
    name: 'socialLinks',
    widget: 'object',
    required: false,
    fields: [
      socialLink('Twitter'),
      socialLink('Facebook'),
      socialLink('LinkedIn'),
      socialLink('Pinterest'),
      socialLink('Instagram'),
    ],
  },
  {
    label: 'Theme Customization Options',
    name: 'themeOptions',
    widget: 'object',
    fields: [
      {
        label: 'Color Scheme',
        name: 'colorScheme',
        widget: 'select',
        default: ['londn'],
        hint: 'Select the color scheme for your website',
        options: siteMetadata.colorOptions.map(({ label, value }) => ({
          label,
          value,
        })),
      },
      {
        label: 'Font Scheme',
        name: 'fontScheme',
        widget: 'select',
        default: ['muli'],
        hint: 'Select the font scheme for your website',
        options: siteMetadata.fontOptions.map(({ label, value }) => ({
          label,
          value,
        })),
      },
      {
        label: 'Show Theme Switcher?',
        name: 'showThemeSwitcher',
        widget: 'boolean',
        default: false,
        hint:
          'Turn on the theme switcher so you can preview themes on your site. NOTE: This should only be turned on temporarily so you can preview different styles. Turn this off again once you have made your selection.',
      },
    ],
  },
]

const menuDataFields = [
  {
    label: 'Template Key',
    name: 'templateKey',
    widget: 'hidden',
    default: 'menu-data',
  },
  {
    label: 'Published',
    name: 'published',
    widget: 'hidden',
    default: false,
  },
  {
    label: 'Menu Items',
    name: 'menuItems',
    widget: 'list',
    fields: [
      {
        label: 'Label',
        name: 'label',
        widget: 'string',
        required: true,
        hint:
          'The text you want to appear in the menu, e.g. "Home" or "About".',
      },
      {
        label: 'Page URL',
        name: 'slug',
        widget: 'relation',
        collection: 'pages',
        searchFields: ['pageSlug'],
        valueField: 'pageSlug',
        hint: 'The URL of the page you want this menu item to go to.',
        // displayFields: ['slug', 'label', 'name'],
      },
    ],
  },
]

export default {
  name: 'meta',
  label: 'Site Configuration',
  files: [
    {
      file: 'src/pages/sitedata.md',
      name: 'siteData',
      label: 'Site Data',
      identifier_field: 'templateKey',
      fields: siteDataFields,
    },
    {
      file: 'src/pages/menudata.md',
      name: 'menuData',
      label: 'Navigation Menu',
      identifier_field: 'templateKey',
      fields: menuDataFields,
    },
  ],
}
