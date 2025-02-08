import { _decorator, Component, Node } from 'cc';
import { ManageUI } from './framework/ManageUI';
import { MessageType } from './framework/Message';
import { MessageCenter } from './framework/MessageCenter';
import { ManageNPC } from './framework/ManageNPC';
const { ccclass, property } = _decorator;

@ccclass('Scene01')
export class Scene01 extends Component {
    start() {

 
        this.init();



    }

    init() {


        console.log("系统初始化 开始...");

      
        
        MessageCenter.registerManage(ManageUI);
        MessageCenter.registerManage(ManageNPC);



        // 把管理器 交给消息中心
       // MessageCenter.registerManage(ManageUI.getInstance());
       // MessageCenter.registerManage(ManageNPC.getInstance());


        
        console.log("系统初始化 完成...");


    }

}


