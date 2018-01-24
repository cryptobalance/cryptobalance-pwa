
const utils = {
  formatBtc: ({btcFormat, amount}) => {
    const {divideBy, decimalCount} = btcFormat

    const fixedBalance = (amount / divideBy).toFixed(decimalCount)
    return fixedBalance + ' ' + btcFormat.name
  },
}
