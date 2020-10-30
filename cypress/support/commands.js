// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

const SIGNUP_URL = 'https://hocvalamtheobac.vn/register'
const USERNAME_INPUT_SELECTOR = '#form_submit > div:nth-child(2) > input'
const PHONE_INPUT_SELECTOR = '#form_submit > div:nth-child(3) > input'
const PASSWORD_INPUT_SELECTOR = '#form_submit > div:nth-child(6) > input'
const CONFIRM_PASSWORD_INPUT_SELECTOR = '#form_submit > div:nth-child(7) > input'
const EMAIL_INPUT_SELECTOR = '#inputEmail'
const AGREE_CHECKBOX = '#exampleCheck1'
const REGISTER_BUTTON = '#form_submit > button'
const PASSWORD = 'Pa55w0rds'

Cypress.Commands.add('enterForm', (userName, phone, mail, password = PASSWORD) => {
    cy.visit(SIGNUP_URL)

    cy.get(USERNAME_INPUT_SELECTOR)
        .type(userName)
        .should('have.value', userName)

    cy.get(PHONE_INPUT_SELECTOR)
        .type(phone)
        .should('have.value', phone)

    cy.get(EMAIL_INPUT_SELECTOR)
        .type(mail)
        .should('have.value', mail)

    cy.get(PASSWORD_INPUT_SELECTOR)
        .type(password)
        .should('have.value', password)

    cy.get(CONFIRM_PASSWORD_INPUT_SELECTOR)
        .type(password)
        .should('have.value', password)

    cy.get(AGREE_CHECKBOX).check()


    cy.get(REGISTER_BUTTON).click()

})
