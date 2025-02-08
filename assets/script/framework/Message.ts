import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export default class Message {
   
    type:number; // 消息类型
    command:number; // 消息命令
    content:any;    // 消息内容


    constructor(type:number,command:number,content:any){
        this.type = type;
        this.command = command;
        this.content = content;
    }


}

export class MessageType {
    
    static Type_UI = 1;
    static UI_RefreshHp = 101;
    static UI_RefreshScore = 102;

    // NPC相关消息
    static Type_NPC = 2;
    static NPC_npc1 = 201;
    static NPC_npc2 = 202;

    // Enemy相关消息
    static Type_Enemy = 3;
    static Enemy_enemy1 = 301;
    static Enemy_enemy2 = 302;

    // Audio相关消息
    static Type_Audio = 4;



}
