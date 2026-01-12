FROM node:20-alpine

WORKDIR /app

# Set npm configuration for better reliability
RUN npm config set registry https://registry.npmjs.org/ && \
    npm config set fetch-retry-mintimeout 20000 && \
    npm config set fetch-retry-maxtimeout 120000 && \
    npm config set fetch-retries 3

# Copy package files
COPY package*.json ./

# Install ALL dependencies for development
RUN npm ci --silent --no-audit --prefer-offline || \
    npm install --silent --no-audit --prefer-offline

# Copy the rest of the application
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the application in development mode with hot reloading
CMD ["npm", "run", "dev", "--", "--hostname", "0.0.0.0"] 