# build environment
FROM node:current-alpine3.12 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install -g @angular/cli
RUN npm install -g @ionic/cli

COPY package.json ./
COPY package-lock.json ./
COPY . ./

RUN npm install
RUN ionic build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/www /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]