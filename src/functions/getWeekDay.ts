
//ESTA FUNÇÃO RETORNA O DIA, DA SEMANA, DE HOJE
export const getWeekDay = () => {
     return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date());
}