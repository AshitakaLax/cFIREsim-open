FROM nginx

#RUN rm /etc/nginx/conf.d/default.conf
#RUN rm /etc/nginx/conf.d/examplessl.conf
#COPY conf /etc/nginx

COPY ./ /usr/share/nginx/html
