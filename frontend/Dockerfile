FROM node:14.12.0 as builder
WORKDIR /var/jenkins/workspace/front/frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx

COPY --from=builder /var/jenkins/workspace/front/frontend/build /usr/share/nginx/html
#COPY --from=build-stage /var/jenkins_home/workspace/deploytest/testproject_react/deploy_conf/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g","daemon off;"]
