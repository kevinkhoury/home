import seo from '../partials/seo'
import featuredImage from '../partials/featuredImage'

export default {
  name: 'blog',
  label: 'Blog',
  folder: 'src/pages/blog',
  create: true,
  slug: '{{slug}}',
  identifier_field: 'pageTitle',
  editor: { preview: true },
  filter: { field: 'templateKey', value: 'blog-post' },
  fields: [
    {
      label: 'Template Key',
      name: 'templateKey',
      widget: 'hidden',
      default: 'blog-post',
    },
    {
      label: 'Schema Page Type',
      name: 'schemaType',
      widget: 'hidden',
      default: 'BlogPosting',
    },
    ...seo,
    {
      label: 'Published Date',
      name: 'date',
      widget: 'datetime',
      hint:
        "Optionally, the date you want to appear on your blog post. It doesn't have to be the actual publication date. If you leave this blank, it will be automatically generated",
    },
    {
      label: 'Teaser Text',
      name: 'teaser',
      widget: 'text',
      required: false,
      hint:
        'If your theme shows a short preview of each article on the blog page, you can optionally customize the text here. Write 2-3 sentences max.',
    },
    featuredImage,
    {
      label: 'Body',
      name: 'body',
      widget: 'markdown',
    },
  ],
}
