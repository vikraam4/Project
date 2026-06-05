pipeline {
    agent any

    tools {
        nodejs 'Node20'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }

        stage('Generate HTML Report') {
            steps {
                sh 'npx playwright show-report || true'
            }
        }
    }

    post {
        always {

            // Archive report files
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true

            // Publish HTML report in Jenkins UI
            publishHTML([
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report',
                keepAll: true,
                alwaysLinkToLastBuild: true,
                allowMissing: true
            ])
        }
    }
}