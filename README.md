#  bank-account-simulation

Bank account account simulation


## Login

In next weeks project will register yourself as a new user. Until then you need to use passes below to get access to the app

### Login and password
* L: admin123@admin.com
* P: admin123

## Incoming functionalities divided on pages:

### Calendar
* Months, weeks and days mock-up
* Months could be switched
* Introduced data picker
* Calendar shows costs in shape of dot.

### Register
* Register form - Also your data will be displayed in details about user placed in header
* Register page - validaton and displaying errors


### Transfer
* Modal with feedback after sending - transfer
* Form will be divided on at least 4 components for better user experience. Steps should appear one after another.
    1. Destination of transfer (person, tax, health care, charity, Facebook etc.) and list below with the most frequent recipients
    2. Name of the recipent, account number
    3. Title of the transfer, amount of money, data of sending money, type of transfer (Standard, Elixir, etc.)
    4. Summary -> approve  or decline

* After sending transfer, cost is added to history

### History
* Optymization of the search-bar - added debounce function


## Incoming pages:
* 404
* Forgotten password
* Page for each cost


## Working functionalities:
* Nav mobile
* Login validation
* Loading spinner between login and desktop view. It will be visible until fetch from database will be completed.
* Login in/out with firebase
* Fetching banking dummy data
* 2 Charts with visualization of data
* History component: searching, filtering list
* Routing
* Redux store - reducers and actions are tested with Jest
* Login Page - validation

## Features
* [React (v16.3)](https://reactjs.org) - a JavaScript library for building user interfaces
* [Babel](https://babeljs.io) - a JavaScript compiler
* [Webpack (v4.5)](https://webpack.js.org) with plugins - a module bundler
* [PostCSS](https://github.com/postcss/postcss), [Sass](https://sass-lang.com)
* [Redux](https://github.com/reduxjs/react-redux)
* [Router](https://github.com/ReactTraining/react-router)
* [React Hot Loader (v4)](https://github.com/gaearon/react-hot-loader) Tweak React components in real time
* [Firebase]


## Development

First install npm to open files on your computer

```
npm install
```

Type in your command line

```e.g bash
npm start
```

It will open new window in your browser:

```bash
http://localhost:8080
```

## Production

Production build of the website:

```bash
npm build
```

## License

MIT

## Author

Robert Kosak https://github.com/rkosak237