FROM kyma/docker-nginx
COPY index.html /var/www/index.html
COPY css /var/www/css
CMD 'nginx'
