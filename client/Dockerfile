FROM node:14-buster-slim as build
RUN apt-get update \
    && apt-get install -y bash gettext-base python3 netcat-openbsd \
    && rm -rf /var/lib/apt/lists/*
RUN npm install -g typescript@4.0
WORKDIR /app

# Copy tsconfig
COPY ./tsconfig*.json ./
# Preinstall dependencies
RUN mkdir -p ./src/app/model/
COPY ./.npmrc ./
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install
# Copy app sources
COPY ./src ./src

# Serve definitions files and build
RUN npm run build
RUN npm prune --production && rm -rf ./src

FROM node:14-alpine as runtime-dependencies
WORKDIR /app
RUN npm install -g pm2
CMD [ "pm2-runtime", "node", "--", "main.js" ]

FROM runtime-dependencies as runtime
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist .
COPY --from=build /app/dist/tsconfig.build.tsbuildinfo .
COPY --from=build /app/package.json .
USER node:node