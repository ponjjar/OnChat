console.error = function(){
   document.getElementById('messages').innerHTML += '	<font color="white">--- You are offline ---</font> <br>';
   alert("Desculpe, verifique sua conexão");
   window.location.reload()
}

console = function(){
   document.getElementById('messages').innerHTML += '	<font color="white">--- You are offline ---</font> <br>';
   alert("Desculpe, verifique sua conexão");
   window.location.reload()
}
var nomesaletórios = ["Princess","Angel","Player","Messenger","Captivating","Unique","Pure","Realm","Wealth","Golden","Bird","Fairy queen","God","Lord","Giant","Vision", "Eyes","Sword","A Boy", "Brbr", "Guest123", "Guest321", "Guest01"];
var nomeinicial = (nomesaletórios[Math.floor(Math.random()*nomesaletórios.length)]);
onLogin();
function onLogin(){
document.getElementById("Name").value= nomeinicial;
}
var welcomephrases = ['veio e trouxe comida!', 'chegou de paraquedas!', 'chegou para festa!', 'chegou fugindo de dinossauros!', 'chegou para arruinar tudo!', 'está aqui para ficar!', 'veio entregar a pizza!'];
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
       alert("Desculpe, não possivel convidar uma pessoa com o mesmo nome");
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
    document.getElementById('messages').innerHTML += "<font color='white'>--- Você está OnChat ---<br></font><font color='#'" + Math.floor(Math.random()*4096).toString(16) + ">" + membername +"</font> "+ hello;
DOM.form.addEventListener("submit", sendMessage);
}
}
console.error = function(){
   document.getElementById('messages').innerHTML += '	<font color="white">--- Você está offline ---</font> <br>';
   alert("Sorry, connection was lost");
   window.location.reload()
}

console = function(){
   document.getElementById('messages').innerHTML += '	<font color="white">--- Você está offline ---</font> <br>';
   alert("Sorry, connection was lost");
   window.location.reload()
}
var nomesaletórios = ["Princess","Angel","Player","Messenger","Captivating","Unique","Pure","Realm","Wealth","Golden","Bird","Fairy queen","God","Lord","Giant","Vision", "Eyes","Sword","A Boy", "Brbr", "Guest123", "Guest321", "Guest01"];
var nomeinicial = (nomesaletórios[Math.floor(Math.random()*nomesaletórios.length)]);
onLogin();
function onLogin(){
document.getElementById("Name").value= nomeinicial;
}
var welcomephrases = ['veio e trouxe comida!', 'chegou de paraquedas!', 'chegou para festa!', 'chegou fugindo de dinossauros!', 'chegou para arruinar tudo!', 'está aqui para ficar!', 'veio entregar a pizza!', 'entrou na partida', 'disse ola!'];
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
       alert("Desculpe, não possivel convidar uma pessoa com o mesmo nome");
       return 0;
     }
     else if(window.getSelection) {
        document.querySelector('.message-form__input').value = "he <-- invited -->"+ name;
       alert("Desculpe,não podemos fazer isso ainda!");
     }
     sendMessage();
