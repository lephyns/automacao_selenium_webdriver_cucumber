Feature: pesquisar por anúncio

    Scenario: pesquisar por anúncio com sucesso

        Given que acesso a página inicial do Publicazo
        When pesquiso por um anúncio
        Then devo ver o anúncio publicado