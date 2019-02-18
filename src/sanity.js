// import sanityClient from '@sanity/client';
import SanityClient from '@sanity/client';

export default SanityClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: '92753wfa',
  dataset: 'production',
  useCdn: true,
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
});
