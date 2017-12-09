// custom js goes here
// testing
// emails data

let = emails = [{"first_name":"Loni","last_name":"Aris","subject":"Profit-focused systemic adapter","time":"4:44 AM","date":"3/13/2017","body":"Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."},
{"first_name":"Fredrick","last_name":"Lehrle","subject":"Programmable global capability","time":"9:19 AM","date":"11/27/2017","body":"Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."},
{"first_name":"Margette","last_name":"Fowlie","subject":"Realigned mission-critical contingency","time":"9:03 PM","date":"1/30/2017","body":"Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."},
{"first_name":"Donalt","last_name":"Huniwall","subject":"Devolved logistical system engine","time":"7:14 PM","date":"7/25/2017","body":"Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."},
{"first_name":"Dorene","last_name":"Garthland","subject":"Organized hybrid conglomeration","time":"7:34 AM","date":"12/19/2016","body":"Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."},
{"first_name":"Patton","last_name":"Shearston","subject":"Diverse web-enabled infrastructure","time":"4:41 AM","date":"12/26/2016","body":"In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."},
{"first_name":"Gill","last_name":"Hansen","subject":"Implemented demand-driven process improvement","time":"7:44 AM","date":"10/15/2017","body":"Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."},
{"first_name":"Rana","last_name":"Boumphrey","subject":"Profound motivating challenge","time":"8:24 AM","date":"10/25/2017","body":"Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."},
{"first_name":"Odo","last_name":"Laetham","subject":"Realigned radical neural-net","time":"6:39 PM","date":"6/7/2017","body":"Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."},
{"first_name":"Tiffany","last_name":"Dimond","subject":"Implemented 24/7 circuit","time":"3:10 AM","date":"9/11/2017","body":"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."}];
console.log('test');
console.log(emails);

// inputing names
var name1 = new Vue({
  el: '#name1',
  data: {
    name1: emails[0].first_name
  }
});
var name2 = new Vue({
  el: '#name2',
  data: {
    name2: emails[1].first_name
  }
});
var name3 = new Vue({
  el: '#name3',
  data: {
    name3: emails[2].first_name
  }
});
var name4 = new Vue({
  el: '#name4',
  data: {
    name4: emails[3].first_name
  }
});
var name5= new Vue({
  el: '#name5',
  data: {
    name5: emails[4].first_name
  }
});
var name6 = new Vue({
  el: '#name6',
  data: {
    name6: emails[5].first_name
  }
});
var name7 = new Vue({
  el: '#name7',
  data: {
    name7: emails[6].first_name
  }
});

// subject lines
var subject1 = new Vue({
  el: '#subject1',
  data: {
    subject1: emails[0].subject  
  }
});
var subject2 = new Vue({
  el: '#subject2',
  data: {
    subject2: emails[1].subject  
  }
});
var subject3 = new Vue({
  el: '#subject3',
  data: {
    subject3: emails[2].subject  
  }
});
var subject4 = new Vue({
  el: '#subject4',
  data: {
    subject4: emails[3].subject  
  }
});
var subject5 = new Vue({
  el: '#subject5',
  data: {
    subject5: emails[4].subject  
  }
});
var subject6 = new Vue({
  el: '#subject6',
  data: {
    subject6: emails[5].subject  
  }
});
var subject7 = new Vue({
  el: '#subject7',
  data: {
    subject7: emails[6].subject  
  }
});
// messages
var message1 = new Vue({
  el: '#message1',
  data: {
    message1: emails[0].body  
  }
});
var message2 = new Vue({
  el: '#message2',
  data: {
    message2: emails[1].body  
  }
});
var message3 = new Vue({
  el: '#message3',
  data: {
    message3: emails[2].body  
  }
});
var message4 = new Vue({
  el: '#message4',
  data: {
    message4: emails[3].body  
  }
});
var message5 = new Vue({
  el: '#message5',
  data: {
    message5: emails[4].body  
  }
});
var message6 = new Vue({
  el: '#message6',
  data: {
    message6: emails[5].body  
  }
});
var message7 = new Vue({
  el: '#message7',
  data: {
    message7: emails[6].body  
  }
});
// adding css classes
var email1 = new Vue({
  el: '#email1',
  method: {
    clickEmail1: function () {
      var style1 = document.getElementById('email1')
      style1.classList.add(hoverStyle);
    }
  }
});
// adding compose functionality
let inboxhtml = `
<div v-on:click="clickEmail1" id="email1" class="email-item email-item-selected pure-g">
<div class="pure-u">
    <img width="64" height="64" alt="Tilo Mitra&#x27;s avatar" class="email-avatar" src="img/common/tilo-avatar.png">
</div>

<div class="pure-u-3-4">
    <h5 class="email-name" id="name1">{{name1}}</h5>
    <h4 class="email-subject" id="subject1">{{subject1}}</h4>
    <p class="email-desc" id="message1">
      {{ message1 }}
    </p>
</div>
</div>
`
let click = document.getElementById('compose');
click.addEventListener('click', function () {
  let addEmail = document.getElementById('list');
  addEmail.innerHTML = inboxhtml;
});