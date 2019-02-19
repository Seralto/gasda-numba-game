let Game = {
  playerNumber: null,
  pcNumber: null,
  tries: 1,
  input: null,
  results: null,
  newGame: true,

  init() {
    this.input = document.getElementById('numberInput');
    this.results = document.getElementById('results');

    this.input.focus();

    this.input.addEventListener('keyup', function(e) {
      if (e.keyCode === 13) { Game.run(); }
    })
  },

  run() {
    if(this.newGame) {
      this.drawPcNumber();
      this.newGame = false;
      this.init();
    }

    this.getValue();

    if (this.playerNumber != "") {
      this.results.append(this.playerNumber + ' - ' + this.compareNumbers() + '\n')
      this.clearInput();
      this.checkWin();
      this.tries++;
    }
  },

  drawPcNumber() {
    this.pcNumber = Math.floor(Math.random() * (999));
    this.pcNumber = this.pcNumber.toString();
    this.pcNumber = ('000' + this.pcNumber).substring(this.pcNumber.length)
  },

  getValue() {
    this.playerNumber = this.input.value;
  },

  checkWin() {
    if(this.playerNumber === this.pcNumber) {
      this.results.append('\nYou win!\n');
      this.results.append(`You used ${this.tries} tries.`);
      this.newGame = true;
    }
  },

  clearInput() {
    this.input.value = '';
  },

  compareNumbers() {
    let data = '';

    this.playerNumber.split('').map((x, i) => {
      if(x === this.pcNumber[i]) {
        // data.push({ num: x, res: 'green' })
        data += 'V'
      } else if(this.pcNumber.includes(x)) {
        // data.push({ num: x, res: 'yellow' })
        data += '?'
      } else {
        // data.push({ num: x, res: 'red' })
        data += 'X'
      }
    })

    return data;
  },

  // TODO: Implement level
  // randomNumber(level) {
  //   digits = (level === 'easy') ? 999 : 9999;
  // }
}

Game.init();
