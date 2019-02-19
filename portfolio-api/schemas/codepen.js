// import icon from 'react-icons/lib/md/local-movies'

export default {
  name: 'codepen',
  title: 'Codepen',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'Codepen',
      title: 'codepen_embed',
      type: 'text',
    },
    {
      name: 'externalId',
      title: 'External ID',
      type: 'number',
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'screenshot',
      title: 'Screenshot pen',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Demo link',
      name: 'demoUrl',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'screenshot',
      // castName0: 'castMembers.0.person.name',
      // castName1: 'castMembers.1.person.name',
    },
    prepare(selection) {
      // const year = selection.date && selection.date.split('-')[0];
      // const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ');

      return {
        title: `${selection.title}`,
        // subtitle: cast,
        media: selection.media,
      };
    },
  },
};
