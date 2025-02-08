import { _decorator, Component, Node } from 'cc';
import Message from './Message';
const { ccclass, property } = _decorator;

@ccclass('ComponentBase')
export class ComponentBase extends Component {

    public receiveMessage(message: Message) {
        
    }

}


