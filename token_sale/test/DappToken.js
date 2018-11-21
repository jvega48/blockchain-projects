const DappToken = artifacts.require('../contracts/DappToken.sol')

contract('DappToken', (accounts) =>{
    it('set the total suply upon deployment', () =>{
        return DappToken.deployed().then((instance) =>{
            tokenInstance = instance
            return tokenInstance.totalSupply()
        }).then( (totalSupply) =>{
            assert.equal(totalSupply.toNumber(), 100000, 'set total supply to 100000')
        })
    })
})