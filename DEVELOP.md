# Develop source code of Generic-Dice

The instructions below are meant for contributors who want to develop this component further.

For simple installation and usage instruction, see the main README.md of this repository.

## Install this npm module from local source code instead of npmjs repos

If you checked out the source code to a directory in ../generic-dice/, then you would run from the directory where you want to install this npm module:

```
npm install ../generic-dice/
```

## Install dependencies to develop source code

Tools required on your machine, if you haven't already installed them:

```
npm install -g webpack@1.12.14 eslint eslint-config-airbnb eslint-plugin-react babel-eslint
```

## Install project dependencies

The main generic dice component and the demo will be built automatically after the dependencies are installed.

```
npm install
```

Note: to check how up to date the dependencies are, run `npm-check` if it's already installed globally via `npm install npm-check -g`.

### Build dependencies once

```
npm run build
```

### Build continuously while developing

```
npm run dev
```

### Lint the project once

```
npm run lint
```

### Unit test the component

```
npm test
```

### Run the project locally

See the demo to view sample usage of this React.js component.

### Initial setup to publish on npm

```
npm login
```

### Publish to npm

```
npm publish
```

## Visual Studio Code setup [optional]

In your settings.json (User Settings), the following can be set to lint this project inline:

```
{
  "jshint.enable": false,
  "eslint.enable": true,
	"editor.tabSize": 2
}
```

You will also need to install the following plugins:

```
ext install eslint
```
