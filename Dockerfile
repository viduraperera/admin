FROM node:15.13-alpine
WORKDIR /admin
ADD package*.json ./
RUN npm install
ADD . .
CMD ["npm", "start"]