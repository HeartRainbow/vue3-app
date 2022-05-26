FROM nginx
LABEL name='vue2-admin'
LABEL version='1.0.0'
COPY ./dist /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf
EXPOSE 30100