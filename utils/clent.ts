import sanityClient from "@sanity/client";

export const client = sanityClient({
    projectId: 'dnfp81ii',
    dataset: 'production',
    apiVersion: '2022-07-14',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});