// Globales

//DEF pour le TAS
let TASJump = false
let TASMoveRight = false
let TASMoveLeft = false
let TASDureeSaut = 0
let TASJustJumped = 0 //si TASJustJumped vaut 0 il n'as pas sauté, si il vaut 1 il a juste sauté, si il vaut 2 il a déjà sauté

//Constantes
const PLAYER_VELOCITY = 240
const PLAYER_BOUNCE_OFF_VELOCITY = 400
const PLAYER_MIN_JUMP_VELOCITY = -360
const PLAYER_MAX_JUMP_VELOCITY = -400
const PLAYER_MAX_JUMP_TIME = 150
const PLAYER_BUFFERING_TIME = 200
const PLAYER_COYOTE_TIME = 200
const PLAYER_MAX_JUMPS = 2
const PLAYER_DEATH_JUMP_X = 100
const PLAYER_DEATH_JUMP_Y = -600
const PLAYER_FALL_SQUASH_VELOCITY = 700
const ENEMY_VELOCITY = 140
const NUM_LEVELS = 8

//LEVELS
const levelsData = {
  level1: {
    world: { width: 2920, height: 540 },
    player: { x: 80, y: 320 },
    target: { x: 2860, y: 240 },
    hills: [
      { x: 200, y: 200 },
      { x: 360, y: 240 },
      { x: 800, y: 240 },
      { x: 1000, y: 200 },
      { x: 1600, y: 200 },
    ],
    hillsFront: [
      { x: 10, y: 340 },
      { x: 700, y: 380 },
      { x: 800, y: 420 },
      { x: 1300, y: 380 },
      { x: 1600, y: 420 },
    ],
    clouds: {
      y: { min: 60, max: 180 },
      x: [-100, 400, 900, 1440, 1600, 2000],
    },
    platforms: [
      { x: 0, y: 500, width: 400, height: 40 },
      { x: 400, y: 460, width: 400, height: 80 },
      { x: 920, y: 460, width: 240, height: 80 },
      { x: 1160, y: 500, width: 1760, height: 40 },
      { x: 1800, y: 460, width: 40, height: 40 },
      { x: 1840, y: 420, width: 40, height: 80 },
      { x: 2300, y: 420, width: 40, height: 80 },
      { x: 2340, y: 460, width: 40, height: 40 },
      { x: 2580, y: 380, width: 120, height: 40 },
      { x: 2800, y: 280, width: 120, height: 40 },
    ],
    enemies: [{ x: 2000, y: 500 }],
    spikes: [
      { x: 1360, y: 460 },
      { x: 1400, y: 460 },
      { x: 1580, y: 460 },
    ],
  },
  level2: {
    world: { width: 3400, height: 1080 },
    player: { x: 80, y: 700 },
    target: { x: 3280, y: 640 },
    hills: [
      { x: -300, y: 200 },
      { x: 360, y: 240 },
      { x: 500, y: 180 },
      { x: 1000, y: 100 },
    ],
    hillsFront: [
      { x: -160, y: 380 },
      { x: 400, y: 480 },
      { x: 1400, y: 300 },
    ],
    clouds: {
      y: { min: 500, max: 620 },
      x: [-100, 400, 900, 1440, 1600, 2000],
    },
    platforms: [
      { x: 0, y: 880, width: 600, height: 200 },
      { x: 720, y: 880, width: 80, height: 200 },
      { x: 920, y: 880, width: 80, height: 200 },
      { x: 1120, y: 960, width: 80, height: 120 },
      { x: 1200, y: 1040, width: 400, height: 40 },
      { x: 1600, y: 960, width: 200, height: 120 },
      { x: 1800, y: 1040, width: 160, height: 40 },
      { x: 1960, y: 960, width: 160, height: 120 },
      { x: 2120, y: 880, width: 160, height: 200 },
      { x: 2280, y: 800, width: 160, height: 280 },
      { x: 2440, y: 680, width: 160, height: 400 },
      { x: 2680, y: 1040, width: 80, height: 40 },
      { x: 2840, y: 0, width: 80, height: 880 },
      { x: 2840, y: 1040, width: 560, height: 40 },
      { x: 3120, y: 680, width: 280, height: 400 },
      { x: 3080, y: 920, width: 40, height: 40 },
      { x: 2920, y: 800, width: 40, height: 40 },
      { x: 3080, y: 680, width: 40, height: 40 },
    ],
    enemies: [
      { x: 1400, y: 1000 },
      { x: 1400, y: 1000, dir: -1 },
    ],
    spikes: [
      { x: 1800, y: 1000 },
      { x: 1840, y: 1000 },
      { x: 1880, y: 1000 },
      { x: 1920, y: 1000 },
      { x: 2600, y: 1040 },
      { x: 2640, y: 1040 },
      { x: 2760, y: 1040 },
      { x: 2800, y: 1040 },
    ],
    fallingBlocks: [
      { x: 1800, y: 960 },
      { x: 1840, y: 960 },
      { x: 1880, y: 960 },
      { x: 1920, y: 960 },
      { x: 2600, y: 680 },
      { x: 2640, y: 680 },
      { x: 2680, y: 680 },
      { x: 2720, y: 680 },
      { x: 2760, y: 680 },
      { x: 2800, y: 680 },
      { x: 2600, y: 840 },
      { x: 2640, y: 840 },
      { x: 2680, y: 840 },
      { x: 2720, y: 840 },
      { x: 2760, y: 840 },
      { x: 2800, y: 840 },
    ],
  },
  level3: {
    world: { width: 4040, height: 1080 },
    player: { x: 80, y: 760 },
    target: { x: 2680, y: 160 },
    hills: [
      { x: -340, y: 200 },
      { x: 360, y: 240 },
      { x: 500, y: 180 },
      { x: 1000, y: 100 },
    ],
    hillsFront: [
      { x: 0, y: 380 },
      { x: 300, y: 400 },
      { x: 1000, y: 300 },
    ],
    clouds: {
      y: { min: 400, max: 520 },
      x: [-100, 200, 740, 1440, 1600, 2000],
    },
    platforms: [
      { x: 0, y: 880, width: 400, height: 200 },
      { x: 400, y: 760, width: 200, height: 320 },
      { x: 600, y: 680, width: 200, height: 400 },
      { x: 800, y: 840, width: 480, height: 240 },
      { x: 1280, y: 680, width: 200, height: 400 },
      { x: 1480, y: 880, width: 280, height: 200 },
      { x: 1640, y: 0, width: 120, height: 720 },
      { x: 1640, y: 960, width: 600, height: 120 },
      { x: 1640, y: 240, width: 1560, height: 360 },
      { x: 2240, y: 880, width: 120, height: 200 },
      { x: 3080, y: 880, width: 680, height: 200 },
      { x: 3200, y: 240, width: 120, height: 520 },
      { x: 3760, y: 0, width: 280, height: 1080 },
      { x: 1760, y: 0, width: 840, height: 240 },
    ],
    oneWayPlatforms: [
      { x: 0, y: 760, width: 400 },
      {
        x: 800,
        y: 680,
        width: 120,
        points: [{ x: 1160, y: 680 }],
      },
      {
        x: 2360,
        y: 880,
        width: 120,
        points: [{ x: 2600, y: 880 }],
      },
      {
        x: 2960,
        y: 880,
        width: 120,
        points: [{ x: 2720, y: 880 }],
      },
      { x: 3320, y: 740, width: 440 },
      {
        x: 3320,
        y: 620,
        width: 120,
        points: [{ x: 3640, y: 620 }],
      },
      {
        x: 3640,
        y: 500,
        width: 120,
        points: [{ x: 3320, y: 500 }],
      },
      {
        x: 3320,
        y: 380,
        width: 120,
        points: [{ x: 3640, y: 380 }],
      },
      { x: 3320, y: 240, width: 440 },
    ],
    enemies: [{ x: 1720, y: 960 }],
    spikes: [
      { x: 560, y: 720 },
      { x: 800, y: 800 },
      { x: 840, y: 800 },
      { x: 880, y: 800 },
      { x: 920, y: 800 },
      { x: 960, y: 800 },
      { x: 1000, y: 800 },
      { x: 1040, y: 800 },
      { x: 1080, y: 800 },
      { x: 1120, y: 800 },
      { x: 1160, y: 800 },
      { x: 1200, y: 800 },
      { x: 1240, y: 800 },
      { x: 1480, y: 840 },
      { x: 1520, y: 840 },
      { x: 3280, y: 200 },
      { x: 3240, y: 200 },
    ],
    fallingBlocks: [
      { x: 1480, y: 680 },
      { x: 1520, y: 680 },
      { x: 1560, y: 680 },
      { x: 1600, y: 680 },
    ],
  },
}

