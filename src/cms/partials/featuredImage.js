export default {
  label: 'Featured Image',
  name: 'featuredImage',
  widget: 'object',
  hint:
    'The primary image of this page, which is also used if people share the page on social media. If you do not choose an image, the default image set in the Site Data page will be used.',
  required: false,
  fields: [
    { label: 'Image File', name: 'src', widget: 'image', required: false },
    {
      label: 'Alt Text',
      name: 'alt',
      widget: 'string',
      hint:
        "Describe what is shown in the image. This description is very important for SEO, don't leave it blank.",
      required: false,
    },
    {
      label: 'Caption',
      name: 'caption',
      wiget: 'string',
      hint: 'Optionally, provide a caption for this image.',
      required: false,
    },
  ],
}
