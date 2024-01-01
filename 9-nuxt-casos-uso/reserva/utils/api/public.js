export const usePublicApi = () => {
    const {api,waiting} = useApi();

    const listEventos = async () => {
        return await useFetch(`https://iza-saas-api-production.up.railway.app/public/eventos`);
    }

    const listEventosAxios = () => {
        return api.get(`/public/eventos`);
    }

    return {
        waiting,

        listEventos,
        listEventosAxios,
    }
}