export const usePublicApi = () => {
    const {api} = useApi();
    const listEventos = async () => {
        return await useFetch(`https://iza-saas-api-production.up.railway.app/public/eventos`);
    }

    const listEventosAxios = async () => {
        return await api.post(`/public/eventos`);
    }

    return { 
        listEventos,
        listEventosAxios
    }
}