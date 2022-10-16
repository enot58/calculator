const checkNumber = (num) => {
    return typeof num === 'number' && !isNaN(num);
}


export default (req, res, next) => {
    //const {numberOne, numberTwo} = req.body;
    const {numberOne, numberTwo} = req.query;


    if (+numberOne === undefined || +numberTwo === undefined) {
        return  res.send(400, "Требуется отправить два числа")
    }

    if (!checkNumber(+numberOne) || !checkNumber(+numberTwo)) {
        return  res.send(400, "Поддерживаются только числовые значения")
    }
    next()
}