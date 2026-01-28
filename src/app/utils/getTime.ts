export const getTime = (): number => {
    const date: Date = new Date();

    return date.getHours() * 60 + date.getMinutes();
}

export const compare = (inicioExpediente: string, fimExpediente: string): boolean => {
    const [hoursInicio,minutesInicio] = inicioExpediente.split(":").map(Number);
    const [hoursFim,minutesFim] = fimExpediente.split(":").map(Number);
    
    const inicio = (hoursInicio as number) * 60  + (minutesInicio as number);
    const fim = (hoursFim as number) * 60  + (minutesFim as number);

    const time = getTime();

    if(inicio <= fim){
        if(time >= inicio && time <= fim){
            return true;
        }
        return false
    }

    if(inicio > fim){
        if(time >= inicio || time <= fim){
                return true;
        }
        return false
    }

    return false;
}