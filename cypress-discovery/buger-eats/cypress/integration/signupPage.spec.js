import signup from '../pages/SignupPage'

describe('Cadastro', () => {

    beforeEach(function() {
        cy.fixture("deliver").then((d) => {
            this.deliver = d
        })
    })

    it("User should be deliver", function() {
        const expectMessage =
        "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."
                
        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()
        signup.modalContentShouldBe(expectMessage)
    })

    it("Incorrect email", ()=>{
        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()
        signup.modalContentShouldBe(expectMessage)
    })
    
    it("Incorrect document", () => {
        var deliver = {
            name: 'Jamily Melo',
            cpf: '000000141AA',
            email: 'jamily@email.com',
            whatsapp: '13999999999',

            address: {
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'Ap 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: "Moto",
            cnh: "/imagens/cnh-digital.jpg"
        }

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })
})


//Explicação suas diferenças e como funciona:

    // before(function () {
    //     cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes')
    // })

    // beforeEach(function () {
    //     cy.log('Tudo aqui é executado sempre ANTES de CADA os casos de testes')
    // })

    // after(function () {
    //     cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes')
    // })

    // afterEach(function () {
    //     cy.log('Tudo aqui é executado sempre DEPOIS de CADA os casos de testes')
    // })