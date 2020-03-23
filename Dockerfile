FROM node:lts-alpine

# Create destination directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Updates and installs dependency on node > 12
# RUN apk update && apk upgrade
# RUN apk add --no-cache --virtual .gyp python make g++

# Copies the package to install it
COPY package.json .
COPY package-locak.json .
RUN npm i

# Build necessary, even if no static files are needed,
# since it builds the server as well
COPY . .
RUN npm run build

# Exposes 3000 on container
EXPOSE 3000

# Sets app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0

# Starts the app
CMD [ "npm", "start" ]
