import { _decorator, Component, Node } from 'cc';
import { ManageBase } from './ManageBase';
import Message, { MessageType } from './Message';
const { ccclass, property } = _decorator;

@ccclass('ManageNPC')
export class ManageNPC extends ManageBase {
 
    // 管理的类型 重要 一定要标注
    public  static readonly manageType=MessageType.Type_NPC;
    
 
    public static override receiveMessage(msg:Message){

        console.log("manageNPC 我被执行了");
        if (msg.type !== this.manageType) {
            return;            
        }

        console.log("我是manageNPC我执行到这里了 manageType是"+this.manageType);
        console.log("我是manageNPC  controls的长度是"+this.controls.length);

        for (let i = 0; i < this.controls.length; i++) {
            this.controls[i].receiveMessage(msg);
        }
  

    }

}


