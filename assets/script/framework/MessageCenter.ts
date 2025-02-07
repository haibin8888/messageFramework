import { _decorator, Component, Node } from 'cc';
import { ComponentBase } from './ComponentBase';
import { ManageBase } from './ManageBase';
const { ccclass, property } = _decorator;

@ccclass('MessageCenter')
export class MessageCenter extends ComponentBase {
  
    // 管理类集合
    private static manageList:ManageBase[] = [];

    // 单例
    private static _instance: MessageCenter = null;

    // 必须用这个获取单例
    public static getInstance() {
        if (MessageCenter._instance == null) {
            MessageCenter._instance = new MessageCenter();
        }
        return MessageCenter._instance;
    }


    // 注册管理类
    public static registerManage(manage:ManageBase){
        if(manage == null){
            return;
        }
        this.manageList.push(manage);
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




}


