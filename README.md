# Final Project - Pokemon Trade Finder

Amanda W. Final Project Technigo Bootcamp class of fall 2022

## Intro

This project uses a monorepo. 
Backend is located in `/backend`, deployed to Google Cloud Run
Frntend is located in `/frontend`, deployed to Netlify

This project is part of the Technigo Bootcamp 2022

## Try it out

API: https://final-project-l47fprrrfa-lz.a.run.app/

Frontend: https://aw-pokeyay.netlify.app/

## API

### Dependencies

node, mongodb

### Running locally

```sh
cd backend
npm i
npm run dev
```

### Update pokemon database

To download fresh data from pokemon sources: `npm run download-pokemons`

To generate a new `pokemons.json`, run `npn run generate-pokemons`

### Deploy

Push to git, branch main. This will be automatically picked up and deployed by Google Cloud Run
Project link: https://console.cloud.google.com/run/detail/europe-north1/final-project/revisions?project=final-project-371519

## Frontend

Coming later