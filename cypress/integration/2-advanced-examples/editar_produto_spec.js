describe ('Lojinha', () =>{
    it('Editar Produto', () => {
        //visitando a página
        cy.visit('https://www.empyre.com.br/');
        
        //adicionando valor ao input
        cy.get('.header_desktop_search > .one_input > .one_input_field').type('Kit Sabonete Giorno Bagno 180g com 10 unidades');
        
        //click de pesquisa
        cy.get('.header_desktop_search > .one_input > .one_input_button').click();

        //click para abrir o produto
        cy.get('.products_item_title > h1 > a').click();

        //conferindo texto se é equivalente ao meu click e pesquisa
        cy.get('.product_info_heading > h1').should('have.text', 'Kit Sabonete Giorno Bagno 180g com 10 unidades');
    })
})