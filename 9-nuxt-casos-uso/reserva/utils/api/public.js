export const usePublicApi = () => {
    const listEventos = async () => {
        return await useFetch(`https://iza-saas-api-production.up.railway.app/public/eventos`);
    }

    return { 
        listEventos
    }
}