# EC2 톰캣 접속
### pem키 ppk 파일로 변환하기

- PuTTYgen 프로그램 실행
- Load - 확장자 All로 변경 - 발급받은 pem키 선택
- Save private key 로 ppk 파일 저장

### Putty로 EC2 에 접속하기

- HostName : [ubuntu@j7c106.p.ssafy.io](mailto:ubuntu@j7c106.p.ssafy.io) 입력
- 좌측 리스트에서 SSH 열기 - Auth 선택 - Browse 클릭 - 발급받은 ppk 파일 선택 - 오픈
# EC2 DB 설치
### DB 생성하기

- DB 설치
sudo apt-get install mysql-server
- DB 접속
sudo mysql -u root
- 계정 생성
create user 'ssafy'@'%' identified by 'ssafy';
- DB 생성
create database j7c106;
- DB 권한 부여
grant all privileges on j7c106.* to 'ssafy'@'%';
    - j7c106에 대하여 ssafy로 접속하는 모든 위치(%)에서 모든 권한 부여(all privileges)
- DB 외부 접속 허용하기
cd /etc/mysql/mysql.conf.d
sudo nano mysqld.cnf	#bind-address = 127.0.0.1 부분 -> #주석처리#
sudo service mysql restart

### DBeaver로 접속

- Server Host : j7c106.p.ssafy.io
- Database : j7c106
- Username : ssafy
- Password : ssafy
# EC2 배포자동화 - 백
### 도커 설치하기

sudo apt-get update && \
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common && \
curl -fsSL [https://download.docker.com/linux/ubuntu/gpg](https://download.docker.com/linux/ubuntu/gpg) | sudo apt-key add - && \
sudo apt-key fingerprint 0EBFCD88 && \
sudo add-apt-repository "deb [arch=amd64] [https://download.docker.com/linux/ubuntu](https://download.docker.com/linux/ubuntu) $(lsb_release -cs) stable" && \
sudo apt-get update && \
sudo apt-get install -y docker-ce && \
sudo usermod -aG docker ubuntu && \
sudo curl -L "[https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$](https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$)(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && \
sudo chmod +x /usr/local/bin/docker-compose && \
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

### 도커 권한 부여

`sudo chmod 006 /var/run/docker.sock`

### 젠킨스 이미지 다운

`docker pull jenkins/jenkins:jdk11`

### 도커 이미지 컨테이너로 띄우기 - 80포트를 8080으로 리다이렉트 중

`docker run -d --restart always -p 80:8080 -v /jenkins:/var/jenkins_home --name jenkins -u root jenkins/jenkins:jdk11`
# EC2 배포자동화 - 프론트
### 에러 관련

- 젠킨스 빌드 1초만에 실패할때
    - sudo docker run -d -p 3000:3000 --name frontend frontend:latest

### 명령어

- 서비스 확인 sudo docker ps -a
- 서비스 실행 sudo docker start [ID,NAME]
- 컨테이너 내부 sudo docker exec -it frontend bash

### 구성

- 엔진엑스 (SSL 적용) - 도커 컨테이너 (프론트) → 컨테이너 내부 (엔진엑스 80포트)
- 외부 포트 3000  내부 포트 80
# EC2 Nginx 구성
server {
  listen 3001;
  root /var/front/build;
  index index.html index.htm;
  try_files $uri $uri/ /index.html;
  gzip_static always;
}
server {
  listen 80;

  root /var/front/build;
  index index.html index.htm;
  try_files $uri $uri/ /index.html;
  gzip_static always;

}

server {
  listen 443 ssl http2;
  server_name j7c106.p.ssafy.io;

  ssl_certificate /etc/letsencrypt/live/j7c106.p.ssafy.io/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/j7c106.p.ssafy.io/privkey.pem;

  location / {
    proxy_pass http://j7c106.p.ssafy.io:3001;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
  location /api {
    proxy_pass http://j7c106.p.ssafy.io:8081;
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
server {
    if ($host = j7c106.p.ssafy.io) {
        return 301 https://$host$request_uri;
    }
  listen 80;
  server_name example.com;
   return 404;
}

# EC2 노드 JS
sudo apt-get install nodejs

sudo apt-get install npm

sudo npm install -g express

sudo npm install -g express-generator@4

sudo npm install -g nodemon

sudo mkdir node-project && cd node-project && sudo mkdir testNode && cd testNode

sudo express -e

sudo npm install

// app.js 노드 서버 포트 번호 : 9000

app.set('port', process.env.PORT || 9000);

var server = app.listen(app.get('port'), function() {
console.log('Express server listening on port ' + server.address().port);
});

// pakage.json

"start": "nodemon app.js”