var opened = window.open("");
return 0;
opened.document.write(`<!DOCTYPE html> <html> <head> <script type='text/javascript' src='scaledrone.min.js'></script> <!--<script type='text/javascript' src='http://0.0.0.0:8080/scaledrone.js'></script>--> <meta charset="utf-8"> <meta name="viewport" content="height=100%, initial-scale=1"> <link rel="stylesheet" type="text/css" href="Style.css"> <title>OnChat</title> <script> function GetSelected (selectTag) { var selIndexes = ""; for (var i = 0; i < selectTag.options.length; i++) { var optionTag = selectTag.options[i]; if (optionTag.selected) { if (selIndexes.length > 0) selIndexes += ", "; selIndexes += optionTag.value; } } if (selIndexes == "Default") { document.querySelector('.members-count').style.backgroundColor = "#00050f"; document.querySelector('.message-form__input').style.backgroundColor = "#00040c"; document.querySelector('.message-form__button').style.backgroundColor = "#00040c"; document.querySelector('.members-list').style.backgroundColor = "#00040c"; document.querySelector('.messages').style.backgroundColor = "#dcb0f5"; document.body.style.backgroundImage = "url('https://avatars.mds.yandex.net/get-pdb/1767376/7591c675-2d46-4603-ad45-1313505d2987/orig')"; } if (selIndexes == "Night") { document.querySelector('.members-count').style.backgroundColor = "#000205"; document.querySelector('.message-form__input').style.backgroundColor = "#000205"; document.querySelector('.message-form__button').style.backgroundColor = "#000205"; document.querySelector('.members-list').style.backgroundColor = "#000205"; document.querySelector('.messages').style.backgroundColor = "#00050f"; document.querySelector('.messages').style.border = "#00050f"; document.body.style.backgroundImage = "url('https://www.badatz.ca/wp-content/uploads/2017/10/025271-abstract-background-gaussian-blur.jpg')"; } if (selIndexes == "Dark") { document.querySelector('.members-count').style.backgroundColor = "#0f0f0f"; document.querySelector('.message-form__input').style.backgroundColor = "#292929"; document.querySelector('.message-form__button').style.backgroundColor = "#292929"; document.querySelector('.members-list').style.backgroundColor = "#0f0f0f"; document.querySelector('.messages').style.backgroundColor = "#1c1c1c"; document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Flag_of_Afghanistan_%281880%E2%80%931901%29.svg/2000px-Flag_of_Afghanistan_%281880%E2%80%931901%29.svg.png')"; } if (selIndexes == "Forest") { document.querySelector('.members-count').style.backgroundColor = "#000a00"; document.querySelector('.message-form__input').style.backgroundColor = "#00040c"; document.querySelector('.message-form__button').style.backgroundColor = "#00040c"; document.querySelector('.members-list').style.backgroundColor = "#000a00"; document.querySelector('.messages').style.backgroundColor = "#d5fabe"; document.body.style.backgroundImage = "url('https://wallpaperplay.com/walls/full/1/c/1/150745.jpg')"; } if (selIndexes == "Blue Sky") { document.querySelector('.members-count').style.backgroundColor = "#00080a"; document.querySelector('.message-form__input').style.backgroundColor = "#00040c"; document.querySelector('.message-form__button').style.backgroundColor = "#00040c"; document.querySelector('.members-list').style.backgroundColor = "#00080a"; document.querySelector('.messages').style.backgroundColor = "#a9cad1"; document.body.style.backgroundImage = "url('https://www.pixel4k.com/wp-content/uploads/2019/03/abstract-blur-4k_1553075272.jpg')"; } if (selIndexes == "k1") { document.querySelector('.members-count').style.backgroundColor = "#000a05"; document.querySelector('.message-form__input').style.backgroundColor = "#00040c"; document.querySelector('.message-form__button').style.backgroundColor = "#00040c"; document.querySelector('.members-list').style.backgroundColor = "#000a05"; document.querySelector('.messages').style.backgroundColor = "#bfdbe0"; document.body.style.backgroundImage = "url('https://wallpaperlayer.com/img/2015/6/gaussian-blur-wallpaper-3240-3444-hd-wallpapers.jpg')"; } } </script> </head> <body bgcolor=gray> <div id="name"> <h1 align=center style="background-color:rgba(0 , 0 , 0 , 0.5);color: white;font-family: Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace;">Welcome to the OnChat</h1> <input class="name-form_input" value="Guest :D" id="Name" maxlength="13" placeholder="type your nickname.." type="text"/> <input class="Login-form_button" value="Send" onclick="Button();GetSelected(Palheta);"type="submit"/> </div> <div id="OnChat"> <div id="OnChatLogo"><h1>OnChatAlpha</h1></div> <select onchange="GetSelected (this);" id="Palheta"> <option selected>Default</option> <option>Night</option> <option>Dark</option> <option>Forest</option> <option>Blue Sky</option> <option>k1</option> </select> <!---lista do lado(aonde fala as pessoas conectadas :D e contador de membros)--> <div class="members-count"> <h1> </div>`+ document.querySelector('.name-form_input').value + member + `</h1><div class="members-list"></div> <!--as mensagens vão ficar aqui--> <div class="ChatBox"> <div class="messages" id="messages"></div> </ChatBox> <!--Digitar a mensagem--> <form class="message-form" onsubmit="return false;"> <input class="message-form__input" id="MessageInput"placeholder="Type a message.." maxlength="125"type="text"/> <input class="message-form__button" value="Send" type="submit"/> </form> </div> </div> <script src="./script.js"></script> </body> </html>`);
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
    document.getElementById('messages').innerHTML += "<font color='white'>--- Você está OnChat ---<br></font><u><font color=#" + Math.floor(Math.random()*4096).toString(16) + ">" + membername +"</u></font> <font color='white'> <i>"+ hello+ '</i> </font>';
DOM.form.addEventListener("submit", sendMessage);
}
}
