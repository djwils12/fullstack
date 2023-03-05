
exports.getData = (req, res) => {
    // Get data from database
    const data = {
        subject: 'IFT 458',
        grade: 'A',
        date: '01/01/1990'
    }
    res.send(`Hello world! from grade GET ${JSON.stringify(data)}`);
};
exports.postData = (req, res) => res.send('Hello world! from student POST');
exports.updateData = (req, res) => res.send('Hello world! from student PUT');
exports.deleteData = (req, res) => res.send('Hello world! from student DELETE');
