const bitcoinlib = require('bitcoinjs-lib')

function isValidBitcoinAddress(address) {
  try {
    bitcoinlib.address.toOutputScript(address, bitcoinlib.networks.bitcoin)
    return true
  } catch(err) {
    return false
  }
}

module.exports = {
  isValidBitcoinAddress,
}
