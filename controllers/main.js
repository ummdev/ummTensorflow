const tf = require('@tensorflow/tfjs');
const firestore = require('./../models/firebase');
const Validator = require('validatorjs');

const Main = function (req, res) {
    const rules = {
        index: 'required'
    }

    let validation = new Validator(req.body, rules);
    validation.passes(function () {
        const model = tf.sequential();
        model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
        model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

        firestore.collection('tensorFlow').doc(Number(req.body.index)).get().then((data) => {
            const dataset = data.data()['0'].map((value) => Number(value))
            console.log(dataset)
            res.status(200).json({ success: true, predict: model.predict(tf.tensor2d(dataset, [dataset.length, 1])).dataSync()[0] })
        })
    });
    validation.fails(function () {
        res.status(400).json({ success: false, massage: 'no paremeter'})
    })
}
module.exports = Main