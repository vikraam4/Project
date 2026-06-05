pipeline {
    agent any

    tools {
        nodejs 'Node20'
    }

    triggers {
        cron('30 7 * * 6,0')
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci || npm install'
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
    }

    post {
        always {

            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true

            publishHTML([
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report',
                keepAll: true,
                alwaysLinkToLastBuild: true,
                allowMissing: true
            ])

            emailext (
                to: "vikramsingh122001@gmail.com",
                subject: "Playwright Report - Build #${BUILD_NUMBER}",
                body: """
Build: ${BUILD_NUMBER}
Status: ${currentBuild.currentResult}

Report: ${BUILD_URL}artifact/playwright-report/index.html
"""
            )
        }
    }
}