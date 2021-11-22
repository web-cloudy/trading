const Trade = require('./trade.model');

async function listTrade(req, res) {
  // console.log("dddddddd")
  try {
    const trades = await Trade.find()
    res.status(200).send(trades);
  } catch {
    res.status(400).send(err);
  }
}

async function createTrade(req, res) {

  const { tradeType, options, gearing, lifeSpan, entryPrice } = req.body;
  const startTime = Date.now();
  const endTime = Date.now() + lifeSpan * 1000 * 60;
  try {
    trade = new Trade({
      tradeType,
      options,
      gearing,
      entryPrice,
      startTime,
      endTime
    });


    const newTrade = await trade.save();
    const data = await Trade.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send({ err: "error" });
  }

}

async function updateTrade(req, res) {
  console.log(req.body);
  const {_id, outcome, result} = req.body;
  const updateData = await Trade.findByIdAndUpdate(_id, { outcome, result })
  // console.log(updateData)
  const data = await Trade.find();
  // console.log(data)
  res.status(200).send(data)
}

async function checkExpire() {
  const data = await Trade.find()
  try {
    for (var i = 0; i < data.length; i++) {
      if (data[i].endTime <= Date.now() && data[i].isExpired == false) {
        // console.log(data[i].endTime)
        // console.log(Date.now())
        try {
          const updateData = await Trade.findByIdAndUpdate(data[i].id, { isExpired: true })
          // console.log(updateData)
        }
        catch (err) {
          console.log(err)
        }
      }
    }
  }
  catch (err) {
    console.log(err)
  }
}
module.exports = { listTrade, createTrade, updateTrade, checkExpire }