import { _decorator, Component, Node } from 'cc';
import { ManageBase } from './ManageBase';
import Message, { MessageType } from './Message';
const { ccclass, property } = _decorator;

@ccclass('ManageUI')
export class ManageUI extends ManageBase {

   public static readonly  manageType=MessageType.Type_UI;

 

  public static override receiveMessage(msg:Message){

      console.log("manageUI 我被执行了");
      if (msg.type !== this.manageType) {
          return;            
      }
      console.log("我是manageUI  我执行到这里了 manageType是"+this.manageType);

      console.log("我是manageUI  controls的长度是"+this.controls.length);

      for (let i = 0; i < this.controls.length; i++) {
          this.controls[i].receiveMessage(msg);
      }


  }


}


