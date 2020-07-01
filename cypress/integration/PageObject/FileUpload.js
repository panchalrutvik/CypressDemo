/// <reference types='cypress'/>

import 'cypress-file-upload'

class FileUpload {
    visit() {
        cy.visit("/upload")
    }

    uploadFile() {
        cy.xpath("//input[@id='file-upload']").attachFile('download.png')
        cy.xpath("//input[@id='file-submit']",{timeout: 10000}).click().then(() => {
            cy.xpath("//h3[text()='File Uploaded!']").should('be.visible')
        })

    }

    dragAndDropFileUpload() {
        cy.visit("/upload")
        cy.xpath("//div[@id='drag-drop-upload']").attachFile('download.png', { subjectType: 'drag-n-drop' }).then(() => {
            cy.xpath("//span[text()='download.png']").should("have.text", "download.png")
        })
    }
}
export default FileUpload