export const useApi = () => {
    
    const url = () => {
        return Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15);
    }
    
    return {
        url
    }
}

/*

get         : retorna um objeto pelo seu id                                                 : users/1
find        : retorna um objeto filtrado por um atributo na url                             : users/login/admin
filter      : retorna uma lista de objetos filtrados por um atributo                        : users/role/ADMIN
localize    : retorna uma lista de objetos filtrados pelo campo localiza                    : users/localize/my name is
search      : retorna uma lista de objetos filtrados por parametros                         : users?role=ADMIN&active=true
select      : retorna todos os objetos abreviados {id, nome, descricao} ordenados por name  : users/select

create      : POST      : Criar um novo objeto criando um identificador único
update      : PUT       : Atualiza um objeto identificado pelo seu id
save        : POST      : Cria ou atualiza o objeto recebido com um id predefinido manualmente
modify      : PATCH     : Atualiza parcialmente as características de um objeto
change      : PATCH     : Modifica um único atributo de um objeto
delete      : DELETE    : Determina que o objeto não mais fará parte dos recursos disponíveis na aplicação

*/

