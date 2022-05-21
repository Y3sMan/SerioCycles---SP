import { once, on, DxScanCode, printConsole, Game, Spell, browser, Utility, destroyAllTexts, Input, Debug, destroyText, setTextString, getTextPos, getTextColor } from  'skyrimPlatform';
import { GivePlayerSpellBook } from "@skyrim-platform/po3-papyrus-extender/PO3_SKSEFunctions"
import * as wt from "@skyrim-platform/WidgetTools/WidgetTools"

export function pl() { return Game.getPlayer(); }
// pl()?.equipSpell(Spell.from( flames_form ), 0)
var x = 1500
var y = 300
var red = [1,1,1,1]
browser.setFocused(false)
browser.setVisible(true)
var modname = '.SeriosCycles.'
let flag = false
on('buttonEvent', (k_events) => {
    // destroyAllTexts()
    // wt.DestroyAllModWidgets(modname)
    let key = k_events.code
    // if ( k_events.device != 0) { return;}
    if ( !k_events.isDown ) {return}
    if (key == DxScanCode.Escape) {
        // wt.DestroyAllModWidgets(modname)
        destroyAllTexts()
        // browser.setFocused(false)
        flag = false
    }
    if ( Utility.isInMenuMode()) {return;}

    // \n${cycles['16']['left']}\n${cycles['16']['right']}
    let hotkeyid = 0
    if ( key == DxScanCode.Minus) {
        // browser.setFocused(true)
        wt.CreateText('Assignment Mode\nPress a hotkey', 'redAssignment', modname, x, y, red)
        hotkeyid = wt.CreateText(`${hotkeys[0]}`, 'Hotkey1', modname, x - 100, y + 100, red)
        // wt.EditModTextString('testing', modname, 'redAssignment')
    }
    // if (!browser.isFocused()) {return;}
    if ( key == DxScanCode.Q) {

        wt.CreateText(`None`, 'test1', modname, x - 100, y + 150, red)
        flag = true
    }
    // if (!flag) {return;}
    if ( key == DxScanCode.N1) { 
        let left = pl()?.getEquippedObject(1)?.getName()
        Debug.notification('two  has been pressed and the left is ' + left)
        // wt.DestroyModText(modname, 'test1')
        wt.EditModTextString('left', modname, 'test1')

    }
    if ( key == DxScanCode.N2) { 
        let left = pl()?.getEquippedObject(0)?.getName()
        Debug.notification('two  has been pressed and the left is ' + left)
        // wt.DestroyModText(modname, 'test1')
        wt.EditModTextString('right', modname, 'test1')

    }
});
    var l
    function editText(text: string, modname: string, StringID: string) {
        let id = wt.GetWidgetID(modname, StringID)
        let x = getTextPos(id)[0]
        let y = getTextPos(id)[1]
        let color = getTextColor(id)
        // wt.DestroyModText(modname, StringID)
        destroyText(id)
        wt.CreateText(text, StringID, modname, x, y, color)
    }
    // on('update', () => {
    //     const isKey_pressed = function (key: number) {
    //         return Input.isKeyPressed(key)
    //     }
    //     if (isKey_pressed(DxScanCode.Minus)) { 
    //         // browser.setFocused(true)
    //         wt.CreateText('Assignment Mode\nPress a hotkey', 'redAssignment', modname, x, y, red)
    //         wt.CreateText(`${hotkeys[0]}`, 'Hotkey1', modname, x - 100, y + 100, red)
    //     }
    //     // if (!browser.isFocused()) {return;}
    //     if (isKey_pressed(DxScanCode.Q)) {
    //         // printConsole('Q')
    //         // wt.DestroyModText(modname, 'Hotkey1')
    //         wt.CreateText(`None`, 'test1', modname, x - 100, y + 150, red)
    //         flag = true
    //         // destroyText(hotkeyid)
    //         // printConsole(l)
    //     }
    //     if (flag) {
    //         if (isKey_pressed(DxScanCode.N1)) {
    //             let left = pl()?.getEquippedObject(0)?.getName()
    //             // Debug.notification('one has been pressed and the left is ' + left)
    //             wt.EditModTextString('OH NOOO', modname, 'test1')
    //             // wt.DestroyModText(modname, 'test1')
    //             // destroyText(wt.GetWidgetID(modname, 'test1'))
    //             printConsole('it shoult be destroyed')
    //             // wt.EditModTextString('teststsetset', modname, 'test1')
    //             // setTextString
    //             // editText('left', modname, 'test1')
    //         }
    //         if (isKey_pressed(DxScanCode.N2)) {
    //             wt.CreateText('left', 'test1', modname, x-100, y+150, red)
    //             // let left = pl()?.getEquippedObject(1)?.getName()
    //             // Debug.notification('two  has been pressed and the left is ' + left)
    //             // wt.DestroyModText(modname, 'test1')
    //             // wt.EditModTextString('OH NOOO', modname, 'test1')
    //             // wt.CreateText(left, 'cycle1', modname, x-100, y+150, red )
    //             // setTextString(l, 'what')
    //         }
    //     }
    //     if (isKey_pressed(DxScanCode.Escape)) {
    //         // wt.DestroyAllModWidgets(modname)
    //         destroyAllTexts()
    //         // browser.setFocused(false)
    //         flag = false
    //     }
    // });
// once('update', () => { GivePlayerSpellBook() });
// var objSerioHotkeyModData = jdb_solveObj(".SerioHotkeyModData")
// var objHotkeyData = jmap_getObj(objSerioHotkeyModData, 'HotkeyData')
// var objHotkeyCycleDataArray = jmap_getObj(objHotkeyData, 'HotkeyCycleDataArray')
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