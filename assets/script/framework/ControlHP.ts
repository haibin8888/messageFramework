import { _decorator, Component, Node } from 'cc';
import { ControlBase } from './ControlBase';
import { ManageUI } from './ManageUI';
import Message from './Message';
const { ccclass, property } = _decorator;

@ccclass('ControlHP')
export class ControlHP extends ControlBase {
    start() {

        ManageUI.registerControl(this);

    }

    update(deltaTime: number) {
        
    }

    public receiveMessage(message: Message) {

            console.log("ControlHP receiveMssage 我是hp",message);

    }
}


