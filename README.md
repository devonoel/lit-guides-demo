# Lit Guides Demo

## Usage

First, make sure you have Ruby, Node, and Yarn installed.

Next, add `EXECJS_RUNTIME=Node` to the environment.

Do installs and DB setup:

```bash
$ bundle install
$ yarn install
$ rails db:create && rails db:migrate && rails db:seed
```

Finally, run `./bin/dev` and [go to localhost:3000 in your browser.](http://localhost:3000)

## Design

Building off of our previous discussion, you seemed interested in implementing this sorting function mostly on the frontend, so I kept to that here as well. It's implemented entirely in React with a sort compare function similar to what we discussed.

I've tried to limit calls to the backend, and to keep most of the rendering on the React client side. I use React Router on the frontend to swap component views when clicking on Guides to get to the detailed view. Data is mostly loaded on initial page load and passed between components as props, with the occassional API call if state ever becomes cleared due to hard refresh.

I've also included some automated tests, which you can run with `bundle exec rspec`.