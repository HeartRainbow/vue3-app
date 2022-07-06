FROM nginx
LABEL name='vue3-app'
LABEL version='latest'
COPY ./dist /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf