import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: "bgvb5332", // Yeh aapki asli ID hai
  dataset: 'production',
  apiVersion: '2026-05-24', // Aaj ki date
  useCdn: false,
})