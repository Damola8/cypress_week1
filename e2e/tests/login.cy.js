describe('Launch Mima page', ()=>{
    it('Click on the mima page', ()=>{
        cy.visit('https://staging.trymima.com/')
    })
})

context('Launch Mima page', ()=>{
    it.skip('Click on the mima page', ()=>{
        cy.visit('https://staging.trymima.com/')
    })
})