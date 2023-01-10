// eslint-disable-file import/prefer-default-export

const BASE_URL = process.env.BASE_URL || 'https://final-project-l47fprrrfa-lz.a.run.app'

console.log('Using BASE_URL ', BASE_URL)
export const API_URL = (slug) => `${BASE_URL}/${slug}`
