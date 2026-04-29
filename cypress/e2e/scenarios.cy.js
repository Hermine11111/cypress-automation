describe('Practice Software Testing Scenarios', () => {

  const email = 'customer@practicesoftwaretesting.com'
  const password = 'welcome01'

  it('User updates profile information', () => {

    cy.visit('/auth/login')

    cy.get('[data-test="email"]')
      .should('be.visible')
      
      .type(email)

    cy.get('[data-test="password"]')
      .should('be.visible')
      .type(password)

    cy.get('[data-test="login-submit"]').click()

    cy.url({ timeout: 10000 }).should('include', '/account')

    cy.get('[data-test="nav-profile"]').click()

    cy.url().should('include', '/account/profile')

  
    cy.get('[data-test="first-name"]')
      .should('be.visible')
      .clear({ force: true })   
      .type('Jane')
      .should('have.value', 'Jane')

    
    cy.get('[data-test="last-name"]')
      .should('be.visible')
      .clear({ force: true })  
      .type('Doe')
      .should('have.value', 'Doe')

    cy.get('[data-test="update-profile-submit"]')
      .should('be.visible')
      .click()

    cy.url().should('include', '/account/profile')
    cy.get('[data-test="first-name"]').should('have.value', 'Jane')
    cy.get('[data-test="last-name"]').should('have.value', 'Doe')
  })

  it('User searches exact product', () => {

    cy.visit('/')

    cy.get('[data-test="search-query"], [data-test="search-input"]')
      .first()
      .should('be.visible')
      .type('Hammer{enter}')

    cy.contains(/hammer/i).should('be.visible')
  })

  it('User sorts products by price', () => {

    cy.visit('/')

    cy.get('[data-test="sort"]')
      .should('be.visible')
      .select('price,asc')

    cy.get('[data-test="sort"]').should('have.value', 'price,asc')
  })

  it('User changes language', () => {

    cy.visit('/')

    cy.get('#language').click()

    cy.contains('DE').click()

    cy.contains(/home|startseite/i).should('be.visible')
  })

})