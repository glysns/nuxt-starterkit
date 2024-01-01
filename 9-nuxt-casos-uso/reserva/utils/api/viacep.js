
//https://www.w3schools.com/js/js_arrow_function.asp
export const useViaCepApi = () => {
    
    const getCep = async (id) => await useFetch(`https://viacep.com.br/ws/${id}/json/`);

    return {
        getCep
    }
}