/*
Dans cette partie j'utiliserai la fonction native de js pour créer ma fonction :
setTimeout(() => {}, tempsEnMillisecondes); Qui permet d'executer des actions après un temps (en ms) donné
*/


function doActionTAS(dateMs, duree, action)
{
    setTimeout(() => {
        switch (action){
            case "JUMP":
                console.log("TAS JUMPED")
                TASJump = true
                TASDureeSaut = duree
                break
            case "MOVE-RIGHT":
                console.log("TAS MOVED RIGHT")
                TASMoveRight = true
                break
            case "MOVE-LEFT":
                console.log("TAS MOVED LEFT")
                TASMoveLeft = true
                break;
        }      
    }, dateMs)
    setTimeout(() => {
        switch (action){
            case "JUMP":
                console.log("TAS NOT JUMPING")
                TASJump = false
                TASDureeSaut = 0
                break
            case "MOVE-RIGHT":
                console.log("TAS NOT MOVING")
                TASMoveRight = false
                break
            case "MOVE-LEFT":
                console.log("TAS NOT MOVING")
                TASMoveLeft = false
                break;
        }      
    }, dateMs + duree)
}

const transitionEventsEmitter = new Phaser.Events.EventEmitter()

function stringifyTime(elapsed) {
  const minutes = Math.floor(elapsed / 60000)
  const seconds = Math.floor((elapsed % 60000) / 1000)
  const centiseconds = Math.floor((elapsed % 1000) / 10)
  return (
    Phaser.Utils.String.Pad(minutes, 2, '0', 1) +
    "'" +
    Phaser.Utils.String.Pad(seconds, 2, '0', 1) +
    '"' +
    Phaser.Utils.String.Pad(centiseconds, 2, '0', 1)
  )
}

function getUnlockedLevels() {
  const unlockedLevelsString = localStorage.getItem('unlockedLevels')
  if (unlockedLevelsString) {
    return JSON.parse(unlockedLevelsString)
  } else {
    const level = {
      level: 1,
      time: 0,
    }
    localStorage.setItem('unlockedLevels', JSON.stringify([level]))
    return [level]
  }
}

function getLevelInfo(levelNum) {
  const unlockedLevels = getUnlockedLevels()
  return unlockedLevels.find(({ level }) => level === levelNum)
}

function updateLevelInfo(levelNum, data) {
  const unlockedLevels = getUnlockedLevels()
  const index = unlockedLevels.findIndex(({ level }) => level === levelNum)
  if (index === -1) return

  unlockedLevels[index] = { ...unlockedLevels[index], ...data }
  localStorage.setItem('unlockedLevels', JSON.stringify(unlockedLevels))
}

function unlockLevel(levelNum, time) {
  const unlockedLevels = getUnlockedLevels()
  if (unlockedLevels.some(({ level }) => level === levelNum)) return

  unlockedLevels.push({
    level: levelNum,
    time,
  })
  localStorage.setItem('unlockedLevels', JSON.stringify(unlockedLevels))
}

