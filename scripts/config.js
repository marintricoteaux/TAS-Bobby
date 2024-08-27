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