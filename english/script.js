console.error = function(){
   document.getElementById('messages').innerHTML += '	<font color="white">--- You are offline ---</font> <br>';
   alert("Sorry, verify your internet connetion");
   window.location.reload()
}

console = function(){
   document.getElementById('messages').innerHTML += '	<font color="white">--- You are offline ---</font> <br>';
   alert("Sorry, verify your internet connetion");
   window.location.reload()
}
var nomesaletórios = ["Princess","Angel","Player","Messenger","Captivating","Unique","Pure","Realm","Wealth","Golden","Bird","Fairy queen","God","Lord","Giant","Vision", "Eyes","Sword","A Boy", "Brbr", "Guest123", "Guest321", "Guest01"];
var nomeinicial = (nomesaletórios[Math.floor(Math.random()*nomesaletórios.length)]);
onLogin();
function onLogin(){
document.getElementById("Name").value= nomeinicial;
}
var welcomephrases = ['came and brought food!', 'arrived by parachute!', 'arrived to party!', 'arrived running away from dinosaurs!', 'arrived to ruin everything!', 'is here to stay!', 'came to deliver pizza!'];
var hello= (welcomephrases[Math.floor(Math.random()*welcomephrases.length)]);
var botmessage = hello;
function Button(){

  //Frases ao se conectar:
  var bot = " "; //aqui podemos criar mensagens de bot
  var botname = "Dream Bot";
  var username = "Guest :D";


  // PS! Replace this with your own channel ID
  // If you use this channel ID your app will stop working in the future
  document.getElementById("OnChat").style.visibility = "visible";
  document.getElementById("name").style.visibility = "hidden";
const CLIENT_ID = 'HlxdnsEJvYj1XRcW';
var drone = new ScaleDrone(CLIENT_ID, {
  data: { // Will be sent out as clientData via events
   name: getRandomName(),
    color: getRandomColor(),
  },
});

let members = [];

drone.on('open', error => {
  if (error) {
          alert("Error");
    return console.error(error);
  }
//  console.log('Successfully connected to Scaledrone');


     //Mensagem de boas vindas :P

     //Mensagem de boas vindas
  const room = drone.subscribe('observable-room');
  room.on('open', error => {
    if (error) {
        alert("Error");
      return console.error(error);
    }
  //  console.log('Successfully joined room');
  });

  room.on('members', m => {
    members = m;
    updateMembersDOM();
  });

  room.on('member_join', member => {
    members.push(member);

    updateMembersDOM();
  });

  room.on('member_leave', ({id}) => {
    const index = members.findIndex(member => member.id === id);
    members.splice(index, 1);
    updateMembersDOM();
  });

  room.on('data', (text, member) => {
    if (member) {
      getMessage = () => text;
      text=decypher();
      addMessageToListDOM(text, member);
    } else {
      // Message is from server
    }
  });
});

drone.on('close', event => {
  console.log('Connection was closed', event);
    alert("Closed");
});

drone.on('error', error => {
    alert("Error");
  console.error(error);
});



function getRandomName() {
  username=name;
  const adjs = [document.querySelector('.name-form_input').value];
  const nouns = [""];
  return (
    adjs[Math.floor(Math.random() * adjs.length)] +
    nouns[Math.floor(Math.random() * nouns.length)]
  );
}

function getRandomColor() {
  return '#ffe0f9' //random color : + Math.floor(Math.random() * 0xFFFFFF + 2).toString(16);
  }
//------------- DOM STUFF

const DOM = {
  membersCount: document.querySelector('.members-count'),
  membersList: document.querySelector('.members-list'),
  messages: document.querySelector('.messages'),
  input: document.querySelector('.message-form__input'),
  name: document.querySelector('.name-form_input'),
  form: document.querySelector('.message-form'),
  picker: document.querySelector('.Palheta'),
};
// aqui determina a mensagem a ser enviada e tambem determina se a mensagem sew
DOM.form.addEventListener('submit', sendMessage);
function sendMessage() {
  document.querySelector('.name-form_input').style.color = "blue";
  //var linebreak = document.createElement("br");
  const el = document.createElement('fieldset');
  var value = " \n" + DOM.input.value; //DOM.name.value + "" <-- retirei isso, pois não é mais necessario..
  if (value == ' \n' && bot==" " || value === '\n' && bot==" "|| value === '' && bot==" "|| value === ' \n ' && bot==" "|| value === ':' && bot==" ") {
    return;
  }
  //Inicio da criptografia
  getMessage = () => document.getElementById('MessageInput').value;
  if(bot != " "){
      getMessage = () => bot;
  }
  value=cypher();
  //Fim da criptografia
  DOM.input.value = '';
    bot = ' ';
        DOM.name.value = username;
      drone.publish({
        room: 'observable-room',
        message: value,
      });
}
function createMemberElement(member) {
  const { name, color } = member.clientData;
  const el = document.createElement('div');
  el.appendChild(document.createTextNode(name)); //<- aqui ficara o nome da pessoa no futuro
  el.className = 'member';

  el.onclick=function () {
     // for Internet Explorer

     if(document.body.createTextRange) {
       var range = document.body.createTextRange();
       range.moveToElementText(el);
       range.select();
       alert("Copied div content to clipboard");
     }
     else if(name == document.querySelector('.name-form_input').value){
       alert("Sorry, we can't do this yet!");
       return 0;
     }
     else if(window.getSelection) {
        document.querySelector('.message-form__input').value = "he <-- invited -->"+ name;
       alert("Sorry, we can't do this yet!");
     }
     sendMessage();
var opened = window.open("");
return 0;
}
  el.style.color = color;
  return el;
}

function updateMembersDOM() {
  DOM.membersCount.innerText = `${members.length} users On Chat:`;
  DOM.membersList.innerHTML = '';
  members.forEach(member =>
    DOM.membersList.appendChild(createMemberElement(member))

  );

}

function createMessageElement(text, member) {
  const el = document.createElement('fieldset');
  const el2 = document.createElement('br');
  el.appendChild(createMemberElement(member));
  el2.appendChild(createMemberElement(member));
  space = function () { return document.createTextNode(' '); }
  lb = function () { return document.createElement( 'BR' ); }
  //Como vai aparecer o texto: // isso sera util: document.createElement('font').innerHTML
  el.appendChild(document.createTextNode((text)));//por exemplo: Ola + Nome + Letra = Ola Caique A
  el.className = 'message';
  return el;
}

function addMessageToListDOM(text, member) {
  const el = DOM.messages;
  const wasTop = el.scrollTop === el.scrollHeight - el.clientHeight;
  el.appendChild(createMessageElement(text, member));
  if (wasTop) {
    el.scrollTop = el.scrollHeight - el.clientHeight;
  }
}
//welcome();
var membername = document.getElementById("Name").value;
membername=name;
welcome();
function welcome (){
   membername = document.getElementById("Name").value;
  hello= (welcomephrases[Math.floor(Math.random()*welcomephrases.length)]);
//  ' <font color="white">--- You are OnChat ---</font><br>'
    document.getElementById('messages').innerHTML += "<font color='white'>--- You are OnChat ---<br></font><font color='#'" + Math.floor(Math.random()*4096).toString(16) + ">" + membername +"</font> "+ hello;
DOM.form.addEventListener("submit", sendMessage);
}
}
console.error = function(){
   document.getElementById('messages').innerHTML += '	<font color="white">--- You are offline ---</font> <br>';
   alert("Sorry, connection was lost");
   window.location.reload()
}

