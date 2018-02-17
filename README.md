[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/uzairpm/angular-typeahead)

This project demonstrates an angular typeahead 
component used to lookup results based on name or policy number.

### Features

* Responsive web design using Bootstrap CSS.
* Icons using Font Awesome font icons.
* Customized Typeahead component from angular-ui toolkit.

### Install Dependencies

This project is based on the angular seed project. It makes use of `bower` to 
manage client side dependencies. Run the below command to install all dependencies:

```
npm install
```
Behind the scenes this will also call `bower install`.

To demonstrate usage of gulp a gulpfile task for SCSS to CSS conversion is added.

Use the command
```
gulp sass
```
to run this task.

### Run the Application

To run the application use the following command:

```
npm start
```
Now browse to the app at [`localhost:8000/index.html`].

### Future updates

* Webpack integration (takes care of minification of JS/CSS/HTML)
* Replace bower with npm scripts
* Unit tests
* Integration with Travis CI and code coverage
* Firebase/Socket.io integration for real time data
