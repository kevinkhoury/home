export default [
  {
    label: 'Page Title',
    name: 'pageTitle',
    widget: 'string',
    hint:
      'The title for this page, as shown in the tab at the top of your browser. For blog articles, this is also the header text shown at the top of the article.',
    required: true,
  },
  {
    label: 'Meta Description',
    name: 'metaDescription',
    widget: 'text',
    hint: 'Required. Must be between 50-155 characters.',
    pattern: ['.{50,155}', 'Must be between 50-155 characters'],
    required: true,
  },
  {
    label: 'Published',
    name: 'published',
    widget: 'boolean',
    default: true,
    hint: 'Whether or not you want this page to appear on your site.',
  },
]
