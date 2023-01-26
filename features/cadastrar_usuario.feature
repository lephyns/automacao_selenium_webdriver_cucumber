Feature: cadastro de usuário

    Este caso de uso permite que novos usuários possam se cadastrar no sistema para realizar operações de forma autenticada.

    Scenario: submeter formulário de cadastro com sucesso
        Given que acesso a página de cadastro do site Publicazo
        When submeto o formulário de cadastro com dados válidos
        Then devo ver a mensagem "Bem-vindo! Você se registrou com sucesso."