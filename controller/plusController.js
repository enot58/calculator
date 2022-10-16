class PlusController {
    getResult (req, res) {
        const {numberOne, numberTwo} = req.query;
        let result = Number(numberOne) + Number(numberTwo);
        return res.send(`${result}`)
    }
}


export default new PlusController();