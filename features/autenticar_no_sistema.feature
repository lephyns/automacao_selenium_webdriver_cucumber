Feature: autenticar-se no sistema

    Scenario: submeter formulário de cadastro com sucesso
        Given que acesso a página de login do Publicazo
        When informo os dados válidos para login
        Then devo ver a mensagem "Logado com sucesso."