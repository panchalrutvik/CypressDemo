/// <reference types="cypress"/>

import AddOrRemove from '../PageObject/AddOrRemove'
import Login from '../PageObject/Login'
import BrokenImage from '../PageObject/BrokenImage'
import Checkbox from '../PageObject/Checkboxes'
import ContextMenu from '../PageObject/Contextmenu'
import DragAndDrop from '../PageObject/DragAndDrop'
import Dropdown from '../PageObject/Dropdown'
import DynamicControl from '../PageObject/DynamicControl'
import DynamicLoading from '../PageObject/DynamicLoading'
import EntryAd from '../PageObject/EntryAd'
import ExitIntent from '../PageObject/ExitIntent'
import FileUpload from '../PageObject/FileUpload'
import IframeDemo from '../PageObject/IframeDemo'
import HorizontalSlider from '../PageObject/HorizontalSlider'
import Hover from '../PageObject/Hover'
import Scroll from '../PageObject/Scroll'

describe('My First Test', () => {
    it('Launch the site', () => {
        cy.visit('/')
        cy.url().should('include','internet')
       
    })
    it('addElement',()=>{
        const addor = new AddOrRemove()
        addor.visit()
        addor.addElement(3)
    })  
    it('remove',()=>{
        const addor = new AddOrRemove()
        addor.removeElement(2)
    })  
    
    it('broken',()=>{
        const br = new BrokenImage()
        br.visit()
        br.openBrokenImagePage()
    })
    it('check',()=>{
        const chk = new Checkbox()
        chk.visit()
        chk.enableCheckbox()
        chk.disableCheckbox()
    })
    it('context',()=>{
        const ctx = new ContextMenu()
        ctx.visit()
        ctx.rightCLick()
    })
    it("drag",()=>{
        const dr = new DragAndDrop()
        dr.visit()
        dr.dragTo()
    })
    it('select',()=>{
        const sel = new Dropdown()
        sel.visit()
        sel.selectValue('Option 1')
    })
    it('dynamicControl',()=>{
        const sel = new DynamicControl()
        sel.visit()
        sel.addOrRemoveCheckBox()
        sel.enableDisbaleTextBox()
    })
    it("dynamicLoading",()=>{
        const dl = new DynamicLoading()
        dl.visit()
        dl.example1()
        dl.example2()
    })
    it("entryAd",()=>{
        const ea = new EntryAd()
        ea.firstTime()
        ea.reEnable()
    })
    it('fileupload',()=>{
        const fu = new FileUpload()
        fu.visit()
        fu.uploadFile()
        fu.dragAndDropFileUpload()
    })
    it('Login',()=>{
        const login = new Login()
        login.visit()
        login.credentials()    
    })
    it('iframe',()=>{
        const ifr = new IframeDemo()
        ifr.visit()
        ifr.writeText("hiiii")
        ifr.newDocument()
    }) 
    it('slider',()=>{
        const slider = new HorizontalSlider()
        slider.moveSlider(4)
    })
    it('hover',()=>{
        const hover = new Hover()
        hover.hoverFirstImage()
    })
    it('scroll',()=>{
        const sc = new Scroll()
        sc.visit()
        sc.scrollToBottom()
    })
})
