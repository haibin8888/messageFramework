import { _decorator, Component, Node } from 'cc';
import { ControlBase } from './framework/ControlBase';
import { MessageCenter } from './framework/MessageCenter';
import Message, { MessageType } from './framework/Message';
const { ccclass, property } = _decorator;

@ccclass
export class player extends ControlBase {
    start() {

        
        this.node.on(Node.EventType.MOUSE_DOWN,this.onMouseDown , this.node);
        


    }

    onMouseDown(){

        let msg = new Message(MessageType.Type_UI,MessageType.UI_RefreshHp,100);
        MessageCenter.sendMessage(msg);

        let msg2 = new Message(MessageType.Type_NPC,MessageType.NPC_npc1,100);
        MessageCenter.sendMessage(msg2);


    
    }

    update(deltaTime: number) {
        
    }



}


