FROM node:alpine

# create destination directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++

# copy the app, note .dockerignore
COPY . /usr/src/app/
RUN npm install

# Not needed anymore
RUN apk del .gyp

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run generate

# expose 3000 on container
EXPOSE 3000

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0

# start the app
CMD [ "npm", "start" ]
