# Specify  a base image
FROM node:alpine
WORKDIR /usr/app
# Insatll the dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./
# Default command
CMD [ "npm","start" ]