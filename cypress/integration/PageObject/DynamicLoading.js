/// <reference types="cypress" />

class DynamicLoading {
    visit() {
        cy.visit("/dynamic_loading")
    }
    example1() {
        cy.visit("/dynamic_loading/1")
        cy.url().should("include","/dynamic_loading/1")
        cy.xpath("//button[text()='Start']").click()
        cy.xpath("//div[@id='loading']",{timeout: 10000}).should("not.be.visible")
        cy.xpath("//h4[text()='Hello World!']").should("be.visible")
    }
    example2(){
        cy.visit("/dynamic_loading/2")
        cy.url().should("include","/dynamic_loading/2")
        cy.xpath("//button[text()='Start']").click()
        cy.xpath("//div[@id='loading']",{timeout: 10000}).should("not.be.visible")
        cy.xpath("//h4[text()='Hello World!']").should("be.visible")
    }
}
export default DynamicLoading