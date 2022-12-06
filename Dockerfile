FROM node:latest as builder-base

ADD . ./app
WORKDIR /app

COPY . .
RUN npm install &&\
    npm run build

FROM builder-base as development

EXPOSE 5173/tcp
CMD ["npm", "run", "dev", "--", "--host"]

FROM builder-base as production

EXPOSE 3000
CMD ["npm", "run", "start"]