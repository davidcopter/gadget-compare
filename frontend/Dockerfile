# Dockerfile
# 1st Stage
# Specify a base image
FROM node:14.16-slim AS builder
# Specify a working directory
WORKDIR /app
# Copy the dependencies file
COPY package.json package-lock.json ./
# Install dependencies
RUN npm install
# Copy remaining files
COPY . .
# Build the project for production
RUN npm run build 


# 2nd Stage
FROM nginx:alpine
# Copy production build files from builder phase to nginx
COPY --from=builder /app/build /usr/share/nginx/html
# Remove default nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf
# Replace with custom one
COPY nginx/nginx.conf /etc/nginx/conf.d
# Expose port 80 to the outer world
EXPOSE 80
# start nginx 
CMD ["nginx", "-g", "daemon off;"]
