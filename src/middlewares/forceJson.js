export const Forcejson = (req,res,next) => {
    res.setHeader("Accept", "application/json");
    next();
}