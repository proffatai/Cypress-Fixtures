/// <reference types="cypress" />

describe("Handling input boxes", ()=>{
    let personal; // variable to hold the imported data
    
    before(()=>{
        
        cy.fixture('creds.json').as('data')  // I used as() to alias the imported data
        cy.fixture('Private').then((data)=>{
            personal=data
        })
    })
    
    beforeEach(()=>{
   cy.visit('https://demoqa.com/automation-practice-form/') 
    })
   

    it ('lol',function (){ // I have to make my function explicit since I used an alias to import data AND not use a callback fnc
           
        cy.get('#firstName').type(this.data.firstname)
        cy.get('#lastName').type(this.data.lastname)
        cy.get('#userEmail').type(this.data.email)
        cy.get('#userNumber').type(personal.mobile)
        cy.get('#gender-radio-1').check({force:true})
        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__month-select').select('4')
        cy.get('.react-datepicker__year-select').select('1995')
        cy.get(':nth-child(2) > .react-datepicker__day--010').click()
        cy.get('.subjects-auto-complete__value-container').type('English, Physics')
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').check()
        cy.get('#uploadPicture').attachFile('as.webp')
        cy.get('#currentAddress').type(personal.address)

    })


})

    