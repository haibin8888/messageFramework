import { _decorator, Component, Node } from 'cc';
import { ComponentBase } from './ComponentBase';
import { ControlBase } from './ControlBase';
import Message from './Message';
const { ccclass, property } = _decorator;


// 管理类 管理所有的控制类 
@ccclass
export  class ManageBase extends ComponentBase {
   


    // controls集合 controls 是最底层操作类
   public static controls:ControlBase[] = [];

    // manage的类型
   public static manageType: number;


    // 获得类型


    // 注册 control 到 controls 集合中
    static registerControl(control:ControlBase){
        this.controls.push(control);
    }

    

    public static receiveMessage(msg:Message){

      
        if (msg.type !== this.manageType) {
            return;            
        }

        console.log("我是manageBase  我执行到这里了"+this.manageType);
        console.log("我是manageBase  controls的长度是"+this.controls.length);

        for (let i = 0; i < this.controls.length; i++) {
            this.controls[i].receiveMessage(msg);
        }


    }

    


}


