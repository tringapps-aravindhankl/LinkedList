class Node{
    constructor(value){
        this.data=value;
        this.next=null;
    }
}
class linkedlist{
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
    addElementAtPos(index,value){
        let n1=new Node(value);
        if(index==0){
            n1.next=this.head;
            this.head=n1;
        }else{
             let temp=this.head;
            for(let i=1;i<index;i++) {
                temp=temp.next;
            }
            n1.next=temp.next;
            temp.next=n1;
        }
    }

    deleteElements(index){
        let n2=this.head;
        if(index==0){
            this.head=this.head.next;
        }
        else{
            let i=1;
            while(i<index){
                n2 = n2.next;
                i++;
            }
            n2.next=n2.next.next;
        }
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

let list=new linkedlist();
list.add(10);
list.add(20);
list.add(30);
list.addElementAtPos(1,15);
list.deleteElements(2);
list.print();
 