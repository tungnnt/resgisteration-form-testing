const SIGNUP_URL = 'https://hocvalamtheobac.vn/register'

const RandExp = require('randexp')

const _randomUsername = (length = 10, isNumberExist = false) => {
    let result = ''
    let characters = isNumberExist === true ? 'zxcvbnmasdfghjklqwertyuiop0123456789' : 'zxcvbnmasdfghjklqwertyuiop'
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result
}

const _randomInt6digits = () => {
    let result = ''
    let characters = '123456789'
    let charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result
}

const _randomPhone = () => {
    return new RandExp(/^09[0-9]{8}$/).gen();
}

const _randomMail = () => {
    return `${_randomUsername()}@gmail.com`
}

/// <reference types="cypress" />

context('Kiểm thử mẫu đăng kí bằng phương pháp hộp đen.', () => {
    beforeEach(() => {
        cy.visit(SIGNUP_URL)
    })
    describe('Kiểm thử ô nhập Tên đăng nhập.', () => {
        it('Ca kiểm thử 1: Nhập nội dung theo đúng yêu cầu của mẫu đăng kí, tên đăng nhập gồm cả chữ và số.', () => {
            const username = `${_randomUsername()}1`
            const phone = _randomPhone()
            const mail = _randomMail()

            cy.enterForm(username, phone, mail)

            cy.url().should('eq', 'https://hocvalamtheobac.vn/')
        })

        it('Ca kiểm thử 2: Nhập nội dung theo đúng yêu cầu của mẫu đăng kí, tên đăng nhập gồm chỉ chữ.', () => {
            const username = `${_randomUsername()}`
            const phone = _randomPhone()
            const mail = _randomMail()

            cy.enterForm(username, phone, mail)

            cy.url().should('eq', 'https://hocvalamtheobac.vn/')
        })

        it('Ca kiểm thử 3: Nhập nội dung theo đúng yêu cầu của mẫu đăng kí, tên đăng nhập gồm chỉ số.', () => {
            const username = _randomInt6digits()
            const phone = _randomPhone()
            const mail = _randomMail()

            cy.enterForm(username, phone, mail)

            cy.url().should('eq', 'https://hocvalamtheobac.vn/')
        })

        it('Ca kiểm thử 4: Nhập ô Tên đăng nhập sai yêu cầu (không dấu), còn lại các ô khác vẫn nhập đúng.', () => {
            const username = 'tùngggg'
            const phone = _randomPhone()
            const mail = _randomMail()

            cy.enterForm(username, phone, mail)

            cy.checkErrorNotification('không dấu')
        })

        it('Ca kiểm thử 5: Nhập ô Tên đăng nhập sai yêu cầu (chữ viết thường), còn lại các ô khác vẫn nhập đúng.', () => {
            const username = 'Tungggg'
            const phone = _randomPhone()
            const mail = _randomMail()

            cy.enterForm(username, phone, mail)

            cy.checkErrorNotification('viết thường')
        })

        it('Ca kiểm thử 6: Nhập ô Tên đăng nhập sai yêu cầu (nhiều hơn 5 kí tự), còn lại các ô khác vẫn nhập đúng.', () => {
            const username = _randomUsername(4)
            const phone = _randomPhone()
            const mail = _randomMail()

            cy.enterForm(username, phone, mail)

            cy.checkErrorNotification('phải lớn hơn 5 ký tự')
        })

        it('Ca kiểm thử 7: Nhập ô Tên đăng nhập sai yêu cầu (ít hơn 20 kí tự), còn lại các ô khác vẫn nhập đúng.', () => {
            const username = _randomUsername(21)
            const phone = _randomPhone()
            const mail = _randomMail()

            cy.enterForm(username, phone, mail)

            cy.checkErrorNotification('không quá 20 ký tự')
        })

        it('Ca kiểm thử 8: Nhập ô Tên đăng nhập sai yêu cầu (không chưa kí tự đặc biệt), còn lại các ô khác vẫn nhập đúng.', () => {
            const username = 'tung_3009'
            const phone = _randomPhone()
            const mail = _randomMail()

            cy.enterForm(username, phone, mail)

            cy.checkErrorNotification('chỉ bao gồm chữ cái và chữ số,')
        })

        it('Ca kiểm thử 9: Nhập ô Tên đăng nhập sai yêu cầu (sử dụng tên đăng nhập đã tổn tại), còn lại các ô khác vẫn nhập đúng.', () => {
            const username = 'tungnnt3009'
            const phone = _randomPhone()
            const mail = _randomMail()

            cy.enterForm(username, phone, mail)

            cy.checkErrorNotification('Tên đăng nhập đã được sử dụng')
        })
    })

    describe('Kiểm thử ô nhập Số điện thoại.', () => {
        it('Ca kiểm thử 1: Nhập nội dung theo đúng yêu cầu của mẫu đăng kí, số điện thoại đúng yêu cầu.', () => {
            const username = _randomUsername()
            const phone = _randomPhone()
            const mail = _randomMail()

            cy.enterForm(username, phone, mail)

            cy.url().should('eq', 'https://hocvalamtheobac.vn/')
        })

        it('Ca kiểm thử 2: Nhập nội dung theo đúng yêu cầu của mẫu đăng kí, số điện thoại sai định dạng.', () => {
            const username = _randomUsername()
            const phone = `1000${_randomInt6digits()}`
            const mail = _randomMail()

            cy.enterForm(username, phone, mail)

            cy.url().should('not.eq', 'https://hocvalamtheobac.vn/')
        })

        it('Ca kiểm thử 3: Nhập nội dung theo đúng yêu cầu của mẫu đăng kí, sử dụng một số điện thoại đã tồn tại.', () => {
            const username = _randomUsername()
            const phone = `0392479119`
            const mail = _randomMail()

            cy.enterForm(username, phone, mail)

            cy.checkErrorNotification('Số điện thoại đã được sử dụng bởi tài khoản khác')
        })
    })

    describe('Kiểm thử ô nhập Email.', () => {
        it('Ca kiểm thử 1: Nhập nội dung theo đúng yêu cầu của mẫu đăng kí, email đúng yêu cầu.', () => {
            const username = _randomUsername()
            const phone = _randomPhone()
            const mail = _randomMail()

            cy.enterForm(username, phone, mail)

            cy.url().should('eq', 'https://hocvalamtheobac.vn/')
        })

        it('Ca kiểm thử 2: Nhập nội dung theo đúng yêu cầu của mẫu đăng kí, email sai định dạng.', () => {
            const username = _randomUsername()
            const phone = _randomPhone()
            const mail = '1@.com'

            cy.enterForm(username, phone, mail)

            cy.checkErrorNotification('Email không đúng định dạng')
        })

        it('Ca kiểm thử 3: Nhập nội dung theo đúng yêu cầu của mẫu đăng kí, sử dụng một email đã tồn tại.', () => {
            const username = _randomUsername()
            const phone = _randomPhone()
            const mail = 'cloneoftung@gmail.com'

            cy.enterForm(username, phone, mail)

            cy.checkErrorNotification('Email đã được sử dụng bởi tài khoản khác')
        })
    })

    describe('Kiểm thử ô nhập mật khẩu.', () => {
        it('Ca kiểm thử 1: Nhập nội dung theo đúng yêu cầu của mẫu đăng kí, mật khẩu đúng yêu cầu.', () => {
            const username = _randomUsername()
            const phone = _randomPhone()
            const mail = _randomMail()

            cy.enterForm(username, phone, mail)

            cy.url().should('eq', 'https://hocvalamtheobac.vn/')
        })

        it('Ca kiểm thử 2: Nhập nội dung theo đúng yêu cầu của mẫu đăng kí, mật khẩu có từ 5 kí tự trở xuống.', () => {
            const username = _randomUsername()
            const phone = _randomPhone()
            const mail = _randomMail()
            const password = 'tungg'

            cy.enterForm(username, phone, mail, password)

            cy.checkErrorNotification('Mật khẩu phải lớn hơn 5 ký tự')
        })

        it('Ca kiểm thử 3: Nhập nội dung theo đúng yêu cầu của mẫu đăng kí, mật khẩu không có chữ cái viết hoa.', () => {
            const username = _randomUsername()
            const phone = _randomPhone()
            const mail = _randomMail()
            const password = 'tungggggg3_'

            cy.enterForm(username, phone, mail, password)

            cy.url().should('not.eq', 'https://hocvalamtheobac.vn/')
        })

        it('Ca kiểm thử 4: Nhập nội dung theo đúng yêu cầu của mẫu đăng kí, mật khẩu không có chữ số.', () => {
            const username = _randomUsername()
            const phone = _randomPhone()
            const mail = _randomMail()
            const password = 'tungggggg_T'

            cy.enterForm(username, phone, mail, password)

            cy.url().should('not.eq', 'https://hocvalamtheobac.vn/')
        })

        it('Ca kiểm thử 5: Nhập nội dung theo đúng yêu cầu của mẫu đăng kí, mật khẩu không có kí tự đặc biệt.', () => {
            const username = _randomUsername()
            const phone = _randomPhone()
            const mail = _randomMail()
            const password = 'tungggggg2T'

            cy.enterForm(username, phone, mail, password)

            cy.url().should('not.eq', 'https://hocvalamtheobac.vn/')
        })

        it('Ca kiểm thử 6: Nhập nội dung theo đúng yêu cầu của mẫu đăng kí, mật khẩu không phải là các mật khẩu phổ biến.', () => {
            const username = _randomUsername()
            const phone = _randomPhone()
            const mail = _randomMail()
            const password = '123456789'

            cy.enterForm(username, phone, mail, password)

            cy.url().should('not.eq', 'https://hocvalamtheobac.vn/')
        })
    })

    describe('Kiểm thử ô Đồng ý điều khoản.', () => {
        it('Ca kiểm thử 1: Nhập nội dung theo đúng yêu cầu của mẫu đăng kí, tích vào ô Đồng ý điều khoản.', () => {
            const username = _randomUsername()
            const phone = _randomPhone()
            const mail = _randomMail()

            cy.enterForm(username, phone, mail)

            cy.url().should('eq', 'https://hocvalamtheobac.vn/')
        })

        it('Ca kiểm thử 2: Nhập nội dung theo đúng yêu cầu của mẫu đăng kí, không tích vào ô Đồng ý điều khoản.', () => {
            const username = _randomUsername()
            const phone = _randomPhone()
            const mail = _randomMail()

            cy.enterForm(username, phone, mail, 'P@55w0rd_is_3009', true)

            cy.url().should('not.eq', 'https://hocvalamtheobac.vn/')
        })
    })
})
