// import icon from 'react-icons/lib/md/local-movies'

export default {
  name: 'experience',
  title: 'experience',
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
      name: 'overview',
      title: 'Overview',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'codepen_embed',
      title: 'Codepen Embed code',
      type: 'text',
    },
    {
      name: 'period',
      title: 'Period',
      type: 'date',
      options: {
        dateFormat: 'MM-YYYY',
      },
    },
    {
      name: 'externalId',
      title: 'External ID',
      type: 'number',
    },
    {
      title: 'Experience type',
      name: 'experienceType',
      type: 'string',
      options: {
        list: [
          { title: 'Professional', value: 'professional', default: true },
          { title: 'Hobby', value: 'hobby' },
          { title: 'Codepen', value: 'codepen' },
        ], // <-- predefined values
        layout: 'radio', // <-- defaults to 'dropdown'
      },
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
      name: 'poster',
      title: 'Poster Image',
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
    {
      title: 'Repository link',
      name: 'repoUrl',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'period',
      media: 'poster',
      // castName0: 'castMembers.0.person.name',
      // castName1: 'castMembers.1.person.name',
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('-')[0];
      // const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ');

      return {
        title: `${selection.title} ${year ? `(${year})` : ''}`,
        date: selection.date,
        // subtitle: cast,
        media: selection.media,
      };
    },
  },
};
