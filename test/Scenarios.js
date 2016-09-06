var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
var Scenarios = require('../Scenarios')
describe('switchPokemon',function(){
  it('should switch the pokemon',function(){
    pokemon1 = {
      name: 'a',
      status: 'battling'
    }
    pokemon2 = {
      name: 'b',
      status: 'idle'
    }
    var player = {
      currentPokemon: pokemon1
    }
    var answer = {
      currentPokemon: {
        name: 'b',
        status: 'battling'
      }
    }
    var result = Scenarios.switchPokemon(player,pokemon1,pokemon2)
    expect(result).to.deep.equal(answer);
  })
})
