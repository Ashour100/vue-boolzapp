// per il momento puoi aggiornare il search engine con il tasto enter

const app= new Vue({
    el:'#app',
    data:{
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        time:'15:30',
                        clicked:false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        time:'15:50',
                        clicked:false
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        time:'16:15',
                        clicked:false
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        time:'16:30',
                        clicked:false
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        time:'16:30',
                        clicked:false
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        time:'16:35',
                        clicked:false
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        time:'10:10',
                        clicked:false
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        time:'10:20',
                        clicked:false
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                        time:'16:15',
                        clicked:false
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        time:'15:30',
                        clicked:false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        time:'15:50',
                        clicked:false
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        time:'15:30',
                        clicked:false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        time:'15:50',
                        clicked:false
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        time:'15:30',
                        clicked:false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received',
                        time:'15:50',
                        clicked:false
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        time:'15:51',
                        clicked:false
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        time:'15:30',
                        clicked:false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        time:'15:30',
                        clicked:false
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        time:'15:30',
                        clicked:false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        time:'15:50',
                        clicked:false
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received',
                        time:'15:51',
                        clicked:false
                    }
                ],
            }
        ],
        activeChatIndex:"0",
        newMessage:"",
        search:"",
        now :new Date(),
    },
    methods:{
        activeChat: function(index){
            this.activeChatIndex=index;
        },
        addNewMessage:function(){
            now=this.now;
            let date = now.getDate()+'/'+(now.getMonth()+1)+'/'+now.getFullYear();
            let time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
            let dateTime = date+' '+time;
            if(this.newMessage.trim()!=""){
                this.contacts[this.activeChatIndex].messages.push({
                    date: dateTime,
                    message: this.newMessage,
                    status: 'sent',
                    time: now.getHours()+":"+now.getMinutes(),
                    clicked:false
                });
                this.newMessage="";
                setTimeout(this.autoResponse,1000)
            }
            else
                alert("You can't send an empty message");
        },
        autoResponse:function(){
            this.contacts[this.activeChatIndex].messages.push({
                date: this.dateTime,
                message: 'Ok',
                status: 'received',
                time: now.getHours()+":"+now.getMinutes(),
                clicked:false
            });
        },
        searchEngineOn:function(){
            if(this.search!=""){
                for(let i=0;i<this.contacts.length;i++){
                    this.contacts[i].visible=false;
                }
            }
            if(this.search==""){
                for(let i=0;i<this.contacts.length;i++){
                    this.contacts[i].visible=true;
                }
            }
            let arrSearch=this.search.toLowerCase().split("");
            for(let i=0;i<this.contacts.length;i++){
                let tempName=this.contacts[i].name.toLowerCase().split("");
                let arrControllo=[];
                let controlloFinale;
                for(let a=0;a<arrSearch.length;a++){
                    if(arrSearch[a]==tempName[a])
                        arrControllo[a]=true;
                    else
                        arrControllo[a]=false;
                }
                for(let c=0;c<arrControllo.length;c++){
                    if(arrControllo[c])
                        controlloFinale=true;
                    else{
                        console.log("Sorry");
                        controlloFinale=false;
                        break;
                    }
                }
                console.log(tempName);
                console.log(arrControllo);
                if(controlloFinale==true){
                    this.contacts[i].visible=true;
                }
            }
        },
        click:function(index){
            this.contacts[this.activeChatIndex].messages[index].clicked=!this.contacts[this.activeChatIndex].messages[index].clicked;
        },
        deleteMessage:function(index){
            if(this.contacts[this.activeChatIndex].messages.length<=1){
                alert("You can't delete the last message to maintain the chat"); //turning a bug into a feature
                this.contacts[this.activeChatIndex].messages[index].clicked=false;
            }
            else
            this.contacts[this.activeChatIndex].messages.splice(index,1);
        }
    },
    // updated() {
    // Va in loop infinito, Quindi per il momento puoi aggiornare il search engine con il tasto enter
    //     this.searchEngineOn();
    // }
});
