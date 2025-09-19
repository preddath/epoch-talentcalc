var rogue = {
  "assassination": {
    "image": "",
    "total": 0,
    "max": 60,
    "talents": [
      {
        "name": "Improved Eviscerate",
        "description": "Increases the damage done by your Eviscerate ability by %p%.",
        "values": {
          "%p": 5
        },
        "id": 0,
        "row": 0,
        "col": 0,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Remorseless Attacks",
        "description": "After killing an opponent that yields experience or honor, gives you a %p% increased critical strike chance on your next Sinister Strike, Backstab, Ambush, or Ghostly Strike. Lasts 20 sec.",
        "values": {
          "%p": 20
        },
        "id": 1,
        "row": 0,
        "col": 1,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Malice",
        "description": "Increases your critical strike chance by %p%.",
        "values": {
          "%p": 1
        },
        "id": 2,
        "row": 0,
        "col": 2,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Ruthlessness",
        "description": "Gives your melee finishing moves a %p% chance to add a combo point to your target.",
        "values": {
          "%p": 20
        },
        "id": 3,
        "row": 1,
        "col": 0,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Murder",
        "description": "Increases all damage caused against Humanoid, Giant, Beast and Dragonkin targets by %p%.",
        "values": {
          "%p": 1
        },
        "id": 4,
        "row": 1,
        "col": 1,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Puncturing Wounds",
        "description": "Increases the critical strike chance of your Backstab ability by %p% and the critical stroke chance of your Mutilate ability by %m%.",
        "values": {
          "%p": 10,
          "%m": 5
        },
        "id": 5,
        "row": 1,
        "col": 3,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Relentless Strikes",
        "description": "Your finishing moves have a 20% chance per combo point to restore 25 energy.",
        "values": {},
        "id": 6,
        "row": 2,
        "col": 0,
        "max": 1,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Poisoned Knife",
        "description": "Throw and Deadly Throw now have a %p% chance to consume 10 minutes of your off-hand weapon's poison to apply it to the target.",
        "values": {
          "%p": 50
        },
        "id": 7,
        "row": 2,
        "col": 1,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Lethality",
        "description": "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, Mutilate, Shiv and Hemorrhage by %p%.",
        "values": {
          "%p": 6
        },
        "id": 8,
        "row": 2,
        "col": 2,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Vile Poisons",
        "description": "Increases the damage dealt by your poisons and Envenom ability by %p% and gives your poisons an additional %c% chance to resist dispel effects.",
        "values": {
          "%p": 4,
          "%c": 8
        },
        "id": 9,
        "row": 3,
        "col": 1,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved Poisons",
        "description": "Increases the chance to apply poisons to your target by %p% and increases the duration of your poison on your weapon by %d%.",
        "values": {
          "%p": 2,
          "$d": 10
        },
        "id": 10,
        "row": 3,
        "col": 2,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Fleet Footed",
        "description": "Increases your chance to resist movement impairing effects by %p% and increases your movement speed by %m%. <br><br> <small>This does not stack with other movement speed increasing effects.</small>",
        "values": {
          "%p": 3
        },
        "id": 11,
        "row": 4,
        "col": 0,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Cold Blood",
        "description": "When activated, increases the critical strike chance of your next offensive ability by 100%.",
        "values": {},
        "id": 12,
        "row": 4,
        "col": 1,
        "max": 1,
        "current": 0,
        "image": "ability_rogue_eviscerate.png",
        "type": "ability"
      },
      {
        "name": "Improved Kidney Shot",
        "description": "While affected by your Kidney Shot ability, the target recieves an additional %p% damage from all sources.",
        "values": {
          "%p": 3
        },
        "id": 13,
        "row": 4,
        "col": 2,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Quick Recovery",
        "description": "All healing effects on you are increased by %p%. In addition, your finishing moves cost %c% less Energy when they fail to hit",
        "values": {
          "%p": 10,
          "%c": 80
        },
        "id": 14,
        "row": 4,
        "col": 3,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Improved Expose Armor",
        "description": "Increases the armor reduced by your Expose Armor ability by %p%.",
        "values": {
          "%p": 13
        },
        "id": 15,
        "row": 5,
        "col": 0,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Seal Fate",
        "description": "Your critical strikes from abilities that add combo points have a %p% chance to add an additional combo point.",
        "values": {
          "%p": 20
        },
        "id": 16,
        "row": 5,
        "col": 1,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Master Poisoner",
        "description": "Reduces the chance your poisons will be resisted by %p% and increases your chance to resist Poison effects by an additional %a%.",
        "values": {
          "%p": 5,
          "%a": 15
        },
        "id": 17,
        "row": 5,
        "col": 2,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Vigor",
        "description": "Increases your maximum energy by 20 and your Energy regeneration by 10%.",
        "values": {},
        "id": 18,
        "row": 6,
        "col": 1,
        "max": 1,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Deadened Nerves",
        "description": "Decreases physical damage taken by %p%.",
        "values": {
          "%p": 1
        },
        "id": 19,
        "row": 6,
        "col": 2,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Find Weakness",
        "description": "Your finishing moves increase the damage of all your offensive abilities by %p% for 10 seconds.",
        "values": {
          "%p": 2
        },
        "id": 20,
        "row": 7,
        "col": 2,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Mutilate",
        "description": "Instantly attacks with both weapons for an additional 44 with each weapon. Damage ist increased by 50% against Poisoned targets. <br> Awards 2 combo points.",
        "values": {
          "%p": 3
        },
        "id": 21,
        "row": 8,
        "col": 1,
        "max": 1,
        "current": 0,
        "image": "ability_rogue_eviscerate.png",
        "type": "ability"
      },
    ]
  },
  "combat": {
    "image": "",
    "total": 0,
    "max": 60,
    "talents": [
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 0,
        "row": 0,
        "col": 0,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 1,
        "row": 0,
        "col": 1,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 2,
        "row": 0,
        "col": 2,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 3,
        "row": 1,
        "col": 0,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 4,
        "row": 1,
        "col": 1,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 5,
        "row": 1,
        "col": 2,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 6,
        "row": 2,
        "col": 0,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 7,
        "row": 2,
        "col": 1,
        "max": 1,
        "current": 0,
        "image": "ability_rogue_eviscerate.png",
        "type": "ability"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 8,
        "row": 2,
        "col": 3,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 9,
        "row": 3,
        "col": 0,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 10,
        "row": 3,
        "col": 1,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 11,
        "row": 3,
        "col": 2,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 12,
        "row": 3,
        "col": 3,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 13,
        "row": 4,
        "col": 0,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 14,
        "row": 4,
        "col": 1,
        "max": 1,
        "current": 0,
        "image": "ability_rogue_eviscerate.png",
        "type": "ability"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 15,
        "row": 4,
        "col": 2,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 16,
        "row": 4,
        "col": 3,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 17,
        "row": 5,
        "col": 0,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 18,
        "row": 5,
        "col": 1,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 19,
        "row": 5,
        "col": 2,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 20,
        "row": 6,
        "col": 0,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 21,
        "row": 6,
        "col": 1,
        "max": 1,
        "current": 0,
        "image": "ability_rogue_eviscerate.png",
        "type": "ability"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 22,
        "row": 6,
        "col": 2,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 23,
        "row": 7,
        "col": 2,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 24,
        "row": 8,
        "col": 1,
        "max": 1,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
    ]
  },
  "subtlety": {
    "image": "",
    "total": 0,
    "max": 60,
    "talents": [
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 0,
        "row": 0,
        "col": 1,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 1,
        "row": 0,
        "col": 2,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 2,
        "row": 1,
        "col": 0,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 3,
        "row": 1,
        "col": 1,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 4,
        "row": 1,
        "col": 2,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 5,
        "row": 2,
        "col": 0,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 6,
        "row": 2,
        "col": 1,
        "max": 1,
        "current": 0,
        "image": "ability_rogue_eviscerate.png",
        "type": "ability"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 7,
        "row": 2,
        "col": 2,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 8,
        "row": 3,
        "col": 0,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 9,
        "row": 3,
        "col": 1,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 10,
        "row": 3,
        "col": 2,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 11,
        "row": 4,
        "col": 0,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 12,
        "row": 4,
        "col": 1,
        "max": 1,
        "current": 0,
        "image": "ability_rogue_eviscerate.png",
        "type": "ability"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 13,
        "row": 4,
        "col": 2,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 14,
        "row": 4,
        "col": 3,
        "max": 1,
        "current": 0,
        "image": "ability_rogue_eviscerate.png",
        "type": "ability"
      },


      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 15,
        "row": 5,
        "col": 0,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 16,
        "row": 5,
        "col": 2,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 17,
        "row": 6,
        "col": 0,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 18,
        "row": 6,
        "col": 1,
        "max": 1,
        "current": 0,
        "image": "ability_rogue_eviscerate.png",
        "type": "ability"
      },
      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 19,
        "row": 6,
        "col": 2,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 20,
        "row": 7,
        "col": 1,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Improved ",
        "description": "Increases  by %p%.",
        "values": {
          "%p": 3
        },
        "id": 21,
        "row": 8,
        "col": 1,
        "max": 1,
        "current": 0,
        "image": "ability_rogue_eviscerate.png",
        "type": "ability"
      },
    ]
  },
};
