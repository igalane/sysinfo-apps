# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the app files to the container
COPY . .

# Expose the port your app will run on
EXPOSE 80

# Start the app when the container is launched
CMD ["node", "app.js"]
