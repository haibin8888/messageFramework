import { _decorator, Component, Node } from 'cc';
import { ControlBase } from './ControlBase';
import { ManageNPC } from './ManageNPC';
import Message from './Message';
const { ccclass, property } = _decorator;

@ccclass('ControlMP')
export class ControlMP extends ControlBase {
    start() {


        ManageNPC.registerControl(this);

    }

    update(deltaTime: number) {
        
    }
    // 事件 的最终处理类
    public receiveMessage(message: Message) {

        console.log("Control MP 我是MP MP MP MP 我接收到信息了");
        console.log("Control MP 我是MP MP MP MP 我接收到信息了",message);

    }


}


