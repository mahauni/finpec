FROM node:24-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

# This port need to be changed if you are only running this image
# to the port in the .env
EXPOSE 8000
CMD ["npm", "start"]
