FROM node:14-buster-slim

RUN npm install pm2 -g

RUN mkdir -p /home/node/app && mkdir /home/node/app/scripts

WORKDIR /home/node/app

COPY ./.npmrc .

COPY ./package*.json ./

RUN apt-get autoremove -y \
  && apt-get clean -y \
  && rm -rf /var/lib/apt/lists/*

RUN npm install --prefer-offline --no-audit

COPY ./ .

RUN npm run build

COPY ./docker/production/scripts/ ./scripts/

WORKDIR /home/node/app/scripts

RUN npm install --prefer-offline --no-audit

WORKDIR /home/node/app

USER node

CMD [ "pm2-runtime", "start", "./scripts/ecosystem.config.js" ]