import { once, on, DxScanCode, printConsole, Game, Spell, browser, Utility, destroyAllTexts, Input, Debug, destroyText, setTextString, getTextPos, getTextColor } from  'skyrimPlatform';
import { GivePlayerSpellBook, RemoveAddedSpells } from "@skyrim-platform/po3-papyrus-extender/PO3_SKSEFunctions"
import * as wt from "./spTextUtils"

export function pl() { return Game.getPlayer(); }
var x = 1500
var y = 300
var red = [1,1,1,1]
browser.setFocused(false)
browser.setVisible(true)
var modname = '.SeriosCycles.'
let flag = false
var l
var banner
var hotkey1
var c1
var c2
var c3
let c = true 
on('buttonEvent', (k_events) => {
    let key = k_events.code
    if ( k_events.device != 0) { return;}
    if ( !k_events.isDown ) {return}
    if (key == DxScanCode.Escape) {
        destroyAllTexts()
        flag = false
    }
    // if ( Utility.isInMenuMode()) {return;}

    if ( key == DxScanCode.Minus) {
        // browser.setFocused(true)
        Debug.messageBox('Assignment Mode\nPress Escape to exit all.')
        let banner = new wt.spText(x, y, 'Assignment Mode', red, undefined, modname)
        let hotkey1 = new wt.spText(x - 100, y + 100, 'Q', red, undefined, modname)
    }
    // if (!browser.isFocused()) {return;}
    var cycle_left = 'None'
    var cycle_right = 'None'
    var cycle_shout = 'None'
    let cycle_string = `\nLeft: ${cycle_left}\nRight: ${cycle_right}\nShout: ${cycle_shout}\n`
    let i = 0
    const SetCycleString = function (left: string, right: string, shout: string) {
        // if (left == undefined) {left = 'None'}
        // if (right == undefined) {right = 'None'}
        // if (shout == undefined) {shout = 'None'}
        return `\nLeft: ${left}\nRight: ${right}\nShout: ${shout}\n`
    }
    if ( key == DxScanCode.Q) {
        i++
        if ( i == 1 ){  c1 = new wt.spText(x - 100, y + 150, 'Cycle 1', red, undefined, modname) }
        if ( i == 2) { c1.destroyText(); c2 = new wt.spText(x - 100, y + 150, 'Cycle 2', red, undefined, modname) }
        if (i == 3) { c2.destroyText(); c3 = new wt.spText(x - 100, y + 150, 'Cycle 3', red, undefined, modname); i = 0 }
        // let left = pl()?.getEquippedObject(1)?.getName()
        // let right = pl()?.getEquippedObject(0)?.getName()
        // let shout = pl()?.getEquippedObject(2)?.getName()
        // let s = cycle_string
        // c1?.setText(s) 
        flag = true
    }
    if (!flag) {return;}
    if ( key == DxScanCode.N1) { 
        if (c) { 
            let left = pl()?.getEquippedObject(1)?.getName()
            c1?.setText(SetCycleString(left, 'None', "none")) 
        }
        else {
            c1?.setText(SetCycleString('None', 'None', "none")) 
        }
        c = !c
    }
    if ( key == DxScanCode.N2) { 
        let right = pl()?.getEquippedObject(0)?.getName()
        cycle_right = right
        c1?.setText(SetCycleString()) 
    }
});
// once('update', () => { GivePlayerSpellBook() });
var hotkeys = [DxScanCode.Q, DxScanCode.T]
var cycles = {
    '16': {
        'left': 'None',
        'right': 'None',
        'shout': 'None'
    },
    '20': {

        'left': 'None',
        'right': 'None',
        'shout': 'None'
   }
}