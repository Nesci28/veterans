FROM node:14-buster-slim

RUN npm install pm2 -g

RUN mkdir -p /usr/local/src/project && mkdir /usr/local/src/scripts

COPY ./.npmrc /usr/local/src/project
COPY ./package*.json /usr/local/src/project/

WORKDIR /usr/local/src/project

RUN apt-get autoremove -y \
  && apt-get clean -y \
  && rm -rf /var/lib/apt/lists/*

RUN npm install --prefer-offline --no-audit

COPY ./ .

RUN npm run build

RUN mkdir -p /var/html/www && mv dist/veterans/* /var/html/www/ && rm -rf /usr/local/src/project/

COPY ./docker/production/scripts/ /usr/local/src/scripts/
WORKDIR /usr/local/src/scripts
RUN npm install --prefer-offline --no-audit
WORKDIR /usr/local/src/project
USER node
CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]