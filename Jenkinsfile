post {
    always {

        archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        archiveArtifacts artifacts: 'allure-report/**', allowEmptyArchive: true

        publishHTML([
            reportDir: 'playwright-report',
            reportFiles: 'index.html',
            reportName: 'Playwright HTML Report',
            keepAll: true,
            alwaysLinkToLastBuild: true,
            allowMissing: true
        ])

        allure([
            includeProperties: false,
            jdk: '',
            results: [[path: 'allure-results']]
        ])

        emailext(
            to: "vikramsingh122001@gmail.com",
            subject: "Playwright Report - Build #${BUILD_NUMBER}",
            body: """
Build: ${BUILD_NUMBER}
Status: ${currentBuild.currentResult}

Console:
${BUILD_URL}

Playwright Report:
${BUILD_URL}artifact/playwright-report/index.html

Allure Report:
${BUILD_URL}allure
"""
        )
    }
}