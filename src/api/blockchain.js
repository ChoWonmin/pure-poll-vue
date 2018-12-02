const contractABI = [
  {
    constant: false,
    inputs: [
      {
        name: 'data',
        type: 'string'
      }
    ],
    name: 'saveData',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'num',
        type: 'uint256'
      },
      {
        name: 'ans',
        type: 'string'
      }
    ],
    name: 'setVotefInfo_1',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    name: 'qList',
    outputs: [
      {
        name: 'Qnum',
        type: 'uint256'
      },
      {
        name: 'answer',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: 'index',
        type: 'uint256'
      }
    ],
    name: 'viewData',
    outputs: [
      {
        name: '',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }
];

window.onload = function () {
  if (window.web3) {
    this.web3Provider = window.web3.currentProvider;
  } else {
    console.log('error');
  }
  web3 = new Web3(this.web3Provider);
};

// '0x9a41aA815537d679B0E6c0c78146457d10d98960'
const blockchain = {
  write: (value, defaultAccount) => {
    web3.eth.defaultAccount = defaultAccount;
    const contract = web3.eth.contract(contractABI);
    const app = contract.at('0x859baf87cb0a89532f210866535d1205105fcdf0');

    return new Promise(function (resolve, reject) {
      app.saveData.sendTransaction(value, function (e, r) {
        if (e) {
          reject(e);
        }
        resolve(r);
      });
    });
  }
};

export default blockchain;
