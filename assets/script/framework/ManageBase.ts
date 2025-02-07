import { _decorator, Component, Node } from 'cc';
import { ComponentBase } from './ComponentBase';
import { ControlBase } from './ControlBase';
const { ccclass, property } = _decorator;


// 管理类 管理所有的控制类 
@ccclass
export class ManageBase extends ComponentBase {
   

    // controls集合 controls 是最底层操作类
    static controls:ControlBase[] = [];

    // manage的类型
    static manageType: number;

    // 设置管理类类型
    static setManageType(manageType:number){
        this.manageType = manageType;
    }

    // 注册 control 到 controls 集合中
    static registerControl(control:ControlBase){
        this.controls.push(control);
    }




}


