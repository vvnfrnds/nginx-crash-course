#Dockerfile for node Project
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000    //Exposed Port
CMD ["node", "server.js"]
