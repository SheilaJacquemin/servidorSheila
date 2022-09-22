const ctrl = {};

ctrl.getUser = (req, res)=>{
    res.send({
            message: "hola"})
}
ctrl.postUser = (req, res)=>{
    res.send({
            message: "Peticion Post"})
}
ctrl.putUser = (req, res)=>{
    res.send({
            message: "Peticion Put"})
}
ctrl.deleteUser = (req, res)=>{
    res.send({
            message: "Peticion Delete"})
}
module.exports = ctrl;