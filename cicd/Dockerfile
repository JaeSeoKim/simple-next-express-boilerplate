FROM node:14.4.0
MAINTAINER Jaeseo Kim devjaeseo@gmail.com

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm install --production
RUN npm install pm2 -g

# Copying source files
COPY . /usr/src/app

# Building app
RUN npm run build

# Running the app
COPY cicd/startup.sh /usr/src/app/
RUN chmod u+x cicd/startup.sh
CMD ["/bin/sh","cicd/startup.sh"]