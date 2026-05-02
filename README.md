# Basketball Stats Tracker — Object & Array Iteration Lab

This project implements a set of JavaScript functions that extract and analyze data from a nested game stats object representing two NBA teams. The goal is to practice object iteration, array iteration, and nested data access patterns — skills that are fundamental to working with API responses and real-world data structures in JavaScript.


## Functions to Implement

### Player Information
- `numPointsScored(playerName)` — returns points scored by the given player
- `shoeSize(playerName)` — returns shoe size of the given player
- `playerStats(playerName)` — returns the full stats object for the given player

### Team Information
- `teamColors(teamName)` — returns an array of the team's colors
- `teamNames()` — returns an array of both team names
- `playerNumbers(teamName)` — returns an array of jersey numbers for the given team

### Advanced
- `bigShoeRebounds()` — finds the player with the largest shoe size and returns their rebound count

## Setup

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npm test
```

Lint your code:

```bash
npx eslint index.js
```

## File Structure

```bash
├── index.js          # implement your functions here
├── indexTest.js      # pre-written test suite
├── helpers.js        # test environment setup (Chai, Sinon)
└── package.json
```

## Testing

Tests are written in `indexTest.js` using Jest and Chai. Each function has test cases that verify output against the `gameObject` data. Tests that pass display in green and failing tests show detailed error output to guide debugging.

Sample test structure:

```js
describe('numPointsScored', function () {
  it('should return points scored by a player', function () {
    expect(numPointsScored('Alan Anderson')).to.equal(22);
    expect(numPointsScored('Ben Gordon')).to.equal(33);
  });
});
```

Run tests frequently while implementing functions to verify each step before moving to the next.

## Code Quality

- Keep functions focused and single-purpose
- Avoid mutating the game object
- Remove `console.log()` statements before submission
- Handle edge cases where a player or team name may not exist
- Run ESLint before submitting and fix any reported issues


## Resources

- [Jest Documentation](https://jestjs.io/)
- [ESLint Documentation](https://eslint.org/)
- [Chai Documentation](https://www.chaijs.com/)
- [MDN: Object iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [MDN: Array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
