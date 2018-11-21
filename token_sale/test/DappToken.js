const DappToken = artifacts.require('../contracts/DappToken.sol')

contract('DappToken', (accounts) =>{
    let tokenInstance;
    it('set the total suply upon deployment', () =>{
        return DappToken.deployed().then( (instance) =>{
            tokenInstance = instance;
            return tokenInstance.name()
        }).then( (name) => {
            assert.equal(name, 'Dapp Token', 'working name')
            return tokenInstance.symbol();
        }).then( (symbol)=> {
            assert.equal(symbol, 'Dapp', 'working symbol')
            return tokenInstance.standard();
        }).then( (standard)=> {
            assert.equal(standard, 'Dapp Token v1.0', 'standard symbol')
        })
    })

    it('set the total suply upon deployment', () =>{
        return DappToken.deployed().then((instance) =>{
            tokenInstance = instance
            return tokenInstance.totalSupply()
        }).then( (totalSupply) =>{
            assert.equal(totalSupply.toNumber(), 100000, 'set total supply to 100000')
            return tokenInstance.balanceOf(accounts[0]);
        }).then((adminBalance) =>{
            assert.equal(adminBalance.toNumber(), 100000, 'it allocated the initial balance to the admin')
        })
    })
})