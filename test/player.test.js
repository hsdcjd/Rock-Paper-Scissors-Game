import chai, { expect } from 'chai';
import Player from '../src/player.js';


describe('Basic tests for the Player class', () => {
  let player;

  beforeEach(() => {
    player = new Player('Catherine');
  });

  describe('test for the name', () => {
    it('should have a name property', () => {
      expect(player.name).to.equal('Catherine');
    });
  });

  describe('test for the score property of my', () => {
    it('should have a myScore value of zero on creation', () => {
      expect(player.myScore).to.equal(0);
    });
  });

  describe('test for the score property of copmuter', () => {
    it('should have a computerScore value of zero on creation', () => {
      expect(player.computerScore).to.equal(0);
    });
  });

  describe('test for checking the updateScore function for my', () => {
    it('should increment myScore by 30 on a win', () => {
      player.updateScore('win');
      expect(player.myScore).to.equal(30);
    });

    it('should increment computerScore by 30 on a lose', () => {
      player.updateScore('lose');
      expect(player.computerScore).to.equal(30);
    });

    it('should increment both scores by 10 on draw', () => {
      player.updateScore('draw');
      expect(player.myScore).to.equal(10);
      expect(player.computerScore).to.equal(10);
    });
  });
});
