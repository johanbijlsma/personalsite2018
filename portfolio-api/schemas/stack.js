// import icon from 'react-icons/lib/md/local-movies'

export default {
  name: 'stack',
  title: 'Tech Stack',
  type: 'document',
  fields: [
    {
      name: 'techName',
      title: 'Tech Name',
      type: 'string',
    },
    {
      name: 'techLogo',
      title: 'Tech Logo',
      type: 'image',
      options: {
        hotspot: false,
      },
    },
    {
      title: 'Stack type',
      name: 'stackType',
      type: 'string',
      options: {
        list: [
          { title: 'The Basics', value: 'basic' },
          { title: 'JavaScript Frameworks & Libraries', value: 'javascript' },
          { title: 'Static site Generators', value: 'statitSiteGenerators' },
          { title: 'Taskrunners & bundlers', value: 'taskrunnersBundlers' },
          { title: 'Online tools', value: 'onlineTools' },
          { title: 'Design tools', value: 'designTools' },
        ], // <-- predefined values
        layout: 'radio', // <-- defaults to 'dropdown'
      },
    },
  ],
  preview: {
    select: {
      title: 'techName',
      media: 'techLogo',
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