class TransitionScene extends Phaser.Scene {
  constructor() {
    super({ key: 'transition' })
  }

  init(data) {
    this.isOpen = data.isOpen ?? false
  }

  create() {
    const { width, height } = this.scale

    this.rect1 = this.add.rectangle(0, this.isOpen ? -height / 2 : 0, width, height / 2, 0x1d2b53)
    this.rect1.setOrigin(0, 0)
    this.rect2 = this.add.rectangle(0, this.isOpen ? height : height / 2, width, height / 2, 0x1d2b53)
    this.rect2.setOrigin(0, 0)

    transitionEventsEmitter.off('start', this.startTransition, this)
    transitionEventsEmitter.on('start', this.startTransition, this)

    this.startTransition()
  }

  startTransition() {
    const { width, height } = this.scale

    this.tweens.add({
      targets: this.rect1,
      y: this.isOpen ? 0 : -height / 2,
      duration: 500,
      ease: 'Cubic.Out',
    })

    this.tweens.add({
      targets: this.rect2,
      y: this.isOpen ? height / 2 : height,
      duration: 500,
      ease: 'Cubic.Out',
      onComplete: () => {
        transitionEventsEmitter.emit('end')
      },
    })

    this.isOpen = !this.isOpen
  }
}

class HUDScene extends Phaser.Scene {
  constructor() {
    super({ key: 'hud' })
  }

  create() {
    const graphics = this.make.graphics()
    //Si le jeu n'est pas lancé sur pc (mais sur ios par exemple)
    if (!this.sys.game.device.os.desktop) {
      graphics.lineStyle(2, 0xffffff, 1)
      graphics.strokeRect(0, 0, 100, 100)
      graphics.fillStyle(0xffffff, 1)
      graphics.beginPath()
      graphics.moveTo(40, 40)
      graphics.lineTo(40, 60)
      graphics.lineTo(60, 50)
      graphics.closePath()
      graphics.fillPath()
      graphics.generateTexture('btnRight', 100, 100)
      graphics.clear()

      graphics.lineStyle(2, 0xffffff, 1)
      graphics.strokeRect(0, 0, 100, 100)
      graphics.fillStyle(0xffffff, 1)
      graphics.beginPath()
      graphics.moveTo(60, 40)
      graphics.lineTo(60, 60)
      graphics.lineTo(40, 50)
      graphics.closePath()
      graphics.fillPath()
      graphics.generateTexture('btnLeft', 100, 100)

      this.add.sprite(40, 420, 'btnLeft').setOrigin(0)
      this.add.sprite(160, 420, 'btnRight').setOrigin(0)
    }

    // Bouton pause
    graphics.fillStyle(0xffffff, 1)
    graphics.fillRect(0, 0, 40, 40)
    graphics.fillStyle(0x1d2b53, 1)
    graphics.fillRect(10, 10, 8, 20)
    graphics.fillRect(22, 10, 8, 20)
    graphics.generateTexture('btnPause', 40, 40)
    graphics.clear()

    // Bouton play
    graphics.fillStyle(0xffffff, 1)
    graphics.fillRect(0, 0, 40, 40)
    graphics.fillStyle(0x1d2b53, 1)
    graphics.beginPath()
    graphics.moveTo(10, 10)
    graphics.lineTo(10, 30)
    graphics.lineTo(30, 20)
    graphics.closePath()
    graphics.fillPath()
    graphics.generateTexture('btnPlay', 40, 40)
    graphics.clear()

    // Bouton restart
    graphics.fillStyle(0xffffff, 1)
    graphics.fillRect(0, 0, 40, 40)
    graphics.fillStyle(0x1d2b53, 1)
    graphics.beginPath()
    graphics.moveTo(20, 10)
    graphics.lineTo(30, 20)
    graphics.lineTo(20, 30)
    graphics.lineTo(10, 20)
    graphics.closePath()
    graphics.fillPath()
    graphics.generateTexture('btnRestart', 40, 40)
    graphics.clear()

    // Bouton niveaux
    graphics.fillStyle(0xffffff, 1)
    graphics.fillRect(0, 0, 40, 40)
    graphics.fillStyle(0x1d2b53, 1)
    graphics.fillRect(8, 8, 10, 10)
    graphics.fillRect(22, 8, 10, 10)
    graphics.fillRect(8, 22, 10, 10)
    graphics.fillRect(22, 22, 10, 10)
    graphics.generateTexture('btnLevels', 40, 40)
    graphics.destroy()

    const btnPause = this.add.sprite(900, 20, 'btnPause')
    btnPause.setOrigin(0).setInteractive()
    btnPause.on('pointerdown', this.togglePause, this)

    this.timerStarted = false
    this.startTime = 0
    this.add.rectangle(0, 20, 160, 40, 0x1d2b53, 0.5).setOrigin(0)
    this.timerText = this.add.text(20, 28, '00\'00"00', { fontSize: '24px', fill: '#ffffff' })
    const gameScene = this.scene.get('game')
    gameScene.events.on('startTimer', this.startTimer, this)
    gameScene.events.on('stopTimer', this.stopTimer, this)

    // Panel
    const { width, height } = this.scale
    const [panelWidth, panelHeight] = [320, 180]
    const [centerX, centerY] = [(width - panelWidth) / 2, (height - panelHeight) / 2]

    this.panelPause = this.add.container(0, 0)
    this.panelPause.setVisible(false)

    const panelOverlay = this.add.rectangle(0, 0, width, height, 0x1d2b53, 0.4)
    panelOverlay.setOrigin(0).setInteractive()

    const panelPauseBg = this.add.rectangle(centerX, centerY, panelWidth, panelHeight, 0x1d2b53).setOrigin(0)
    const panelTxt = this.add
      .text(width / 2, centerY + 20, 'PAUSE', { fontSize: '32px', fill: '#ffffff' })
      .setOrigin(0.5, 0)

    const btnPlay = this.add.sprite(width / 2, height / 2 + 20, 'btnPlay').setInteractive()
    btnPlay.on('pointerdown', this.togglePause, this)

    const btnRestart = this.add.sprite(width / 2 + 60, height / 2 + 20, 'btnRestart').setInteractive()
    btnRestart.on('pointerdown', this.restartCurrentLevel, this)

    const btnLevels = this.add.sprite(width / 2 - 60, height / 2 + 20, 'btnLevels').setInteractive()
    btnLevels.on('pointerdown', this.goToLevels, this)

    this.panelPause.add([panelOverlay, panelPauseBg, panelTxt, btnPlay, btnRestart, btnLevels])
  }

