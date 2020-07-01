/// <reference types="cypress"/>

class Login {
    visit() {
        cy.visit('/login')
    }

    credentials() {
        let data
        cy.fixture('example').then(function (data) {
            cy.xpath("//input[@id='username']").type(data.email)
            cy.xpath("//input[@id='password']").type(data.password)
            cy.xpath("//button[@type='submit']").click().then(()=>{
                cy.xpath("//h4[text()='Welcome to the Secure Area. When you are done click logout below.']").should("be.visible")
            })
            cy.xpath("//i[text()=' Logout']").click().then(()=>{
                cy.xpath("//div[@id='flash']").should('have.text','\n            You logged out of the secure area!\n            ×\n          ')
            })
        })

    }
}
export default Login