function numPointsScored(playerName) {
  const players = allPlayers();
  return players[playerName].points;
}

function shoeSize(playerName) {
  const players = allPlayers();
  return players[playerName].shoe;
}

function teamColors(teamName) {
  const teams = allTeams();
  for (const team of teams) {
    if (team.teamName === teamName) {
      return team.colors;
    }
  }
  return null;
}

function teamNames() {
  const teams = allTeams();
  return teams.map(team => team.teamName);
}
 function playerNumbers(teamName) {
  const teams = allTeams();
  for (const team of teams) {
    if (team.teamName === teamName) {
      const numbers = [];
      for (const player in team.players) {
        numbers.push(team.players[player].number);
      }
      return numbers;
    }
  }
  return [];
}

function playerStats(playerName) {
  const players = allPlayers();
  return players[playerName];
}
 
function bigShoeRebounds() {
  const players = allPlayers();
  let maxShoe = -Infinity;
  let reboundsForMax = null;

  for (const name in players) {
    const player = players[name];
    if (player.shoe > maxShoe) {
      maxShoe = player.shoe;
      reboundsForMax = player.rebounds;
    }
  }

  return reboundsForMax;
}
function bigShoeRebounds() {
  const players = allPlayers();
  let maxShoe = -Infinity;
  let reboundsForMax = null;

  for (const name in players) {
    const player = players[name];
    if (player.shoe > maxShoe) {
      maxShoe = player.shoe;
      reboundsForMax = player.rebounds;
    }
  }

  return reboundsForMax;
}




   function homeTeam() {
  return gameObject().home;
}

function awayTeam() {
  return gameObject().away;
}

function allTeams() {
  const game = gameObject();
  return [game.home, game.away];
}

function allPlayers() {
  const game = gameObject();
  const players = {};

  // add home players
  for (const name in game.home.players) {
    players[name] = game.home.players[name];
  }

  // add away players
  for (const name in game.away.players) {
    players[name] = game.away.players[name];
  }

  return players;
}

function gameObject() {

    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}
function mostPointsScored() {
  const players = allPlayers();
  let maxPoints = -Infinity;
  let topScorer = null;

  for (const name in players) {
    const player = players[name];
    if (player.points > maxPoints) {
      maxPoints = player.points;
      topScorer = name;
    }
  }

  return topScorer;
}

function winningTeam() {
  const teams = allTeams();
  let winningName = null;
  let highestScore = -Infinity;

  for (const team of teams) {
    let teamTotal = 0;
    for (const playerName in team.players) {
      teamTotal += team.players[playerName].points;
    }
    if (teamTotal > highestScore) {
      highestScore = teamTotal;
      winningName = team.teamName;
    }
  }

  return winningName;
}

function playerWithLongestName() {
  const players = allPlayers();
  let longest = null;

  for (const name in players) {
    if (!longest || name.length > longest.length) {
      longest = name;
    }
  }

  return longest;
}

function doesLongNameStealATon() {
  const players = allPlayers();
  const longestNamePlayer = playerWithLongestName();

  let maxSteals = -Infinity;
  let playerWithMostSteals = null;

  for (const name in players) {
    if (players[name].steals > maxSteals) {
      maxSteals = players[name].steals;
      playerWithMostSteals = name;
    }
  }

  return longestNamePlayer === playerWithMostSteals;
}
