const SIGNUP_URL = 'https://hocvalamtheobac.vn/register'
const USERNAME_INPUT_SELECTOR = '#form_submit > div:nth-child(2) > input'
const PHONE_INPUT_SELECTOR = '#form_submit > div:nth-child(3) > input'
const PASSWORD_INPUT_SELECTOR = '#form_submit > div:nth-child(6) > input'
const CONFIRM_PASSWORD_INPUT_SELECTOR = '#form_submit > div:nth-child(7) > input'
const EMAIL_INPUT_SELECTOR = '#inputEmail'
const AGREE_CHECKBOX = '#exampleCheck1'
const REGISTER_BUTTON = '#form_submit > button'
const PASSWORD = 'Pa55w0rds'
const INVALID_USERNAME_ALERT = 'Tên đăng nhập chỉ bao gồm chữ cái và chữ số, viết thường không dấuuuu'

const RandExp = require('randexp')

const _randomUsername = (length = 10) => {
    let result = ''
    let characters = 'zxcvbnmasdfghjklqwertyuiop0123456789'
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result
}

const _randomPhone = () => {
    return new RandExp(/^0[0-9]{9}$/).gen();
}

const _randomMail = () => {
    return `${_randomUsername()}@gmail.com`
}

describe('Registeration form testing using Blackbox technique', () => {
    // it('Nhập tất cả các trường theo đúng yêu cầu', async () => {
    //     const userName = _randomUsername()
    //     const phone = _randomPhone()
    //     const mail = _randomMail()

    //     cy.enterForm(userName, phone, mail)       
    // })
    it('Nhập tất là một đoạn chuỗi có dấu', async () => {
        const userName = 'tùng nguyễn'
        const phone = _randomPhone()
        const mail = _randomMail()

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
            .type(PASSWORD)
            .should('have.value', PASSWORD)

        cy.get(CONFIRM_PASSWORD_INPUT_SELECTOR)
            .type(PASSWORD)
            .should('have.value', PASSWORD)

        cy.get(AGREE_CHECKBOX).check()


        cy.get(REGISTER_BUTTON).click()

        cy.get('#show-notication-id > div')
            .should(($div, done) => {
                expect($div.text().trim()).equal(INVALID_USERNAME_ALERT)
                done()
            })
    })
})