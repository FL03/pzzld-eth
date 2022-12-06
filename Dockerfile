FROM node:latest as builder-base

ADD . ./app
WORKDIR /app

COPY . .
RUN npm install &&\
    npm run build

FROM builder-base as runner

ENV MODE="container"

EXPOSE 3000
CMD ["npm", "run", "start"]