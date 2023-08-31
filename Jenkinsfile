pipeline {
    agent any
    stages {
        stage('Preparation') {
            steps {
                git 'https://github.com/jjchandru/git-ci-cd'
                bat 'npm install'
                bat 'rmdir "../../app-deploy" /s /q'
                bat 'mkdir "../../app-deploy/dev/src"'
                bat 'mkdir "../../app-deploy/test/src"'
                bat 'mkdir "../../app-deploy/prod/src"'
            }
        }
        stage('Test') {
            steps {
                bat 'npm test'
            }
        }
        stage('Deploy-Dev') {
            steps {
                bat 'copy app.js "../../app-deploy/dev"'
                bat 'copy package.json "../../app-deploy/dev"'
                bat 'copy package-lock.json "../../app-deploy/dev"'
                bat 'xcopy src "../../app-deploy/dev/src" /E /H /C /I'
                bat 'copy dev.config.js "../../app-deploy/dev"'
                dir('../../app-deploy/dev') {
                    bat """
                        if exist node_modules (rmdir /S /Q "node_modules")
                        call npm install
                        call pm2 status | findstr /C:"app-dev" | findstr /C:"online"
                        echo Error LeveL: %errorlevel%
                        if %errorlevel% == 0 (call pm2 restart dev.config.js)
                        if %errorlevel% == 1 (call pm2 start dev.config.js)
                    """
                }
            }
        }
        stage('Deploy-Test') {
            steps {
                bat 'copy app.js "../../app-deploy/test"'
                bat 'copy package.json "../../app-deploy/test"'
                bat 'copy package-lock.json "../../app-deploy/test"'
                bat 'xcopy src "../../app-deploy/test/src" /E /H /C /I'
                bat 'copy test.config.js "../../app-deploy/test"'
                dir('../../app-deploy/test') {
                    bat """
                        if exist node_modules (rmdir /S /Q "node_modules")
                        call npm install
                        call pm2 status | findstr /C:"app-test" | findstr /C:"online"
                        echo Error LeveL: %errorlevel%
                        if %errorlevel% == 0 (call pm2 restart test.config.js)
                        if %errorlevel% == 1 (call pm2 start test.config.js)
                    """
                }
            }
        }
        stage('Deploy-Prod') {
            steps {
                bat 'copy app.js "../../app-deploy/prod"'
                bat 'copy package.json "../../app-deploy/prod"'
                bat 'copy package-lock.json "../../app-deploy/prod"'
                bat 'xcopy src "../../app-deploy/prod/src" /E /H /C /I'
                bat 'copy prod.config.js "../../app-deploy/prod"'
                dir('../../app-deploy/prod') {
                    bat """
                        if exist node_modules (rmdir /S /Q "node_modules")
                        call npm install
                        call pm2 status | findstr /C:"app-prod" | findstr /C:"online"
                        echo Error LeveL: %errorlevel%
                        if %errorlevel% == 0 (call pm2 restart prod.config.js)
                        if %errorlevel% == 1 (call pm2 start prod.config.js)
                    """
                }
            }
        }
    }
}
