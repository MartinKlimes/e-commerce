import { createClient } from "contentful";
import contentful from 'contentful'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const createClientFunc = process.env.NODE_ENV === 'development' ? createClient : contentful.createClient

  const client = createClientFunc({
    space: config.CTF_SPACE_ID,
    accessToken: config.CTF_CDA_ACCESS_TOKEN,
  });

  return {
    provide: {
      contentfulClient: client,
    },
  };
});