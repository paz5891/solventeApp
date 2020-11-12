FROM node:latest AS solventesappfrontend
WORKDIR /app


COPY . /app/

RUN npm install
RUN npm run postinstall
#COPY . /app/

FROM  nginx:alpine
COPY --from=solventesappfrontend /app/dist/SolventesSA /usr/share/nginx/html
