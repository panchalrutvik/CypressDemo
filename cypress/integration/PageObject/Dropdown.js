/// <reference types="cypress" />

class Dropdown{
    visit(){
        cy.visit("/dropdown")
    }
    selectValue(str){
        cy.xpath("//select[@id='dropdown']").select(str).should('have.value',1)
    }
}
export default Dropdown