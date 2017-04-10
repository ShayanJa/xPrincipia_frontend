FROM node:boron
MAINTAINER Shayan

# Prepare app directory
RUN mkdir -p /usr/src/app
ADD . /usr/src/app

# Install dependencies
WORKDIR /usr/src/app

# Run when you don't have node_modules '
# RUN npm install

# Build the app
RUN npm build

# Expose the app port
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]