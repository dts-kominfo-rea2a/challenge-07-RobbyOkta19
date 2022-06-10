const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (status) => {
  try {
    let dataIXX = await promiseTheaterIXX();
    let datavgc = await promiseTheaterVGC();

    let dataAll = dataIXX.concat(datavgc);

    return dataAll.filter((e) => e.hasil == status).length;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  promiseOutput,
};
