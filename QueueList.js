class Node{
    constructor(value){
        this.data=value;
        this.next=null;
    }
}
class Queuelist{
    head=null;
    
    add(value){
        if(this.head==null)
        {
        this.head=new Node(value);
        }
        else{
            let temp=this.head;
            while(temp.next!=null){
                temp=temp.next;
            }
            temp.next=new Node(value);
        }
    }

    deleteElements(){
        let n2=this.head;
            this.head=this.head.next;
    }
    print(){
        let temp=this.head;
        if(temp==null){
            console.log("invalid");
        }else{
        while(temp!=null){
            console.log(temp.data);
            temp=temp.next;
        }
        }
    }
}

let list=new Queuelist();
list.add(10);
list.add(20);
list.add(30);
list.deleteElements();
list.add(40);
list.deleteElements();

list.print();
 