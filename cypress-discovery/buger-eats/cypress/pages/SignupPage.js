// class PascalCase{
//     camelCase()
// }

class SignupPage{

    go(){
        cy.visit('/')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillForm(deliver){
                cy.get('input[placeholder="Nome completo"]').type(deliver.name)
                cy.get('input[placeholder="CPF somente números"]').type(deliver.cpf)
                cy.get('input[placeholder="E-mail"]').type(deliver.email)
                cy.get('input[placeholder="Whatsapp"]').type(deliver.whatsapp)

                cy.get('input[placeholder="CEP"]').type(deliver.address.postalcode)
                cy.get('input[value="Buscar CEP"]').click()
                cy.get('input[name="address-number"]').type(deliver.address.number)
                cy.get('input[placeholder="Complemento"]').type(deliver.address.details)

                cy.get('input[placeholder="Rua"]').should('have.value', deliver.address.street)
                cy.get('input[placeholder="Bairro"]').should('have.value', deliver.address.district)
                cy.get('input[placeholder="Cidade/UF"]').should('have.value', deliver.address.city_state)
        
                cy.contains('.delivery-method li', deliver.delivery_method).click()
        
                cy.get('input[accept^="image"]').attachFile(deliver.cnh)
    }

    submit(){
        cy.get('form button[type="submit"]').click()
    }

    modalContentShouldBe(expectMessage){
        cy.get('.swal2-container .swal2-html-container').should("have.text", expectMessage)
    }

    alertMessageShouldBe(expectMessage){
        cy.get('.alert-error').should('have.text', expectMessage)
    }
}

export default new SignupPage;

