pragma solidity 0.6.0;

// safemath library for addition and subtraction

library SafeMath {
    function safeAdd(uint a, uint b) internal pure returns (uint c) {
        c = a + b;
        require(c >= a);
    }
    function safeSub(uint a, uint b) internal pure returns (uint c) {
        require(b <= a);
        c = a - b;
    }
    function safeMul(uint a, uint b) internal pure returns (uint c) {
        c = a * b;
        require(a == 0 || c / a == b);
    }
    function safeDiv(uint a, uint b) internal pure returns (uint c) {
        require(b > 0);
        c = a / b;
    }
}


// actual contract

contract NEOCoin{
    
    using SafeMath for uint256;


    string  _name;
    string  _symbol;
    uint256 _totalSupply;
    uint256 _maxSupply;
    uint256 _decimal;
    uint256 _days;
    uint256 _oneDay = 24*60*60;
    address public _superAdmin;
    mapping (address => bool) public admins;
    bool public lockTransfer = false;
    
    
    uint256 lockedTokens = 0;
    
    
    mapping(address => uint256) _balances;
    mapping(address => mapping (address => uint256)) _allowances;
    mapping(address => uint256) _lockedBalances;
    
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
    event Transfer(address indexed from, address indexed to, uint tokens);
    
    
    modifier isContractNotLocked(){
        require(_days<= block.timestamp || lockTransfer == false);
        _;
    }
    
    modifier isTransferNotLocked(){
        require(lockTransfer == false);
        _;
    }
    
    modifier onlySuperAdmin(){
        require(msg.sender==_superAdmin,"NOT SUPER ADMIN");
        _;
    }
    
    modifier onlyAdmin(){
        require(admins[msg.sender] == true, "NOT ADMIN");
        _;
    }
    
    
    constructor() public {
        _name = "NEO Coin";
        _symbol = "NEO";
        _decimal = 18;
        _totalSupply = 1000000000000000000000000000000000000000 * 10 ** _decimal;
        _maxSupply = _totalSupply;
        _balances[msg.sender] = _totalSupply;
        _superAdmin = msg.sender;
        admins[_superAdmin] = true;
    }
    
    
    
    
    function totalSupply() external view returns (uint256) {
        return _totalSupply;
    }
    
    function balanceOf(address _tokenOwner) external view returns (uint256) {
        return _balances[_tokenOwner];
    }
    
     
    function lockedBalanceOf(address _tokenOwner) external view returns (uint256) {
        return _lockedBalances[_tokenOwner];
    }
    
    function transfer(address _to, uint256 _tokens) external isContractNotLocked isTransferNotLocked returns (bool) {
        _transfer(msg.sender, _to, _tokens);
        return true;
    }
    
    function _transfer(address _sender, address _recipient, uint256 _amount) internal {
        require(_sender != address(0), "ERC20: transfer from the zero address");
        require(_recipient != address(0), "ERC20: transfer to the zero address");

        _balances[_sender] = _balances[_sender].safeSub(_amount);
        _balances[_recipient] = _balances[_recipient].safeAdd(_amount);
        emit Transfer(_sender, _recipient, _amount);
    }
    
    function allowance(address _tokenOwner, address _spender) external view returns (uint256) {
        return _allowances[_tokenOwner][_spender];
    }
    
    function approve(address _spender, uint256 _tokens) external isContractNotLocked isTransferNotLocked returns (bool) {
        _approve(msg.sender, _spender, _tokens);
        return true;
    }
    
    function _approve(address _owner, address _spender, uint256 _value) internal {
        require(_owner != address(0), "ERC20: approve from the zero address");
        require(_spender != address(0), "ERC20: approve to the zero address");

        _allowances[_owner][_spender] = _value;
        emit Approval(_owner, _spender, _value);
    }
    
    
    function transferFrom(address _from, address _to, uint256 _tokens) external  isContractNotLocked isTransferNotLocked returns (bool) {
        _transfer(_from, _to, _tokens);
        _approve(_from, msg.sender, _allowances[_from][msg.sender].safeSub(_tokens));
        return true;
    }
    
    
    function lockTokens(uint256 _quantity) external isContractNotLocked onlyAdmin {
        require(_quantity <= _balances[msg.sender], "Greater than total supply");
        _balances[msg.sender] = _balances[msg.sender].safeSub(_quantity);
        _lockedBalances[msg.sender] = _lockedBalances[msg.sender].safeAdd(_quantity);
    }
    
    
    function unlockTokens(uint256 _quantity) external isContractNotLocked onlyAdmin {
        require(_quantity <= _lockedBalances[msg.sender], "Greater than total supply");
        _balances[msg.sender] = _balances[msg.sender].safeAdd(_quantity);
        _lockedBalances[msg.sender] = _lockedBalances[msg.sender].safeSub(_quantity);
    }
    
    
    function lockTimePeriod(uint256 day) external onlyAdmin {
        require(_days>0, "ZERO DAYS NOT ALLOWED");
        _days = day*_oneDay;
    }
    
    function lockTransferContract() external onlyAdmin {
        lockTransfer = true;
    }
    
    function unlockTransferContract() external onlyAdmin {
        lockTransfer = false;
    }
    
    
    function addAdmin(address _admin) external onlySuperAdmin {
        admins[_admin] = true;
    }
    
    function removeAdmin(address _admin) external onlySuperAdmin {
        admins[_admin] = false;
    }
    
    function mintTokens(uint256 quantity) external onlyAdmin isContractNotLocked {
        require(quantity + _totalSupply <= _maxSupply, "CANNOT MINT");
        _totalSupply = _totalSupply.safeAdd(quantity);
        _balances[msg.sender] = _balances[msg.sender].safeAdd(quantity);
    }
    
    function burnTokens(uint256 quantity) external onlyAdmin isContractNotLocked {
        _totalSupply = _totalSupply.safeSub(quantity);
        _balances[msg.sender] = _balances[msg.sender].safeAdd(quantity);
    }
 
}