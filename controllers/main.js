const tf = require('@tensorflow/tfjs');
const firestore = require('./../models/firebase');
const settings = {timestampsInSnapshots: true};
firestore.settings(settings)
const Main = function (req, res) {

    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
    model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });


    firestore.collection('tensorFlow').doc('1').get().then((data)=>{
        const dataset = data.data()['0'].map((value)=> Number(value))
        console.log(dataset)
        res.status(200).json({ success: true, predict: model.predict(tf.tensor2d(dataset, [dataset.length, 1])).dataSync()[0] })
    })

   
}
module.exports = Main