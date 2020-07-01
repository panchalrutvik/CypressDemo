/// <reference types='cypress' />

class ContextMenu{
    visit(){
        cy.visit("/context_menu")
    }

    rightCLick(){
        cy.xpath("//div[@id='hot-spot']").rightclick()
        cy.on("window:alert",(str)=>{
            expect(str).to.equal("You selected a context menu")
        })
    }
}
export default ContextMenu