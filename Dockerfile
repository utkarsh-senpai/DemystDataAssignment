# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the React application
RUN npm run build

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to start the application
CMD ["npm", "start"]
