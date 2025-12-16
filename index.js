// ==========================================
// 3.1 Retrieve Player Information
// ==========================================

function numPointsScored(playerName) {
  const players = allPlayers();
  return players[playerName].points;
}

function shoeSize(playerName) {
  const players = allPlayers();
  return players[playerName].shoe;
}

// ==========================================
// 3.2 Retrieve Team Information
// ==========================================

function teamColors(teamName) {
  const teams = allTeams();
  for (const team of teams) {
    if (team.teamName === teamName) {
      return team.colors;
    }
  }
}

function teamNames() {
  const teams = allTeams();
  return teams.map(team => team.teamName);
}

// ==========================================
// 3.3 Retrieve Player Numbers and Stats
// ==========================================

function playerNumbers(teamName) {
  const teams = allTeams();
  for (const team of teams) {
    if (team.teamName === teamName) {
      // Use Object.values to get players and then map to their numbers
      return Object.values(team.players).map(player => player.number);
    }
  }
}

function playerStats(playerName) {
  const players = allPlayers();
  return players[playerName];
}

// ==========================================
// 3.4 Advanced Challenge
// ==========================================

function bigShoeRebounds() {
  const players = allPlayers();
  let maxShoe = 0;
  let rebounds = 0;

  for (const name in players) {
    const player = players[name];
    if (player.shoe > maxShoe) {
      maxShoe = player.shoe;
      rebounds = player.rebounds;
    }
  }
  return rebounds;
}

// ==========================================
// Extra Challenges (Most Points, Winning Team, etc.)
// ==========================================

function mostPointsScored() {
  const players = allPlayers();
  let maxPoints = 0;
  let topScorer = '';

  for (const name in players) {
    if (players[name].points > maxPoints) {
      maxPoints = players[name].points;
      topScorer = name;
    }
  }
  return topScorer;
}

function winningTeam() {
  const teams = allTeams();
  let winner = '';
  let highestScore = 0;

  for (const team of teams) {
    let teamTotal = 0;
    // Sum points for all players in this team
    for (const player in team.players) {
      teamTotal += team.players[player].points;
    }
    
    if (teamTotal > highestScore) {
      highestScore = teamTotal;
      winner = team.teamName;
    }
  }
  return winner;
}

function playerWithLongestName() {
  const players = allPlayers();
  let longestName = '';

  for (const name in players) {
    if (name.length > longestName.length) {
      longestName = name;
    }
  }
  return longestName;
}

function doesLongNameStealATon() {
  const players = allPlayers();
  const longestName = playerWithLongestName();
  
  let maxSteals = 0;
  let playerMostSteals = '';

  // Find who has the most steals
  for (const name in players) {
    if (players[name].steals > maxSteals) {
      maxSteals = players[name].steals;
      playerMostSteals = name;
    }
  }

  // Check if the longest name is the same person as the most steals
  return longestName === playerMostSteals;
}

// ==========================================
// HELPER FUNCTIONS (Do Not Modify)
// ==========================================

function allTeams() {
  const game = gameObject();
  return [game.home, game.away];
}

function allPlayers() {
  const game = gameObject();
  const players = {};
  
  // Combine home and away players into one big object
  Object.assign(players, game.home.players, game.away.players);
  
  return players;
}

function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
        "Reggie Evens": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
        "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
        "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
        "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
        "Bismack Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
        "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
        "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
        "Brendan Hayword": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 }
      }
    }
  };
}

// Export for Node.js testing (Keep this at the bottom)
if (typeof module !== 'undefined') {
  module.exports = {
    numPointsScored,
    shoeSize,
    teamColors,
    teamNames,
    playerNumbers,
    playerStats,
    bigShoeRebounds,
    mostPointsScored,
    winningTeam,
    playerWithLongestName,
    doesLongNameStealATon
  };
}
