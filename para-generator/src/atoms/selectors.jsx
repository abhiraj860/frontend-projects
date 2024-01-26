import { selector } from "recoil";
import { inputNum } from "./atoms";

const words = [
    "Serendipity",
    "Mellifluous",
    "Quixotic",
    "Bungalow",
    "Nebulous",
    "Capricious",
    "Ephemeral",
    "Panacea",
    "Effervescent",
    "Labyrinth",
    "Peculiar",
    "Eloquence",
    "Ineffable",
    "Juxtapose",
    "Halcyon",
    "Resplendent",
    "Ephemeral",
    "Quagmire",
    "Zephyr",
    "Mellifluous"
  ];
    
export const paragraph = selector({
    key: 'paragraph',
    get: ({get})=>{
        const input = get(inputNum);
        const fixedSizeArray = Array.from({length: input}, ()=>Math.floor(Math.random() * 20));
        const arr = fixedSizeArray.map((value)=>words[value]);
        return arr.join(' ');
    }
});