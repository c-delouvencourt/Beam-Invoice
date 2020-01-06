<a href="https://lab.nocturne.app"><img src="https://i.imgur.com/oDFGauE.png" align="left" height="66" width="174"/></a>      


**A simple Freelance platform to invoice easily.**


<br>


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

___

### Clone

```shell
git clone https://github.com/markmur/sails-react-webpack.git
cd sails-react-webpack
npm install
```

___

### Run (development)

There are multiple ways to run the project in development as sails and webpack-dev-server run independently. The easiest way is to use [Foreman](https://github.com/theforeman/foreman) (`npm install -g foreman`) and run:

```shell
nf start
```

This will start all processes listed in the `Procfile`.

The alternative is to manually run each process in separate terminal windows.

To view your app, go to `http://localhost:3000` in your browser.
___

### Run (Production)

Wepack builds the bundle files on `postinstall` and sails is lifted the same way it's always lifted in production:

```shell
sails lift --prod
```

You can also manually run webpack with `npm run dist`.

___

### Generate Components

Use [react-component-gen](https://github.com/markmur/react-component-gen) to generate new components on the fly.
