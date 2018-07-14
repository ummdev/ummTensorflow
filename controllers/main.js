const tf = require('@tensorflow/tfjs');
const firebase = require('./../models/firebase');
const Main = function (req, res) {

    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
    model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });
    
    res.status(200).json({ success: true, predict: model.predict(tf.tensor2d([5,2,3,4], [4, 1])).dataSync()[0] })
}
module.exports = Main