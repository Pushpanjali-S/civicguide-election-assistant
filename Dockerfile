FROM nginx:alpine

# Copy the contents of the current directory to the nginx html directory
COPY . /usr/share/nginx/html/

# Update the default nginx configuration to listen on port 8080
RUN sed -i 's/listen  *80;/listen 8080;/g' /etc/nginx/conf.d/default.conf \
    && sed -i 's/listen  *\[::\]:80;/listen [::]:8080;/g' /etc/nginx/conf.d/default.conf

# Expose port 8080 (Cloud Run default)
EXPOSE 8080

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
