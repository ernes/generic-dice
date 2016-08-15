# Develop source code of Generic-Dice

## Install this npm module from local source code instead of npmjs repos

If you checked out the source code to a directory in ../generic-dice/, then you would run from the directory where you want to install this npm module:

```
npm install ../generic-dice/
```

## Install dependencies to develop source code

Tools required on your machine, if you haven't already installed them:

```
npm install -g webpack eslint eslint-config-airbnb eslint-plugin-react babel-eslint
```

## Install project dependencies

```
npm install
```

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

### Run the project locally

```
npm start
```

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
