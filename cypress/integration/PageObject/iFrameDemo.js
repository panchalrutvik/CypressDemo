/// <reference types='cypress'/>

class IframeDemo{
    visit(){
        cy.visit('/iframe')
    }

    writeText(str){
        cy.xpath("//iframe[@id='mce_0_ifr']").then(ele =>{
            var ie = ele.contents().find("p")
            cy.wrap(ie).type(str)
        })
    }
    newDocument(){
        cy.xpath("//iframe[@id='mce_0_ifr']").then(ele =>{
            cy.xpath('//*[@id="mceu_15-open"]').click().then(()=>{
                cy.xpath("//*[@id='mceu_32']").click().then(()=>{
                    cy.xpath("//*[@id='tinymce']//p").should('have.length','0')
                })
            })
        })
    }
}
export default IframeDemo