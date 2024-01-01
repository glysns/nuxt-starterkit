export const useBoasVindas = () => {
    
    const digaBemVindos = () => alert('Sejam todos bem-vindos'); 
    const digaBemVindo = (nome) => alert(`Seja bem-vindo ${nome}` ); 
    
    return {
        digaBemVindos,
        digaBemVindo
    }
}