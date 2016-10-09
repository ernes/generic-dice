# Develop source code of Generic-Dice

The instructions below are meant for contributors who want to develop this component further.

For simple installation and usage instruction, see the main README.md of this repository.

## Docker

The whole development is made from Docker.

The Docker image is based on Node and will contain the following dependencies: webpack@1.12.14 eslint@2.6.0 eslint-config-airbnb@6.2.0 eslint-plugin-react@4.2.3 babel-eslint@6.0.2 npm-check now

You don't need to install Node or these dependencies, they are included in the Docker image.

Within the Docker container, once it's built from the Docker image, you can run npm commands.

Install Docker, see instructions on wiki: http://wiki.ebabel.eu/index.php/Docker#Install_Docker_on_Ubuntu_16.04

Note: don't forget the "." after `sudo docker build`

```
cd ./docker/
sudo docker build .
```

To get command line access to the docker container:

```
sudo docker run -t -i node:6.2.2 /bin/bash
```

To kill a running Docker container, find its container ID:

```
sudo docker ps
```

then you can kill it with:

```
sudo docker kill [container id]
```

To see all docker images:

```
sudo docker images
```

The first time an image is built, it may take a while. If an image is no longer needed, it can be deleted:

```
sudo docker rmi [image id]
```

Note: if you intend to re-use an image, it's fine to let it be because next time a container starts from that image, it will be much faster.

Force delete an image:

```
sudo docker rmi -f [image id]
```

### Build once the generic-dice module and the examples

```
npm run build
```

### Build the main module and the examples continuously while developing

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

See the examples to view sample usage of this React.js component.

### Initial setup to publish on npm

```
npm login
```

### Publish to npm [optional]

There is already an official npm package, so you shouldn't need to publish it, but if you need to, this is how it's done:

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

### npm packages hygiene [optional]

Regularly check the dependencies are healthy ones, at least before a new release is made.

```
npm-check
```

## Publish examples to a production server with now [optional]

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

## Special case: install this npm module from local source code instead of npmjs repos [optional]

If you checked out the source code to a directory in ../generic-dice/, then you would run from the directory where you want to install this npm module:

```
npm install ../generic-dice/
```

