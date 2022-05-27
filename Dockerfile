FROM nginx
LABEL name='vue3-app'
LABEL version='1.0.0'
COPY ./dist /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf