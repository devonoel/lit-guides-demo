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
