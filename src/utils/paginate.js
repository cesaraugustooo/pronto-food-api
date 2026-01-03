export function paginate(){
    return {}
}

export const getPaginateParams = (req) => {
    const skip = Number(req.query.skip) || 0 ;
    const take = Number(req.query.take) || 10 ;
    return { skip, take }
}