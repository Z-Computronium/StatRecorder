let player1Stats = {
  successfulPasses: 0,
  failedPasses: 0,
  steals: 0,
  successfulDefenses: 0,
  failedDefenses: 0,
  stealsAllowed: 0,
  totalAttempts: 0,
  totalDefenses: 0
};
let player2Stats = {
  successfulPasses: 0,
  failedPasses: 0,
  steals: 0,
  successfulDefenses: 0,
  failedDefenses: 0,
  stealsAllowed: 0,
  totalAttempts: 0,
  totalDefenses: 0
};

function logStats(player, result) {
  if (player === 'player1') {
      player1Stats.totalAttempts++;
      if (result === 'success') {
          player1Stats.successfulPasses++;
          player2Stats.failedDefenses++;
          player2Stats.totalDefenses++;
      } else if (result === 'fail') {
          player1Stats.failedPasses++;
          player2Stats.successfulDefenses++;
          player2Stats.totalDefenses++;
      } else if (result === 'steal') {
          player1Stats.steals++;
          player2Stats.stealsAllowed++;
          player2Stats.totalDefenses++;
      }
      updateStats('player1');
      updateStats('player2');
  } else if (player === 'player2') {
      player2Stats.totalAttempts++;
      if (result === 'success') {
          player2Stats.successfulPasses++;
          player1Stats.failedDefenses++;
          player1Stats.totalDefenses++;
      } else if (result === 'fail') {
          player2Stats.failedPasses++;
          player1Stats.successfulDefenses++;
          player1Stats.totalDefenses++;
      } else if (result === 'steal') {
          player2Stats.steals++;
          player1Stats.stealsAllowed++;
          player1Stats.totalDefenses++;
      }
      updateStats('player2');
      updateStats('player1');
  }
}

function updateStats(player) {
  if (player === 'player1') {
      document.getElementById('successful-passes-player1').innerText = player1Stats.successfulPasses;
      document.getElementById('failed-passes-player1').innerText = player1Stats.failedPasses;
      document.getElementById('steals-player1').innerText = player1Stats.steals;
      document.getElementById('total-attempts-player1').innerText = player1Stats.totalAttempts;
      document.getElementById('successful-defenses-player2').innerText = player1Stats.successfulDefenses;
      document.getElementById('failed-defenses-player2').innerText = player1Stats.failedDefenses;
      document.getElementById('steals-allowed-player1').innerText = player1Stats.stealsAllowed;
      document.getElementById('total-defenses-player1').innerText = player1Stats.totalDefenses;
      document.getElementById('player1-stats-header').innerText = document.getElementById('player1-name').value + ' Stats';
  } else if (player === 'player2') {
      document.getElementById('successful-passes-player2').innerText = player2Stats.successfulPasses;
      document.getElementById('failed-passes-player2').innerText = player2Stats.failedPasses;
      document.getElementById('steals-player2').innerText = player2Stats.steals;
      document.getElementById('total-attempts-player2').innerText = player2Stats.totalAttempts;
      document.getElementById('successful-defenses-player1').innerText = player2Stats.successfulDefenses;
      document.getElementById('failed-defenses-player1').innerText = player2Stats.failedDefenses;
      document.getElementById('steals-allowed-player2').innerText = player2Stats.stealsAllowed;
      document.getElementById('total-defenses-player2').innerText = player2Stats.totalDefenses;
      document.getElementById('player2-stats-header').innerText = document.getElementById('player2-name').value + ' Stats';
  }
}
