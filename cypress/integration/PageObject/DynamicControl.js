/// <reference types="cypress" />

class DynamicControl {
    visit() {
        cy.visit("/dynamic_controls")
    }
    addOrRemoveCheckBox() {
        cy.xpath("//form[@id='checkbox-example']//input[@type='checkbox']").should('be.visible').then(text => {
            cy.xpath("//form[@id='checkbox-example']//button").click()
            cy.xpath("//form[@id='checkbox-example']//p[@id='message']").should('have.text', "It's gone!")
        })
        cy.xpath("//form[@id='checkbox-example']//input[@type='checkbox']").should('not.be.visible').then(text => {
            cy.xpath("//form[@id='checkbox-example']//button").click()
            cy.xpath("//form[@id='checkbox-example']//p[@id='message']").should('have.text', "It's back!")
        })
    }
    enableDisbaleTextBox(){
        cy.xpath("//form[@id='input-example']//input[@type='text']").should("not.be.enabled").then(text =>{
            cy.xpath("//form[@id='input-example']//button").click()
            cy.xpath("//form[@id='input-example']//p[@id='message']").should('have.text', "It's enabled!")
        })
        cy.xpath("//form[@id='input-example']//input[@type='text']").should("be.enabled").then(text =>{
            cy.xpath("//form[@id='input-example']//button").click()
            cy.xpath("//form[@id='input-example']//p[@id='message']").should('have.text', "It's disabled!")
        })
    }
}
export default DynamicControl