FROM node:14
# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# If you are building your code for production
#RUN npm ci --only=production

COPY . .

RUN npm run build

FROM nginx:latest
WORKDIR /usr/src/nginx
COPY --from=0 /usr/src/app/dist/portfolio-site /usr/share/nginx/html