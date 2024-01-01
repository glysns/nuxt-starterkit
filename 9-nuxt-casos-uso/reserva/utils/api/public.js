export const usePublicaApi = () => {
    const getCep = async (id) => {
        console.log('CEP RECEBIDO', id)
        id = id.toString().replaceAll(/\D/g,'')
        console.log('CEP TRANSFORMADO', id)
        return await useFetch(`https://viacep.com.br/ws/${id}/json/`);
    }

    return {
        getCepMock,
        getCep
        
    }
}