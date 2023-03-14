export const setting = {
    CONTRACT_ADDRESS: "0x93756c4cB5D8974959507F5Fc70A800a9b63e3a3",
    CAHINID: '0x250',
    DECIMALS: 1,
    CHAIN_NAME: 'Astar',
    COIN_NAME: 'Astar',
    RPC_URLS: "https://astar-mainnet.g.alchemy.com/v2/8Zfh4gnK2X2Z25WXQnjo70PvzbJ4EWt5",
    TOKEN_PRICE: '200',
    ABI: [
        'function totalSupply() public view virtual override returns (uint256)',
        'function preMint(uint _mintAmount, bytes32[] memory _merkleProof, uint alloc) public payable',
    ],
}