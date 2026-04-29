# Usamos Nginx para servir el contenido estático
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY /dist/portfolio-angular-21/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]