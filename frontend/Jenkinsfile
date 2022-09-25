pipeline {
    agent any
    tools {
        nodejs "node14"
        git "git"
    }
    stages {
        stage('prepare') {
            steps {
                echo 'prepare'
                 git branch: "front", credentialsId: "haengsong", url: 'https://lab.ssafy.com/s07-blockchain-nft-sub2/S07P22C106.git'
                 sh  'ls -al'
            }
        }
        stage('build') {
            steps {
                    dir('frontend'){
                        sh 'ls -al'
                        sh "yarn install"
                        sh "CI=false yarn build"
                }
            }
        }
        stage('deploy') {
            steps {
                sh "ls -al"
                echo 'deploy'   
            }
        }
    }
}