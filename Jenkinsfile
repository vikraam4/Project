pipeline {
    agent any

    tools {
        nodejs 'Node20'
    }

    triggers {
        cron('30 7 * * 6,0')   // 1 PM IST on Saturday and Sunday
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

            // Archive reports
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'allure-results/**', allowEmptyArchive: true

            // Publish Playwright HTML Report
            publishHTML([
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report',
                keepAll: true,
                alwaysLinkToLastBuild: true,
                allowMissing: true
            ])

            // Publish Allure Report
            allure([
                includeProperties: false,
                jdk: '',
                results: [[path: 'allure-results']]
            ])

            // Email Notification
            emailext(
                to: 'vikramsingh122001@gmail.com',
                subject: "Playwright Report - Build #${BUILD_NUMBER} - ${currentBuild.currentResult}",
                body: """
Build Number: ${BUILD_NUMBER}
Status: ${currentBuild.currentResult}

Console Output:
${BUILD_URL}

Playwright Report:
${BUILD_URL}artifact/playwright-report/index.html

Allure Report:
${BUILD_URL}allure
"""
            )
        }
    }
}