  goToLevels() {
    transitionEventsEmitter.emit('start')
    transitionEventsEmitter.once(
      'end',
      () => {
        this.registry.set('isPaused', false)
        const gameScene = this.scene.get('game')
        gameScene.scene.start('levels')
      },
      this
    )
  }

  restartCurrentLevel() {
    transitionEventsEmitter.emit('start')
    transitionEventsEmitter.once(
      'end',
      () => {
        this.registry.set('isPaused', false)
        this.scene.start('game')
        this.scene.restart('hud')
      },
      this
    )
  }

  togglePause() {
    const isPaused = this.registry.get('isPaused')
    if (isPaused) {
      game.scene.resume('game')
      this.pauseTime = this.time.now - this.pauseTime
      this.startTime += this.pauseTime
    } else {
      game.scene.pause('game')
      this.pauseTime = this.time.now
    }

    this.panelPause.setVisible(!isPaused)
    this.registry.set('isPaused', !isPaused)
  }

  stopTimer(currentLevel) {
    if (!this.timerStarted) return

    const levelInfo = getLevelInfo(currentLevel)
    if (!levelInfo) return

    const previousBestTime = levelInfo.time || Infinity
    const newTime = this.time.now - this.startTime
    if (newTime < previousBestTime) {
      updateLevelInfo(currentLevel, { time: newTime })
    }

    this.startTime = 0
    this.timerStarted = false
  }

  startTimer() {
    this.timerStarted = true
    this.startTime = this.time.now
  }

  update() {
    const isPaused = this.registry.get('isPaused')
    if (this.startTime === 0 || !this.timerStarted || isPaused) return
    const time = stringifyTime(this.time.now - this.startTime)
    this.timerText.setText(time)
  }
}

class IntroScene extends Phaser.Scene {
  constructor() {
    super({ key: 'intro' })
  }

  create() {
    this.isStarted = false

    const text = this.add
      .text(
        480,
        460,
        `${this.sys.game.device.os.desktop ? "Appuie sur la touche 'ESPACE'" : "Touche l'écran"} pour commencer`,
        { fontSize: '24px', fill: '#1d2b53' }
      )
      .setOrigin(0.5, 0.5)

    this.tweens.add({
      targets: text,
      duration: 1000,
      alpha: 0,
      repeat: -1,
      yoyo: true,
    })

    this.add
      .text(480, 200, 'BOBBY', {
        fontSize: '128px',
        fill: '#1d2b53',
      })
      .setOrigin(0.5, 0.5)

    this.add
      .text(480, 280, 'Titre à définir...', {
        fontSize: '24px',
        fill: '#1d2b53',
      })
      .setOrigin(0.5, 0.5)

    this.input.keyboard.on('keydown-SPACE', this.startGame, this)
    this.input.on('pointerdown', this.startGame, this)

    this.scene.launch('transition')
    // this.scene.start('game', { level: 3 })
  }

  startGame() {
    if (this.isStarted) return
    this.isStarted = true

    transitionEventsEmitter.emit('start')
    transitionEventsEmitter.once(
      'end',
      () => {
        this.scene.start('levels')
      },
      this
    )
  }
}

class LevelsScene extends Phaser.Scene {
  constructor() {
    super({ key: 'levels' })
  }

  create() {
    this.isStarted = false
    this.scene.stop('hud')
    const unlockedLevels = getUnlockedLevels()

    // Bouton retour
    const graphics = this.make.graphics()
    graphics.fillStyle(0xffffff, 1)
    graphics.fillRect(0, 0, 40, 40)
    graphics.fillStyle(0x1d2b53, 1)
    graphics.beginPath()
    graphics.moveTo(30, 10)
    graphics.lineTo(30, 30)
    graphics.lineTo(10, 20)
    graphics.closePath()
    graphics.fillPath()
    graphics.generateTexture('btnBack', 40, 40)
    graphics.destroy()

    const btnBack = this.add.sprite(40, 40, 'btnBack')
    btnBack.setInteractive()
    btnBack.on('pointerdown', () => this.goToScreen('intro'))

    // Niveaux
    const buttonOffset = 48
    const buttonSize = 80
    const buttonsPerCol = 2
    const buttonsPerRow = Math.ceil(NUM_LEVELS / buttonsPerCol)

    const totalButtonsWidth = (buttonSize + buttonOffset) * (buttonsPerRow - 1)
    const totalButtonsHeight = (buttonSize + buttonOffset) * (buttonsPerCol - 1)
    const startX = this.cameras.main.centerX - totalButtonsWidth / 2
    const startY = this.cameras.main.centerY - totalButtonsHeight / 2

    for (let i = 0; i < NUM_LEVELS; i++) {
      const level = i + 1
      const col = Math.floor(i / buttonsPerCol)
      const row = i % buttonsPerCol
      const direction = i % 2 ? 1 : -1

      const x = startX + col * (buttonSize + buttonOffset) + ((buttonSize + buttonOffset) / 4) * direction
      const y = startY + row * (buttonSize + buttonOffset) - ((buttonSize + buttonOffset) / 4) * direction
      const timePosY = y + buttonSize * direction

      const button = this.add.rectangle(x, y, buttonSize, buttonSize, 0x1d2b53)

      const levelInfo = getLevelInfo(level)
      button.rotation = Phaser.Math.DegToRad(45)

      if (levelInfo) {
        button.setInteractive()
        button.on('pointerdown', () => this.goToScreen('game', { level }))
      } else {
        button.alpha = 0.5
      }

      const time = (levelInfo && levelInfo.time) || 0
      if (time) {
        this.add.rectangle(x, timePosY, 100, 30, 0xffffff).setOrigin(0.5)
        this.add
          .text(x, timePosY, time ? stringifyTime(levelInfo.time) : '10\'00"00', {
            color: '#1d2b53',
            fontSize: '16px',
          })
          .setOrigin(0.5)
      }

      this.add.text(x, y, (i + 1).toString(), { color: '#ffffff', fontSize: '32px' }).setOrigin(0.5)
    }

    this.scene.launch('transition')
  }

