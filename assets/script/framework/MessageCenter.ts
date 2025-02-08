import { _decorator, Component, Node } from 'cc';
import { ComponentBase } from './ComponentBase';
import { ManageBase } from './ManageBase';
import Message from './Message';
const { ccclass, property } = _decorator;

@ccclass
export class MessageCenter extends ComponentBase {
  

    // 管理类集合
    public  static manageList:any[] = [];


    // 注册管理类
    public static registerManage(ManageBase){
        if(ManageBase == null){
            return;
        }
        this.manageList.push(ManageBase);
    }

    // 移除管理类
    public static removeManage(manage:ManageBase){
        if(manage == null){
            return;
        }
        let index = this.manageList.indexOf(manage);
        if(index != -1){
            this.manageList.splice(index,1);
        }
    }

    


    // 发送消息
    public static sendMessage(msg:Message){

        for(const manage of MessageCenter.manageList){

            if(manage.manageType == msg.type){
                manage.receiveMessage(msg);
            }
        
    }





    }




}


