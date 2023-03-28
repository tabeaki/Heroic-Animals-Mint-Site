export const setting = {
    CONTRACT_ADDRESS: "0xA7035938D7BD845Acf6d90e7a1C1034340671037",
    CAHINID: '0x250',
    DECIMALS: 1,
    CHAIN_NAME: 'Astar',
    COIN_NAME: 'Astar',
    RPC_URLS: "https://astar-mainnet.g.alchemy.com/v2/8Zfh4gnK2X2Z25WXQnjo70PvzbJ4EWt5",
    TOKEN_PRICE: '200',
    ABI: [
        'function totalSupply() public view virtual override returns (uint256)',
        'function getConsumedAllocation(address target) external view virtual returns(uint16)',
        'function mintAllLimits(uint256 amount, bytes32[] memory proof, uint256 allocation) public payable',
        'function mint(uint256 amount) external payable',
    ],
}