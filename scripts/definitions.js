// Globales

//def pour le TAS
let TASJump = false
let TASMoveRight = false
let TASMoveLeft = false

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