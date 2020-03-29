import React, { useEffect } from 'react'
import { Component } from 'react'
import sendValue from './Person2'
import X from './2.jpeg'

var ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "tokenOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "_superAdmin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_admin",
				"type": "address"
			}
		],
		"name": "addAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "admins",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenOwner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokens",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenOwner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			}
		],
		"name": "burnTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "day",
				"type": "uint256"
			}
		],
		"name": "lockTimePeriod",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_quantity",
				"type": "uint256"
			}
		],
		"name": "lockTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lockTransfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lockTransferContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenOwner",
				"type": "address"
			}
		],
		"name": "lockedBalanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			}
		],
		"name": "mintTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_admin",
				"type": "address"
			}
		],
		"name": "removeAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokens",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokens",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_quantity",
				"type": "uint256"
			}
		],
		"name": "unlockTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unlockTransferContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

var address = ''

var Web3 = require('web3')

let ethereum = ''
let contractAddress = '0x06146b5C3ADCDCeFe3ae6992393ae21bFA463a7b'
let contract = ''
var web3 = ''


class Person extends Component {

	constructor(props) {
		super(props)
		this.state =
		{
			value: 'x'
		}
		// this.handleChange = this.handleChange.bind(this);
	}

	async componentDidMount() {
		if (window.web3) {
			web3 = new Web3(window.web3.currentProvider);
			contract = new web3.eth.Contract(ABI,contractAddress);
			window.ethereum.enable();
		  }
		  else{
			  alert("INSTALL METAMASK")
		  }

	}

	handleChange = (event) => {
		this.setState({
			value: event.target.value

		})
	}

	lockTokens = async ()=>{
		if(isNaN(this.state.value)){
			alert("NOT A NUMBER")
		}else{
			address = await web3.eth.getAccounts();
			let amount = await web3.utils.toWei(this.state.value.toString())
			let rawTx={
				from:address[0],
				to:contractAddress,
				data:contract.methods.lockTokens(amount).encodeABI()
			}
			await web3.eth.sendTransaction(rawTx)
		}
		

	}

	approveAdmin = async ()=>{
		if(!this.state.value.toString().includes('0x')){
			alert("NOT A NUMBER")
		}else{
			address = await web3.eth.getAccounts();
			let rawTx={
				from:address[0],
				to:contractAddress,
				data:contract.methods.addAdmin(this.state.value.toString()).encodeABI()
			}
			await web3.eth.sendTransaction(rawTx)
		}
	}

	timeLock = async ()=>{
		if(isNaN(this.state.value) || this.state.value.toString().includes('.')){
			alert("INSERT WHOLE NUMBER")
		}else{
			address = await web3.eth.getAccounts();
			let rawTx={
				from:address[0],
				to:contractAddress,
				data:contract.methods.lockTimePeriod(this.state.value.toString()).encodeABI()
			}
			await web3.eth.sendTransaction(rawTx)
		}
	}

	mint = async ()=>{
		if(isNaN(this.state.value)){
			alert("NOT A NUMBER")
		}else{
			address = await web3.eth.getAccounts();
			let amount = await web3.utils.toWei(this.state.value.toString())
			let rawTx={
				from:address[0],
				to:contractAddress,
				data:contract.methods.mintTokens(amount).encodeABI()
			}
			await web3.eth.sendTransaction(rawTx)
		}
	}

	lockContract = async ()=>{
		// if(isNaN(this.state.value)){
			// alert("NUMBER DONT NEEDED")
		// }else{
			address = await web3.eth.getAccounts();
			let rawTx={
				from:address[0],
				to:contractAddress,
				data:contract.methods.lockTransferContract().encodeABI()
			}
			await web3.eth.sendTransaction(rawTx)
		// }
	}

	burn = async ()=>{
		if(isNaN(this.state.value)){
			alert("NOT A NUMBER")
		}else{
			address = await web3.eth.getAccounts();
			let amount = await web3.utils.toWei(this.state.value.toString())
			let rawTx={
				from:address[0],
				to:contractAddress,
				data:contract.methods.burnTokens(amount).encodeABI()
			}
			await web3.eth.sendTransaction(rawTx)
		}
	}


	render() {


		return (


			<div className="App" >


				<img src={X} alt="Hello" height="300px" width="300px" />

				<br />
				<input style={{ "height": "30px", "width": "319px" }} onChange={this.handleChange} font-size="100" />
				<br />
				<br />
				<button onClick={() => this.lockTokens()} className="button" >Lock Tokens</button>
				<button className="button" onClick={() => this.approveAdmin()} >Approve Admin</button>
				<button className="button" onClick={() => this.timeLock()}>Time Lock</button>

				<br />
				<button className="button" onClick={() => this.mint()} >Mint</button>
				<button className="button" onClick={() => this.lockContract()}>Lock Contract</button>
				<button className="button" onClick={() => this.burn()}>Burn</button>

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

export default Person