describe('CRM User Flow', () => {
  beforeEach(() => {
    // Visit the homepage before each test
    cy.visit('/')
  })

  it('should complete full user registration and login flow', () => {
    // Test homepage loads
    cy.contains('CRM').should('be.visible')
    
    // Navigate to registration
    cy.get('[data-cy="register-button"]').click()
    
    // Fill registration form
    cy.get('[data-cy="email-input"]').type('test@example.com')
    cy.get('[data-cy="password-input"]').type('password123')
    cy.get('[data-cy="confirm-password-input"]').type('password123')
    cy.get('[data-cy="submit-button"]').click()
    
    // Should redirect to dashboard
    cy.url().should('include', '/dashboard')
    cy.contains('Welcome').should('be.visible')
  })

  it('should handle login flow', () => {
    // Navigate to login
    cy.get('[data-cy="login-button"]').click()
    
    // Fill login form
    cy.get('[data-cy="email-input"]').type('test@example.com')
    cy.get('[data-cy="password-input"]').type('password123')
    cy.get('[data-cy="submit-button"]').click()
    
    // Should redirect to dashboard
    cy.url().should('include', '/dashboard')
    cy.contains('Dashboard').should('be.visible')
  })

  it('should create a new lead', () => {
    // Login first
    cy.login('test@example.com', 'password123')
    
    // Navigate to leads
    cy.get('[data-cy="leads-menu"]').click()
    cy.get('[data-cy="create-lead-button"]').click()
    
    // Fill lead form
    cy.get('[data-cy="lead-name-input"]').type('John Doe')
    cy.get('[data-cy="lead-email-input"]').type('john@example.com')
    cy.get('[data-cy="lead-phone-input"]').type('+1234567890')
    cy.get('[data-cy="lead-company-input"]').type('Acme Corp')
    cy.get('[data-cy="save-lead-button"]').click()
    
    // Should show success message
    cy.contains('Lead created successfully').should('be.visible')
    
    // Should appear in leads list
    cy.get('[data-cy="leads-table"]').should('contain', 'John Doe')
  })

  it('should handle form validation errors', () => {
    cy.login('test@example.com', 'password123')
    
    // Try to create lead without required fields
    cy.get('[data-cy="leads-menu"]').click()
    cy.get('[data-cy="create-lead-button"]').click()
    cy.get('[data-cy="save-lead-button"]').click()
    
    // Should show validation errors
    cy.contains('Name is required').should('be.visible')
    cy.contains('Email is required').should('be.visible')
  })

  it('should be responsive on mobile', () => {
    // Test mobile viewport
    cy.viewport('iphone-6')
    
    // Check mobile navigation
    cy.get('[data-cy="mobile-menu-button"]').should('be.visible')
    cy.get('[data-cy="mobile-menu-button"]').click()
    cy.get('[data-cy="mobile-menu"]').should('be.visible')
  })

  it('should handle network errors gracefully', () => {
    // Intercept API calls and simulate network error
    cy.intercept('POST', '/api/leads', { forceNetworkError: true }).as('createLeadError')
    
    cy.login('test@example.com', 'password123')
    
    // Try to create lead
    cy.get('[data-cy="leads-menu"]').click()
    cy.get('[data-cy="create-lead-button"]').click()
    cy.get('[data-cy="lead-name-input"]').type('John Doe')
    cy.get('[data-cy="save-lead-button"]').click()
    
    cy.wait('@createLeadError')
    
    // Should show error message
    cy.contains('Network error').should('be.visible')
  })
})

// Custom commands
Cypress.Commands.add('login', (email, password) => {
  cy.session([email, password], () => {
    cy.visit('/login')
    cy.get('[data-cy="email-input"]').type(email)
    cy.get('[data-cy="password-input"]').type(password)
    cy.get('[data-cy="submit-button"]').click()
    cy.url().should('include', '/dashboard')
  })
}) 