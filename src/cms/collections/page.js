import seo from '../partials/seo'
import featuredImage from '../partials/featuredImage'

export default ({ label, file, templateKey, pageSlug, additionalFields }) => {
  const optionalFields = {
    longBiography_MD: {
      label: 'Full Biography',
      name: 'longBiography_MD',
      widget: 'markdown',
      required: true,
      hint: 'The long version of your professional biography.',
    },
    shortBiography: {
      label: 'Short Biography',
      name: 'shortBiography',
      widget: 'text',
      required: true,
      hint: 'The 1-2 sentence version of your biography.',
    },
    missionStatement: {
      label: 'Mission Statement',
      name: 'missionStatement',
      widget: 'text',
      required: true,
      hint: 'Your personalized mission statement, 1-2 sentences max.',
    },
    formText: {
      label: 'Contact Form Labels',
      name: 'formText',
      widget: 'object',
      required: true,
      hint:
        'The text you want to appear for each section of your contact form.',
      fields: [
        {
          label: 'Sender Name',
          name: 'name',
          widget: 'string',
          required: true,
        },
        {
          label: 'Sender Email Address',
          name: 'email',
          widget: 'string',
          required: true,
        },
        {
          label: 'Message Area',
          name: 'message',
          widget: 'string',
          required: true,
        },
        {
          label: 'Submit Button Text',
          name: 'submit',
          widget: 'string',
          required: true,
        },
      ],
    },
    learnMoreButton: {
      label: 'Learn More Button',
      name: 'learnMoreButton',
      widget: 'object',
      required: true,
      hint: 'The text and link for the button on the home page',
      fields: [
        {
          label: 'Button Text',
          name: 'label',
          widget: 'string',
          required: true,
        },
        {
          label: 'Button Link',
          name: 'link',
          widget: 'string',
          required: true,
        },
      ],
    },
    extraContent: {
      label: 'Extra Content',
      name: 'body',
      widget: 'markdown',
      required: false,
      hint:
        'Any additional content you want to place at the bottom of the page.',
    },
    showRecentPosts: {
      label: 'Show the 4 most recent blog posts at the bottom of the page?',
      name: 'showRecentPosts',
      widget: 'boolean',
      default: false,
    },
  }

  const others = !additionalFields
    ? []
    : additionalFields.map((name) => optionalFields[name])

  return {
    file,
    name: templateKey,
    label,
    identifier_field: 'header',
    fields: [
      {
        label: 'Template Key',
        name: 'templateKey',
        widget: 'hidden',
        default: templateKey,
      },
      {
        label: 'Page Slug',
        name: 'pageSlug',
        widget: 'hidden',
        default: pageSlug,
      },
      ...seo,
      {
        label: 'Schema Page Type',
        name: 'schemaType',
        widget: 'select',
        required: true,
        default: 'WebPage',
        hint:
          'The type of page this is, used by Google\'s structured data tool. If you\'re not sure, choose "WebPage".',
        options: ['WebPage', 'AboutPage', 'ContactPage'],
      },
      {
        label: 'Header',
        name: 'header',
        widget: 'string',
        required: true,
        hint: 'The large text shown at the top of the page.',
      },
      {
        label: 'Subheader',
        name: 'subheader',
        widget: 'string',
        required: false,
        hint: 'Optionally, text to go below the header.',
      },
      featuredImage,
      ...others,
    ],
  }
}
