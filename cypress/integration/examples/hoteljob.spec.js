const HOTELJOB_SIGNUP_URL = 'https://www.hoteljob.vn/dang-ky'
const FULLNAME_INPUT_SELECTOR = '#profile-full_name'
const PASSWORD_INPUT_SELECTOR = '#user-newpassword'
const CONFIRM_PASSWORD_INPUT_SELECTOR = '#user-newpasswordconfirm'
const EMAIL_INPUT_SELECTOR = '#user-email'
const OTP_INPUT_SELECTOR = '#user-code'
const GET_NOTI_CHECKBOX = '#user-subscribe'
const CONFIRM_CHECKBOX = '#user-agree'
const SEND_OTP_BUTTON = '#getcode'

describe('Registeration form testing using Blackbox technique', () => {
    it('Enter each field with its valid value', async () => {
        cy.window().then(win => {
            win.someFunc();
        })

        cy.visit(HOTELJOB_SIGNUP_URL)

        cy.get(FULLNAME_INPUT_SELECTOR)
            .type('Nguyễn Ngọc Thanh Tùng')
            .should('have.value', 'Nguyễn Ngọc Thanh Tùng')

        cy.get(PASSWORD_INPUT_SELECTOR)
            .type('Pa55w0rds')
            .should('have.value', 'Pa55w0rds')

        cy.get(CONFIRM_PASSWORD_INPUT_SELECTOR)
            .type('Pa55w0rds')
            .should('have.value', 'Pa55w0rds')

        cy.get(EMAIL_INPUT_SELECTOR)
            .type('z2m9xxldj3@safemail.icu')
            .should('have.value', 'z2m9xxldj3@safemail.icu')

        cy.get(SEND_OTP_BUTTON)
            .click()

        cy.get(OTP_INPUT_SELECTOR)
            .type('MUIMYG')
            .should('have.value', 'MUIMYG')

        cy.get(CONFIRM_CHECKBOX).check()
    })

})