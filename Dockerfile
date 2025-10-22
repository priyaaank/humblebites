# Build stage
FROM ruby:3.1-alpine AS builder

# Install build dependencies
RUN apk add --no-cache build-base

# Set working directory
WORKDIR /app

# Copy Gemfile
COPY Gemfile Gemfile.lock* ./

# Install Jekyll and dependencies
RUN bundle install

# Copy website source
COPY . .

# Build Jekyll site
RUN bundle exec jekyll build

# Production stage
FROM nginx:alpine

# Copy built site from builder
COPY --from=builder /app/_site /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
