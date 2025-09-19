var hunter = {
  "beast-mastery": {
    "image": "",
    "total": 0,
    "max": 60,
    "talents": [
      {
        "name": "Improved Aspect of the Hawk",
        "description": "While Aspect of the Hawk is active, all normal ranged attacks have a 10% chance of increasing ranged attack speeed by %p% for 12 seconds.",
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
        "name": "Endurance Training",
        "description": "Increases the Health of your pet by %p% and your total Health by %h%.",
        "values": {
          "%p": 2,
          "%h": 1
        },
        "id": 1,
        "row": 0,
        "col": 2,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Focused Fire",
        "description": "All damage caused by you is increased by %p% while your pet is active and the critical strike chance of your Kill Command ability is increased by %c%.",
        "values": {
          "%p": 1,
          "%c": 10
        },
        "id": 2,
        "row": 1,
        "col": 0,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved Aspect of the Monkey",
        "description": "Increases theDodge bonus of your Aspect of the Monkey ability by %p%.",
        "values": {
          "%p": 2
        },
        "id": 3,
        "row": 1,
        "col": 1,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Thick Hide",
        "description": "Increases the armor rating of your pets by %p% and your armor contribution from items by %a%.",
        "values": {
          "%p": 7,
          "%a": 4
        },
        "id": 4,
        "row": 1,
        "col": 2,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved Revive Pet",
        "description": "Revive Pet's casting time is reduced by %p sec, mana cost is reduced by %m%, and increases the health your pet returns with by an additional %h%.",
        "values": {
          "%p": 3,
          "%m": 20,
          "%h": 15
        },
        "id": 5,
        "row": 1,
        "col": 3,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Pathfinding",
        "description": "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by %p%.",
        "values": {
          "%p": 4
        },
        "id": 6,
        "row": 2,
        "col": 0,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Bestial Swiftness",
        "description": "Increases the outdoor movement speed of your pets by %p%.",
        "values": {
          "%p": 30
        },
        "id": 7,
        "row": 2,
        "col": 1,
        "max": 1,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Unleashed Fury",
        "description": "Increases the damage done by your pets by %p%.",
        "values": {
          "%p": 4
        },
        "id": 8,
        "row": 2,
        "col": 3,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Improved Mend Pet",
        "description": "Reduces the mana cost of your Mend Pet spell by %p% and gives the Mend Pet spell a %c% chance of cleansing 1 Curse, Disease, Magic or Poison effect from the pet each tick.",
        "values": {
          "%p": 10,
          "%c": 25
        },
        "id": 9,
        "row": 3,
        "col": 1,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Ferocity",
        "description": "Increases critical strike chance of your pet by %p%.",
        "values": {
          "%p": 2
        },
        "id": 10,
        "row": 3,
        "col": 2,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Spirit Bond",
        "description": "While your pet is active, you and your petwill regenerate %p% of total health every 10 seconds.",
        "values": {
          "%p": 1
        },
        "id": 11,
        "row": 4,
        "col": 0,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Intimidation",
        "description": "Command your pet to intimidate the target on the next successful melee attack, causing a high amount of threat and stunning the target for %p seconds.",
        "values": {
          "%p": 3
        },
        "id": 12,
        "row": 4,
        "col": 1,
        "max": 1,
        "current": 0,
        "image": "ability_rogue_eviscerate.png",
        "type": "ability",
      },
      {
        "name": "Bestial Discipline",
        "description": "Increases the Focus regeneration of your pets by %p%.",
        "values": {
          "%p": 50
        },
        "id": 13,
        "row": 4,
        "col": 3,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Animal Handler",
        "description": "Increases your speed while mounted by %p% and your pet's chance to hit by %c%.<br> The mounted movement speed increase does not stack with other effects.",
        "values": {
          "%p": 4,
          "%c": 2
        },
        "id": 14,
        "row": 5,
        "col": 0,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Frenzy",
        "description": "Gives your pet a %p% chance to gain a 30% attack speed increase for 8 seconds after dealing a critical strike.",
        "values": {
          "%p": 5
        },
        "id": 15,
        "row": 5,
        "col": 2,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Ferocious Inspiration",
        "description": "When your pet scores a critical hit, all party and raid members within 100 yards have all their damage increased by %p% for 10 seconds.",
        "values": {
          "%p": 1
        },
        "id": 16,
        "row": 6,
        "col": 0,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Bestial Wrath",
        "description": "Send your pet into a rage causing %p% additional damage for 18 seconds. <br> While enraged, the beast does not feel pity or remorse or fear and it cannot be stopped unless killed.",
        "values": {
          "%p": 50
        },
        "id": 17,
        "row": 6,
        "col": 1,
        "max": 1,
        "current": 0,
        "image": "ability_rogue_eviscerate.png",
        "type": "ability"
      },
      {
        "name": "Catlike Reflexes",
        "description": "Increases your chance to dodge by %p% and your pet's chance to dodge by an additional %c%.",
        "values": {
          "%p": 1,
          "%c": 3
        },
        "id": 18,
        "row": 6,
        "col": 2,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Serpent's Swiftness",
        "description": "Increases ranged combat attack speed by %p% and your pet's melee attack speed by %c%.",
        "values": {
          "%p": 4,
          "%c": 2
        },
        "id": 19,
        "row": 7,
        "col": 2,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "The Beast Within",
        "description": "When your pet is under the effects of Bestial Wrath, you also go into a rage causing %p% additional damage and reducing mana costs of all spells by 20% for 18 seconds.<br> While enraged you do not feel pity or remorse or fear and you cannot be stopped unless killed.",
        "values": {
          "%p": 10
        },
        "id": 20,
        "row": 8,
        "col": 1,
        "max": 1,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
    ]
  },
  "marksmanship": {
    "image": "",
    "total": 0,
    "max": 60,
    "talents": [
      {
        "name": "Improved Concussive Shot",
        "description": "Gives your Concussive Shot a %p% chance to stun the target for 3 seconds.",
        "values": {
          "%p": 4
        },
        "id": 0,
        "row": 0,
        "col": 1,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Lethal Shots",
        "description": "Increases your critical strike chance with ranged weapons by %p%.",
        "values": {
          "%p": 1
        },
        "id": 1,
        "row": 0,
        "col": 2,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved Hunter's Mark",
        "description": "Causes %p% of your Hunter's Mark ability's base attack power to apply to melee attack power as well.",
        "values": {
          "%p": 20
        },
        "id": 2,
        "row": 1,
        "col": 1,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Efficiency",
        "description": "Reduces the mana cost of your Shots and Stings by %p%.",
        "values": {
          "%p": 2
        },
        "id": 3,
        "row": 1,
        "col": 2,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Go for the Throat",
        "description": "Your ranged critical hits cause your pet to generate %p Focus.",
        "values": {
          "%p": 25
        },
        "id": 4,
        "row": 2,
        "col": 0,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved Arcane Shot",
        "description": "Reduces the cooldown of your Arcane Shot ability by %p sec.",
        "values": {
          "%p": 0.2
        },
        "id": 5,
        "row": 2,
        "col": 1,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Aimed Shot",
        "description": "An aimed Shot that increases ranged damage by 70 and reduces healing done to that target by %p%. Lasts 10 seconds.",
        "values": {
          "%p": 50
        },
        "id": 6,
        "row": 2,
        "col": 2,
        "max": 1,
        "current": 0,
        "image": "ability_rogue_eviscerate.png",
        "type": "ability"
      },
      {
        "name": "Rapid Killing",
        "description": "Reduces the cooldown of your Rapid Fire ability by %m min. In addition, after killing an opponent that yields experience or honor, your next Aimed Shot, Arcane Shot or Auto Shot causes %p% additional damage.<br> Lasts 20 seconds.",
        "values": {
          "%p": 10,
          "%m": 1
        },
        "id": 7,
        "row": 2,
        "col": 3,
        "max": 1,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      

      {
        "name": "Improved Stings",
        "description": "Increases the damage done by your Serpent Sting and Wyvern Sting by %p% and the mana drained by your Viper Sting by %p%.<br> In addition, reduces the chance your Stings will be dispelled by %p%.",
        "values": {
          "%p": 6
        },
        "id": 8,
        "row": 3,
        "col": 1,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Mortal Shots",
        "description": "Increases your ranged weapon critical strike damage by %p%.",
        "values": {
          "%p": 6
        },
        "id": 9,
        "row": 3,
        "col": 2,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Concussive Barrage",
        "description": "Your successful Auto Shot attacks have a %p% chance to Daze the target for 4 seconds.",
        "values": {
          "%p": 2
        },
        "id": 10,
        "row": 4,
        "col": 0,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Scatter Shot",
        "description": "A short-range shopt that deals %p% Weapon damage and disorients the target for 4 seconds.<br> Any damage caused will remove the effect. Turns off your attack when used.",
        "values": {
          "%p": 50
        },
        "id": 11,
        "row": 4,
        "col": 1,
        "max": 1,
        "current": 0,
        "image": "ability_rogue_eviscerate.png",
        "type": "ability"
      },
      {
        "name": "Barrage",
        "description": "Increases the damage done by your Multi-Shot and Volley spells by %p%.",
        "values": {
          "%p": 4
        },
        "id": 12,
        "row": 4,
        "col": 2,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Combat Experience",
        "description": "Increases your total Agility by %p% and your total Intellect by %i%.",
        "values": {
          "%p": 1,
          "%i": 3
        },
        "id": 13,
        "row": 5,
        "col": 0,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Ranged Weapon Specialization",
        "description": "Increases the damage you deal with ranged weapons by %p%.",
        "values": {
          "%p": 1
        },
        "id": 14,
        "row": 5,
        "col": 3,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Careful Aim",
        "description": "Increases your ranged attack power by an amount equal to %p% of your total Intellect.",
        "values": {
          "%p": 15
        },
        "id": 15,
        "row": 6,
        "col": 0,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Silencing Shot",
        "description": "A shot that deals 50% weapon damage and Silences the target for 3 seconds.",
        "values": {},
        "id": 16,
        "row": 6,
        "col": 1,
        "max": 1,
        "current": 0,
        "image": "ability_rogue_eviscerate.png",
        "type": "ability"
      },
      {
        "name": "Improved Barrage",
        "description": "Increases the critical strike chance of your Multi-Shot ability by %p% and gives you a %c% chance to avoid interruption caused by damage while channeling Volley.",
        "values": {
          "%p": 4,
          "%c": 33
        },
        "id": 17,
        "row": 6,
        "col": 2,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Master Marksman",
        "description": "Increases your ranged attack power by %p%.",
        "values": {
          "%p": 2
        },
        "id": 18,
        "row": 7,
        "col": 1,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Trueshot Aura ",
        "description": "Increases the attack power of party and raid members within 45 yards by 50. Lasts 0.001 seconds.",
        "values": {},
        "id": 19,
        "row": 8,
        "col": 1,
        "max": 1,
        "current": 0,
        "image": "ability_rogue_eviscerate.png",
        "type": "ability"
      },
    ]
  },
  "survival": {
    "image": "",
    "total": 0,
    "max": 60,
    "talents": [
      {
        "name": "Monster Slaying",
        "description": "Increases all damage caused against Beasts, Giants and Dragonkin targets by %p% and increases critical damage caused against Beasts, Giants and Dragonkin targets by an additional %p%.",
        "values": {
          "%p": 1
        },
        "id": 0,
        "row": 0,
        "col": 0,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Humanoid Slaying",
        "description": "Increases all damage caused against Humanoid targets by %p% and increases critical damage caused against Humanoid targets by an additional %p%.",
        "values": {
          "%p": 3
        },
        "id": 1,
        "row": 0,
        "col": 1,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Hawk Eye ",
        "description": "Increases the Range of your ranged weapons by %p yards.",
        "values": {
          "%p": 2
        },
        "id": 2,
        "row": 0,
        "col": 2,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Savage Strikes ",
        "description": "Increases the critical strike chance of Raptor Strike and Mongoose Bite by %p%.",
        "values": {
          "%p": 10
        },
        "id": 3,
        "row": 0,
        "col": 3,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Entrapment",
        "description": "Gives your Immolation Trap, Frost Trap, Explosive Trap, and Snake Trap a %p% chance to entrap the target, preventing them from moving for 4 sec.",
        "values": {
          "%p": 8
        },
        "id": 4,
        "row": 1,
        "col": 0,
        "max": 3,
        "current": 0,
        "image": "ability_ensnare.webp"
      },
      {
        "name": "Deflection",
        "description": "Increases your Parry chance by %p%.",
        "values": {
          "%p": 1
        },
        "id": 6,
        "row": 1,
        "col": 1,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved Wing Clip",
        "description": "Gives your Wing Clip ability a %p% chance to immobilize the target for 5 seconds.",
        "values": {
          "%p": 7
        },
        "id": 7,
        "row": 1,
        "col": 2,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      
      
      {
        "name": "Clever Traps",
        "description": "Increases the duration of Freezing and Frost Trap effects by %p%, the damage of Immolation and Explosive Trap effects by %p% and the number of Snakes summoned by Snake Traps by %p%.",
        "values": {
          "%p": 15
        },
        "id": 8,
        "row": 2,
        "col": 0,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Survivalist",
        "description": "Increases total health by %p%.",
        "values": {
          "%p": 2
        },
        "id": 9,
        "row": 2,
        "col": 1,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Deterrence",
        "description": "When activated, increases your Dodge and Parry chance by %p% for 10 seconds.",
        "values": {
          "%p": 25
        },
        "id": 10,
        "row": 2,
        "col": 2,
        "max": 1,
        "current": 0,
        "image": "ability_rogue_eviscerate.png",
        "type": "ability"
      },


      {
        "name": "Trap Mastery",
        "description": "Decreases the chance enemies will resist trap effects by %p%.",
        "values": {
          "%p": 5
        },
        "id": 11,
        "row": 3,
        "col": 0,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Surefooted",
        "description": "Increases hit chance by %p% and increases the chance movement impairing effects will be resisted by an additional %c%.",
        "values": {
          "%p": 3,
          "%c": 5
        },
        "id": 12,
        "row": 3,
        "col": 1,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Improved Feign Death",
        "description": "Reduces the chance your Feign Death ability will be resisted by %p%.",
        "values": {
          "%p": 2
        },
        "id": 13,
        "row": 3,
        "col": 3,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Survival Instincts",
        "description": "Reduces all damage taken by %p% and increases attack power by %p%.",
        "values": {
          "%p": 2
        },
        "id": 14,
        "row": 4,
        "col": 0,
        "max": 2,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Killer Instinct",
        "description": "Increases your critical strike chance with all attacks by %p%.",
        "values": {
          "%p": 1
        },
        "id": 15,
        "row": 4,
        "col": 1,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Counterattack",
        "description": "A strike that becomes active after parrying an opponent's attack. This attack deals 40 damage and immobilizes the target for 5 seconds. <br><br> Counterattack cannot be blocked, dodged or parried.",
        "values": {
          "%p": 3
        },
        "id": 16,
        "row": 4,
        "col": 2,
        "max": 1,
        "current": 0,
        "image": "ability_rogue_eviscerate.png",
        "type": "ability"
      },


      {
        "name": "Resourcefulness",
        "description": "Reduces the mana cost of all traps and melee abilities by %p% and reduces the cooldown of all traps by %s sec.",
        "values": {
          "%p": 20,
          "%s": 2
        },
        "id": 17,
        "row": 5,
        "col": 0,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Lightning Reflexes",
        "description": "Increases your Agility by %p%.",
        "values": {
          "%p": 3
        },
        "id": 18,
        "row": 5,
        "col": 2,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Thrill of the Hunt",
        "description": "Gives you a %p% chance to regain 40% of the mana cost of any shot when it critically hits.",
        "values": {
          "%p": 33
        },
        "id": 19,
        "row": 6,
        "col": 0,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },
      {
        "name": "Wyvern Sting",
        "description": "A stinging shot that puts the target to sleep for 12 sec. Any damage will cancel the effect. When the target wakes up, the Sting causes 300 Nature damage over 12 sec.<br><br> Only usable out of combat.<br> Only one Sting per Hunter can be active on the target at a time.",
        "values": {},
        "id": 20,
        "row": 6,
        "col": 1,
        "max": 1,
        "current": 0,
        "image": "ability_rogue_eviscerate.png",
        "type": "abiltiy"
      },
      {
        "name": "Expose Weakness",
        "description": "Your ranged criticals have a p% chance to apply an Expose Weakness effect to the target. Expose Weakness increases the attack power of all attackers against that target by 25% of your Agility for 7 sec.",
        "values": {
          "%p": 3
        },
        "id": 21,
        "row": 6,
        "col": 2,
        "max": 3,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Master Tactician",
        "description": "Your successful ranged attacks have a 6% chance to increase your critical strike chance with all attacks by %p% for 8 seconds.",
        "values": {
          "%p": 2
        },
        "id": 22,
        "row": 7,
        "col": 1,
        "max": 5,
        "current": 0,
        "image": "ability_rogue_eviscerate.png"
      },


      {
        "name": "Readiness",
        "description": "When activated, this ability immediatly finishes the cooldown on your other Hunter abilities.",
        "values": {},
        "id": 23,
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
