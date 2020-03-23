FROM node:lts-alpine

# Create destination directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copies the app, note .dockerignore
COPY . /usr/src/app/
RUN npm i --production

# Build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run build

# Exposes 3000 on container
EXPOSE 3000

# Sets app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0

# Starts the app
CMD [ "npm", "start" ]
