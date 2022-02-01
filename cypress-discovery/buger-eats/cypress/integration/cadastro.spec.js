describe("Cadastro", () => {
    it("Preencher dados para se tornar um entregador", () => {

        //definindo tela e a visita de site
        cy.visit('https://buger-eats.vercel.app/')

        //click para ir para o formulario
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        //dados que sera inserido
        var deliver = {
            name: 'Jamily Melo',
            cpf: '00000014141',
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

        //escrevendo nos input -> Dados
        cy.get('input[placeholder="Nome completo"]').type(deliver.name)
        cy.get('input[placeholder="CPF somente números"]').type(deliver.cpf)
        cy.get('input[placeholder="E-mail"]').type(deliver.email)
        cy.get('input[placeholder="Whatsapp"]').type(deliver.whatsapp)

        //escrevendo nos input -> Endereço
        cy.get('input[placeholder="CEP"]').type(deliver.address.postalcode)
        cy.get('input[value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[placeholder="Complemento"]').type(deliver.address.details)
        //verificando valor do input se e correspondente ao CEP
        cy.get('input[placeholder="Rua"]').should('have.value', deliver.address.street)
        cy.get('input[placeholder="Bairro"]').should('have.value', deliver.address.district)
        cy.get('input[placeholder="Cidade/UF"]').should('have.value', deliver.address.city_state)

        //selecionar metodo de entrega MOTO
        cy.contains('.delivery-method li', deliver.delivery_method).click()

        //fazer download da CNH
        cy.get('input[accept^="image"]').attachFile(deliver.cnh)

        //click para fazer o cadastro
        cy.get('form button[type="submit"]').click()

        const expectMessage =
        "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."

        //verificar se teve sucesso no cadastro
        cy.get('.swal2-container .swal2-html-container').should("have.text", expectMessage)

        //fecha modal
        cy.get('button[class^="swal2-confirm swal2-styled"]').click()


    })

    it("CPF incorreto", () => {

        //visitar site
        cy.visit('https://buger-eats.vercel.app/')

        //click para ir para o formulario
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        //dados que sera inserido
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

        //escrevendo nos input -> Dados
        cy.get('input[placeholder="Nome completo"]').type(deliver.name)
        cy.get('input[placeholder="CPF somente números"]').type(deliver.cpf)
        cy.get('input[placeholder="E-mail"]').type(deliver.email)
        cy.get('input[placeholder="Whatsapp"]').type(deliver.whatsapp)

        //escrevendo nos input -> Endereço
        cy.get('input[placeholder="CEP"]').type(deliver.address.postalcode)
        cy.get('input[value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[placeholder="Complemento"]').type(deliver.address.details)
        //verificando valor do input se e correspondente ao CEP
        cy.get('input[placeholder="Rua"]').should('have.value', deliver.address.street)
        cy.get('input[placeholder="Bairro"]').should('have.value', deliver.address.district)
        cy.get('input[placeholder="Cidade/UF"]').should('have.value', deliver.address.city_state)

        //selecionar metodo de entrega MOTO
        cy.contains('.delivery-method li', deliver.delivery_method).click()

        //fazer download da CNH
        cy.get('input[accept^="image"]').attachFile(deliver.cnh)

        //click para fazer o cadastro
        cy.get('form button[type="submit"]').click()

        //validacao da mensagem de erro
        cy.get('.alert-error').should("have.text", "Oops! CPF inválido")
    })
})