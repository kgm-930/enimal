## DB 생성하기

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

## DBeaver로 접속

- Server Host : j7c106.p.ssafy.io
- Database : j7c106
- Username : ssafy
- Password : ssafy
