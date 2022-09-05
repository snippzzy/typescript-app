FROM node:16.15.0 as builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY . .


RUN yarn install --production[=true]
RUN yarn run build

# This is the stage two, where the app runs
FROM node:16.15.0
COPY --from=builder /usr/src/app /app
WORKDIR /app 
EXPOSE 3000
CMD ["node", "dist/index.js"]
