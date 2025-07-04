FROM ruby:3.1-alpine

# Install dependencies
RUN apk add --no-cache \
    build-base \
    libffi-dev \
    nodejs \
    npm \
    git

# Set working directory
WORKDIR /app

# Copy Gemfile and install gems
COPY Gemfile* ./
RUN bundle install

# Copy the rest of the application
COPY . .

# Expose port 4000
EXPOSE 4000

# Default command
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "4000", "--livereload", "--force_polling"]