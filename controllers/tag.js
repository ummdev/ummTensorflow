const firestore = require('./../models/firebase');

const Tag = function (req, res) {
    firestore.collection('tag').doc('eVF8kddt3jXfGrjkDMF4').get().then((data) => {
        const dataset = data.data()['0'].map((value) => Number(value))
        const item = dataset[Math.floor(Math.random()*dataset.length)];
        res.status(200).json({ success: true, massage: item })
    })
}
module.exports = Tag