import React, { useEffect } from "react";
import { Component } from "react";
import sendValue from "./Person2";
import X from "./2.jpeg";
import Card from "./Card";
const isEthereumAddress = require('is-ethereum-address');

var ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "_superAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    name: "addAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "admins",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokens",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenOwner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "burnTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "day",
        type: "uint256",
      },
    ],
    name: "lockTimePeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_quantity",
        type: "uint256",
      },
    ],
    name: "lockTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lockTransfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lockTransferContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenOwner",
        type: "address",
      },
    ],
    name: "lockedBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "mintTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    name: "removeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokens",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokens",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_quantity",
        type: "uint256",
      },
    ],
    name: "unlockTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockTransferContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

var address = "";

var Web3 = require("web3");

let ethereum = "";
// 
// let contractAddress = "0x6Cae6bB83f87E09bB65b839a1254B6AF1A547BFf";
let contractAddress = "0xe4417e795E34467d416df25D89d044315b847351";
let contract = "";
var web3 = "";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "x",
      numb:"0",
      result: [],
      avg: 0,
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
     fetch(
        "http://api.etherscan.io/api?module=account&action=tokentx&address=0x1e1d626c683901F03B83d571aF4c8DEBc24E3a05&startblock=0&endblock=999999999&sort=desc&apikey=F9AE6HQGAF6DNNBCNXNJWX3APPP21SVYQ4"
      )
        .then((res) => {
          // console.log("st", res);
          return res.json();
        })
        .then((res) => {
          console.log("f", res);
          this.setState({  result: res.result });
        })
        .catch((err) => {
          console.log(err);
        });
    
    if (window.web3) {
      web3 = new Web3(window.web3.currentProvider);
      window.ethereum.enable();
      contract = new web3.eth.Contract(ABI, contractAddress);
      address = await web3.eth.getAccounts();
      let balance = await contract.methods.balanceOf(address[0]).call()
      balance = await web3.utils.fromWei(balance.toString())
      this.setState({avg:balance})
      
    } else {
      alert("INSTALL METAMASK");
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleChangeNumber = (event) => {
    this.setState({
      numb: event.target.value,
    });
  };

  lockTokens = async () => {
    if (isNaN(this.state.numb)) {
      alert("NOT A NUMBER");
    } else {
      address = await web3.eth.getAccounts();
      let amount = await web3.utils.toWei(this.state.numb.toString());
      let rawTx = {
        from: address[0],
        to: contractAddress,
        gasLimit: 50000,
        data: contract.methods.lockTokens(amount).encodeABI(),
      };
      await web3.eth.sendTransaction(rawTx);
    }
  };

  approveAdmin = async () => {
    if (!isEthereumAddress(this.state.value.toString())) {
      alert("NOT A VALID ADDRESS");
    } else {
      address = await web3.eth.getAccounts();
      let rawTx = {
        from: address[0],
        to: contractAddress,
        gasLimit: 50000,
        data: contract.methods
          .addAdmin(this.state.value.toString())
          .encodeABI(),
      };
      await web3.eth.sendTransaction(rawTx);
    }
  };

  timeLock = async () => {
    if (isNaN(this.state.numb) || this.state.numb.toString().includes(".")) {
      alert("INSERT WHOLE NUMBER");
    } else {
      address = await web3.eth.getAccounts();
      let rawTx = {
        from: address[0],
        to: contractAddress,
        gasLimit: 50000,
        data: contract.methods
          .lockTimePeriod(this.state.numb.toString())
          .encodeABI(),
      };
      await web3.eth.sendTransaction(rawTx);
    }
  };

  mint = async () => {
    if (isNaN(this.state.numb)) {
      alert("NOT A NUMBER");
    } else {
      address = await web3.eth.getAccounts();
      let amount = await web3.utils.toWei(this.state.numb.toString());
      let rawTx = {
        from: address[0],
        to: contractAddress,
        gasLimit: 50000,
        data: contract.methods.mintTokens(amount).encodeABI(),
      };
      await web3.eth.sendTransaction(rawTx);
    }
  };

  lockContract = async () => {
    // if(isNaN(this.state.value)){
    // alert("NUMBER DONT NEEDED")
    // }else{
    address = await web3.eth.getAccounts();
    let rawTx = {
      from: address[0],
      to: contractAddress,
      gasLimit: 50000,
      data: contract.methods.lockTransferContract().encodeABI(),
    };
    await web3.eth.sendTransaction(rawTx);
    // }
  };

  burn = async () => {
    if (isNaN(this.state.numb)) {
      alert("NOT A NUMBER");
    } else {
      address = await web3.eth.getAccounts();
      let amount = await web3.utils.toWei(this.state.numb.toString());
      let rawTx = {
        from: address[0],
        to: contractAddress,
        gasLimit: 50000,
        data: contract.methods.burnTokens(amount).encodeABI(),
      };
      await web3.eth.sendTransaction(rawTx);
    }
  };

  removeAdmin = async () => {
    if (!isEthereumAddress(this.state.value.toString())) {
      alert("NOT A VALID ADDRESS");
    } else {
      address = await web3.eth.getAccounts();
      let rawTx = {
        from: address[0],
        to: contractAddress,
        gasLimit: 50000,
        data: contract.methods
          .removeAdmin(this.state.value.toString())
          .encodeABI(),
      };
      await web3.eth.sendTransaction(rawTx);
    }
  };
  unlockContract = async () => {
    address = await web3.eth.getAccounts();
    let rawTx = {
      from: address[0],
      to: contractAddress,
      gasLimit: 50000,
      data: contract.methods.unlockTransferContract().encodeABI(),
    };
    await web3.eth.sendTransaction(rawTx);
  };
  unlockTokens = async () => {
    if (isNaN(this.state.numb)) {
      alert("NOT A NUMBER");
    } else {
      address = await web3.eth.getAccounts();
      let amount = await web3.utils.toWei(this.state.numb.toString());
      let rawTx = {
        from: address[0],
        to: contractAddress,
        gasLimit: 50000,
        data: contract.methods.unlockTokens(amount).encodeABI(),
      };
      await web3.eth.sendTransaction(rawTx);
    }
  };
  transfer = async () => {
    if (isNaN(this.state.numb) || !isEthereumAddress(this.state.value.toString())) {
      alert("NOT A NUMBER/ADDRESS");
    } else {
      address = await web3.eth.getAccounts();
      let amount = await web3.utils.toWei(this.state.numb.toString());
      let rawTx = {
        from: address[0],
        to: contractAddress,
        gasLimit: 50000,
        data: contract.methods.transfer(this.state.value,amount).encodeABI(),
      };
      await web3.eth.sendTransaction(rawTx);
    }
  };

  render() {
    // let hash =
    //   "0x17b780428ce764d8888385e3629d04bbec546fe778faf9d68c4576b9fdee63d5";
    let filtered = [];
    if (this.state.result != 0) {
      filtered = this.state.result.filter((value) => value.contractAddress.toString().toLowerCase() === contractAddress.toString().toLowerCase());
    }
    return (
      <div className="App">
        <img src={X} alt="Hello" height="300px" width="300px" />

        <br />
        <div className="avg">
          <span className="card-label">Balance:</span> {this.state.avg}
        </div>
        <br />
        <div className="avg">
          <span className="card-label">Address:</span>
        </div>
        <br />
        <input
          style={{ height: "30px", width: "319px" }}
          onChange={this.handleChange}
          font-size="100"
        />
        <br />
        <br />
        <div className="avg">
          <span className="card-label">Amount:</span>
        </div>
        <br />
        <input
          style={{ height: "30px", width: "319px" }}
          onChange={this.handleChangeNumber}
          font-size="100"
          type="number"
        />
        <br />
        <br />
        <button onClick={() => this.lockTokens()} className="button">
          Lock Tokens
        </button>
        <button className="button" onClick={() => this.approveAdmin()}>
          Approve Admin
        </button>
        <button className="button" onClick={() => this.timeLock()}>
          Time Lock
        </button>

        <br />
        <button className="button" onClick={() => this.mint()}>
          Mint
        </button>
        <button className="button" onClick={() => this.lockContract()}>
          Lock Contract
        </button>
        <button className="button" onClick={() => this.burn()}>
          Burn
        </button>

        <br />
        <button className="button" onClick={() => this.removeAdmin()}>
          Remove Admin
        </button>
        <button className="button" onClick={() => this.unlockContract()}>
          Unlock Contract
        </button>
        <button className="button" onClick={() => this.unlockTokens()}>
          Unlock Tokens
        </button>
        <br />
        <button className="button" onClick={() => this.transfer()}>
          Transfer
        </button>
        {/* <button className="button" onClick={() => this.burn()}>
          Button2
        </button>
        <button className="button" onClick={() => this.burn()}>
          Button 3
        </button> */}
        {this.state.result != 0 &&
          filtered.map((value, index) => {
            return (
              <Card
                key={index}
                tHash={value.hash}
                from={value.from}
                to={value.to}
                value={(
                  web3.utils.fromWei(value.value.toString())
                  // Number(value.value) / Number(1000000000000000000)
                ).toString()}
              />
            );
          })}
        {/* <ul>
               {items.map(item => (
                   <li key = {item.id} >
                       {item.name}
                   </li>
                   
               ) )};
           </ul> */}
      </div>
    );
  }
}

export default Person;