  goToScreen(screen, params = {}) {
    if (this.isStarted) return
    this.isStarted = true

    transitionEventsEmitter.emit('start')
    transitionEventsEmitter.once(
      'end',
      () => {
        this.scene.start(screen, params)
      },
      this
    )
  }
}

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'game' })
  }

  init(data) {
    this.currentLevel = data.level
    this.levelData = levelsData[`level${this.currentLevel}`]
  }

  preload() {
    const graphics = this.make.graphics()
    graphics.fillStyle(0x000000, 1)
    graphics.fillRect(0, 0, 10, 10)
    graphics.generateTexture('particle', 10, 10)
    graphics.clear()

    graphics.fillStyle(0xc2c3c7, 1)
    graphics.fillCircle(10, 10, 10)
    graphics.generateTexture('particleJump', 20, 20)
    graphics.clear()

    graphics.fillStyle(0xc2c3c7, 1)
    graphics.beginPath()
    graphics.moveTo(0, 40)
    graphics.lineTo(20, 0)
    graphics.lineTo(40, 40)
    graphics.closePath()
    graphics.fillPath()
    graphics.generateTexture('spike', 40, 40)
    graphics.clear()

    graphics.fillStyle(0xffffff, 1)
    graphics.fillCircle(30, 30, 30)
    graphics.fillCircle(50, 50, 30)
    graphics.fillCircle(70, 30, 30)
    graphics.fillCircle(90, 50, 30)
    graphics.fillCircle(120, 30, 30)
    graphics.generateTexture('cloud', 150, 120)
    graphics.clear()

    graphics.fillStyle(0x008751, 1)
    graphics.beginPath()
    graphics.moveTo(0, 800)
    graphics.lineTo(400, 0)
    graphics.lineTo(800, 800)
    graphics.closePath()
    graphics.fillPath()
    graphics.generateTexture('hill', 800, 800)
    graphics.clear()

    graphics.fillStyle(0x5f574f, 1)
    graphics.beginPath()
    graphics.moveTo(0, 800)
    graphics.lineTo(400, 0)
    graphics.lineTo(800, 800)
    graphics.closePath()
    graphics.fillPath()
    graphics.generateTexture('hill2', 800, 800)
    graphics.destroy()
  }

  create() {
    this.canMove = false
    this.time.delayedCall(
      500,
      () => {
        if (!this.sys.game.device.os.desktop) {
          this.input.once('pointerdown', this.startTimer, this)
        } else {
          this.input.keyboard.once('keydown', this.startTimer, this)
        }
      },
      [],
      this
    )
    this.isUpKeyPressed = false
    this.isTransitionning = false
    this.playerWasStanding = false
    this.worldWidth = this.levelData.world.width
    this.worldHeight = this.levelData.world.height
    this.physics.world.setBounds(0, 0, this.worldWidth, this.worldHeight)

    const hillsPos = this.levelData.hills ?? []
    this.hills = this.add.group()
    for (let i = 0; i < hillsPos.length; i++) {
      let hill = this.hills.create(hillsPos[i].x, hillsPos[i].y, 'hill')
      hill.setOrigin(0)
      hill.setScrollFactor(0.3)
    }

    const hillsPos2 = this.levelData.hillsFront ?? []
    this.hills2 = this.add.group()
    for (let i = 0; i < hillsPos2.length; i++) {
      let hill = this.hills2.create(hillsPos2[i].x, hillsPos2[i].y, 'hill2')
      hill.setOrigin(0)
      hill.setScrollFactor(0.4)
    }

    const cloudsPos = this.levelData.clouds?.x ?? []
    this.clouds = this.physics.add.group({
      allowGravity: false,
    })
    for (let i = 0; i < cloudsPos.length; i++) {
      let cloud = this.clouds.create(
        cloudsPos[i],
        Phaser.Math.Between(this.levelData.clouds.y.min, this.levelData.clouds.y.max),
        'cloud'
      )
      cloud.setVelocityX(Phaser.Math.Between(10, 20))
      cloud.setAlpha(Phaser.Math.FloatBetween(0.2, 0.8))
    }

    // Plateformes
    const platforms = this.physics.add.staticGroup()
    const platformsPos = this.levelData.platforms || []
    for (let i = 0; i < platformsPos.length; i++) {
      const { x, y, width, height } = platformsPos[i]
      this.addPlatform(platforms, x, y, width, height)
    }

    // Plateformes à sens unique
    this.oneWayPlatforms = this.physics.add.group({
      allowGravity: false,
      immovable: true,
    })
    const oneWayPlatformsPos = this.levelData.oneWayPlatforms || []
    for (let i = 0; i < oneWayPlatformsPos.length; i++) {
      this.addOneWayPlatform(this.oneWayPlatforms, oneWayPlatformsPos[i])
    }

    // Créer le téléporteur et les particules
    const particles = this.add.particles(this.levelData.target.x, this.levelData.target.y, 'particle', {
      speed: { min: -100, max: 100 },
      angle: { min: 0, max: 360 },
      scale: { start: 1, end: 0 },
      lifespan: 1000,
      frequency: 100,
      quantity: 5,
    })

    this.target = this.add.circle(this.levelData.target.x, this.levelData.target.y, 20, 0x1d2b53)
    this.physics.add.existing(this.target, true)
    this.target.body.setCircle(40)
    this.target.body.setOffset(-20, -20)

    // Pics
    const spikes = this.physics.add.staticGroup()
    const spikesPos = this.levelData.spikes ?? []
    for (let i = 0; i < spikesPos.length; i++) {
      const { x, y } = spikesPos[i]
      this.addSpike(spikes, x, y)
    }

    // Plateformes sensibles
    this.fallingBlocks = this.physics.add.staticGroup()
    this.fallingBlocksTriggers = this.physics.add.staticGroup()
    const fallingBlocksPos = this.levelData.fallingBlocks ?? []
    for (let i = 0; i < fallingBlocksPos.length; i++) {
      const { x, y } = fallingBlocksPos[i]
      this.addFallingBlock(this.fallingBlocks, this.fallingBlocksTriggers, x, y)
    }

    // Ennemis
    this.enemies = this.physics.add.group()
    const enemiesPos = this.levelData.enemies ?? []
    for (let i = 0; i < enemiesPos.length; i++) {
      const { x, y, dir } = enemiesPos[i]
      const enemy = this.add.rectangle(x, y, 40, 40, 0xff004d)
      enemy.setOrigin(0.5, 1)
      enemy.setData('dir', dir ?? 1)
      this.physics.add.existing(enemy)
      this.enemies.add(enemy)
    }

    // Créer le joueur
    this.player = this.add.container(this.levelData.player.x, this.levelData.player.y)
    this.playerSprite = this.add.rectangle(0, 0, 40, 40, 0xfff1e8)
    this.player.add(this.playerSprite)
    this.player.setSize(40, 40)
    this.physics.world.enable(this.player)
    this.jumpCount = 0
    this.playerDir = 1
    this.prevVelocityY = 0

    // Particules du joueur lors du saut
    this.playerEmitter = this.add.particles(0, 0, 'particleJump', {
      lifespan: 300,
      speedX: { min: -100, max: 100 },
      speedY: 0,
      scale: { start: 1, end: 0 },
      emitting: false,
      quantity: 5,
    })

    // Mort du joueur
    this.physics.add.overlap(this.player, spikes, this.die, undefined, this)
    this.enemiesCollider = this.physics.add.overlap(
      this.enemies,
      this.player,
      this.handleEnemiesCollision,
      undefined,
      this
    )

    // Ajouter la collision entre le joueur, les ennemis et le sol
    this.platformsCollider = this.physics.add.collider(this.player, platforms)
    this.oneWayPlatformsCollider = this.physics.add.collider(
      this.player,
      this.oneWayPlatforms,
      this.stickPlayerToPlatform,
      null,
      this
    )
    this.physics.add.collider(this.enemies, platforms)
    this.fallingBlocksCollider = this.physics.add.collider(this.player, this.fallingBlocks)
    this.fallingBlocksTriggers = this.physics.add.overlap(
      this.player,
      this.fallingBlocksTriggers,
      this.handleFallingBlockCollision,
      undefined,
      this
    )

    // Detection de fin de jeu
    this.physics.add.overlap(this.player, this.target, this.teleport, undefined, this)

    // Suivi de la caméra
    this.cameras.main.startFollow(this.player, true, 0.1, 0.1)
    this.cameras.main.setBounds(0, 0, this.worldWidth, this.worldHeight)

    // Créer les contrôles
    this.cursors = this.input.keyboard.createCursorKeys()
    this.keys = this.input.keyboard.addKeys('Q,D')
    this.zKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z)
    this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
    this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
    this.input.keyboard.on('keyup-UP', this.resetJump, this)
    this.input.keyboard.on('keyup-Z', this.resetJump, this)

    // Mobiles
    if (!this.sys.game.device.os.desktop) {
      // Pointers
      this.input.on('pointerdown', this.handlePointerDown, this)
      this.input.on('pointermove', this.handlePointerMove, this)
      this.input.on('pointerup', this.resetPointers, this)
    }

    // Limite horizontale du monde
    this.events.on('postupdate', () => {
      const playerHalfWidth = this.player.body.width / 2
      if (this.player.x - playerHalfWidth < 0) {
        this.player.x = playerHalfWidth
      } else if (this.player.x + playerHalfWidth > this.physics.world.bounds.width) {
        this.player.x = this.physics.world.bounds.width - playerHalfWidth
      }
    })

    // HUD
    this.scene.launch('hud')

    // Transition
    this.scene.launch('transition')
  }

  update(time, delta) {
    //EDIT : TAS
    if (!TASJump){
      TASJustJumped = 0
      TASDureeSaut = 0
    }
    if (TASJustJumped === 1 || TASJustJumped === 2)
      TASJustJumped = 2
    else if (TASJump)
      TASJustJumped = 1

    // Mouvement des ennemis
    this.enemies
      .getChildren()
      .filter((enemy) => !enemy.getData('isDead'))
      .forEach((enemy) => {
        let dir = enemy.getData('dir')
        if (enemy.body.touching.right) {
          dir = -1
        } else if (enemy.body.touching.left) {
          dir = 1
        }
        enemy.setData('dir', dir)
        enemy.body.setVelocityX(ENEMY_VELOCITY * dir)
      })

    // Reset des nuages
    this.clouds.children.iterate((cloud) => {
      if (cloud.x > this.physics.world.bounds.width) {
        cloud.x = -120
      }
    })

    // Plateformes mobiles
    this.oneWayPlatforms
      .getChildren()
      .filter((platform) => platform.getData('isMoving'))
      .forEach((platform) => {
        const follower = platform.getData('follower')
        follower.path.getPoint(follower.t, follower.vec)
        follower.deltaX = follower.vec.x - platform.x
        follower.deltaY = follower.vec.y - platform.y
        platform.setPosition(follower.vec.x, follower.vec.y)
        follower.t += 0.003
        if (follower.t >= 1) {
          follower.t = 0
        }
      })

    if (!this.canMove) return

    if (this.player.body.velocity.y !== 0) {
      this.prevVelocityY = this.player.body.velocity.y
    }

    // Réinitialiser la vitesse horizontale du joueur
    if (this.player.body.velocity.x !== 0) {
      this.playerDir = Math.sign(this.player.body.velocity.x)
    }
    this.player.body.setVelocityX(0)

    // Gérer les mouvements à gauche et à droite
    if (this.cursors.left.isDown || this.keys.Q.isDown || this.touchLeft || TASMoveLeft) {
      this.player.body.setVelocityX(-PLAYER_VELOCITY)
    } else if (this.cursors.right.isDown || this.keys.D.isDown || this.touchRight || TASMoveRight) {
      this.player.body.setVelocityX(PLAYER_VELOCITY)
    }

    // Z Bug, appel multiple de jump avec les events
    const justTriggeredJump =
      Phaser.Input.Keyboard.JustDown(this.zKey) ||
      Phaser.Input.Keyboard.JustDown(this.upKey) ||
      Phaser.Input.Keyboard.JustDown(this.spaceKey) ||
      TASJustJumped === 1
    if (justTriggeredJump) {
      this.jump()
    }

    // Détection de chute pour coyote time
    if (this.playerWasStanding && !this.player.body.blocked.down) {
      this.playerWasStanding = false
      this.fallStartTime = this.time.now
    } else if (!this.playerWasStanding && this.player.body.blocked.down && !justTriggeredJump) {
      this.playerWasStanding = true
      this.jumpCount = 0

      if (this.prevVelocityY >= PLAYER_FALL_SQUASH_VELOCITY) {
        this.completePlayerTweens()
        this.playerEmitter.emitParticleAt(this.player.x, this.player.y + 24)
        this.tweens.add({
          targets: this.playerSprite,
          scaleY: 0.6,
          scaleX: 1.4,
          y: 8,
          duration: 150,
          yoyo: true,
          ease: 'Cubic.easeOut',
        })
      }
    }

    // Jump buffering
    if (
      this.isUpKeyPressed &&
      this.player.body.blocked.down &&
      time - this.jumpBufferingTime < PLAYER_BUFFERING_TIME
    ) {
      this.jump()
    }

    // Gérer le saut progressif
    if (this.isJumping && this.isUpKeyPressed) {
      let pressDuration = time - this.jumpStartTime
      if (pressDuration > PLAYER_MAX_JUMP_TIME) {
        this.isJumping = false
        pressDuration = PLAYER_MAX_JUMP_TIME
      }
      if (TASDureeSaut > PLAYER_MAX_JUMP_TIME) {
        this.isJumping = false
        TASDureeSaut = PLAYER_MAX_JUMP_TIME
      }

      const t = TASDureeSaut / PLAYER_MAX_JUMP_TIME
      const jumpVelocity = PLAYER_MIN_JUMP_VELOCITY + (PLAYER_MAX_JUMP_VELOCITY - PLAYER_MIN_JUMP_VELOCITY) * Math.pow(t, 2)
      this.player.body.setVelocityY(jumpVelocity)
    }

    // Sortie du monde
    if (this.player.y - this.player.body.height / 2 > this.physics.world.bounds.height) {
      this.lose.call(this)
    }
  }

  startTimer() {
    this.canMove = true
    this.events.emit('startTimer')
  }

  handlePointerDown(pointer) {
    // Saut lors du touch sur la zone droite de l'écran
    if (pointer.x > 480) {
      this.jump()
    }

    this.handlePointerMove(pointer)
  }

  handlePointerMove(pointer) {
    if (pointer.x < 150) {
      this.touchRight = false
      this.touchLeft = true
    } else if (pointer.x < 300) {
      this.touchRight = true
      this.touchLeft = false
    }
  }

  resetPointers(pointer) {
    if (pointer.x > 300) return
    this.touchLeft = false
    this.touchRight = false
  }

  resetJump() {
    if (!this.canMove) return
    this.isUpKeyPressed = false
    this.isJumping = false
  }

  jump() {
    if (!this.canMove) return
    this.isUpKeyPressed = true
    if (
      this.player.body.blocked.down ||
      (!this.player.body.blocked.down &&
        this.time.now - this.fallStartTime < PLAYER_COYOTE_TIME &&
        this.jumpCount === 0) ||
      (!this.player.body.blocked.down && this.jumpCount > 0 && this.jumpCount < PLAYER_MAX_JUMPS)
    ) {
      this.jumpCount++
      this.isJumping = true
      this.jumpStartTime = this.time.now
      this.completePlayerTweens()

      if (this.jumpCount === 1) {
        this.tweens.add({
          targets: this.playerSprite,
          scaleY: 1.4,
          scaleX: 0.6,
          y: -8,
          duration: 200,
          yoyo: true,
          ease: 'Cubic.easeOut',
        })
      } else {
        this.playerEmitter.emitParticleAt(this.player.x, this.player.y + 24)
        this.tweens.add({
          targets: this.playerSprite,
          angle: 360 * this.playerDir,
          duration: 600,
          ease: 'Cubic.easeOut',
          onComplete: () => {
            this.player.angle = 0
          },
        })
      }
    } else {
      this.jumpBufferingTime = this.time.now
    }
  }

  teleport() {
    this.canMove = false
    this.player.body.enable = false
    this.events.emit('stopTimer', this.currentLevel)

    if (this.currentLevel < NUM_LEVELS && this.currentLevel < Object.keys(levelsData).length) {
      unlockLevel(this.currentLevel + 1)
    }

    const timeline = this.add.timeline([
      {
        at: 0,
        tween: {
          targets: this.playerSprite,
          angle: 540 * this.playerDir,
          delay: 200,
          duration: 600,
          scale: 0.5,
          x: this.target.x - this.player.x,
          y: this.target.y - this.player.y,
        },
      },
      {
        at: 1200,
        tween: {
          targets: this.playerSprite,
          duration: 300,
          scale: 0,
          alpha: 0,
          ease: 'Cubic.In',
        },
      },
      {
        at: 900,
        tween: {
          targets: this.target,
          duration: 300,
          scale: 1.6,
          ease: 'Cubic.Out',
        },
      },
      {
        at: 1200,
        tween: {
          targets: this.target,
          duration: 300,
          scale: 0,
          ease: 'Cubic.In',
          onComplete: () => {
            transitionEventsEmitter.emit('start')
            transitionEventsEmitter.once(
              'end',
              () => {
                this.scene.start('levels')
              },
              this
            )
          },
        },
      },
    ])
    timeline.play()
  }

  die() {
    if (this.player.getData('isDead')) return
    this.player.setData('isDead', true)
    this.canMove = false
    this.platformsCollider.active = false
    this.oneWayPlatformsCollider.active = false
    this.enemiesCollider.active = false
    this.fallingBlocksCollider.active = false
    this.fallingBlocksTriggers.active = false
    this.player.body.setVelocity(PLAYER_DEATH_JUMP_X * this.playerDir * -1, PLAYER_DEATH_JUMP_Y)
    this.time.delayedCall(1000, this.lose, [], this)
  }

  lose() {
    if (this.isTransitionning) return

    this.isTransitionning = true
    transitionEventsEmitter.emit('start')
    transitionEventsEmitter.once(
      'end',
      () => {
        this.scene.restart()
      },
      this
    )
  }

  addPlatform(group, x, y, width, height) {
    const platform = this.add.rectangle(x, y, width, height, 0xab5236)
    platform.setOrigin(0)
    group.add(platform)
  }

  addOneWayPlatform(group, data) {
    const { x, y, width, points } = data
    const platform = this.add.rectangle(x, y, width, 20, 0xffccaa)
    platform.setOrigin(0)
    group.add(platform)
    platform.body.checkCollision.down = false
    platform.body.checkCollision.left = false
    platform.body.checkCollision.right = false

    if (!points) return
    const path = new Phaser.Curves.Path(x, y)
    for (let i = 0; i < points.length; i++) {
      path.lineTo(points[i].x, points[i].y)
    }

    path.lineTo(x, y)
    platform.setData('isMoving', true)
    platform.setData('follower', {
      path,
      t: 0,
      deltaX: 0,
      deltaY: 0,
      vec: new Phaser.Math.Vector2(),
    })
  }

  stickPlayerToPlatform(player, platform) {
    if (!platform.getData('isMoving')) return
    const { deltaX, deltaY } = platform.getData('follower')
    this.player.y += deltaY

    if (this.player.body.velocity.x === 0 && player.body.touching.down) {
      this.player.x += deltaX
    }
  }

  addSpike(group, x, y) {
    const spike = this.add.sprite(x, y, 'spike')
    spike.setOrigin(0)
    this.physics.add.existing(spike, true)
    spike.body.setCircle(spike.displayWidth / 3)
    spike.body.setOffset(spike.displayWidth / 6, spike.displayHeight / 3)
    group.add(spike)
  }

  addFallingBlock(group, triggerGroup, x, y) {
    const fallingBlock = this.add.rectangle(x + 1, y, 38, 38, 0x5f574f)
    fallingBlock.setOrigin(0)
    group.add(fallingBlock)
    const trigger = this.add.rectangle(x - 1, y - 1, 42, 42)
    trigger.setOrigin(0)
    trigger.setData('block', fallingBlock)
    triggerGroup.add(trigger)
  }

  handleFallingBlockCollision(player, fallingBlockTrigger) {
    const fallingBlock = fallingBlockTrigger.getData('block')
    if (!player.body.blocked.down || fallingBlockTrigger.getData('isTriggered')) return
    fallingBlockTrigger.setData('isTriggered', true)

    this.tweens.add({
      targets: fallingBlock,
      duration: 80,
      repeat: 4,
      yoyo: true,
      ease: 'Bounce.easeInOut',
      x: fallingBlock.x + 2,
      onComplete: () => {
        fallingBlock.body.enable = false
        this.tweens.add({
          targets: fallingBlock,
          y: fallingBlock.y + 40,
          alpha: 0,
          duration: 300,
          onComplete: () => {
            fallingBlock.destroy()
          },
        })
      },
    })
  }

  handleEnemiesCollision(player, enemy) {
    if (this.player.getData('isDead') || enemy.getData('isDead')) return

    if (player.body.touching.down && enemy.body.touching.up) {
      enemy.setData('isDead', true)
      enemy.body.setVelocityX(0)

      this.tweens.add({
        targets: enemy,
        duration: 300,
        scale: 0,
        ease: 'Back.In',
        onComplete: () => {
          enemy.destroy()
        },
      })

      player.body.setVelocityY(-PLAYER_BOUNCE_OFF_VELOCITY)
      this.jumpCount = 1
      this.isJumping = true
      this.jumpStartTime = this.time.now
      this.isUpKeyPressed = false
      this.playerWasStanding = true
    } else {
      this.die.call(this)
    }
  }

  completePlayerTweens() {
    this.tweens.killTweensOf(this.playerSprite)
    this.playerSprite.setScale(1)
    this.playerSprite.angle = 0
    this.playerSprite.y = 0
  }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#29ADFF',
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: 960,
      height: 540,
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {
          y: 1600,
        },
      },
    },
    input: {
      activePointers: 3,
    },
    scene: [IntroScene, LevelsScene, GameScene, HUDScene, TransitionScene],
  }

const game = new Phaser.Game(config)