const tf = require('@tensorflow/tfjs');
const Main = function (req, res) {

    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
    model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });
    const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
    const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

    model.fit(xs, ys, { epochs: 10 }).then(() => {
        res.status(200).json({ success: true, message: model.predict(tf.tensor2d([5], [1, 1])).print() })
    });
    
}
module.exports = Main