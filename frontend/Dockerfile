FROM node:14.12.0 as builder
WORKDIR /var/jenkins/workspace/front/frontend
COPY package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build
FROM nginx


COPY --from=builder /var/jenkins/workspace/front/frontend/build /usr/share/nginx/html

EXPOSE 3000


CMD ["nginx", "-g","daemon off;"]
