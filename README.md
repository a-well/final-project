# Final Project - PokeYAY: Pokemon Trade Finder

Amanda W. Final Project Technigo Bootcamp class of fall 2022

## About

PokeYay is a web app for people playing Pokemon Go. PokeYay lets the user search for other players that are willing to trade Pokémon with one another.

The user can both search for what Pokémon other players are looking to trade, or are willing to part with. And can list their own Pokémon.

## Intro

This project uses a monorepo. 
Backend is located in `/backend`, deployed to Google Cloud Run
Frntend is located in `/frontend`, deployed to Netlify

## Try it out

API: https://final-project-l47fprrrfa-lz.a.run.app/

Frontend: https://aw-pokeyay.netlify.app/


## APIs

This project uses [PoGo API](https://pogoapi.net/) for Pokémon data and [PokeAPI](https://github.com/PokeAPI/pokeapi) for image content.

### Dependencies

Main technologies used:
React, React Router, Redux [Ant Design](https://ant.design/components/), [swr](https://swr.vercel.app/)

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