console = function(){
   document.getElementById('messages').innerHTML += '	<font color="white">--- You are offline ---</font> <br>';
   alert("Sorry, connection was lost");
   window.location.reload()
}
var nomesaletórios = ["Princess","Angel","Player","Messenger","Captivating","Unique","Pure","Realm","Wealth","Golden","Bird","Fairy queen","God","Lord","Giant","Vision", "Eyes","Sword","A Boy", "Brbr", "Guest123", "Guest321", "Guest01"];
var nomeinicial = (nomesaletórios[Math.floor(Math.random()*nomesaletórios.length)]);
onLogin();
function onLogin(){
document.getElementById("Name").value= nomeinicial;
}
var welcomephrases = ['came and brought food!', 'arrived by parachute!', 'arrived to party!', 'arrived running away from dinosaurs!', 'arrived to ruin everything!', 'is here to stay!', 'came to deliver pizza! ',' entered the match ',' said hello! '];
var hello= (welcomephrases[Math.floor(Math.random()*welcomephrases.length)]);
var botmessage = hello;
function Button(){

  //Frases ao se conectar:
  var bot = " "; //aqui podemos criar mensagens de bot
  var botname = "Dream Bot";
  var username = "Guest :D";


  // PS! Replace this with your own channel ID
  // If you use this channel ID your app will stop working in the future
  document.getElementById("OnChat").style.visibility = "visible";
  document.getElementById("name").style.visibility = "hidden";
const CLIENT_ID = 'HlxdnsEJvYj1XRcW';
var drone = new ScaleDrone(CLIENT_ID, {
  data: { // Will be sent out as clientData via events
   name: getRandomName(),
    color: getRandomColor(),
  },
});

let members = [];

drone.on('open', error => {
  if (error) {
          alert("Error");
    return console.error(error);
  }
//  console.log('Successfully connected to Scaledrone');


     //Mensagem de boas vindas :P

     //Mensagem de boas vindas
  const room = drone.subscribe('observable-room');
  room.on('open', error => {
    if (error) {
        alert("Error");
      return console.error(error);
    }
  //  console.log('Successfully joined room');
  });

  room.on('members', m => {
    members = m;
    updateMembersDOM();
  });

  room.on('member_join', member => {
    members.push(member);

    updateMembersDOM();
  });

  room.on('member_leave', ({id}) => {
    const index = members.findIndex(member => member.id === id);
    members.splice(index, 1);
    updateMembersDOM();
  });

  room.on('data', (text, member) => {
    if (member) {
      getMessage = () => text;
      text=decypher();
      addMessageToListDOM(text, member);
    } else {
      // Message is from server
    }
  });
});

drone.on('close', event => {
  console.log('Connection was closed', event);
    alert("Closed");
});

drone.on('error', error => {
    alert("Error");
  console.error(error);
});



function getRandomName() {
  username=name;
  const adjs = [document.querySelector('.name-form_input').value];
  const nouns = [""];
  return (
    adjs[Math.floor(Math.random() * adjs.length)] +
    nouns[Math.floor(Math.random() * nouns.length)]
  );
}

function getRandomColor() {
  return '#ffe0f9' //random color : + Math.floor(Math.random() * 0xFFFFFF + 2).toString(16);
  }
//------------- DOM STUFF

const DOM = {
  membersCount: document.querySelector('.members-count'),
  membersList: document.querySelector('.members-list'),
  messages: document.querySelector('.messages'),
  input: document.querySelector('.message-form__input'),
  name: document.querySelector('.name-form_input'),
  form: document.querySelector('.message-form'),
  picker: document.querySelector('.Palheta'),
};
// aqui determina a mensagem a ser enviada e tambem determina se a mensagem sew
DOM.form.addEventListener('submit', sendMessage);
function sendMessage() {
  document.querySelector('.name-form_input').style.color = "blue";
  //var linebreak = document.createElement("br");
  const el = document.createElement('fieldset');
  var value = " \n" + DOM.input.value; //DOM.name.value + "" <-- retirei isso, pois não é mais necessario..
  if (value == ' \n' && bot==" " || value === '\n' && bot==" "|| value === '' && bot==" "|| value === ' \n ' && bot==" "|| value === ':' && bot==" ") {
    return;
  }
  //Inicio da criptografia
  getMessage = () => document.getElementById('MessageInput').value;
  if(bot != " "){
      getMessage = () => bot;
  }
  value=cypher();
  //Fim da criptografia
  DOM.input.value = '';
    bot = ' ';
        DOM.name.value = username;
      drone.publish({
        room: 'observable-room',
        message: value,
      });
}
function createMemberElement(member) {
  const { name, color } = member.clientData;
  const el = document.createElement('div');
  el.appendChild(document.createTextNode(name)); //<- aqui ficara o nome da pessoa no futuro
  el.className = 'member';

  el.onclick=function () {
     // for Internet Explorer

     if(document.body.createTextRange) {
       var range = document.body.createTextRange();
       range.moveToElementText(el);
       range.select();
       alert("Copied div content to clipboard");
     }
     else if(name == document.querySelector('.name-form_input').value){
       alert("Sorry, we can't do this yet!");
       return 0;
     }
     else if(window.getSelection) {
        document.querySelector('.message-form__input').value = "he <-- invited -->"+ name;
       alert("Desculpe,não podemos fazer isso ainda!");
     }
     sendMessage();
var opened = window.open("");
return 0;
}
  el.style.color = color;
  return el;
}

function updateMembersDOM() {
  DOM.membersCount.innerText = `${members.length} users On Chat:`;
  DOM.membersList.innerHTML = '';
  members.forEach(member =>
    DOM.membersList.appendChild(createMemberElement(member))

  );

}

function createMessageElement(text, member) {
  const el = document.createElement('fieldset');
  const el2 = document.createElement('br');
  el.appendChild(createMemberElement(member));
  el2.appendChild(createMemberElement(member));
  space = function () { return document.createTextNode(' '); }
  lb = function () { return document.createElement( 'BR' ); }
  //Como vai aparecer o texto: // isso sera util: document.createElement('font').innerHTML
  el.appendChild(document.createTextNode((text)));//por exemplo: Ola + Nome + Letra = Ola Caique A
  el.className = 'message';
  return el;
}

function addMessageToListDOM(text, member) {
  const el = DOM.messages;
  const wasTop = el.scrollTop === el.scrollHeight - el.clientHeight;
  el.appendChild(createMessageElement(text, member));
  if (wasTop) {
    el.scrollTop = el.scrollHeight - el.clientHeight;
  }
}
//welcome();
var membername = document.getElementById("Name").value;
membername=name;
welcome();
function welcome (){
   membername = document.getElementById("Name").value;
  hello= (welcomephrases[Math.floor(Math.random()*welcomephrases.length)]);
//  ' <font color="white">--- You are OnChat ---</font><br>'
    document.getElementById('messages').innerHTML += "<font color='white'>--- You are OnChat ---<br></font><u><font color=#" + Math.floor(Math.random()*4096).toString(16) + ">" + membername +"</u></font> <font color='white'> <i>"+ hello+ '</i> </font>';
DOM.form.addEventListener("submit", sendMessage);
}
}
