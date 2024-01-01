export const usePublicApi = () => {
    const {api,waiting} = useApi();

    const listEventosFetch = async () => {
        return await useFetch(`https://iza-saas-api-production.up.railway.app/public/eventos`);
    }

    const listEventos = () => {
        return api.get(`/public/eventos`);
    }

    return {
        waiting,

        listEventos,
        listEventosFetch
    }
}