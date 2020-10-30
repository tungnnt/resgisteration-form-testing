const STUDENT_SIGN_UP_BUTTON_SELECTOR = '#__next > div > button.MuiButtonBase-root.MuiButton-root.jss4.MuiButton-contained.d-flex.align-items-center.MuiButton-containedPrimary.MuiButton-disableElevation.MuiButton-fullWidth'
const FULL_NAME_INPUT_SELECTOR = '#__next > div > form > div:nth-child(1) > div:nth-child(1) > div > div > input'
const BIRTHDAY_INPUT_SELECTOR = '#__next > div > form > div:nth-child(1) > div:nth-child(2) > div > div > input'
const SCHOOL_INPUT_SELECTOR = '#__next > div > form > div:nth-child(1) > div:nth-child(3) > div > div > input'
const CLASS_INPUT_SELECTOR = '#__next > div > form > div:nth-child(1) > div:nth-child(4) > div > div > input'
const PROVINCE_DROPDOWN_SELECTOR = '#__next > div > form > div:nth-child(1) > div:nth-child(5)'
const PROVINCE_OPTION_SELECTOR = '#menu- > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(52)'

describe('My First Test', () => {
    it('Visits the Shub website', () => {
        cy.visit('https://www.shub.edu.vn/signup')

        cy.get(STUDENT_SIGN_UP_BUTTON_SELECTOR).click()

        cy.get(FULL_NAME_INPUT_SELECTOR)
            .type('Nguyễn Ngọc Thanh Tùng')
            .should('have.value', 'Nguyễn Ngọc Thanh Tùng')

        cy.get(BIRTHDAY_INPUT_SELECTOR)
            .type('1999-09-30')
            .should('have.value', '1999-09-30')

        cy.get(SCHOOL_INPUT_SELECTOR)
            .type('Đại học công nghệ')
            .should('have.value', 'Đại học công nghệ')

        cy.get(CLASS_INPUT_SELECTOR)
            .type('K62CACLC1')
            .should('have.value', 'K62CACLC1')

        cy.get(PROVINCE_DROPDOWN_SELECTOR)
            .click({force: true})
        cy.get(PROVINCE_OPTION_SELECTOR)
            .click({force: true})
            .get('#__next > div > form > div:nth-child(1) > div:nth-child(5) > div > input')
            .should('have.value', 'Hải Dương')
    })
})