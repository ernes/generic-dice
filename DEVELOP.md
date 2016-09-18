# Develop source code of Generic-Dice

The instructions below are meant for contributors who want to develop this component further.

For simple installation and usage instruction, see the main README.md of this repository.

## Install dependencies to develop source code

Tools required on your machine, if you haven't already installed them:

```
npm install -g webpack@1.12.14 eslint@2.6.0 eslint-config-airbnb@6.2.0 eslint-plugin-react@4.2.3 babel-eslint@6.0.2
```

Note: this will be better handled once the development of the source code is encapsulated in a Docker image or in Vagrant.

## Install project dependencies

The main generic dice component and the examples will be built automatically after the dependencies are installed.

```
npm install
```

Note: to check how up to date the dependencies are, run `npm-check` if it's already installed globally via `npm install npm-check -g`.

### Build once the generic-dice module and the examples

```
npm run build
```

### Build the main module and the examples continuously while developing

```
npm run watch
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

See the examples to view sample usage of this React.js component.

### Initial setup to publish on npm

```
npm login
```

### Publish to npm

- Locally merge the latest code to publish into the master branch.
- Check the package.json version is correct.
- Edit `config.json` so that NODE_ENV is set to production, not development.
- Run `npm run build-all` to update all dist packages (main module and examples).
- Update the `CHANGELOG.md` file.
- Make sure a `git tag` has been created for the version to publish.
- Publish the code to master `git push origin master`
- Publish the tag `git push --tags`

```
npm publish
```

### npm packages hygiene

Regularly check the dependencies are healthy ones, at least before a new release is made.

If it's not already installed on your machine:

```
npm install -g npm-check
```

To use, run `npm-check`


## Build examples in local Docker container [optional]

Install Docker from https://docker.com

```
docker build -t examples ./examples
docker run -p 80:80 -d examples
```

To get command line access to the docker container:

```
docker run -t -i examples /bin/bash
```

To see files deployed to the docker container, run once inside the container:

```
ls -l /var/www/
```

The files can be also run in a browser by going to:

http://localhost/

To kill a running Docker container, find its container ID:

```
docker ps
```

then you can kill it with:

```
docker kill [container id]
```

To see all docker images:

```
docker images
```

The first time an image is built, it may take a while. If an image is no longer needed, it can be deleted:

```
docker rmi [image id]
```

Note: if you intend to re-use an image, it's fine to let it be because next time a container starts from that image, it will be much faster.

Force delete an image:

```
docker rmi -f [image id]
```


## Publish examples to a production server with now [optional]

If you haven't already installed `now`, do so now:

```
npm install -g now
```

To deploy the examples, run:

```
now --docker
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

## Monitoring with opbeat.com [optional]

Setup

- Create an account on [Opbeat](https://opbeat.com)
- Create an account on [Heroku](https://heroku.com)
- Create an app on Heroku, for example, "generic-dice"
- Install the [Heroku toolbelt](https://devcenter.heroku.com/articles/heroku-command-line)
- Login to your Heroku toolbelt with `heroku login`

```
git remote add heroku git@heroku.com:generic-dice.git
heroku addons:create deployhooks:http --url=[your own url obtained from opbeat.com] --app generic-dice
git push heroku master
```

## Special case: install this npm module from local source code instead of npmjs repos [optional]

If you checked out the source code to a directory in ../generic-dice/, then you would run from the directory where you want to install this npm module:

```
npm install ../generic-dice/
```

