var paladin = {
    "holy": {
        "image": "background-paladin-holy.jpg",
        "total": 0,
        "max": 60,
        "talents": [
        {
            "name": "Divine Strength",
            "description": "Increases your total Strength by %p%.",
            "values": {
                "%p": 2
            },
            "id": 0,
            "row": 0,
            "col": 1,
            "max": 5,
            "current": 0,
            "image": "ability_golemthunderclap.png"
        },
        {
            "name": "Divine Intellect",
            "description": "Increases your total Intellect by %p%.",
            "values": {
                "%p": 2
            },
            "id": 1,
            "row": 0,
            "col": 2,
            "max": 5,
            "current": 0,
            "image": "spell_nature_sleep.png"
        },
        {
            "name": "Spiritual Focus",
            "description": "Gives your Flash of Light and Holy Light spells a %p% chance to not lose casting time when you take damage.",
            "values": {
                "%p": 14
            },
            "id": 2,
            "row": 1,
            "col": 1,
            "max": 5,
            "current": 0,
            "image": "spell_arcane_blink.png"
        },
        {
            "name": "Improved Seal of Righteousness",
            "description": "Increases the damage done by your Seal of Righteousness Judgement of Righteousness by %p%.",
            "values": {
                "%p": 3
            },
            "id": 3,
            "row": 1,
            "col": 2,
            "max": 5,
            "current": 0,
            "image": "ability_thunderbolt.png"
        },
        {
            "name": "Healing Light",
            "description": "Increases the amount healed by your Holy Light and Flash of Light spells by %p%.",
            "values": {
                "%p": 4
            },
            "id": 4,
            "row": 2,
            "col": 0,
            "max": 3,
            "current": 0,
            "image": "spell_holy_holybolt.png"
        },
        {
            "name": "Aura Mastery",
            "description": "Increases the radius of your Auras to %p yards",
            "values": {
                "%p": 40
            },
            "id": 5,
            "row": 2,
            "col": 1,
            "max": 1,
            "current": 0,
            "image": "spell_holy_auramastery.png"
        },
        {
            "name": "Improved Lay on Hands",
            "description": "Gives the target of your Lay on Hands spell a %p% bonus to their armor value from items for 120 seconds. In addition, the cooldown for your Lay on Hands spell is reduced by %m min.",
            "values": {
                "%p": 15,
                "%m": 10
            },
            "id": 6,
            "row": 2,
            "col": 2,
            "max": 2,
            "current": 0,
            "image": "spell_holy_layonhands.png"
        },
        {
            "name": "Unyielding Faith",
            "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
            "values": {
                "%p": 5
            },
            "id": 7,
            "row": 2,
            "col": 3,
            "max": 2,
            "current": 0,
            "image": "spell_holy_unyieldingfaith.png"
        },
        

        {
            "name": "Illumination",
            "description": "After getting a critical effect from your Flash of Light, Holy Light or Holy Shock heal spell, gives you a %p% chance to gain mana equal to 75% of the base cost of the spell.",
            "values": {
                "%p": 20
            },
            "id": 8,
            "row": 3,
            "col": 1,
            "max": 5,
            "current": 0,
            "image": "spell_holy_greaterheal.png"
        },
        {
            "name": "Improved Blessing of Wisdom",
            "description": "Increases the effect of your Blessing of Wisdom spell by %p%.",
            "values": {
                "%p": 10
            },
            "id": 9,
            "row": 3,
            "col": 2,
            "max": 2,
            "current": 0,
            "image": "spell_holy_sealofwisdom.png"
        },
        {
            "name": "Overwhelming Light",
            "description": "When your Holy, FLash of Light or Holy Shock spells heal a target to full health, 3 nearby injured allies will be healed by an amount equal to %p% of the healing effect.",
            "values": {
                "%p": 10
            },
            "id": 10,
            "row": 3,
            "col": 3,
            "max": 2,
            "current": 0,
            "image": "spell_holy_divineprovidence.png"
        },

        
        {
            "name": "Pure of Heart",
            "description": "Increases your resistance to Curse and Disease effects by %p%",
            "values": {
                "%p": 5
            },
            "id": 11,
            "row": 4,
            "col": 0,
            "max": 3,
            "current": 0,
            "image": "spell_holy_pureofheart.png"
        },
        {
            "name": "Divine Favor",
            "description": "When activated, gives your next Flash of Light, Holy Light or Holy shock spell a %p% critical effect chance.",
            "values": {
                "%p": 100
            },
            "id": 12,
            "row": 4,
            "col": 1,
            "max": 1,
            "current": 0,
            "image": "spell_holy_heal.png"
        },
        {
            "name": "Sanctified Light",
            "description": "Increases the critical effect chance of your Holy Light, Seal of Light and Judgement of Light spells by 6% and reduces the threat generated by %p%",
            "values": {
                "%p": 33
            },
            "id": 13,
            "row": 4,
            "col": 2,
            "max": 3,
            "current": 0,
            "image": "spell_holy_healingaura.png"
        },


        {
            "name": "Purifying Power",
            "description": "Reduces the mana cost of your Cleanse, Purify and Consecration spells by %p% and increases the critical strike chance of your Exorcism and Holy Wrath spells by %e%. Additionally, hitting an enemy with Exorcism or Holy Wrath increases the critical effect chance of your next healing spell by 30%. ",
            "values": {
                "%p": 5,
                "%e": 10
            },
            "id": 14,
            "row": 5,
            "col": 0,
            "max": 2,
            "current": 0,
            "image": "spell_holy_purifyingpower.png"
        },
        {
            "name": "Holy Power",
            "description": "Increases the critical effect chance of your Holy spells by %p%.",
            "values": {
                "%p": 1
            },
            "id": 15,
            "row": 5,
            "col": 2,
            "max": 5,
            "current": 0,
            "image": "spell_holy_power.png"
        },


        {
            "name": "Light's Grace",
            "description": "Gives your Holy Light spell a %p% chance to reduce the cast time of your next Holy Light spell by 0.5 sec. This effect lasts 15 sec.",
            "values": {
                "%p": 33
            },
            "id": 16,
            "row": 6,
            "col": 0,
            "max": 3,
            "current": 0,
            "image": "spell_holy_lightsgrace.png"
        },
        {
            "name": "Holy Shock",
            "description": "Blasts the target with Holy energy, causing 277 to 299 Holy damage to an enemy, or 351 to 379 healing to an ally.",
            "type": "ability",
            "values": {
                "%p": 5
            },
            "id": 17,
            "row": 6,
            "col": 1,
            "max": 1,
            "current": 0,
            "image": "spell_holy_searinglight.png"
        },
        {
            "name": "Blessed Life",
            "description": "All attacks against you have a %p$ chance to cause half damage, and your resitances are increased by %n.",
            "values": {
                "%p": 4,
                "%n": 4
            },
            "id": 18,
            "row": 6,
            "col": 2,
            "max": 3,
            "current": 0,
            "image": "spell_holy_blessedlife.png"
        },

            
        {
            "name": "Holy Guidance",
            "description": "Increases your spell damage and healing by %p% of your total Intellect.",
            "values": {
                "%p": 7
            },
            "id": 19,
            "row": 7,
            "col": 1,
            "max": 5,
            "current": 0,
            "image": "spell_holy_holyguidance.png"
        },

            
        {
            "name": "Divine Illumination",
            "description": "Increases the casting speed of all Paladin spells by 50% for 15 sec. Causes Forebearance, preventing the use of Divine SHield, Divine Shield, Divine Protection and Hand of Protection again for 1 min.",
            "type": "ability",
            "values": {
            
            },
            "id": 20,
            "row": 8,
            "col": 1,
            "max": 1,
            "current": 0,
            "image": "spell_holy_divineillumination.png"
        },
    ]
    },
    "protection": {
        "image": "background-paladin-holy.jpg",
        "total": 0,
        "max": 60,
        "talents": [
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 0,
                "row": 0,
                "col": 1,
                "max": 5,
                "current": 0,
                "image": "spell_holy_devotionaura.png"
            },
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 1,
                "row": 0,
                "col": 2,
                "max": 5,
                "current": 0,
                "image": "ability_defend.png"
            },

            
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 2,
                "row": 1,
                "col": 0,
                "max": 3,
                "current": 0,
                "image": "ability_rogue_ambush.png"
            },
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 3,
                "row": 1,
                "col": 1,
                "max": 2,
                "current": 0,
                "image": "spell_holy_sealofprotection.png"
            },
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 4,
                "row": 1,
                "col": 3,
                "max": 5,
                "current": 0,
                "image": "spell_holy_devotion.png"
            },

            
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 5,
                "row": 2,
                "col": 0,
                "max": 1,
                "current": 0,
                "image": "spell_magic_magearmor.png"
            },
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 6,
                "row": 2,
                "col": 1,
                "max": 3,
                "current": 0,
                "image": "spell_holy_sealoffury.png"
            },
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 7,
                "row": 2,
                "col": 2,
                "max": 3,
                "current": 0,
                "image": "inv_shield_06.png"
            },
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 8,
                "row": 2,
                "col": 3,
                "max": 3,
                "current": 0,
                "image": "spell_holy_mindsooth.png"
            },

            
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 9,
                "row": 3,
                "col": 0,
                "max": 2,
                "current": 0,
                "image": "spell_holy_stoicism.png"
            },
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 10,
                "row": 3,
                "col": 1,
                "max": 3,
                "current": 0,
                "image": "spell_holy_sealofmight.png"
            },
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 11,
                "row": 3,
                "col": 2,
                "max": 5,
                "current": 0,
                "image": "spell_magic_lesserinvisibilty.png"
            },


            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 12,
                "row": 4,
                "col": 0,
                "max": 2,
                "current": 0,
                "image": "spell_holy_improvedresistanceauras.png"
            },
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 13,
                "row": 4,
                "col": 1,
                "max": 1,
                "current": 0,
                "image": "spell_nature_lightningshield.png"
            },
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 14,
                "row": 4,
                "col": 2,
                "max": 5,
                "current": 0,
                "image": "spell_holy_blessingofstrength.png"
            },


            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 15,
                "row": 5,
                "col": 0,
                "max": 2,
                "current": 0,
                "image": "spell_holy_divineintervention.png"
            },
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 16,
                "row": 5,
                "col": 2,
                "max": 5,
                "current": 0,
                "image": "inv_sword_20.png"
            },


            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 17,
                "row": 6,
                "col": 0,
                "max": 2,
                "current": 0,
                "image": "spell_holy_blessingofprotection.png"
            },
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 18,
                "row": 6,
                "col": 1,
                "max": 1,
                "current": 0,
                "image": "spell_holy_blessingofprotection.png"
            },
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 19,
                "row": 6,
                "col": 2,
                "max": 5,
                "current": 0,
                "image": "spell_holy_ardentdefender.png"
            },

            
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 20,
                "row": 7,
                "col": 2,
                "max": 5,
                "current": 0,
                "image": "spell_holy_weaponmastery.png"
            },

            
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 21,
                "row": 8,
                "col": 1,
                "max": 1,
                "current": 0,
                "image": "spell_holy_avengersshield.png"
            },
        ]
    },
    "retribution": {
        "image": "background-paladin-holy.jpg",
        "total": 0,
        "max": 60,
        "talents": [
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 0,
                "row": 0,
                "col": 1,
                "max": 5,
                "current": 0,
                "image": "spell_holy_fistofjustice.png"
            },
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 1,
                "row": 0,
                "col": 2,
                "max": 5,
                "current": 0,
                "image": "spell_frost_windwalkon.png"
            },


            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 2,
                "row": 1,
                "col": 0,
                "max": 2,
                "current": 0,
                "image": "spell_holy_righteousfury.png"
            },
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 3,
                "row": 1,
                "col": 1,
                "max": 3,
                "current": 0,
                "image": "spell_holy_holysmite.png"
            },
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 4,
                "row": 1,
                "col": 2,
                "max": 5,
                "current": 0,
                "image": "ability_parry.png"
            },


            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 5,
                "row": 2,
                "col": 0,
                "max": 3,
                "current": 0,
                "image": "spell_holy_vindication.png"
            },
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 6,
                "row": 2,
                "col": 1,
                "max": 5,
                "current": 0,
                "image": "spell_holy_retributionaura.png"
            },
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 7,
                "row": 2,
                "col": 2,
                "max": 1,
                "current": 0,
                "image": "ability_warrior_innerrage.png"
            },
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 8,
                "row": 2,
                "col": 3,
                "max": 3,
                "current": 0,
                "image": "spell_holy_persuitofjustice.png"
            },


            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 9,
                "row": 3,
                "col": 0,
                "max": 2,
                "current": 0,
                "image": "spell_holy_eyeforaneye.png"
            },
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 10,
                "row": 3,
                "col": 2,
                "max": 2,
                "current": 0,
                "image": "spell_holy_auraoflight.png"
            },
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 11,
                "row": 3,
                "col": 3,
                "max": 3,
                "current": 0,
                "image": "spell_holy_crusade.png"
            },


            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 12,
                "row": 4,
                "col": 0,
                "max": 3,
                "current": 0,
                "image": "inv_hammer_04.png"
            },
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 13,
                "row": 4,
                "col": 2,
                "max": 1,
                "current": 0,
                "image": "spell_holy_mindvision.png"
            },
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 14,
                "row": 4,
                "col": 3,
                "max": 2,
                "current": 0,
                "image": "spell_holy_mindvision.png"
            },

            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 15,
                "row": 5,
                "col": 1,
                "max": 5,
                "current": 0,
                "image": "ability_racial_avatar.png"
            },
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 16,
                "row": 5,
                "col": 2,
                "max": 3,
                "current": 0,
                "image": "spell_holy_righteousfury.png"
            },

            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 17,
                "row": 6,
                "col": 0,
                "max": 3,
                "current": 0,
                "image": "spell_holy_holysmite.png"
            },
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 18,
                "row": 6,
                "col": 1,
                "max": 1,
                "current": 0,
                "image": "spell_holy_prayerofhealing.png"
            },
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 19,
                "row": 6,
                "col": 2,
                "max": 3,
                "current": 0,
                "image": "spell_holy_divinepurpose.png"
            },

            
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 20,
                "row": 7,
                "col": 1,
                "max": 5,
                "current": 0,
                "image": "spell_holy_fanaticism.png"
            },

            
            {
                "name": "Unyielding Faith",
                "description": "Increases your chance to resist Fear and Disorient effects by an additional %p%.",
                "values": {
                    "%p": 5
                },
                "id": 21,
                "row": 8,
                "col": 1,
                "max": 1,
                "current": 0,
                "image": "spell_holy_crusaderstrike.png"
            },
        ]
    }
};
