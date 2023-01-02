const BASE_URL = process.env.BASE_URL || "http://localhost:8080" //  "https://final-project-l47fprrrfa-lz.a.run.app"

console.log('Using BASE_URL ', BASE_URL)
export const API_URL = (slug) => `${BASE_URL}/${slug}`