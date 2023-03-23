import chai, { expect } from 'chai';
import Draw from '../src/draw.js';

    describe('Basic tests for the Drawer class', () => {
    let draw;

    beforeEach(() => {
        draw = new Draw();
    });

    describe('Setup tests for the Player', () => {
        it('should set the player property', () => {
            draw.setup('player1');
            expect(draw.player).to.equal('player1');
        });
    });

    describe('currentPlayer', () => {
        it('should return the current player', () => {
            draw.setup('player1');
            expect(draw.currentPlayer()).to.equal('player1');
        });
    });


    describe('playRockPaperScissors', () => {
        it('should return "win" if the user wins', () => {
            expect(draw.playRockPaperScissors('rock', 'scissors')).to.equal('win');
        });

        it('should return "lose" if the user loses', () => {
            expect(draw.playRockPaperScissors('rock', 'paper')).to.equal('lose');
        });

        it('should return "draw" if there is a tie', () => {
                expect(draw.playRockPaperScissors('rock', 'rock')).to.equal('draw');
        });
    });

    describe('getComputerRandomSelection', () => {
        it('should return "rock", "paper", or "scissors"', () => {
            const options = ['rock', 'paper', 'scissors'];
            expect(options).to.include(draw.getComputerRandomSelection());
        });
    });
});
