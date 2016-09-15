FROM kyma/docker-nginx
ADD ./examples/dist/ /var/www
CMD 'nginx'