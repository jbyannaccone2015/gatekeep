import React from 'react'
import Attribute from './Attribute'
import Bonus from './Bonus'
import Saving from './Saving'
import Skill from './Skill'

export default function Modifiers() {

    // const checked = () => {
    //     if()
    // }


    return(
        <div class="flex flex-row bg-gray-700 rounded pl-10 pb-2 pt-1 w-[20vh]">
            <div class="pt-2">
                <div name="SDCIWC" class="bg-gray-400 border-black border-2 rounded h-[67vh]">
                    <Attribute attribute="STR" />
                    <Attribute attribute="DEX" />
                    <Attribute attribute="CON" />
                    <Attribute attribute="INT" />
                    <Attribute attribute="WIS" />
                    <Attribute attribute="CHAR" />
                </div>
            </div>
        <div name="Proficiencies and Skills" class="pt-2 pl-3">
            <div class="pb-1.5">
                <div class="border-black border-2 rounded bg-gray-400">
                    <div name="prof bonus and saving throws" class="pb-1 pl-1">
                        <Bonus bonus="inspiration"/>
                        <Bonus bonus="proficiency bonus" />
                    </div>
                </div>
            </div>
            <div class="pb-1.5">
                <div name="saving throws" class="pl-1 pt-2 text-xs bg-gray-400 border-black border-2 rounded"> 
                    <div class="pb-1 font-bold">Saving Throws</div>
                    <Saving saving="Strength" />
                    <Saving saving="Dexterity" />
                    <Saving saving="Constitution" />
                    <Saving saving="Intelligence" />
                    <Saving saving="Wisdom" />
                    <Saving saving="Charisma" />
                </div>
            </div>
                <div name="skills" class="pl-1 pb-0.5 bg-gray-400 whitespace-nowrap border-black border-2 rounded">
                    <div class="text-xs font-bold">Skills</div>
                    <Skill skill="Acrobatics (Dex)"/>
                    <Skill skill="Animal Handling (Wis)" />
                    <Skill skill="Arcana (Int)" />
                    <Skill skill="Athletics (Str)" />
                    <Skill skill="Deception (Cha)" />
                    <Skill skill="Insight (Wis)" />
                    <Skill skill="Intimidation (Cha)" />
                    <Skill skill="Investigation (Int)" />
                    <Skill skill="Medicine (Wis)" />
                    <Skill skill="Nature (Int)" />
                    <Skill skill="Perception (Wis)" />
                    <Skill skill="Performance (Cha)" />
                    <Skill skill="Persuasion (Cha)" />
                    <Skill skill="Religion (Int)" />
                    <Skill skill="Sleight of Hand (Dex)" />
                    <Skill skill="Stealth (Dex)" />
                    <Skill skill="Survival (Wis)" />
                </div>
            </div>
        </div>
    )
}