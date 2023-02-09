class Node{
    constructor(value){
        this.data=value;
        this.next=null;
    }
}
class Stacklist{
    head=null;
    count=0;
    add(value){
        if(this.head==null)
        {
        this.head=new Node(value);
        this.count++;
        }
        else{
            let temp=this.head;
            while(temp.next!=null){
                temp=temp.next;
            }
            temp.next=new Node(value);
            this.count++;
        }
    }

    deleteElements(){
        let n2=this.head;
            let i=1;
            while(i<this.count-1){
                n2 = n2.next;
                i++;
            }
            n2.next=n2.next.next;
    }
    printf()
    {
        let temp=this.head;
        if(temp==null)
        {
            console.log("invalid");
        }
        else
        {
        while(temp!=null)
        {
            console.log(temp.data);
            temp=temp.next;
        }
        }
    }
}

let list=new Stacklist();
list.add(10);
list.add(20);
list.add(30);
list.deleteElements();
list.printf();
 