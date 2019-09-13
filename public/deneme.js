function showDayProgram(id){

  console.log(document.getElementById(id).innerText);
  var urlParams = new URLSearchParams(window.location.search);
  var advisee_user_id = urlParams.get('u');
  var user = firebase.auth().currentUser;
  var program_name = document.getElementById(id).innerText.toString().trim();
  var referansday = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Programlar/"+advisee_user_id+"/Günlük/"+program_name);
  // console.log(referansday);
    referansday.once("value").then(function(snapshot){
      $("#gunGen").show();
      $('#accordion div').html('');
      // Yukarı kesin olacak !!
      var tableBig = document.getElementById("accordion");
      var tableDiv = document.createElement("div");
      var form= document.createElement("form");
      form.setAttribute("id","formGun");
      // Yukarıdaki kısıma dikkat et önemli bi detay burda kaldık!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      var children = snapshot.numChildren();
      for(var i =1;i<children;i++){
        pro_list_i = [];
        pro_list_i.push(i);
        console.log(pro_list_i);
        var refe = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Programlar/"+advisee_user_id+"/Günlük/"+program_name+"/"+i+"_gün");
          refe.once("value").then(function(childSnapshot){
            pro_list = [];
            childSnapshot.forEach(function(childSna){
              var food = childSna.val();
              pro_list.push(food);
            });
            console.log(pro_list);
              Promise.all([pro_list,pro_list_i]).then(function([pro_list,pro_list_i])
              {
                // console.log(i);
                for(var j = 0;j<pro_list.length;j+=39){
                  var label = document.createElement("label");
                  // var day = start.getDate()+j;
                  // var month= startMnth;
                  // var year = start.getFullYear();
                  // console.log(year);
                  label.innerHTML=pro_list_i[0]+". GÜN ";
                  label.setAttribute("style","color:orange;font-weight:bold");
                  form.appendChild(label);
                  var tableGun = document.createElement("table");
                  tableGun.id="tableE"+j;
                  var tr1 = document.createElement("tr");
                  var th1 = document.createElement("th");
                  th1.setAttribute("style","color:#ff33cc;font-weight:bold;text-align:center;");
                  th1.innerHTML="Öğünler";
                  tr1.appendChild(th1);
                  var th2 = document.createElement("th");
                  th2.setAttribute("style","color:#ff33cc;font-weight:bold;text-align:center;");
                  th2.innerHTML="Besinler";
                  tr1.appendChild(th2);
                  var th3 = document.createElement("th");
                  th3.setAttribute("style","color:#ff33cc;font-weight:bold;text-align:center;");
                  th3.innerHTML="Protein";
                  tr1.appendChild(th3);
                  var th4 = document.createElement("th");
                  th4.setAttribute("style","color:#ff33cc;font-weight:bold;text-align:center;");
                  th4.innerHTML="Yağ";
                  tr1.appendChild(th4);
                  var th5 = document.createElement("th");
                  th5.setAttribute("style","color:#ff33cc;font-weight:bold;text-align:center;");
                  th5.innerHTML="Karbonhidrat";
                  tr1.appendChild(th5);
                  var th6 = document.createElement("th");
                  th6.setAttribute("style","color:#ff33cc;font-weight:bold;text-align:center;");
                  th6.innerHTML="Kalori";
                  tr1.appendChild(th6);
                  var label1 = document.createElement("label");
                  label1.id="label1"+j;
                  label1.innerHTML="Sabah Kahvaltısı";
                  var tr2 = document.createElement("tr");
                  tr2.id="table"+((8*j)+1);
                  var tr2_td1 = document.createElement("td");
                  tr2_td1.appendChild(label1);
                  tr2_td1.setAttribute("style","border:none;");
                  var input1 = document.createElement("TEXTAREA");
                  // input1.setAttribute("ondrop","drop(event)");
                  // input1.setAttribute("ondragover","allowDrop(event)");
                  // input1.setAttribute("type","text");
                  input1.setAttribute("id","inpt1"+j); // input1.setAttribute("id", i.toString() + "_inpt1");
                  input1.value=pro_list[j+25];
                  input1.setAttribute("oninput","dragFood(this.id);");
                  // input1.classList.add("clearable");
                  var tr2_td2 = document.createElement("td");
                  tr2_td2.setAttribute("style","border:none;");
                  tr2_td2.appendChild(input1);
                  var tr2_td3= document.createElement("td");
                  tr2_td3.setAttribute("style","width:100px;border:none;");
                  var tr2_td3_span1 = document.createElement("span");
                  tr2_td3_span1.setAttribute("style","text-align:center");
                  tr2_td3_span1.id="span1";
                  tr2_td3_span1.classList.add("badge");
                  tr2_td3_span1.classList.add("badge-pill");
                  tr2_td3_span1.classList.add("badge-warning");
                  tr2_td3_span1.innerHTML=pro_list[j+29];
                  tr2_td3.appendChild(tr2_td3_span1);
                  var tr2_td4= document.createElement("td");
                  tr2_td4.setAttribute("style","width:100px;border:none;");
                  var tr2_td4_span2 = document.createElement("span");
                  tr2_td4_span2.id="span2";
                  tr2_td4_span2.classList.add("badge");
                  tr2_td4_span2.classList.add("badge-pill");
                  tr2_td4_span2.classList.add("badge-success");
                  tr2_td4_span2.innerHTML=pro_list[j+28];
                  tr2_td4.appendChild(tr2_td4_span2);
                  var tr2_td5= document.createElement("td");
                  tr2_td5.setAttribute("style","width:120px;border:none;");
                  var tr2_td5_span3 = document.createElement("span");
                  tr2_td5_span3.id="span3";
                  tr2_td5_span3.classList.add("badge");
                  tr2_td5_span3.classList.add("badge-pill");
                  tr2_td5_span3.classList.add("badge-danger");
                  tr2_td5_span3.innerHTML=pro_list[j+27];
                  tr2_td5.appendChild(tr2_td5_span3);
                  var tr2_td6= document.createElement("td");
                  tr2_td6.setAttribute("style","width:100px;border:none;");
                  var tr2_td6_span4= document.createElement("span");
                  tr2_td6_span4.id="span4";
                  tr2_td6_span4.classList.add("badge");
                  tr2_td6_span4.classList.add("badge-pill");
                  tr2_td6_span4.classList.add("badge-primary");
                  tr2_td6_span4.innerHTML=pro_list[j+26];
                  tr2_td6.appendChild(tr2_td6_span4);
                  tr2.appendChild(tr2_td1);
                  tr2.appendChild(tr2_td2);
                  tr2.appendChild(tr2_td3);
                  tr2.appendChild(tr2_td4);
                  tr2.appendChild(tr2_td5);
                  tr2.appendChild(tr2_td6);
                  var label2 = document.createElement("label");
                  label2.id="label2"+j;
                  label2.innerHTML="1. Ara Öğün";
                  var tr3 = document.createElement("tr");
                  tr3.id="table"+((8*j)+2);
                  var tr3_td1 = document.createElement("td");
                  tr3_td1.setAttribute("style","border:none;");
                  tr3_td1.appendChild(label2);
                  var input2 = document.createElement("TEXTAREA");
                  // input2.setAttribute("type","text");
                  input2.setAttribute("id","inpt2"+j);
                  input2.value=pro_list[j+10];
                  input2.setAttribute("oninput","dragFood(this.id);");
                  // input2.classList.add("clearable");
                  var tr3_td2 = document.createElement("td");
                  tr3_td2.setAttribute("style","border:none;");
                  tr3_td2.appendChild(input2);
                  var tr3_td3= document.createElement("td");
                  tr3_td3.setAttribute("style","border:none;");
                  var tr3_td3_span1 = document.createElement("span");
                  tr3_td3_span1.id="span1"+j;
                  tr3_td3_span1.classList.add("badge");
                  tr3_td3_span1.classList.add("badge-pill");
                  tr3_td3_span1.classList.add("badge-warning");
                  tr3_td3_span1.innerHTML=pro_list[j+14];
                  tr3_td3.appendChild(tr3_td3_span1);
                  var tr3_td4= document.createElement("td");
                  tr3_td4.setAttribute("style","border:none;");
                  var tr3_td4_span2 = document.createElement("span");
                  tr3_td4_span2.id="span2"+j;
                  tr3_td4_span2.classList.add("badge");
                  tr3_td4_span2.classList.add("badge-pill");
                  tr3_td4_span2.classList.add("badge-success");
                  tr3_td4_span2.innerHTML=pro_list[j+13];
                  tr3_td4.appendChild(tr3_td4_span2);
                  var tr3_td5= document.createElement("td");
                  tr3_td5.setAttribute("style","border:none;");
                  var tr3_td5_span3 = document.createElement("span");
                  tr3_td5_span3.id="span3"+j;
                  tr3_td5_span3.classList.add("badge");
                  tr3_td5_span3.classList.add("badge-pill");
                  tr3_td5_span3.classList.add("badge-danger");
                  tr3_td5_span3.innerHTML=pro_list[j+12];
                  tr3_td5.appendChild(tr3_td5_span3);
                  var tr3_td6= document.createElement("td");
                  tr3_td6.setAttribute("style","border:none;");
                  var tr3_td6_span4= document.createElement("span");
                  tr3_td6_span4.id="span4"+j;
                  tr3_td6_span4.classList.add("badge");
                  tr3_td6_span4.classList.add("badge-pill");
                  tr3_td6_span4.classList.add("badge-primary");
                  tr3_td6_span4.innerHTML=pro_list[j+11];
                  tr3_td6.appendChild(tr3_td6_span4);
                  tr3.appendChild(tr3_td1);
                  tr3.appendChild(tr3_td2);
                  tr3.appendChild(tr3_td3);
                  tr3.appendChild(tr3_td4);
                  tr3.appendChild(tr3_td5);
                  tr3.appendChild(tr3_td6);
                  var label3 = document.createElement("label");
                  label3.id="label3"+j;
                  label3.innerHTML="Öğle Yemeği";
                  var tr4 = document.createElement("tr");
                  tr4.id="table"+((8*j)+3);
                  var tr4_td1 = document.createElement("td");
                  tr4_td1.setAttribute("style","border:none;");
                  tr4_td1.appendChild(label3);
                  var input3 = document.createElement("TEXTAREA");
                  // input3.setAttribute("type","text");
                  input3.setAttribute("id","inpt3"+j);
                  input3.value=pro_list[j+20];
                  input3.setAttribute("oninput","dragFood(this.id);");
                  // input3.classList.add("clearable");
                  var tr4_td2 = document.createElement("td");
                  tr4_td2.setAttribute("style","border:none;");
                  tr4_td2.appendChild(input3);
                  var tr4_td3= document.createElement("td");
                  tr4_td3.setAttribute("style","border:none;");
                  var tr4_td3_span1 = document.createElement("span");
                  tr4_td3_span1.id="span1"+j;
                  tr4_td3_span1.classList.add("badge");
                  tr4_td3_span1.classList.add("badge-pill");
                  tr4_td3_span1.classList.add("badge-warning");
                  tr4_td3_span1.innerHTML=pro_list[j+24];
                  tr4_td3.appendChild(tr4_td3_span1);
                  var tr4_td4= document.createElement("td");
                  tr4_td4.setAttribute("style","border:none;");
                  var tr4_td4_span2 = document.createElement("span");
                  tr4_td4_span2.id="span2"+j;
                  tr4_td4_span2.classList.add("badge");
                  tr4_td4_span2.classList.add("badge-pill");
                  tr4_td4_span2.classList.add("badge-success");
                  tr4_td4_span2.innerHTML=pro_list[j+23];
                  tr4_td4.appendChild(tr4_td4_span2);
                  var tr4_td5= document.createElement("td");
                  tr4_td5.setAttribute("style","border:none;");
                  var tr4_td5_span3 = document.createElement("span");
                  tr4_td5_span3.id="span3"+j;
                  tr4_td5_span3.classList.add("badge");
                  tr4_td5_span3.classList.add("badge-pill");
                  tr4_td5_span3.classList.add("badge-danger");
                  tr4_td5_span3.innerHTML=pro_list[j+22];
                  tr4_td5.appendChild(tr4_td5_span3);
                  var tr4_td6= document.createElement("td");
                  tr4_td6.setAttribute("style","border:none;");
                  var tr4_td6_span4= document.createElement("span");
                  tr4_td6_span4.id="span4"+j;
                  tr4_td6_span4.classList.add("badge");
                  tr4_td6_span4.classList.add("badge-pill");
                  tr4_td6_span4.classList.add("badge-primary");
                  tr4_td6_span4.innerHTML=pro_list[j+21];
                  tr4_td6.appendChild(tr4_td6_span4);
                  tr4.appendChild(tr4_td1);
                  tr4.appendChild(tr4_td2);
                  tr4.appendChild(tr4_td3);
                  tr4.appendChild(tr4_td4);
                  tr4.appendChild(tr4_td5);
                  tr4.appendChild(tr4_td6);
                  var label4 = document.createElement("label");
                  label4.id="label4"+j;
                  label4.innerHTML="2. Ara Öğün";
                  var tr5 = document.createElement("tr");
                  tr5.id="table"+((8*j)+4);
                  var tr5_td1 = document.createElement("td");
                  tr5_td1.setAttribute("style","border:none;");
                  tr5_td1.appendChild(label4);
                  var input4 = document.createElement("TEXTAREA");
                  // input4.setAttribute("type","text");
                  input4.setAttribute("id","inpt4"+j);
                  input4.value=pro_list[j+15];
                  input4.setAttribute("oninput","dragFood(this.id);");
                  // input4.classList.add("clearable");
                  var tr5_td2 = document.createElement("td");
                  tr5_td2.setAttribute("style","border:none;");
                  tr5_td2.appendChild(input4);
                  var tr5_td3= document.createElement("td");
                  tr5_td3.setAttribute("style","border:none;");
                  var tr5_td3_span1 = document.createElement("span");
                  tr5_td3_span1.id="span1"+j;
                  tr5_td3_span1.classList.add("badge");
                  tr5_td3_span1.classList.add("badge-pill");
                  tr5_td3_span1.classList.add("badge-warning");
                  tr5_td3_span1.innerHTML=pro_list[j+19];
                  tr5_td3.appendChild(tr5_td3_span1);
                  var tr5_td4= document.createElement("td");
                  tr5_td4.setAttribute("style","border:none;");
                  var tr5_td4_span2 = document.createElement("span");
                  tr5_td4_span2.id="span2"+j;
                  tr5_td4_span2.classList.add("badge");
                  tr5_td4_span2.classList.add("badge-pill");
                  tr5_td4_span2.classList.add("badge-success");
                  tr5_td4_span2.innerHTML=pro_list[j+18];
                  tr5_td4.appendChild(tr5_td4_span2);
                  var tr5_td5= document.createElement("td");
                  tr5_td5.setAttribute("style","border:none;");
                  var tr5_td5_span3 = document.createElement("span");
                  tr5_td5_span3.id="span3"+j;
                  tr5_td5_span3.classList.add("badge");
                  tr5_td5_span3.classList.add("badge-pill");
                  tr5_td5_span3.classList.add("badge-danger");
                  tr5_td5_span3.innerHTML=pro_list[j+17];
                  tr5_td5.appendChild(tr5_td5_span3);
                  var tr5_td6= document.createElement("td");
                  tr5_td6.setAttribute("style","border:none;");
                  var tr5_td6_span4= document.createElement("span");
                  tr5_td6_span4.id="span4"+j;
                  tr5_td6_span4.classList.add("badge");
                  tr5_td6_span4.classList.add("badge-pill");
                  tr5_td6_span4.classList.add("badge-primary");
                  tr5_td6_span4.innerHTML=pro_list[j+16];
                  tr5_td6.appendChild(tr5_td6_span4);
                  tr5.appendChild(tr5_td1);
                  tr5.appendChild(tr5_td2);
                  tr5.appendChild(tr5_td3);
                  tr5.appendChild(tr5_td4);
                  tr5.appendChild(tr5_td5);
                  tr5.appendChild(tr5_td6);
                  var label5 = document.createElement("label");
                  label5.id="label5"+j;
                  label5.innerHTML="Akşam Yemeği";
                  var tr6 = document.createElement("tr");
                  tr6.id="table"+((8*j)+5);
                  var tr6_td1 = document.createElement("td");
                  tr6_td1.setAttribute("style","border:none;");
                  tr6_td1.appendChild(label5);
                  var input5 = document.createElement("TEXTAREA");
                  // input5.setAttribute("type","text");
                  input5.setAttribute("id","inpt5"+j);
                  input5.value=pro_list[j];
                  input5.setAttribute("oninput","dragFood(this.id);");
                  // input5.classList.add("clearable");
                  var tr6_td2 = document.createElement("td");
                  tr6_td2.setAttribute("style","border:none;");
                  tr6_td2.appendChild(input5);
                  var tr6_td3= document.createElement("td");
                  tr6_td3.setAttribute("style","border:none;");
                  var tr6_td3_span1 = document.createElement("span");
                  tr6_td3_span1.id="span1"+j;
                  tr6_td3_span1.classList.add("badge");
                  tr6_td3_span1.classList.add("badge-pill");
                  tr6_td3_span1.classList.add("badge-warning");
                  tr6_td3_span1.innerHTML=pro_list[j+4];
                  tr6_td3.appendChild(tr6_td3_span1);
                  var tr6_td4= document.createElement("td");
                  tr6_td4.setAttribute("style","border:none;");
                  var tr6_td4_span2 = document.createElement("span");
                  tr6_td4_span2.id="span2"+j;
                  tr6_td4_span2.classList.add("badge");
                  tr6_td4_span2.classList.add("badge-pill");
                  tr6_td4_span2.classList.add("badge-success");
                  tr6_td4_span2.innerHTML=pro_list[j+3];
                  tr6_td4.appendChild(tr6_td4_span2);
                  var tr6_td5= document.createElement("td");
                  tr6_td5.setAttribute("style","border:none;");
                  var tr6_td5_span3 = document.createElement("span");
                  tr6_td5_span3.id="span3"+j;
                  tr6_td5_span3.classList.add("badge");
                  tr6_td5_span3.classList.add("badge-pill");
                  tr6_td5_span3.classList.add("badge-danger");
                  tr6_td5_span3.innerHTML=pro_list[j+2];
                  tr6_td5.appendChild(tr6_td5_span3);
                  var tr6_td6= document.createElement("td");
                  tr6_td6.setAttribute("style","border:none;");
                  var tr6_td6_span4= document.createElement("span");
                  tr6_td6_span4.id="span4"+j;
                  tr6_td6_span4.classList.add("badge");
                  tr6_td6_span4.classList.add("badge-pill");
                  tr6_td6_span4.classList.add("badge-primary");
                  tr6_td6_span4.innerHTML=pro_list[j+1];
                  tr6_td6.appendChild(tr6_td6_span4);
                  tr6.appendChild(tr6_td1);
                  tr6.appendChild(tr6_td2);
                  tr6.appendChild(tr6_td3);
                  tr6.appendChild(tr6_td4);
                  tr6.appendChild(tr6_td5);
                  tr6.appendChild(tr6_td6);
                  var label6 = document.createElement("label");
                  label6.id="label6"+j;
                  label6.innerHTML="3. Ara Öğün";
                  var tr7 = document.createElement("tr");
                  tr7.id="table"+((8*j)+6);
                  var tr7_td1 = document.createElement("td");
                  tr7_td1.setAttribute("style","border:none;");
                  tr7_td1.appendChild(label6);
                  var input6 = document.createElement("TEXTAREA");
                  // input6.setAttribute("type","text");
                  input6.setAttribute("id","inpt6"+j);
                  input6.value=pro_list[j+34];
                  input6.setAttribute("oninput","dragFood(this.id);");
                  // input6.classList.add("clearable");
                  var tr7_td2 = document.createElement("td");
                  tr7_td2.setAttribute("style","border:none;");
                  tr7_td2.appendChild(input6);
                  var tr7_td3= document.createElement("td");
                  tr7_td3.setAttribute("style","border:none;");
                  var tr7_td3_span1 = document.createElement("span");
                  tr7_td3_span1.id="span1"+j;
                  tr7_td3_span1.classList.add("badge");
                  tr7_td3_span1.classList.add("badge-pill");
                  tr7_td3_span1.classList.add("badge-warning");
                  tr7_td3_span1.innerHTML=pro_list[j+38];
                  tr7_td3.appendChild(tr7_td3_span1);
                  var tr7_td4= document.createElement("td");
                  tr7_td4.setAttribute("style","border:none;");
                  var tr7_td4_span2 = document.createElement("span");
                  tr7_td4_span2.id="span2"+j;
                  tr7_td4_span2.classList.add("badge");
                  tr7_td4_span2.classList.add("badge-pill");
                  tr7_td4_span2.classList.add("badge-success");
                  tr7_td4_span2.innerHTML=pro_list[j+37];
                  tr7_td4.appendChild(tr7_td4_span2);
                  var tr7_td5= document.createElement("td");
                  tr7_td5.setAttribute("style","border:none;");
                  var tr7_td5_span3 = document.createElement("span");
                  tr7_td5_span3.id="span3"+j;
                  tr7_td5_span3.classList.add("badge");
                  tr7_td5_span3.classList.add("badge-pill");
                  tr7_td5_span3.classList.add("badge-danger");
                  tr7_td5_span3.innerHTML=pro_list[j+36];
                  tr7_td5.appendChild(tr7_td5_span3);
                  var tr7_td6= document.createElement("td");
                  tr7_td6.setAttribute("style","border:none;");
                  var tr7_td6_span4= document.createElement("span");
                  tr7_td6_span4.id="span4"+j;
                  tr7_td6_span4.classList.add("badge");
                  tr7_td6_span4.classList.add("badge-pill");
                  tr7_td6_span4.classList.add("badge-primary");
                  tr7_td6_span4.innerHTML=pro_list[j+35];
                  tr7_td6.appendChild(tr7_td6_span4);
                  tr7.appendChild(tr7_td1);
                  tr7.appendChild(tr7_td2);
                  tr7.appendChild(tr7_td3);
                  tr7.appendChild(tr7_td4);
                  tr7.appendChild(tr7_td5);
                  tr7.appendChild(tr7_td6);
                  var label7 = document.createElement("label");
                  label7.id="label7"+j;
                  label7.innerHTML="Alternatif";
                  var tr8 = document.createElement("tr");
                  tr8.id="table"+((8*j)+7);
                  var tr8_td1 = document.createElement("td");
                  tr8_td1.setAttribute("style","border:none;");
                  tr8_td1.appendChild(label7);
                  var input7 = document.createElement("TEXTAREA");
                  // input7.setAttribute("type","text");
                  input7.setAttribute("id","inpt7"+j);
                  input7.value=pro_list[j+5];
                  input7.setAttribute("oninput","dragFood(this.id);");
                  // input7.classList.add("clearable");
                  var tr8_td2 = document.createElement("td");
                  tr8_td2.setAttribute("style","border:none;");
                  tr8_td2.appendChild(input7);
                  var tr8_td3= document.createElement("td");
                  tr8_td3.setAttribute("style","border:none;");
                  var tr8_td3_span1 = document.createElement("span");
                  tr8_td3_span1.id="span1"+j;
                  tr8_td3_span1.classList.add("badge");
                  tr8_td3_span1.classList.add("badge-pill");
                  tr8_td3_span1.classList.add("badge-warning");
                  tr8_td3_span1.innerHTML=pro_list[j+9];
                  tr8_td3.appendChild(tr8_td3_span1);
                  var tr8_td4= document.createElement("td");
                  tr8_td4.setAttribute("style","border:none;");
                  var tr8_td4_span2 = document.createElement("span");
                  tr8_td4_span2.id="span2"+j;
                  tr8_td4_span2.classList.add("badge");
                  tr8_td4_span2.classList.add("badge-pill");
                  tr8_td4_span2.classList.add("badge-success");
                  tr8_td4_span2.innerHTML=pro_list[j+8];
                  tr8_td4.appendChild(tr8_td4_span2);
                  var tr8_td5= document.createElement("td");
                  tr8_td5.setAttribute("style","border:none;");
                  var tr8_td5_span3 = document.createElement("span");
                  tr8_td5_span3.id="span3"+j;
                  tr8_td5_span3.classList.add("badge");
                  tr8_td5_span3.classList.add("badge-pill");
                  tr8_td5_span3.classList.add("badge-danger");
                  tr8_td5_span3.innerHTML=pro_list[j+7];
                  tr8_td5.appendChild(tr8_td5_span3);
                  var tr8_td6= document.createElement("td");
                  tr8_td6.setAttribute("style","border:none;");
                  var tr8_td6_span4= document.createElement("span");
                  tr8_td6_span4.id="span4"+j;
                  tr8_td6_span4.classList.add("badge");
                  tr8_td6_span4.classList.add("badge-pill");
                  tr8_td6_span4.classList.add("badge-primary");
                  tr8_td6_span4.innerHTML=pro_list[j+6];
                  tr8_td6.appendChild(tr8_td6_span4);
                  tr8.appendChild(tr8_td1);
                  tr8.appendChild(tr8_td2);
                  tr8.appendChild(tr8_td3);
                  tr8.appendChild(tr8_td4);
                  tr8.appendChild(tr8_td5);
                  tr8.appendChild(tr8_td6);
                  var tr9 =document.createElement("tr");
                  tr9.id="table"+((8*j)+8);
                  var tr9_td1 = document.createElement("td");
                  tr9_td1.setAttribute("style","border:none;");
                  tr9_td1.innerHTML="";
                  var tr9_td2 = document.createElement("td");
                  tr9_td2.setAttribute("style","height:70px;border:none");
                  var b = document.createElement("B");
                  b.innerHTML="  TOPLAM";
                  tr9_td2.appendChild(b);
                  var tr9_td3 = document.createElement("td");
                  tr9_td3.setAttribute("style","border:none;");
                  var tr9_td3_span1 = document.createElement("span");
                  tr9_td3_span1.classList.add("badge");
                  tr9_td3_span1.classList.add("badge-pill");
                  tr9_td3_span1.classList.add("badge-info");
                  tr9_td3_span1.id="span1"+j;
                  tr9_td3_span1.innerHTML=pro_list[j+33];
                  tr9_td3.appendChild(tr9_td3_span1);
                  var tr9_td4 = document.createElement("td");
                  tr9_td4.setAttribute("style","border:none;");
                  var tr9_td4_span1 = document.createElement("span");
                  tr9_td4_span1.classList.add("badge");
                  tr9_td4_span1.classList.add("badge-pill");
                  tr9_td4_span1.classList.add("badge-info");
                  tr9_td4_span1.id="span2"+j;
                  tr9_td4_span1.innerHTML=pro_list[j+32];
                  tr9_td4.appendChild(tr9_td4_span1);
                  var tr9_td5 = document.createElement("td");
                  tr9_td5.setAttribute("style","border:none;");
                  var tr9_td5_span1 = document.createElement("span");
                  tr9_td5_span1.classList.add("badge");
                  tr9_td5_span1.classList.add("badge-pill");
                  tr9_td5_span1.classList.add("badge-info");
                  tr9_td5_span1.id="span3"+j;
                  tr9_td5_span1.innerHTML=pro_list[j+31];
                  tr9_td5.appendChild(tr9_td5_span1);
                  var tr9_td6 = document.createElement("td");
                  tr9_td6.setAttribute("style","border:none;");
                  var tr9_td6_span1 = document.createElement("span");
                  tr9_td6_span1.classList.add("badge");
                  tr9_td6_span1.classList.add("badge-pill");
                  tr9_td6_span1.classList.add("badge-info");
                  tr9_td6_span1.id="span4"+j;
                  tr9_td6_span1.innerHTML=pro_list[j+30];
                  tr9_td6.appendChild(tr9_td6_span1);
                  tr9.appendChild(tr9_td1);
                  tr9.appendChild(tr9_td2);
                  tr9.appendChild(tr9_td3);
                  tr9.appendChild(tr9_td4);
                  tr9.appendChild(tr9_td5);
                  tr9.appendChild(tr9_td6);
                  var br = document.createElement("br");
                  tableGun.appendChild(tr1);
                  tableGun.appendChild(tr2);
                  tableGun.appendChild(tr3);
                  tableGun.appendChild(tr4);
                  tableGun.appendChild(tr5);
                  tableGun.appendChild(tr6);
                  tableGun.appendChild(tr7);
                  tableGun.appendChild(tr8);
                  tableGun.appendChild(tr9);
                  form.appendChild(tableGun);
                  form.appendChild(br);
                  // buralarda dikkatli ol
                }
              });
          });
          tableDiv.appendChild(form);
          tableBig.appendChild(tableDiv);
      }
    });
}
// <!-- <div id="newW_2"> -->
//   <!-- <form>
//     <b><label style="color:red;font-weight:bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GENEL PROGRAM</label></b>
//     <table id="table"><tr>
//       <th style="color:#ff33cc;font-weight:bold;text-align:center;">Öğünler</th>
//       <th style="color:#ff33cc;font-weight:bold;text-align:center;">Besinler</th>
//       <th style="color:#ff33cc;font-weight:bold;text-align:center;">Protein</th>
//       <th style="color:#ff33cc;font-weight:bold;text-align:center;">Yağ</th>
//       <th style="color:#ff33cc;font-weight:bold;text-align:center;">Karbonhidrat</th>
//       <th style="color:#ff33cc;font-weight:bold;text-align:center;">Kalori</th>
//     </tr>
$("#addSend").empty();
//     <tr id="table10">
//       <td style="border:none;"><label id="label11">Sabah kahvaltısı</label></td>
//       <td style="border:none;"><textarea id="inpt11" oninput="dragFood(this.id);"></textarea></td>
//       <td style="width:100px;border:none"><span id="span1" class="badge badge-pill badge-warning">0,0</span></td>
//       <td style="width:100px;border:none"><span id="span2" class="badge badge-pill badge-success">0,0</span></td>
//       <td style="width:120px;border:none"><span id="span3" class="badge badge-pill badge-danger">0,0</span></td>
//       <td style="width:100px;border:none"><span id="span4" class="badge badge-pill badge-primary">0,0</span></td>
//     </tr>
//     <tr id="table11">
//       <td style="border:none;"><label id="label12">1.Ara Öğün</label></td>
//       <td style="border:none;"><textarea id="inpt12" oninput="dragFood(this.id);"></textarea></td>
//       <td style="border:none;"><span id="span11" class="badge badge-pill badge-warning">0,0</span></td>
//       <td style="border:none;"><span id="span12" class="badge badge-pill badge-success">0,0</span></td>
//       <td style="border:none;"><span id="span13" class="badge badge-pill badge-danger">0,0</span></td>
//       <td style="border:none;"><span id="span14" class="badge badge-pill badge-primary">0,0</span></td>
//     </tr>
//     <tr id="table12">
//       <td style="border:none;"><label id="label13">Öğle Yemeği</label></td>
//       <td style="border:none;"><textarea id="inpt13" oninput="dragFood(this.id);"></textarea></td>
//       <td style="border:none;"><span id="span21" class="badge badge-pill badge-warning">0,0</span></td>
//       <td style="border:none;"><span id="span22" class="badge badge-pill badge-success">0,0</span></td>
//       <td style="border:none;"><span id="span23" class="badge badge-pill badge-danger">0,0</span></td>
//       <td style="border:none;"><span id="span24" class="badge badge-pill badge-primary">0,0</span></td>
//     </tr>
//     <tr id="table13">
//       <td style="border:none;"><label id="label14">2.Ara Öğün</label></td>
//       <td style="border:none;"><textarea id="inpt14" oninput="dragFood(this.id);"></textarea></td>
//       <td style="border:none;"><span id="span31" class="badge badge-pill badge-warning">0,0</span></td>
//       <td style="border:none;"><span id="span32" class="badge badge-pill badge-success">0,0</span></td>
//       <td style="border:none;"><span id="span33" class="badge badge-pill badge-danger">0,0</span></td>
//       <td style="border:none;"><span id="span34" class="badge badge-pill badge-primary">0,0</span></td>
//     </tr>
//     <tr id="table14">
//       <td style="border:none;"><label id="label15">Akşam Yemeği</label></td>
//       <td style="border:none;"><textarea id="inpt15" oninput="dragFood(this.id);"></textarea></td>
//       <td style="border:none;"><span id="span41" class="badge badge-pill badge-warning">0,0</span></td>
//       <td style="border:none;"><span id="span42" class="badge badge-pill badge-success">0,0</span></td>
//       <td style="border:none;"><span id="span43" class="badge badge-pill badge-danger">0,0</span></td>
//       <td style="border:none;"><span id="span44" class="badge badge-pill badge-primary">0,0</span></td>
//     </tr>
//     <tr id="table15">
//       <td style="border:none;"><label id="label16">3.Ara Öğün</label></td>
//       <td style="border:none;"><textarea id="inpt16" oninput="dragFood(this.id);"></textarea></td>
//       <td style="border:none;"><span id="span51" class="badge badge-pill badge-warning">0,0</span></td>
//       <td style="border:none;"><span id="span52" class="badge badge-pill badge-success">0,0</span></td>
//       <td style="border:none;"><span id="span53" class="badge badge-pill badge-danger">0,0</span></td>
//       <td style="border:none;"><span id="span54" class="badge badge-pill badge-primary">0,0</span></td>
//     </tr>
//     <tr id="table16">
//       <td style="border:none;"><label id="label17">Alternatif</label></td>
//       <td style="border:none;"><textarea id="inpt17" oninput="dragFood(this.id);"></textarea></td>
//       <td style="border:none;"><span id="span61" class="badge badge-pill badge-warning">0,0</span></td>
//       <td style="border:none;"><span id="span62" class="badge badge-pill badge-success">0,0</span></td>
//       <td style="border:none;"><span id="span63" class="badge badge-pill badge-danger">0,0</span></td>
//       <td style="border:none;"><span id="span64" class="badge badge-pill badge-primary">0,0</span></td>
//     </tr>
//     <tr id="table17">
//       <td style="border:none;"></td>
//       <td style="height:70px;border:none"><b>  TOPLAM</b></td>
//       <td style="border:none;"><span class="badge badge-pill badge-info" id="span71">0,0</span></td>
//       <td style="border:none;"><span class="badge badge-pill badge-info" id="span72">0,0</span></td>
//       <td style="border:none;"><span class="badge badge-pill badge-info" id="span73">0,0</span></td>
//       <td style="border:none;"><span class="badge badge-pill badge-info" id="span74">0,0</span></td>
//     </tr>
//   </table>
//   </form> -->
//
// <!-- </div> -->
// function checkGenelSecond(){
//   if(document.getElementById("checkbox2").checked==true){
//     $("#addSend2").hide();
//     var name = document.getElementById("progName").innerText;
//     $('#accordion div').html('');
//     var big_div = document.createElement("div");
//     big_div.setAttribute("id","diyet_check");
//     big_div.classList.add("diyet-checkboxes");
//
//     var big_div_1_row = document.createElement("div");
//     big_div_1_row.classList.add("row");
//     var big_div_1_row_1 = document.createElement("div");
//     big_div_1_row_1.classList.add("col-md-4");
//     var divform = document.createElement("div");
//     divform.classList.add("form-group");
//     var divform_1 = document.createElement("div");
//     // divform_1.classList.add("flexbox align-items-center");
//     var span = document.createElement("span");
//     span.classList.add("custom-checkbox1");
//     var input = document.createElement("input");
//     input.setAttribute("type","radio");
//     input.setAttribute("id","checkbox1");
//     input.setAttribute("name","options[]");
//     input.setAttribute("value","1");
//     input.setAttribute("onclick","newProgram(this.id);");
//     var label = document.createElement("label");
//     label.setAttribute("id","label1");
//     label.setAttribute("for","checkbox1");
//     label.innerHTML="Günlük Program";
//     divform_1.appendChild(span);
//     divform_1.appendChild(input);
//     divform_1.appendChild(label);
//     divform.appendChild(divform_1);
//     big_div_1_row_1.appendChild(divform);
//
//     var big_div_2_row_1 = document.createElement("div");
//     big_div_2_row_1.classList.add("col-md-4");
//     var divform2 = document.createElement("div");
//     divform2.classList.add("form-group");
//     var divform_2 = document.createElement("div");
//     // divform_2.classList.add("flexbox align-items-center");
//     var span2 = document.createElement("span");
//     span.classList.add("custom-checkbox1");
//     var input2 = document.createElement("input");
//     input2.setAttribute("type","radio");
//     input2.setAttribute("id","checkbox2");
//     input2.setAttribute("name","options[]");
//     input2.setAttribute("value","2");
//     input2.setAttribute("onclick","checkGenelSecond();");
//     input2.checked=true;
//     var label2 = document.createElement("label");
//     label2.setAttribute("id","general");
//     label2.setAttribute("for","checkbox2");
//     label2.innerHTML="Genel Program";
//     divform_2.appendChild(span2);
//     divform_2.appendChild(input2);
//     divform_2.appendChild(label2);
//     divform2.appendChild(divform_2);
//     big_div_2_row_1.appendChild(divform2);
//
//     var div_v = document.createElement("div");
//     div_v.classList.add("col-md-4");
//     var div_v_1 = document.createElement("div");
//     var span3 = document.createElement("span");
//     var label3 = document.createElement("label");
//     label3.setAttribute("id","programNm");
//     label3.innerHTML=name+" isimli Program";
//     label3.setAttribute("style","color:red;font-weight:bold");
//     span3.appendChild(label3);
//     div_v_1.appendChild(span3);
//     div_v.appendChild(div_v_1);
//     big_div_1_row.appendChild(big_div_1_row_1);
//     big_div_1_row.appendChild(big_div_2_row_1);
//     big_div_1_row.appendChild(div_v);
//     big_div.appendChild(big_div_1_row);
//     var tableProGen = document.getElementById("accordion");
//     var tableDiv = document.createElement("div");
//     var formGen = document.createElement("form");
//     var kalın = document.createElement("b");
//     var labelGen = document.createElement("label");
//     labelGen.innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspGENEL PROGRAM";
//     labelGen.setAttribute("style","color:red;font-weight:bold");
//     var br11= document.createElement("br");
//     var tableGen = document.createElement("table");
//     tableGen.id="table";
//     var tr = document.createElement("tr");
//     var th1 = document.createElement("th");
//     th1.setAttribute("style","color:#c27ad3;font-weight:bold;text-align:center;");
//     th1.innerHTML="Öğünler";
//     var th2 = document.createElement("th");
//     th2.setAttribute("style","color:#c27ad3;font-weight:bold;text-align:center;");
//     th2.innerHTML="Besinler";
//     var th3 = document.createElement("th");
//     th3.setAttribute("style","color:#c27ad3;font-weight:bold;text-align:center;");
//     th3.innerHTML="Protein";
//     var th4 = document.createElement("th");
//     th4.setAttribute("style","color:#c27ad3;font-weight:bold;text-align:center;");
//     th4.innerHTML="Yağ";
//     var th5 = document.createElement("th");
//     th5.setAttribute("style","color:#c27ad3;font-weight:bold;text-align:center;");
//     th5.innerHTML="Karbonhidrat";
//     var th6 = document.createElement("th");
//     th6.setAttribute("style","color:#c27ad3;font-weight:bold;text-align:center;");
//     th6.innerHTML="Kalori";
//     var label11 = document.createElement("label");
//     label11.id="label11";
//     label11.innerHTML="Sabah kahvaltısı";
//     var tr2 = document.createElement("tr");
//     tr2.id="table10";
//     var tr2_td1= document.createElement("td");
//     tr2_td1.setAttribute("style","border:none;");
//     tr2_td1.appendChild(label11);
//     var input11 = document.createElement("TEXTAREA");
//     // input11.setAttribute("type","text");
//     input11.setAttribute("id","inpt11");
//     input11.setAttribute("oninput","dragFood(this.id);");
//     // input11.classList.add("clearable");
//     var tr2_td2=document.createElement("td");
//     tr2_td2.setAttribute("style","border:none;");
//     tr2_td2.appendChild(input11);
//     var tr2_td3= document.createElement("td");
//     tr2_td3.setAttribute("style","width:100px;border:none");
//     var tr2_span1 = document.createElement("span");
//     tr2_span1.id="span1";
//     tr2_span1.classList.add("badge");
//     tr2_span1.classList.add("badge-pill");
//     tr2_span1.classList.add("badge-warning");
//     tr2_span1.innerHTML="0,0";
//     tr2_td3.appendChild(tr2_span1);
//     var tr2_td4= document.createElement("td");
//     tr2_td4.setAttribute("style","width:100px;border:none");
//     var tr2_span2 = document.createElement("span");
//     tr2_span2.id="span2";
//     tr2_span2.classList.add("badge");
//     tr2_span2.classList.add("badge-pill");
//     tr2_span2.classList.add("badge-success");
//     tr2_span2.innerHTML="0,0";
//     tr2_td4.appendChild(tr2_span2);
//     var tr2_td5= document.createElement("td");
//     tr2_td5.setAttribute("style","width:120px;border:none");
//     var tr2_span3 = document.createElement("span");
//     tr2_span3.id="span3";
//     tr2_span3.classList.add("badge");
//     tr2_span3.classList.add("badge-pill");
//     tr2_span3.classList.add("badge-danger");
//     tr2_span3.innerHTML="0,0";
//     tr2_td5.appendChild(tr2_span3);
//     var tr2_td6= document.createElement("td");
//     tr2_td6.setAttribute("style","width:100px;border:none");
//     var tr2_span4= document.createElement("span");
//     tr2_span4.id="span4";
//     tr2_span4.classList.add("badge");
//     tr2_span4.classList.add("badge-pill");
//     tr2_span4.classList.add("badge-primary");
//     tr2_span4.innerHTML="0,0";
//     tr2_td6.appendChild(tr2_span4);
//     var br12= document.createElement("br");
//     var label12 = document.createElement("label");
//     label12.id="label12";
//     label12.innerHTML="1.Ara Öğün";
//     var tr3 = document.createElement("tr");
//     tr3.id="table11";
//     var tr3_td1 = document.createElement("td");
//     tr3_td1.setAttribute("style","border:none;");
//     tr3_td1.appendChild(label12);
//     var input12 = document.createElement("TEXTAREA");
//     // input12.setAttribute("type","text");
//     input12.setAttribute("id","inpt12");
//     input12.setAttribute("oninput","dragFood(this.id);");
//     // input12.classList.add("clearable");
//     var tr3_td2=document.createElement("td");
//     tr3_td2.setAttribute("style","border:none;");
//     tr3_td2.appendChild(input12);
//     var tr3_td3= document.createElement("td");
//     tr3_td3.setAttribute("style","border:none;");
//     var tr3_span1 = document.createElement("span");
//     tr3_span1.id="span11";
//     tr3_span1.classList.add("badge");
//     tr3_span1.classList.add("badge-pill");
//     tr3_span1.classList.add("badge-warning");
//     tr3_span1.innerHTML="0,0";
//     tr3_td3.appendChild(tr3_span1);
//     var tr3_td4= document.createElement("td");
//     tr3_td4.setAttribute("style","border:none;");
//     var tr3_span2 = document.createElement("span");
//     tr3_span2.id="span12";
//     tr3_span2.classList.add("badge");
//     tr3_span2.classList.add("badge-pill");
//     tr3_span2.classList.add("badge-success");
//     tr3_span2.innerHTML="0,0";
//     tr3_td4.appendChild(tr3_span2);
//     var tr3_td5= document.createElement("td");
//     tr3_td5.setAttribute("style","border:none;");
//     var tr3_span3 = document.createElement("span");
//     tr3_span3.id="span13";
//     tr3_span3.classList.add("badge");
//     tr3_span3.classList.add("badge-pill");
//     tr3_span3.classList.add("badge-danger");
//     tr3_span3.innerHTML="0,0";
//     tr3_td5.appendChild(tr3_span3);
//     var tr3_td6= document.createElement("td");
//     tr3_td6.setAttribute("style","border:none;");
//     var tr3_span4 = document.createElement("span");
//     tr3_span4.id="span14";
//     tr3_span4.classList.add("badge");
//     tr3_span4.classList.add("badge-pill");
//     tr3_span4.classList.add("badge-primary");
//     tr3_span4.innerHTML="0,0";
//     tr3_td6.appendChild(tr3_span4);
//     var br13= document.createElement("br");
//     var label13 = document.createElement("label");
//     label13.id="label13";
//     label13.innerHTML="Öğle Yemeği";
//     var tr4 = document.createElement("tr");
//     tr4.id="table12";
//     var tr4_td1 = document.createElement("td");
//     tr4_td1.setAttribute("style","border:none;");
//     tr4_td1.appendChild(label13);
//     var input13 = document.createElement("TEXTAREA");
//     // input13.setAttribute("type","text");
//     input13.setAttribute("id","inpt13");
//     input13.setAttribute("oninput","dragFood(this.id);");
//     // input13.classList.add("clearable");
//     var tr4_td2=document.createElement("td");
//     tr4_td2.setAttribute("style","border:none;");
//     tr4_td2.appendChild(input13);
//     var tr4_td3= document.createElement("td");
//     tr4_td3.setAttribute("style","border:none;");
//     var tr4_span1 = document.createElement("span");
//     tr4_span1.id="span21";
//     tr4_span1.classList.add("badge");
//     tr4_span1.classList.add("badge-pill");
//     tr4_span1.classList.add("badge-warning");
//     tr4_span1.innerHTML="0,0";
//     tr4_td3.appendChild(tr4_span1);
//     var tr4_td4= document.createElement("td");
//     tr4_td4.setAttribute("style","border:none;");
//     var tr4_span2 = document.createElement("span");
//     tr4_span2.id="span22";
//     tr4_span2.classList.add("badge");
//     tr4_span2.classList.add("badge-pill");
//     tr4_span2.classList.add("badge-success");
//     tr4_span2.innerHTML="0,0";
//     tr4_td4.appendChild(tr4_span2);
//     var tr4_td5= document.createElement("td");
//     tr4_td5.setAttribute("style","border:none;");
//     var tr4_span3 = document.createElement("span");
//     tr4_span3.id="span23";
//     tr4_span3.classList.add("badge");
//     tr4_span3.classList.add("badge-pill");
//     tr4_span3.classList.add("badge-danger");
//     tr4_span3.innerHTML="0,0";
//     tr4_td5.appendChild(tr4_span3);
//     var tr4_td6= document.createElement("td");
//     tr4_td6.setAttribute("style","border:none;");
//     var tr4_span4 = document.createElement("span");
//     tr4_span4.id="span24";
//     tr4_span4.classList.add("badge");
//     tr4_span4.classList.add("badge-pill");
//     tr4_span4.classList.add("badge-primary");
//     tr4_span4.innerHTML="0,0";
//     tr4_td6.appendChild(tr4_span4);
//     var br14= document.createElement("br");
//     var label14 = document.createElement("label");
//     label14.id="label14";
//     label14.innerHTML="2.Ara Öğün";
//     var tr5 = document.createElement("tr");
//     tr5.id="table13";
//     var tr5_td1 = document.createElement("td");
//     tr5_td1.setAttribute("style","border:none;");
//     tr5_td1.appendChild(label14);
//     var input14 = document.createElement("TEXTAREA");
//     // input14.setAttribute("type","text");
//     input14.setAttribute("id","inpt14");
//     input14.setAttribute("oninput","dragFood(this.id);");
//     // input14.classList.add("clearable");
//     var tr5_td2 = document.createElement("td");
//     tr5_td2.setAttribute("style","border:none;");
//     tr5_td2.appendChild(input14);
//     var tr5_td3= document.createElement("td");
//     tr5_td3.setAttribute("style","border:none;");
//     var tr5_span1 = document.createElement("span");
//     tr5_span1.id="span31";
//     tr5_span1.classList.add("badge");
//     tr5_span1.classList.add("badge-pill");
//     tr5_span1.classList.add("badge-warning");
//     tr5_span1.innerHTML="0,0";
//     tr5_td3.appendChild(tr5_span1);
//     var tr5_td4= document.createElement("td");
//     tr5_td4.setAttribute("style","border:none;");
//     var tr5_span2 = document.createElement("span");
//     tr5_span2.id="span32";
//     tr5_span2.classList.add("badge");
//     tr5_span2.classList.add("badge-pill");
//     tr5_span2.classList.add("badge-success");
//     tr5_span2.innerHTML="0,0";
//     tr5_td4.appendChild(tr5_span2);
//     var tr5_td5= document.createElement("td");
//     tr5_td5.setAttribute("style","border:none;");
//     var tr5_span3 = document.createElement("span");
//     tr5_span3.id="span33";
//     tr5_span3.classList.add("badge");
//     tr5_span3.classList.add("badge-pill");
//     tr5_span3.classList.add("badge-danger");
//     tr5_span3.innerHTML="0,0";
//     tr5_td5.appendChild(tr5_span3);
//     var tr5_td6= document.createElement("td");
//     tr5_td6.setAttribute("style","border:none;");
//     var tr5_span4 = document.createElement("span");
//     tr5_span4.id="span34";
//     tr5_span4.classList.add("badge");
//     tr5_span4.classList.add("badge-pill");
//     tr5_span4.classList.add("badge-primary");
//     tr5_span4.innerHTML="0,0";
//     tr5_td6.appendChild(tr5_span4);
//     var br15= document.createElement("br");
//     var label15 = document.createElement("label");
//     label15.id="label15";
//     label15.innerHTML="Akşam Yemeği";
//     var tr6= document.createElement("tr");
//     tr6.id="table14";
//     var tr6_td1=document.createElement("td");
//     tr6_td1.setAttribute("style","border:none;");
//     tr6_td1.appendChild(label15);
//     var input15 = document.createElement("TEXTAREA");
//     // input15.setAttribute("type","text");
//     input15.setAttribute("id","inpt15");
//     input15.setAttribute("oninput","dragFood(this.id);");
//     // input15.classList.add("clearable");
//     var tr6_td2= document.createElement("td");
//     tr6_td2.setAttribute("style","border:none;");
//     tr6_td2.appendChild(input15);
//     var tr6_td3= document.createElement("td");
//     tr6_td3.setAttribute("style","border:none;");
//     var tr6_span1 = document.createElement("span");
//     tr6_span1.id="span41";
//     tr6_span1.classList.add("badge");
//     tr6_span1.classList.add("badge-pill");
//     tr6_span1.classList.add("badge-warning");
//     tr6_span1.innerHTML="0,0";
//     tr6_td3.appendChild(tr6_span1);
//     var tr6_td4= document.createElement("td");
//     tr6_td4.setAttribute("style","border:none;");
//     var tr6_span2 = document.createElement("span");
//     tr6_span2.id="span42";
//     tr6_span2.classList.add("badge");
//     tr6_span2.classList.add("badge-pill");
//     tr6_span2.classList.add("badge-success");
//     tr6_span2.innerHTML="0,0";
//     tr6_td4.appendChild(tr6_span2);
//     var tr6_td5= document.createElement("td");
//     tr6_td5.setAttribute("style","border:none;");
//     var tr6_span3 = document.createElement("span");
//     tr6_span3.id="span43";
//     tr6_span3.classList.add("badge");
//     tr6_span3.classList.add("badge-pill");
//     tr6_span3.classList.add("badge-danger");
//     tr6_span3.innerHTML="0,0";
//     tr6_td5.appendChild(tr6_span3);
//     var tr6_td6= document.createElement("td");
//     tr6_td6.setAttribute("style","border:none;");
//     var tr6_span4 = document.createElement("span");
//     tr6_span4.id="span44";
//     tr6_span4.classList.add("badge");
//     tr6_span4.classList.add("badge-pill");
//     tr6_span4.classList.add("badge-primary");
//     tr6_span4.innerHTML="0,0";
//     tr6_td6.appendChild(tr6_span4);
//     var br16= document.createElement("br");
//     var label16 = document.createElement("label");
//     label16.id="label16";
//     label16.innerHTML="3.Ara Öğün";
//     var tr7 = document.createElement("tr");
//     tr7.id="table15";
//     var tr7_td1= document.createElement("td");
//     tr7_td1.setAttribute("style","border:none;");
//     tr7_td1.appendChild(label16);
//     var input16 = document.createElement("TEXTAREA");
//     // input16.setAttribute("type","text");
//     input16.setAttribute("id","inpt16");
//     input16.setAttribute("oninput","dragFood(this.id);");
//     // input16.classList.add("clearable");
//     var tr7_td2= document.createElement("td");
//     tr7_td2.setAttribute("style","border:none;");
//     tr7_td2.appendChild(input16);
//     var tr7_td3= document.createElement("td");
//     tr7_td3.setAttribute("style","border:none;");
//     var tr7_span1 = document.createElement("span");
//     tr7_span1.id="span51";
//     tr7_span1.classList.add("badge");
//     tr7_span1.classList.add("badge-pill");
//     tr7_span1.classList.add("badge-warning");
//     tr7_span1.innerHTML="0,0";
//     tr7_td3.appendChild(tr7_span1);
//     var tr7_td4= document.createElement("td");
//     tr7_td4.setAttribute("style","border:none;");
//     var tr7_span2 = document.createElement("span");
//     tr7_span2.id="span52";
//     tr7_span2.classList.add("badge");
//     tr7_span2.classList.add("badge-pill");
//     tr7_span2.classList.add("badge-success");
//     tr7_span2.innerHTML="0,0";
//     tr7_td4.appendChild(tr7_span2);
//     var tr7_td5= document.createElement("td");
//     tr7_td5.setAttribute("style","border:none;");
//     var tr7_span3 = document.createElement("span");
//     tr7_span3.id="span53";
//     tr7_span3.classList.add("badge");
//     tr7_span3.classList.add("badge-pill");
//     tr7_span3.classList.add("badge-danger");
//     tr7_span3.innerHTML="0,0";
//     tr7_td5.appendChild(tr7_span3);
//     var tr7_td6= document.createElement("td");
//     tr7_td6.setAttribute("style","border:none;");
//     var tr7_span4 = document.createElement("span");
//     tr7_span4.id="span54";
//     tr7_span4.classList.add("badge");
//     tr7_span4.classList.add("badge-pill");
//     tr7_span4.classList.add("badge-primary");
//     tr7_span4.innerHTML="0,0";
//     tr7_td6.appendChild(tr7_span4);
//     var br17= document.createElement("br");
//     var label17 = document.createElement("label");
//     label17.id="label17";
//     label17.innerHTML="Alternatif";
//     var tr8 = document.createElement("tr");
//     tr8.id="table16";
//     var tr8_td1= document.createElement("td");
//     tr8_td1.setAttribute("style","border:none;");
//     tr8_td1.appendChild(label17);
//     var input17 = document.createElement("TEXTAREA");
//     // input17.setAttribute("type","text");
//     input17.setAttribute("id","inpt17");
//     input17.setAttribute("oninput","dragFood(this.id);");
//     // input17.classList.add("clearable");
//     var tr8_td2= document.createElement("td");
//     tr8_td2.setAttribute("style","border:none;");
//     tr8_td2.appendChild(input17);
//     var tr8_td3= document.createElement("td");
//     tr8_td3.setAttribute("style","border:none;");
//     var tr8_span1 = document.createElement("span");
//     tr8_span1.id="span61";
//     tr8_span1.classList.add("badge");
//     tr8_span1.classList.add("badge-pill");
//     tr8_span1.classList.add("badge-warning");
//     tr8_span1.innerHTML="0,0";
//     tr8_td3.appendChild(tr8_span1);
//     var tr8_td4= document.createElement("td");
//     tr8_td4.setAttribute("style","border:none;");
//     var tr8_span2 = document.createElement("span");
//     tr8_span2.id="span62";
//     tr8_span2.classList.add("badge");
//     tr8_span2.classList.add("badge-pill");
//     tr8_span2.classList.add("badge-success");
//     tr8_span2.innerHTML="0,0";
//     tr8_td4.appendChild(tr8_span2);
//     var tr8_td5= document.createElement("td");
//     tr8_td5.setAttribute("style","border:none;");
//     var tr8_span3 = document.createElement("span");
//     tr8_span3.id="span63";
//     tr8_span3.classList.add("badge");
//     tr8_span3.classList.add("badge-pill");
//     tr8_span3.classList.add("badge-danger");
//     tr8_span3.innerHTML="0,0";
//     tr8_td5.appendChild(tr8_span3);
//     var tr8_td6= document.createElement("td");
//     tr8_td6.setAttribute("style","border:none;");
//     var tr8_span4 = document.createElement("span");
//     tr8_span4.id="span64";
//     tr8_span4.classList.add("badge");
//     tr8_span4.classList.add("badge-pill");
//     tr8_span4.classList.add("badge-primary");
//     tr8_span4.innerHTML="0,0";
//     tr8_td6.appendChild(tr8_span4);
//     var tr9 =document.createElement("tr");
//     tr9.id="table17";
//     var tr9_td1 = document.createElement("td");
//     tr9_td1.setAttribute("style","border:none;");
//     tr9_td1.innerHTML="";
//     var tr9_td2 = document.createElement("td");
//     tr9_td2.setAttribute("style","height:70px;border:none");
//     var b = document.createElement("B");
//     b.innerHTML="  TOPLAM";
//     tr9_td2.appendChild(b);
//     var tr9_td3 = document.createElement("td");
//     tr9_td3.setAttribute("style","border:none;");
//     var tr9_td3_span1 = document.createElement("span");
//     tr9_td3_span1.classList.add("badge");
//     tr9_td3_span1.classList.add("badge-pill");
//     tr9_td3_span1.classList.add("badge-info");
//     tr9_td3_span1.id="span71";
//     tr9_td3_span1.innerHTML="0,0";
//     tr9_td3.appendChild(tr9_td3_span1);
//     var tr9_td4 = document.createElement("td");
//     tr9_td4.setAttribute("style","border:none;");
//     var tr9_td4_span1 = document.createElement("span");
//     tr9_td4_span1.classList.add("badge");
//     tr9_td4_span1.classList.add("badge-pill");
//     tr9_td4_span1.classList.add("badge-info");
//     tr9_td4_span1.id="span72";
//     tr9_td4_span1.innerHTML="0,0";
//     tr9_td4.appendChild(tr9_td4_span1);
//     var tr9_td5 = document.createElement("td");
//     tr9_td5.setAttribute("style","border:none;");
//     var tr9_td5_span1 = document.createElement("span");
//     tr9_td5_span1.classList.add("badge");
//     tr9_td5_span1.classList.add("badge-pill");
//     tr9_td5_span1.classList.add("badge-info");
//     tr9_td5_span1.id="span73";
//     tr9_td5_span1.innerHTML="0,0";
//     tr9_td5.appendChild(tr9_td5_span1);
//     var tr9_td6 = document.createElement("td");
//     tr9_td6.setAttribute("style","border:none;");
//     var tr9_td6_span1 = document.createElement("span");
//     tr9_td6_span1.classList.add("badge");
//     tr9_td6_span1.classList.add("badge-pill");
//     tr9_td6_span1.classList.add("badge-info");
//     tr9_td6_span1.id="span74";
//     tr9_td6_span1.innerHTML="0,0";
//     tr9_td6.appendChild(tr9_td6_span1);
//     tr.appendChild(th1);
//     tr.appendChild(th2);
//     tr.appendChild(th3);
//     tr.appendChild(th4);
//     tr.appendChild(th5);
//     tr.appendChild(th6);
//     tr2.appendChild(tr2_td1);
//     tr2.appendChild(tr2_td2);
//     tr2.appendChild(tr2_td3);
//     tr2.appendChild(tr2_td4);
//     tr2.appendChild(tr2_td5);
//     tr2.appendChild(tr2_td6);
//     tr3.appendChild(tr3_td1);
//     tr3.appendChild(tr3_td2);
//     tr3.appendChild(tr3_td3);
//     tr3.appendChild(tr3_td4);
//     tr3.appendChild(tr3_td5);
//     tr3.appendChild(tr3_td6);
//     tr4.appendChild(tr4_td1);
//     tr4.appendChild(tr4_td2);
//     tr4.appendChild(tr4_td3);
//     tr4.appendChild(tr4_td4);
//     tr4.appendChild(tr4_td5);
//     tr4.appendChild(tr4_td6);
//     tr5.appendChild(tr5_td1);
//     tr5.appendChild(tr5_td2);
//     tr5.appendChild(tr5_td3);
//     tr5.appendChild(tr5_td4);
//     tr5.appendChild(tr5_td5);
//     tr5.appendChild(tr5_td6);
//     tr6.appendChild(tr6_td1);
//     tr6.appendChild(tr6_td2);
//     tr6.appendChild(tr6_td3);
//     tr6.appendChild(tr6_td4);
//     tr6.appendChild(tr6_td5);
//     tr6.appendChild(tr6_td6);
//     tr7.appendChild(tr7_td1);
//     tr7.appendChild(tr7_td2);
//     tr7.appendChild(tr7_td3);
//     tr7.appendChild(tr7_td4);
//     tr7.appendChild(tr7_td5);
//     tr7.appendChild(tr7_td6);
//     tr8.appendChild(tr8_td1);
//     tr8.appendChild(tr8_td2);
//     tr8.appendChild(tr8_td3);
//     tr8.appendChild(tr8_td4);
//     tr8.appendChild(tr8_td5);
//     tr8.appendChild(tr8_td6);
//     tr9.appendChild(tr9_td1);
//     tr9.appendChild(tr9_td2);
//     tr9.appendChild(tr9_td3);
//     tr9.appendChild(tr9_td4);
//     tr9.appendChild(tr9_td5);
//     tr9.appendChild(tr9_td6);
//     tableGen.appendChild(tr);
//     tableGen.appendChild(tr2);
//     tableGen.appendChild(tr3);
//     tableGen.appendChild(tr4);
//     tableGen.appendChild(tr5);
//     tableGen.appendChild(tr6);
//     tableGen.appendChild(tr7);
//     tableGen.appendChild(tr8);
//     tableGen.appendChild(tr9);
//     kalın.appendChild(labelGen);
//     formGen.appendChild(kalın);
//     formGen.appendChild(tableGen);
//     tableDiv.appendChild(big_div);
//     tableDiv.appendChild(formGen);
//     tableProGen.appendChild(tableDiv);
//     var out = document.getElementById("out");
//     var div_V = document.createElement("div");
//     div_V.setAttribute("id","addSend3");
//     div_V.setAttribute("class","row");
//     var div_V_class = document.createElement("div");
//     div_V_class.classList.add("col-md-12");
//     var div_V_class_class = document.createElement("div");
//     div_V_class_class.classList.add("text-right");
//     var div_V_class_class_1 = document.createElement("div");
//     div_V_class_class_1.classList.add("text-right");
//     div_V_class_class_1.classList.add("padd-bot-10");
//     var a = document.createElement("A");
//     a.setAttribute("class","btn btn-outline-primary btn-rounded");
//     a.setAttribute("onclick","saveDataArsiv(this.id);");
//     a.setAttribute("id","diyettakip-sendbutton");
//     a.innerHTML="ARŞİVİME EKLE";
//     var a2 = document.createElement("A");
//     a2.setAttribute("class","btn btn-outline-primary btn-rounded");
//     a2.setAttribute("onclick","saveProgramForAppUser(this.id);");
//     a2.setAttribute("id","diyettakip-savebutton");
//     a2.innerHTML="GÖNDER";
//     div_V_class_class_1.appendChild(a);
//     div_V_class_class_1.appendChild(a2);
//     div_V_class_class.appendChild(div_V_class_class_1);
//     div_V_class.appendChild(div_V_class_class);
//     div_V.appendChild(div_V_class);
//     // out.appendChild(tableProGun);
//     out.appendChild(div_V);
//   }
//   else if (document.getElementById("checkbox2").checked==true){
//     newProgram(this.id);
//   }
// }




// new program
// $("#addSend3").hide();
// // sıkıntı yok devam et
//   $('#accordion div').html('');
//   console.log(id);
//   // var name = document.getElementById(id).cells[0].children[0].innerText;
//   // console.log(name);
//   // var date = document.getElementById(id).cells[1].innerHTML;
//   // console.log(date);
//   var name = document.getElementById("progName").innerText;
//   $("#gunGen").show();
//   $("#addSend").show();
//
// //   // beslenme programı paneline bu girdiyi yazacaz aynı zamanda genel günlük paneli açılacak
// //
//   var tableProGun = document.getElementById("accordion");
//   var big_div = document.createElement("div");
//   big_div.setAttribute("id","diyet_check");
//   big_div.classList.add("diyet-checkboxes");
//
//   var big_div_1_row = document.createElement("div");
//   big_div_1_row.classList.add("row");
//   var big_div_1_row_1 = document.createElement("div");
//   big_div_1_row_1.classList.add("col-md-4");
//   var divform = document.createElement("div");
//   divform.classList.add("form-group");
//   var divform_1 = document.createElement("div");
//   // divform_1.classList.add("flexbox align-items-center");
//   var span = document.createElement("span");
//   span.classList.add("custom-checkbox1");
//   var input = document.createElement("input");
//   input.setAttribute("type","radio");
//   input.setAttribute("id","checkbox1");
//   input.setAttribute("name","options[]");
//   input.setAttribute("value","1");
//   input.setAttribute("onclick","newProgram(this.id);");
//   input.checked=true;
//   var label = document.createElement("label");
//   label.setAttribute("id","label1");
//   label.setAttribute("for","checkbox1");
//   label.innerHTML="Günlük Program";
//   divform_1.appendChild(span);
//   divform_1.appendChild(input);
//   divform_1.appendChild(label);
//   divform.appendChild(divform_1);
//   big_div_1_row_1.appendChild(divform);
//
//   var big_div_2_row_1 = document.createElement("div");
//   big_div_2_row_1.classList.add("col-md-4");
//   var divform2 = document.createElement("div");
//   divform2.classList.add("form-group");
//   var divform_2 = document.createElement("div");
//   // divform_2.classList.add("flexbox align-items-center");
//   var span2 = document.createElement("span");
//   span.classList.add("custom-checkbox1");
//   var input2 = document.createElement("input");
//   input2.setAttribute("type","radio");
//   input2.setAttribute("id","checkbox2");
//   input2.setAttribute("name","options[]");
//   input2.setAttribute("value","2");
//   input2.setAttribute("onclick","checkGenelSecond();");
//   var label2 = document.createElement("label");
//   label2.setAttribute("id","general");
//   label2.setAttribute("for","checkbox2");
//   label2.innerHTML="Genel Program";
//   divform_2.appendChild(span2);
//   divform_2.appendChild(input2);
//   divform_2.appendChild(label2);
//   divform2.appendChild(divform_2);
//   big_div_2_row_1.appendChild(divform2);
//
//   var div_v = document.createElement("div");
//   div_v.classList.add("col-md-4");
//   var div_v_1 = document.createElement("div");
//   var span3 = document.createElement("span");
//   var label3 = document.createElement("label");
//   label3.setAttribute("id","programNm");
//   label3.innerHTML=name+" isimli Program";
//   label3.setAttribute("style","color:red;font-weight:bold");
//   span3.appendChild(label3);
//   div_v_1.appendChild(span3);
//   div_v.appendChild(div_v_1);
//   big_div_1_row.appendChild(big_div_1_row_1);
//   big_div_1_row.appendChild(big_div_2_row_1);
//   big_div_1_row.appendChild(div_v);
//   big_div.appendChild(big_div_1_row);
//   var tablediv = document.createElement("div");
//   var form= document.createElement("form");
//   form.setAttribute("id","formGun");
//   // document.getElementById("programNm").innerHTML=name+" <label style='color:black'><b>Beslenme Programı</b></label>";
//   var row =1;
//   for(var i=0;i<=row;i++){
//     var label = document.createElement("label");
//     label.innerHTML=i+1+". GÜN ";
//     label.setAttribute("style","color:orange;font-weight:bold");
//     form.appendChild(label);
//     var tableGun = document.createElement("table");
//     tableGun.id="tableE"+i;
//     var tr1 = document.createElement("tr");
//     var th1 = document.createElement("th");
//     th1.setAttribute("style","color:#c27ad3;font-weight:bold;text-align:center;");
//     th1.innerHTML="Öğünler";
//     tr1.appendChild(th1);
//     var th2 = document.createElement("th");
//     th2.setAttribute("style","color:#c27ad3;font-weight:bold;text-align:center;");
//     th2.innerHTML="Besinler";
//     tr1.appendChild(th2);
//     var th3 = document.createElement("th");
//     th3.setAttribute("style","color:#c27ad3;font-weight:bold;text-align:center;");
//     th3.innerHTML="Protein";
//     tr1.appendChild(th3);
//     var th4 = document.createElement("th");
//     th4.setAttribute("style","color:#c27ad3;font-weight:bold;text-align:center;");
//     th4.innerHTML="Yağ";
//     tr1.appendChild(th4);
//     var th5 = document.createElement("th");
//     th5.setAttribute("style","color:#c27ad3;font-weight:bold;text-align:center;");
//     th5.innerHTML="Karbonhidrat";
//     tr1.appendChild(th5);
//     var th6 = document.createElement("th");
//     th6.setAttribute("style","color:#c27ad3;font-weight:bold;text-align:center;");
//     th6.innerHTML="Kalori";
//     tr1.appendChild(th6);
//     var label1 = document.createElement("label");
//     label1.id="label1"+i;
//     label1.innerHTML="Sabah Kahvaltısı";
//     var tr2 = document.createElement("tr");
//     tr2.id="table"+((8*i)+1);
//     var tr2_td1 = document.createElement("td");
//     tr2_td1.appendChild(label1);
//     tr2_td1.setAttribute("style","border:none;");
//     var input1 = document.createElement("TEXTAREA");
//     // input1.setAttribute("ondrop","drop(event)");
//     // input1.setAttribute("ondragover","allowDrop(event)");
//     // input1.setAttribute("type","text");
//     input1.setAttribute("id","inpt1"+i); // input1.setAttribute("id", i.toString() + "_inpt1");
//     input1.setAttribute("oninput","dragFood(this.id);");
//     // input1.classList.add("clearable");
//     var tr2_td2 = document.createElement("td");
//     tr2_td2.setAttribute("style","border:none;");
//     tr2_td2.appendChild(input1);
//     var tr2_td3= document.createElement("td");
//     tr2_td3.setAttribute("style","width:100px;border:none;");
//     var tr2_td3_span1 = document.createElement("span");
//     tr2_td3_span1.setAttribute("style","text-align:center");
//     tr2_td3_span1.id="span1";
//     tr2_td3_span1.classList.add("badge");
//     tr2_td3_span1.classList.add("badge-pill");
//     tr2_td3_span1.classList.add("badge-warning");
//     tr2_td3_span1.innerHTML="0,0";
//     tr2_td3.appendChild(tr2_td3_span1);
//     var tr2_td4= document.createElement("td");
//     tr2_td4.setAttribute("style","width:100px;border:none;");
//     var tr2_td4_span2 = document.createElement("span");
//     tr2_td4_span2.id="span2";
//     tr2_td4_span2.classList.add("badge");
//     tr2_td4_span2.classList.add("badge-pill");
//     tr2_td4_span2.classList.add("badge-success");
//     tr2_td4_span2.innerHTML="0,0";
//     tr2_td4.appendChild(tr2_td4_span2);
//     var tr2_td5= document.createElement("td");
//     tr2_td5.setAttribute("style","width:120px;border:none;");
//     var tr2_td5_span3 = document.createElement("span");
//     tr2_td5_span3.id="span3";
//     tr2_td5_span3.classList.add("badge");
//     tr2_td5_span3.classList.add("badge-pill");
//     tr2_td5_span3.classList.add("badge-danger");
//     tr2_td5_span3.innerHTML="0,0";
//     tr2_td5.appendChild(tr2_td5_span3);
//     var tr2_td6= document.createElement("td");
//     tr2_td6.setAttribute("style","width:100px;border:none;");
//     var tr2_td6_span4= document.createElement("span");
//     tr2_td6_span4.id="span4";
//     tr2_td6_span4.classList.add("badge");
//     tr2_td6_span4.classList.add("badge-pill");
//     tr2_td6_span4.classList.add("badge-primary");
//     tr2_td6_span4.innerHTML="0,0";
//     tr2_td6.appendChild(tr2_td6_span4);
//     tr2.appendChild(tr2_td1);
//     tr2.appendChild(tr2_td2);
//     tr2.appendChild(tr2_td3);
//     tr2.appendChild(tr2_td4);
//     tr2.appendChild(tr2_td5);
//     tr2.appendChild(tr2_td6);
//     var label2 = document.createElement("label");
//     label2.id="label2"+i
//     label2.innerHTML="1. Ara Öğün";
//     var tr3 = document.createElement("tr");
//     tr3.id="table"+((8*i)+2);
//     var tr3_td1 = document.createElement("td");
//     tr3_td1.setAttribute("style","border:none;");
//     tr3_td1.appendChild(label2);
//     var input2 = document.createElement("TEXTAREA");
//     // input2.setAttribute("type","text");
//     input2.setAttribute("id","inpt2"+i);
//     input2.setAttribute("oninput","dragFood(this.id);");
//     // input2.classList.add("clearable");
//     var tr3_td2 = document.createElement("td");
//     tr3_td2.setAttribute("style","border:none;");
//     tr3_td2.appendChild(input2);
//     var tr3_td3= document.createElement("td");
//     tr3_td3.setAttribute("style","border:none;");
//     var tr3_td3_span1 = document.createElement("span");
//     tr3_td3_span1.id="span1"+i;
//     tr3_td3_span1.classList.add("badge");
//     tr3_td3_span1.classList.add("badge-pill");
//     tr3_td3_span1.classList.add("badge-warning");
//     tr3_td3_span1.innerHTML="0,0";
//     tr3_td3.appendChild(tr3_td3_span1);
//     var tr3_td4= document.createElement("td");
//     tr3_td4.setAttribute("style","border:none;");
//     var tr3_td4_span2 = document.createElement("span");
//     tr3_td4_span2.id="span2"+i;
//     tr3_td4_span2.classList.add("badge");
//     tr3_td4_span2.classList.add("badge-pill");
//     tr3_td4_span2.classList.add("badge-success");
//     tr3_td4_span2.innerHTML="0,0";
//     tr3_td4.appendChild(tr3_td4_span2);
//     var tr3_td5= document.createElement("td");
//     tr3_td5.setAttribute("style","border:none;");
//     var tr3_td5_span3 = document.createElement("span");
//     tr3_td5_span3.id="span3"+i;
//     tr3_td5_span3.classList.add("badge");
//     tr3_td5_span3.classList.add("badge-pill");
//     tr3_td5_span3.classList.add("badge-danger");
//     tr3_td5_span3.innerHTML="0,0";
//     tr3_td5.appendChild(tr3_td5_span3);
//     var tr3_td6= document.createElement("td");
//     tr3_td6.setAttribute("style","border:none;");
//     var tr3_td6_span4= document.createElement("span");
//     tr3_td6_span4.id="span4"+i;
//     tr3_td6_span4.classList.add("badge");
//     tr3_td6_span4.classList.add("badge-pill");
//     tr3_td6_span4.classList.add("badge-primary");
//     tr3_td6_span4.innerHTML="0,0";
//     tr3_td6.appendChild(tr3_td6_span4);
//     tr3.appendChild(tr3_td1);
//     tr3.appendChild(tr3_td2);
//     tr3.appendChild(tr3_td3);
//     tr3.appendChild(tr3_td4);
//     tr3.appendChild(tr3_td5);
//     tr3.appendChild(tr3_td6);
//     var label3 = document.createElement("label");
//     label3.id="label3"+i
//     label3.innerHTML="Öğle Yemeği";
//     var tr4 = document.createElement("tr");
//     tr4.id="table"+((8*i)+3);
//     var tr4_td1 = document.createElement("td");
//     tr4_td1.setAttribute("style","border:none;");
//     tr4_td1.appendChild(label3);
//     var input3 = document.createElement("TEXTAREA");
//     // input3.setAttribute("type","text");
//     input3.setAttribute("id","inpt3"+i);
//     input3.setAttribute("oninput","dragFood(this.id);");
//     // input3.classList.add("clearable");
//     var tr4_td2 = document.createElement("td");
//     tr4_td2.setAttribute("style","border:none;");
//     tr4_td2.appendChild(input3);
//     var tr4_td3= document.createElement("td");
//     tr4_td3.setAttribute("style","border:none;");
//     var tr4_td3_span1 = document.createElement("span");
//     tr4_td3_span1.id="span1"+i;
//     tr4_td3_span1.classList.add("badge");
//     tr4_td3_span1.classList.add("badge-pill");
//     tr4_td3_span1.classList.add("badge-warning");
//     tr4_td3_span1.innerHTML="0,0";
//     tr4_td3.appendChild(tr4_td3_span1);
//     var tr4_td4= document.createElement("td");
//     tr4_td4.setAttribute("style","border:none;");
//     var tr4_td4_span2 = document.createElement("span");
//     tr4_td4_span2.id="span2"+i;
//     tr4_td4_span2.classList.add("badge");
//     tr4_td4_span2.classList.add("badge-pill");
//     tr4_td4_span2.classList.add("badge-success");
//     tr4_td4_span2.innerHTML="0,0";
//     tr4_td4.appendChild(tr4_td4_span2);
//     var tr4_td5= document.createElement("td");
//     tr4_td5.setAttribute("style","border:none;");
//     var tr4_td5_span3 = document.createElement("span");
//     tr4_td5_span3.id="span3"+i;
//     tr4_td5_span3.classList.add("badge");
//     tr4_td5_span3.classList.add("badge-pill");
//     tr4_td5_span3.classList.add("badge-danger");
//     tr4_td5_span3.innerHTML="0,0";
//     tr4_td5.appendChild(tr4_td5_span3);
//     var tr4_td6= document.createElement("td");
//     tr4_td6.setAttribute("style","border:none;");
//     var tr4_td6_span4= document.createElement("span");
//     tr4_td6_span4.id="span4"+i;
//     tr4_td6_span4.classList.add("badge");
//     tr4_td6_span4.classList.add("badge-pill");
//     tr4_td6_span4.classList.add("badge-primary");
//     tr4_td6_span4.innerHTML="0,0";
//     tr4_td6.appendChild(tr4_td6_span4);
//     tr4.appendChild(tr4_td1);
//     tr4.appendChild(tr4_td2);
//     tr4.appendChild(tr4_td3);
//     tr4.appendChild(tr4_td4);
//     tr4.appendChild(tr4_td5);
//     tr4.appendChild(tr4_td6);
//     var label4 = document.createElement("label");
//     label4.id="label4"+i
//     label4.innerHTML="2. Ara Öğün";
//     var tr5 = document.createElement("tr");
//     tr5.id="table"+((8*i)+4);
//     var tr5_td1 = document.createElement("td");
//     tr5_td1.setAttribute("style","border:none;");
//     tr5_td1.appendChild(label4);
//     var input4 = document.createElement("TEXTAREA");
//     // input4.setAttribute("type","text");
//     input4.setAttribute("id","inpt4"+i);
//     input4.setAttribute("oninput","dragFood(this.id);");
//     // input4.classList.add("clearable");
//     var tr5_td2 = document.createElement("td");
//     tr5_td2.setAttribute("style","border:none;");
//     tr5_td2.appendChild(input4);
//     var tr5_td3= document.createElement("td");
//     tr5_td3.setAttribute("style","border:none;");
//     var tr5_td3_span1 = document.createElement("span");
//     tr5_td3_span1.id="span1"+i;
//     tr5_td3_span1.classList.add("badge");
//     tr5_td3_span1.classList.add("badge-pill");
//     tr5_td3_span1.classList.add("badge-warning");
//     tr5_td3_span1.innerHTML="0,0";
//     tr5_td3.appendChild(tr5_td3_span1);
//     var tr5_td4= document.createElement("td");
//     tr5_td4.setAttribute("style","border:none;");
//     var tr5_td4_span2 = document.createElement("span");
//     tr5_td4_span2.id="span2"+i;
//     tr5_td4_span2.classList.add("badge");
//     tr5_td4_span2.classList.add("badge-pill");
//     tr5_td4_span2.classList.add("badge-success");
//     tr5_td4_span2.innerHTML="0,0";
//     tr5_td4.appendChild(tr5_td4_span2);
//     var tr5_td5= document.createElement("td");
//     tr5_td5.setAttribute("style","border:none;");
//     var tr5_td5_span3 = document.createElement("span");
//     tr5_td5_span3.id="span3"+i;
//     tr5_td5_span3.classList.add("badge");
//     tr5_td5_span3.classList.add("badge-pill");
//     tr5_td5_span3.classList.add("badge-danger");
//     tr5_td5_span3.innerHTML="0,0";
//     tr5_td5.appendChild(tr5_td5_span3);
//     var tr5_td6= document.createElement("td");
//     tr5_td6.setAttribute("style","border:none;");
//     var tr5_td6_span4= document.createElement("span");
//     tr5_td6_span4.id="span4"+i;
//     tr5_td6_span4.classList.add("badge");
//     tr5_td6_span4.classList.add("badge-pill");
//     tr5_td6_span4.classList.add("badge-primary");
//     tr5_td6_span4.innerHTML="0,0";
//     tr5_td6.appendChild(tr5_td6_span4);
//     tr5.appendChild(tr5_td1);
//     tr5.appendChild(tr5_td2);
//     tr5.appendChild(tr5_td3);
//     tr5.appendChild(tr5_td4);
//     tr5.appendChild(tr5_td5);
//     tr5.appendChild(tr5_td6);
//     var label5 = document.createElement("label");
//     label5.id="label5"+i
//     label5.innerHTML="Akşam Yemeği";
//     var tr6 = document.createElement("tr");
//     tr6.id="table"+((8*i)+5);
//     var tr6_td1 = document.createElement("td");
//     tr6_td1.setAttribute("style","border:none;");
//     tr6_td1.appendChild(label5);
//     var input5 = document.createElement("TEXTAREA");
//     // input5.setAttribute("type","text");
//     input5.setAttribute("id","inpt5"+i);
//     input5.setAttribute("oninput","dragFood(this.id);");
//     // input5.classList.add("clearable");
//     var tr6_td2 = document.createElement("td");
//     tr6_td2.setAttribute("style","border:none;");
//     tr6_td2.appendChild(input5);
//     var tr6_td3= document.createElement("td");
//     tr6_td3.setAttribute("style","border:none;");
//     var tr6_td3_span1 = document.createElement("span");
//     tr6_td3_span1.id="span1"+i;
//     tr6_td3_span1.classList.add("badge");
//     tr6_td3_span1.classList.add("badge-pill");
//     tr6_td3_span1.classList.add("badge-warning");
//     tr6_td3_span1.innerHTML="0,0";
//     tr6_td3.appendChild(tr6_td3_span1);
//     var tr6_td4= document.createElement("td");
//     tr6_td4.setAttribute("style","border:none;");
//     var tr6_td4_span2 = document.createElement("span");
//     tr6_td4_span2.id="span2"+i;
//     tr6_td4_span2.classList.add("badge");
//     tr6_td4_span2.classList.add("badge-pill");
//     tr6_td4_span2.classList.add("badge-success");
//     tr6_td4_span2.innerHTML="0,0";
//     tr6_td4.appendChild(tr6_td4_span2);
//     var tr6_td5= document.createElement("td");
//     tr6_td5.setAttribute("style","border:none;");
//     var tr6_td5_span3 = document.createElement("span");
//     tr6_td5_span3.id="span3"+i;
//     tr6_td5_span3.classList.add("badge");
//     tr6_td5_span3.classList.add("badge-pill");
//     tr6_td5_span3.classList.add("badge-danger");
//     tr6_td5_span3.innerHTML="0,0";
//     tr6_td5.appendChild(tr6_td5_span3);
//     var tr6_td6= document.createElement("td");
//     tr6_td6.setAttribute("style","border:none;");
//     var tr6_td6_span4= document.createElement("span");
//     tr6_td6_span4.id="span4"+i;
//     tr6_td6_span4.classList.add("badge");
//     tr6_td6_span4.classList.add("badge-pill");
//     tr6_td6_span4.classList.add("badge-primary");
//     tr6_td6_span4.innerHTML="0,0";
//     tr6_td6.appendChild(tr6_td6_span4);
//     tr6.appendChild(tr6_td1);
//     tr6.appendChild(tr6_td2);
//     tr6.appendChild(tr6_td3);
//     tr6.appendChild(tr6_td4);
//     tr6.appendChild(tr6_td5);
//     tr6.appendChild(tr6_td6);
//     var label6 = document.createElement("label");
//     label6.id="label6"+i
//     label6.innerHTML="3. Ara Öğün";
//     var tr7 = document.createElement("tr");
//     tr7.id="table"+((8*i)+6);
//     var tr7_td1 = document.createElement("td");
//     tr7_td1.setAttribute("style","border:none;");
//     tr7_td1.appendChild(label6);
//     var input6 = document.createElement("TEXTAREA");
//     // input6.setAttribute("type","text");
//     input6.setAttribute("id","inpt6"+i);
//     input6.setAttribute("oninput","dragFood(this.id);");
//     // input6.classList.add("clearable");
//     var tr7_td2 = document.createElement("td");
//     tr7_td2.setAttribute("style","border:none;");
//     tr7_td2.appendChild(input6);
//     var tr7_td3= document.createElement("td");
//     tr7_td3.setAttribute("style","border:none;");
//     var tr7_td3_span1 = document.createElement("span");
//     tr7_td3_span1.id="span1"+i;
//     tr7_td3_span1.classList.add("badge");
//     tr7_td3_span1.classList.add("badge-pill");
//     tr7_td3_span1.classList.add("badge-warning");
//     tr7_td3_span1.innerHTML="0,0";
//     tr7_td3.appendChild(tr7_td3_span1);
//     var tr7_td4= document.createElement("td");
//     tr7_td4.setAttribute("style","border:none;");
//     var tr7_td4_span2 = document.createElement("span");
//     tr7_td4_span2.id="span2"+i;
//     tr7_td4_span2.classList.add("badge");
//     tr7_td4_span2.classList.add("badge-pill");
//     tr7_td4_span2.classList.add("badge-success");
//     tr7_td4_span2.innerHTML="0,0";
//     tr7_td4.appendChild(tr7_td4_span2);
//     var tr7_td5= document.createElement("td");
//     tr7_td5.setAttribute("style","border:none;");
//     var tr7_td5_span3 = document.createElement("span");
//     tr7_td5_span3.id="span3"+i;
//     tr7_td5_span3.classList.add("badge");
//     tr7_td5_span3.classList.add("badge-pill");
//     tr7_td5_span3.classList.add("badge-danger");
//     tr7_td5_span3.innerHTML="0,0";
//     tr7_td5.appendChild(tr7_td5_span3);
//     var tr7_td6= document.createElement("td");
//     tr7_td6.setAttribute("style","border:none;");
//     var tr7_td6_span4= document.createElement("span");
//     tr7_td6_span4.id="span4"+i;
//     tr7_td6_span4.classList.add("badge");
//     tr7_td6_span4.classList.add("badge-pill");
//     tr7_td6_span4.classList.add("badge-primary");
//     tr7_td6_span4.innerHTML="0,0";
//     tr7_td6.appendChild(tr7_td6_span4);
//     tr7.appendChild(tr7_td1);
//     tr7.appendChild(tr7_td2);
//     tr7.appendChild(tr7_td3);
//     tr7.appendChild(tr7_td4);
//     tr7.appendChild(tr7_td5);
//     tr7.appendChild(tr7_td6);
//     var label7 = document.createElement("label");
//     label7.id="label7"+i
//     label7.innerHTML="Alternatif";
//     var tr8 = document.createElement("tr");
//     tr8.id="table"+((8*i)+7);
//     var tr8_td1 = document.createElement("td");
//     tr8_td1.setAttribute("style","border:none;");
//     tr8_td1.appendChild(label7);
//     var input7 = document.createElement("TEXTAREA");
//     // input7.setAttribute("type","text");
//     input7.setAttribute("id","inpt7"+i);
//     input7.setAttribute("oninput","dragFood(this.id);");
//     // input7.classList.add("clearable");
//     var tr8_td2 = document.createElement("td");
//     tr8_td2.setAttribute("style","border:none;");
//     tr8_td2.appendChild(input7);
//     var tr8_td3= document.createElement("td");
//     tr8_td3.setAttribute("style","border:none;");
//     var tr8_td3_span1 = document.createElement("span");
//     tr8_td3_span1.id="span1"+i;
//     tr8_td3_span1.classList.add("badge");
//     tr8_td3_span1.classList.add("badge-pill");
//     tr8_td3_span1.classList.add("badge-warning");
//     tr8_td3_span1.innerHTML="0,0";
//     tr8_td3.appendChild(tr8_td3_span1);
//     var tr8_td4= document.createElement("td");
//     tr8_td4.setAttribute("style","border:none;");
//     var tr8_td4_span2 = document.createElement("span");
//     tr8_td4_span2.id="span2"+i;
//     tr8_td4_span2.classList.add("badge");
//     tr8_td4_span2.classList.add("badge-pill");
//     tr8_td4_span2.classList.add("badge-success");
//     tr8_td4_span2.innerHTML="0,0";
//     tr8_td4.appendChild(tr8_td4_span2);
//     var tr8_td5= document.createElement("td");
//     tr8_td5.setAttribute("style","border:none;");
//     var tr8_td5_span3 = document.createElement("span");
//     tr8_td5_span3.id="span3"+i;
//     tr8_td5_span3.classList.add("badge");
//     tr8_td5_span3.classList.add("badge-pill");
//     tr8_td5_span3.classList.add("badge-danger");
//     tr8_td5_span3.innerHTML="0,0";
//     tr8_td5.appendChild(tr8_td5_span3);
//     var tr8_td6= document.createElement("td");
//     tr8_td6.setAttribute("style","border:none;");
//     var tr8_td6_span4= document.createElement("span");
//     tr8_td6_span4.id="span4"+i;
//     tr8_td6_span4.classList.add("badge");
//     tr8_td6_span4.classList.add("badge-pill");
//     tr8_td6_span4.classList.add("badge-primary");
//     tr8_td6_span4.innerHTML="0,0";
//     tr8_td6.appendChild(tr8_td6_span4);
//     tr8.appendChild(tr8_td1);
//     tr8.appendChild(tr8_td2);
//     tr8.appendChild(tr8_td3);
//     tr8.appendChild(tr8_td4);
//     tr8.appendChild(tr8_td5);
//     tr8.appendChild(tr8_td6);
//     var tr9 =document.createElement("tr");
//     tr9.id="table"+((8*i)+8);
//     var tr9_td1 = document.createElement("td");
//     tr9_td1.setAttribute("style","border:none;");
//     tr9_td1.innerHTML="";
//     var tr9_td2 = document.createElement("td");
//     tr9_td2.setAttribute("style","height:70px;border:none");
//     var b = document.createElement("B");
//     b.innerHTML="  TOPLAM";
//     tr9_td2.appendChild(b);
//     var tr9_td3 = document.createElement("td");
//     tr9_td3.setAttribute("style","border:none;");
//     var tr9_td3_span1 = document.createElement("span");
//     tr9_td3_span1.classList.add("badge");
//     tr9_td3_span1.classList.add("badge-pill");
//     tr9_td3_span1.classList.add("badge-info");
//     tr9_td3_span1.id="span1"+i;
//     tr9_td3_span1.innerHTML="0,0";
//     tr9_td3.appendChild(tr9_td3_span1);
//     var tr9_td4 = document.createElement("td");
//     tr9_td4.setAttribute("style","border:none;");
//     var tr9_td4_span1 = document.createElement("span");
//     tr9_td4_span1.classList.add("badge");
//     tr9_td4_span1.classList.add("badge-pill");
//     tr9_td4_span1.classList.add("badge-info");
//     tr9_td4_span1.id="span2"+i;
//     tr9_td4_span1.innerHTML="0,0";
//     tr9_td4.appendChild(tr9_td4_span1);
//     var tr9_td5 = document.createElement("td");
//     tr9_td5.setAttribute("style","border:none;");
//     var tr9_td5_span1 = document.createElement("span");
//     tr9_td5_span1.classList.add("badge");
//     tr9_td5_span1.classList.add("badge-pill");
//     tr9_td5_span1.classList.add("badge-info");
//     tr9_td5_span1.id="span3"+i;
//     tr9_td5_span1.innerHTML="0,0";
//     tr9_td5.appendChild(tr9_td5_span1);
//     var tr9_td6 = document.createElement("td");
//     tr9_td6.setAttribute("style","border:none;");
//     var tr9_td6_span1 = document.createElement("span");
//     tr9_td6_span1.classList.add("badge");
//     tr9_td6_span1.classList.add("badge-pill");
//     tr9_td6_span1.classList.add("badge-info");
//     tr9_td6_span1.id="span4"+i;
//     tr9_td6_span1.innerHTML="0,0";
//     tr9_td6.appendChild(tr9_td6_span1);
//     tr9.appendChild(tr9_td1);
//     tr9.appendChild(tr9_td2);
//     tr9.appendChild(tr9_td3);
//     tr9.appendChild(tr9_td4);
//     tr9.appendChild(tr9_td5);
//     tr9.appendChild(tr9_td6);
//     var br = document.createElement("br");
//     tableGun.appendChild(tr1);
//     tableGun.appendChild(tr2);
//     tableGun.appendChild(tr3);
//     tableGun.appendChild(tr4);
//     tableGun.appendChild(tr5);
//     tableGun.appendChild(tr6);
//     tableGun.appendChild(tr7);
//     tableGun.appendChild(tr8);
//     tableGun.appendChild(tr9);
//     form.appendChild(tableGun);
//     form.appendChild(br);
//
//
//
//   }
//   tablediv.appendChild(big_div);
//   tablediv.appendChild(form);
//   tableProGun.appendChild(tablediv);
//   var out = document.getElementById("out");
//   var div_V = document.createElement("div");
//   div_V.setAttribute("id","addSend2");
//   div_V.setAttribute("class","row");
//   var div_V_class = document.createElement("div");
//   div_V_class.classList.add("col-md-12");
//   var div_V_class_class = document.createElement("div");
//   div_V_class_class.classList.add("text-right");
//   var div_V_class_class_1 = document.createElement("div");
//   div_V_class_class_1.classList.add("text-right");
//   div_V_class_class_1.classList.add("padd-bot-10");
//   var a = document.createElement("A");
//   a.setAttribute("class","btn btn-outline-primary btn-rounded");
//   a.setAttribute("onclick","saveDataArsiv(this.id);");
//   a.setAttribute("id","diyettakip-sendbutton");
//   a.innerHTML="ARŞİVİME EKLE";
//   var a2 = document.createElement("A");
//   a2.setAttribute("class","btn btn-outline-primary btn-rounded");
//   a2.setAttribute("onclick","saveProgramForAppUser(this.id);");
//   a2.setAttribute("id","diyettakip-savebutton");
//   a2.innerHTML="GÖNDER";
//   div_V_class_class_1.appendChild(a);
//   div_V_class_class_1.appendChild(a2);
//   div_V_class_class.appendChild(div_V_class_class_1);
//   div_V_class.appendChild(div_V_class_class);
//   div_V.appendChild(div_V_class);
//   // out.appendChild(tableProGun);
//   out.appendChild(div_V);
//   // danışan beslenme programı paneline kayıt yapıyoruz...
//   // kaç tane label olduğunu bulduk günlükteki gün sayısını belirlemek için burda x 8in katları oluyor hep oyüzden 8 e bölmeyi düşünmüştüm. amelelik...
//   // <div id="addSend" class="row">
//   //   <div class="col-md-12">
//   //     <div class="text-right">
//   //       <div class="text-right padd-bot-10">
//   //         <pre><a class="btn btn-outline-primary btn-rounded" onclick="saveDataArsiv(this.id);" id="diyettakip-sendbutton">Arşivime Ekle</a>   <a class="btn btn-outline-primary btn-rounded" id="diyettakip-savebutton" onclick="saveProgramForAppUser(this.id);">GÖNDER</a></pre>
//   //       </div>
//   //     </div>
//   //   </div>
//   // </div>


function saveDataArsivSavedProgram(id){
  if(document.getElementById("checkbox2").checked==true){
  var user = firebase.auth().currentUser;
  var user_name = firebase.auth().currentUser.displayName;
  var name = document.getElementById("progName").innerText;
  var date = document.getElementById(name).innerHTML;
  var refGen = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Genel/"+name);
  var title1 = document.getElementById("inpuut11").value;
  var title2 = document.getElementById("inpuut12").value;
  var title3 = document.getElementById("inpuut13").value;
  var title4 = document.getElementById("inpuut14").value;
  var title5 =document.getElementById("inpuut15").value;
  var title6 = document.getElementById("inpuut16").value;
  var title7 = document.getElementById("inpuut17").value;
  var span1 = document.getElementById("span1").innerHTML;
  var span2 = document.getElementById("span2").innerHTML;
  var span3 = document.getElementById("span3").innerHTML;
  var span4 = document.getElementById("span4").innerHTML;
  var span11 = document.getElementById("span11").innerHTML;
  var span12 = document.getElementById("span12").innerHTML;
  var span13 = document.getElementById("span13").innerHTML;
  var span14 = document.getElementById("span14").innerHTML;
  var span21 = document.getElementById("span21").innerHTML;
  var span22 = document.getElementById("span22").innerHTML;
  var span23 = document.getElementById("span23").innerHTML;
  var span24 = document.getElementById("span24").innerHTML;
  var span31 = document.getElementById("span31").innerHTML;
  var span32 = document.getElementById("span32").innerHTML;
  var span33 = document.getElementById("span33").innerHTML;
  var span34 = document.getElementById("span34").innerHTML;
  var span41 = document.getElementById("span41").innerHTML;
  var span42 = document.getElementById("span42").innerHTML;
  var span43 = document.getElementById("span43").innerHTML;
  var span44 = document.getElementById("span44").innerHTML;
  var span51 = document.getElementById("span51").innerHTML;
  var span52 = document.getElementById("span52").innerHTML;
  var span53 = document.getElementById("span53").innerHTML;
  var span54 = document.getElementById("span54").innerHTML;
  var span61 = document.getElementById("span61").innerHTML;
  var span62 = document.getElementById("span62").innerHTML;
  var span63 = document.getElementById("span63").innerHTML;
  var span64 = document.getElementById("span64").innerHTML;
  var span71 = document.getElementById("span71").innerHTML;
  var span72 = document.getElementById("span72").innerHTML;
  var span73 = document.getElementById("span73").innerHTML;
  var span74 = document.getElementById("span74").innerHTML;
  var user_name = firebase.auth().currentUser.displayName;
  refGen.push({
    sabahKahvaltisi:title1,
    sabahKahvaltisiProtein:span1,
    sabahKahvaltisiFat:span2,
    sabahKahvaltisiCarbonhydrate:span3,
    sabahKahvaltisiCalory:span4,
    birinciAraOgun:title2,
    birinciAraOgunProtein:span11,
    birinciAraOgunFat:span12,
    birinciAraOgunCarbonhydrate:span13,
    birinciAraOgunCalory:span14,
    ogleYemegi:title3,
    ogleYemegiProtein:span21,
    ogleYemegiFat:span22,
    ogleYemegiCarbonhydrate:span23,
    ogleYemegiCalory:span24,
    ikinciAraOgun:title4,
    ikinciAraOgunProtein:span31,
    ikinciAraOgunFat:span32,
    ikinciAraOgunCarbonhydrate:span33,
    ikinciAraOgunCalory:span34,
    aksamYemegi:title5,
    aksamYemegiProtein:span41,
    aksamYemegiFat:span42,
    aksamYemegiCarbonhydrate:span43,
    aksamYemegiCalory:span44,
    ucuncuAraOgun:title6,
    ucuncuAraOgunProtein:span51,
    ucuncuAraOgunFat:span52,
    ucuncuAraOgunCarbonhydrate:span53,
    ucuncuAraOgunCalory:span54,
    alternatif:title7,
    alternatifProtein:span61,
    alternatifFat:span62,
    alternatifCarbonhydrate:span63,
    alternatifCalory:span64,
    toplamProtein:span71,
    toplamFat:span72,
    toplamCarbonhydrate:span73,
    toplamCalory:span74,
    date:date,
  });
  alert("Hazırlamış olduğunuz program arşivinize eklenmiştir. Dilerseniz bu programı danışanınıza yollayabilirsiniz. ");
}else if(document.getElementById("checkbox1").checked==true){
  var name = document.getElementById("progName").innerText;
  var user = firebase.auth().currentUser;
  var urlParams = new URLSearchParams(window.location.search);
  var u = urlParams.get('u');
  var updates = {};
  var updatesDate = {};
  var updatesAppDay = {};
  var x = $('#accordionN').find('label').length;
  x=x/8;
  updatesDate['/date'] = document.getElementById(name).innerHTML;
  for(var i=0;i<x;i++){

    var node1 = document.getElementById("tableEe"+i).rows[1].cells[2].innerText;
    var node2 = document.getElementById("tableEe"+i).rows[1].cells[3].innerText;
    var node3 = document.getElementById("tableEe"+i).rows[1].cells[4].innerText;
    var node4 = document.getElementById("tableEe"+i).rows[1].cells[5].innerText;

    var node5 = document.getElementById("tableEe"+i).rows[2].cells[2].innerText;
    var node6 = document.getElementById("tableEe"+i).rows[2].cells[3].innerText;
    var node7 = document.getElementById("tableEe"+i).rows[2].cells[4].innerText;
    var node8 = document.getElementById("tableEe"+i).rows[2].cells[5].innerText;

    var node9 = document.getElementById("tableEe"+i).rows[3].cells[2].innerText;
    var node10 = document.getElementById("tableEe"+i).rows[3].cells[3].innerText;
    var node11 = document.getElementById("tableEe"+i).rows[3].cells[4].innerText;
    var node12 = document.getElementById("tableEe"+i).rows[3].cells[5].innerText;

    var node13 = document.getElementById("tableEe"+i).rows[4].cells[2].innerText;
    var node14 = document.getElementById("tableEe"+i).rows[4].cells[3].innerText;
    var node15 = document.getElementById("tableEe"+i).rows[4].cells[4].innerText;
    var node16 = document.getElementById("tableEe"+i).rows[4].cells[5].innerText;

    var node17 = document.getElementById("tableEe"+i).rows[5].cells[2].innerText;
    var node18 = document.getElementById("tableEe"+i).rows[5].cells[3].innerText;
    var node19 = document.getElementById("tableEe"+i).rows[5].cells[4].innerText;
    var node20 = document.getElementById("tableEe"+i).rows[5].cells[5].innerText;

    var node21 = document.getElementById("tableEe"+i).rows[6].cells[2].innerText;
    var node22 = document.getElementById("tableEe"+i).rows[6].cells[3].innerText;
    var node23 = document.getElementById("tableEe"+i).rows[6].cells[4].innerText;
    var node24 = document.getElementById("tableEe"+i).rows[6].cells[5].innerText;

    var node25 = document.getElementById("tableEe"+i).rows[7].cells[2].innerText;
    var node26 = document.getElementById("tableEe"+i).rows[7].cells[3].innerText;
    var node27 = document.getElementById("tableEe"+i).rows[7].cells[4].innerText;
    var node28 = document.getElementById("tableEe"+i).rows[7].cells[5].innerText;

    var node29 = document.getElementById("tableEe"+i).rows[8].cells[2].innerText;
    var node30 = document.getElementById("tableEe"+i).rows[8].cells[3].innerText;
    var node31 = document.getElementById("tableEe"+i).rows[8].cells[4].innerText;
    var node32 = document.getElementById("tableEe"+i).rows[8].cells[5].innerText;

    updates['/sabahKahvaltisi'] = $('#inpt1'+i).val();
    updates['/sabahKahvaltisiProtein'] = node1;
    updates['/sabahKahvaltisiFat'] = node2;
    updates['/sabahKahvaltisiCarbonhydrate'] = node3;
    updates['/sabahKahvaltisiCalory'] = node4;
    updates['/birinciAraOgun'] = $('#inpt2'+i).val();
    updates['/birinciAraOgunProtein'] = node5;
    updates['/birinciAraOgunFat'] = node6;
    updates['/birinciAraOgunCarbonhydrate'] = node7;
    updates['/birinciAraOgunCalory'] = node8;
    updates['/ogleYemegi'] = $('#inpt3'+i).val();
    updates['/ogleYemegiProtein'] = node9;
    updates['/ogleYemegiFat'] = node10;
    updates['/ogleYemegiCarbonhydrate'] = node11;
    updates['/ogleYemegiCalory'] = node12;
    updates['/ikinciAraOgun'] = document.getElementById("inpt4"+i).value;
    updates['/ikinciAraOgunProtein'] = node13;
    updates['/ikinciAraOgunFat'] = node14;
    updates['/ikinciAraOgunCarbonhydrate'] = node15;
    updates['/ikinciAraOgunCalory'] = node16;
    updates['/aksamYemegi'] = document.getElementById("inpt5"+i).value;
    updates['/aksamYemegiProtein'] = node17;
    updates['/aksamYemegiFat'] = node18;
    updates['/aksamYemegiCarbonhydrate'] = node19;
    updates['/aksamYemegiCalory'] = node20;
    updates['/ucuncuAraOgun'] = document.getElementById("inpt6"+i).value;
    updates['/ucuncuAraOgunProtein'] = node21;
    updates['/ucuncuAraOgunFat'] = node22;
    updates['/ucuncuAraOgunCarbonhydrate'] = node23;
    updates['/ucuncuAraOgunCalory'] = node24;
    updates['/alternatif'] = document.getElementById("inpt7"+i).value;
    updates['/alternatifProtein'] = node25;
    updates['/alternatifFat'] = node26;
    updates['/alternatifCarbonhydrate'] = node27;
    updates['/alternatifCalory'] = node28;
    updates['/toplamProtein'] = node29;
    updates['/toplamFat'] = node30;
    updates['/toplamCarbonhydrate'] = node31;
    updates['/toplamCalory'] = node32;
    var day = i+1+"_gün";
    var ref2 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük/"+name+"/"+day);
    ref2.update(updates);
    var ref3 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük/"+name);
    ref3.update(updatesDate);
  }
  alert("Hazırlamış olduğunuz program arşivinize eklenmiştir. Dilerseniz bu programı danışanınıza yollayabilirsiniz. ");
}
}
// function convertPDF(){
  // if(document.getElementById("checkbox2").checked==true){
  //   var doc = new jsPDF();
  //   var date = $('#newW').find('label')[0].id;
  //   var name1 = document.getElementById("inpt11").value;
  //   var label1 = document.getElementById("label11").innerText;
  //   var name2 = document.getElementById("inpt12").value;
  //   var label2 = document.getElementById("label12").innerText;
  //   var name3 = document.getElementById("inpt13").value;
  //   var label3 = document.getElementById("label13").innerText;
  //   var name4 = document.getElementById("inpt14").value;
  //   var label4 = document.getElementById("label14").innerText;
  //   var name5 = document.getElementById("inpt15").value;
  //   var label5 = document.getElementById("label15").innerText;
  //   var name6 = document.getElementById("inpt16").value;
  //   var label6 = document.getElementById("label16").innerText;
  //   var name7 = document.getElementById("inpt17").value;
  //   var label7 = document.getElementById("label17").innerText;
  //   doc.text(30,20,date+'  tarihleri için ayarlanmis program');
  //   doc.text(20,30,label1+' : '+name1);
  //   doc.text(20,40,label2+': '+name2);
  //   doc.text(20,50,label3+'     : '+name3);
  //   doc.text(20,60,label4+' : '+name4);
  //   doc.text(20,70,label5+'   : '+name5);
  //   doc.text(20,80,label6+'  : '+name6);
  //   doc.text(20,90,label7+': '+name7);
  //   doc.save('Diyetin.pdf');
  // }else if(document.getElementById("checkbox1").checked==true){
  //   var x = $('#accordionN').find('label').length;
  //   x=x/8
  //   console.log(x);
  //   pdfList = [];
  //   for(var i =0;i<x;i++){
  //
  //
  //     var doc = new jsPDF();
  //     // var name="name"+i;
  //     // var label="label"+i;
  //     // console.log(name);
  //     pdfList.push($('#inpt1'+i).val());
  //     pdfList.push(document.getElementById("label1"+i).innerText);
  //     pdfList.push($('#inpt2'+i).val());
  //     pdfList.push(document.getElementById("label2"+i).innerText);
  //     pdfList.push($('#inpt3'+i).val());
  //     pdfList.push(document.getElementById("label3"+i).innerText);
  //     pdfList.push($('#inpt4'+i).val());
  //     pdfList.push(document.getElementById("label4"+i).innerText);
  //     pdfList.push($('#inpt5'+i).val());
  //     pdfList.push(document.getElementById("label5"+i).innerText);
  //     pdfList.push($('#inpt6'+i).val());
  //     pdfList.push(document.getElementById("label6"+i).innerText);
  //     pdfList.push($('#inpt7'+i).val());
  //     pdfList.push(document.getElementById("label7"+i).innerText);
  //   }
  //   console.log(pdfList);
  //   for(var i=0;i<pdfList.length;i=i+2){
  //     doc.text(20,30+(i*5),pdfList[i+1]+' : '+pdfList[i]);
  //   }
  //   doc.save('asd.pdf');
  // }else{    // hazır programı pdf bastırma
  //   var doc = new jsPDF();
  //   var date = $('#newW_2').find('label')[0].id;
  //   var name1 = document.getElementById("inpt11").value;
  //   var label1 = document.getElementById("label11").innerText;
  //   var name2 = document.getElementById("inpt12").value;
  //   var label2 = document.getElementById("label12").innerText;
  //   var name3 = document.getElementById("inpt13").value;
  //   var label3 = document.getElementById("label13").innerText;
  //   var name4 = document.getElementById("inpt14").value;
  //   var label4 = document.getElementById("label14").innerText;
  //   var name5 = document.getElementById("inpt15").value;
  //   var label5 = document.getElementById("label15").innerText;
  //   var name6 = document.getElementById("inpt16").value;
  //   var label6 = document.getElementById("label16").innerText;
  //   var name7 = document.getElementById("inpt17").value;
  //   var label7 = document.getElementById("label17").innerText;
  //   doc.text(30,20,date+'  tarihleri için ayarlanmis program');
  //   doc.text(20,30,label1+' : '+name1);
  //   doc.text(20,40,label2+': '+name2);
  //   doc.text(20,50,label3+'     : '+name3);
  //   doc.text(20,60,label4+' : '+name4);
  //   doc.text(20,70,label5+'   : '+name5);
  //   doc.text(20,80,label6+'  : '+name6);
  //   doc.text(20,90,label7+': '+name7);
  //   doc.save('Diyetin.pdf');
  //
  // }
  // console.log(id);
  // var x = document.getElementById(id).parentElement.parentElement.children[1].innerText;
  // console.log(x);
  // var date_start = x.split(" - ")[0].split("-");
  // var date_end = x.split(" - ")[1].split("-");
  // // console.log(date_start);
  // translate_start_date = [];
  // translate_start_date.push([(new Date(date_start[1] + " " + date_start[2] + " " + date_start[0]))]);
  // // console.log(translate_date);
  // translate_end_date = [];
  // translate_end_date.push([(new Date(date_end[1] + " " + date_end[2] + " " + date_end[0]))]);
  // full_date = [];
  // full_date=translate_start_date[0]+" - "+translate_end_date[0];
  // console.log(full_date);
  // $('#calendar').fullCalendar('removeEvents', x);
  // deleteWrong() olan.!!!!!!!!!!!!!!!!!!!


// yeşil font #98a13b
              <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
              <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
              <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

              <script type="text/javascript">
               jQuery(function($) {
                 $('#list2 tr.document').draggable({
                   cursor: 'move',
                   helper: 'clone',
                   connectToSortable: "#list1",
                 });
                 $('#list1').sortable({
                   revert: true,
                 });
               });
              </script>

              folders
              <ul id='list1'>
                <li class="folderentry">Some
                  <ul>
                    <li class="folderentry">2nd level</li>
                  </ul>
                </li>
                <li>Thing</li>
              </ul>

              table items
              <table id='list2'>
                <tbody id="documents">
                  <tr class="document">
                    <td>row 1</td>
                  </tr>
                  <tr class="document">
                    <td>row 2</td>
                  </tr>
                  <tr class="document">
                    <td>row 3</td>
                  </tr>
                  <tr class="document">
                    <td>row 4</td>
                  </tr>
                </tbody>
              </table>







              var date_title = start.getFullYear()+"-"+startMnth+"-"+start.getDate()+" - "+end.getFullYear()+"-"+endMnth+"-"+end.getDate();

              swal({
                title: "Seçmiş Olduğunuz Tarih Aralığı "+date_title,
                text: "Beslenme Programı İsmini Giriniz:",
                type: "input",
                showCancelButton: true,
                closeOnConfirm: false,
                inputPlaceholder: "Beslenme Programınızın İsmini Buraya Giriniz"
              }, function (inputValue) {
                if (inputValue === false) return false;
                if (inputValue === "") {
                  swal.showInputError("Lütfen Programınıza Bir İsim Veriniz");
                  return false
                }

                $("#diyet-tablo tr").removeClass("selected");
                // $(".fc-axis").hide();
                // $('#accordion div').html('');
                $("#gunGen").show();
                // $("#addSend").show();
                // $("#accordionN").show();
                // $("#diyet_check").show();
                $('#accordion div').show();
                // $("#accordion div:last-child").remove();
                $("#addSend").show();
                $("#addSendGeneral").hide();
                $("#BesList").hide();
                $("#addSendDaily").hide();
                $("#hazırProgram").remove();
                $(".tarih").remove();
                // $("#accordion").children().filter(":not(#accordionN)").remove();
                console.log(titleE);
                alert("Kaydınız tamamlandı");
                var startMnth = start.getMonth()+1;
                var endMnth = end.getMonth()+1;
                // beslenme programı paneline bu girdiyi yazacaz aynı zamanda genel günlük paneli açılacak
                var tableDanBesPro=document.getElementById("dan_bes_pro");
                var tr=document.createElement("tr");
                tr.id="newProgram";
                tr.classList.add("selected");
                var td=document.createElement("td");
                td.setAttribute("id","progName");
                td.setAttribute("onclick","newProgram(this.id);");
                var b = document.createElement("B");
                b.style.fontSize="15px";
                b.innerHTML=titleE;
                td.appendChild(b);
                // var br=document.createElement("br");
                var td22=document.createElement("td");
                var span22 = document.createElement("span");
                span22.id = titleE;
                span22.style.fontSize="10px";
                span22.innerText=start.getFullYear()+"-"+startMnth+"-"+start.getDate()+" - "+end.getFullYear()+"-"+endMnth+"-"+end.getDate();
                td22.appendChild(span22);
                var td19= document.createElement("td");
                var td19_span = document.createElement("span");
                td19_span.id="delete";
                td19_span.classList.add("fa");
                td19_span.classList.add("fa-fw");
                td19_span.classList.add("fa-trash");
                td19_span.style.fontSize="17px";
                td19_span.setAttribute("onclick","deleteWrongProgram(this.id);");
                td19.appendChild(td19_span);
                tr.appendChild(td);
                tr.appendChild(td22);
                tr.appendChild(td19);
                // tr.appendChild(br);
                tableDanBesPro.appendChild(tr);
                var tableProGun = document.getElementById("accordionN");
                var form= document.createElement("form");
                form.setAttribute("id","formGun");
                document.getElementById("programNm").innerHTML=titleE+" <label style='color:black'><b>Beslenme Programı</b></label>";
                var row = end.getDate()-start.getDate();
                for(var i=0;i<=row;i++){
                  var label = document.createElement("label");
                  var day = start.getDate()+i;
                  var month=startMnth;
                  var year = start.getFullYear();
                  label.innerHTML=i+1+". GÜN ("+day+"-"+month+"-"+year+")";
                  label.setAttribute("style","color:orange;font-weight:bold");
                  form.appendChild(label);
                  var tableGun = document.createElement("table");
                  tableGun.id="tableE"+i;
                  var tr1 = document.createElement("tr");
                  var th1 = document.createElement("th");
                  th1.setAttribute("style","color:#2d2e82;font-weight:bold;text-align:center;");
                  th1.innerHTML="Öğünler";
                  tr1.appendChild(th1);
                  var th2 = document.createElement("th");
                  th2.setAttribute("style","color:#2d2e82;font-weight:bold;text-align:center;");
                  th2.innerHTML="Besinler";
                  tr1.appendChild(th2);
                  var th3 = document.createElement("th");
                  th3.setAttribute("style","color:#2d2e82;font-weight:bold;text-align:center;");
                  th3.innerHTML="Protein";
                  tr1.appendChild(th3);
                  var th4 = document.createElement("th");
                  th4.setAttribute("style","color:#2d2e82;font-weight:bold;text-align:center;");
                  th4.innerHTML="Yağ";
                  tr1.appendChild(th4);
                  var th5 = document.createElement("th");
                  th5.setAttribute("style","color:#2d2e82;font-weight:bold;text-align:center;");
                  th5.innerHTML="Karbonhidrat";
                  tr1.appendChild(th5);
                  var th6 = document.createElement("th");
                  th6.setAttribute("style","color:#2d2e82;font-weight:bold;text-align:center;");
                  th6.innerHTML="Kalori";
                  tr1.appendChild(th6);
                  var label1 = document.createElement("label");
                  label1.id="label1"+i;
                  label1.innerHTML="Sabah Kahvaltısı";
                  var tr2 = document.createElement("tr");
                  tr2.id="table"+((8*i)+1);
                  var tr2_td1 = document.createElement("td");
                  tr2_td1.appendChild(label1);
                  tr2_td1.setAttribute("style","border:none;");
                  var input1 = document.createElement("TEXTAREA");
                  // input1.setAttribute("ondrop","drop(event)");
                  // input1.setAttribute("ondragover","allowDrop(event)");
                  // input1.setAttribute("type","text");
                  input1.setAttribute("id","inpt1"+i); // input1.setAttribute("id", i.toString() + "_inpt1");
                  input1.setAttribute("oninput","dragFood(this.id);");
                  // input1.classList.add("clearable");
                  var tr2_td2 = document.createElement("td");
                  tr2_td2.setAttribute("style","border:none;");
                  tr2_td2.appendChild(input1);
                  var tr2_td3= document.createElement("td");
                  tr2_td3.setAttribute("style","width:100px;border:none;");
                  var tr2_td3_span1 = document.createElement("span");
                  tr2_td3_span1.setAttribute("style","text-align:center");
                  tr2_td3_span1.id="span1";
                  tr2_td3_span1.classList.add("badge");
                  tr2_td3_span1.classList.add("badge-pill");
                  tr2_td3_span1.classList.add("badge-warning");
                  tr2_td3_span1.innerHTML="0,0";
                  tr2_td3.appendChild(tr2_td3_span1);
                  var tr2_td4= document.createElement("td");
                  tr2_td4.setAttribute("style","width:100px;border:none;");
                  var tr2_td4_span2 = document.createElement("span");
                  tr2_td4_span2.id="span2";
                  tr2_td4_span2.classList.add("badge");
                  tr2_td4_span2.classList.add("badge-pill");
                  tr2_td4_span2.classList.add("badge-success");
                  tr2_td4_span2.innerHTML="0,0";
                  tr2_td4.appendChild(tr2_td4_span2);
                  var tr2_td5= document.createElement("td");
                  tr2_td5.setAttribute("style","width:120px;border:none;");
                  var tr2_td5_span3 = document.createElement("span");
                  tr2_td5_span3.id="span3";
                  tr2_td5_span3.classList.add("badge");
                  tr2_td5_span3.classList.add("badge-pill");
                  tr2_td5_span3.classList.add("badge-danger");
                  tr2_td5_span3.innerHTML="0,0";
                  tr2_td5.appendChild(tr2_td5_span3);
                  var tr2_td6= document.createElement("td");
                  tr2_td6.setAttribute("style","width:100px;border:none;");
                  var tr2_td6_span4= document.createElement("span");
                  tr2_td6_span4.id="span4";
                  tr2_td6_span4.classList.add("badge");
                  tr2_td6_span4.classList.add("badge-pill");
                  tr2_td6_span4.classList.add("badge-primary");
                  tr2_td6_span4.innerHTML="0,0";
                  tr2_td6.appendChild(tr2_td6_span4);
                  tr2.appendChild(tr2_td1);
                  tr2.appendChild(tr2_td2);
                  tr2.appendChild(tr2_td3);
                  tr2.appendChild(tr2_td4);
                  tr2.appendChild(tr2_td5);
                  tr2.appendChild(tr2_td6);
                  var label2 = document.createElement("label");
                  label2.id="label2"+i
                  label2.innerHTML="1. Ara Öğün";
                  var tr3 = document.createElement("tr");
                  tr3.id="table"+((8*i)+2);
                  var tr3_td1 = document.createElement("td");
                  tr3_td1.setAttribute("style","border:none;");
                  tr3_td1.appendChild(label2);
                  var input2 = document.createElement("TEXTAREA");
                  // input2.setAttribute("type","text");
                  input2.setAttribute("id","inpt2"+i);
                  input2.setAttribute("oninput","dragFood(this.id);");
                  // input2.classList.add("clearable");
                  var tr3_td2 = document.createElement("td");
                  tr3_td2.setAttribute("style","border:none;");
                  tr3_td2.appendChild(input2);
                  var tr3_td3= document.createElement("td");
                  tr3_td3.setAttribute("style","border:none;");
                  var tr3_td3_span1 = document.createElement("span");
                  tr3_td3_span1.id="span1"+i;
                  tr3_td3_span1.classList.add("badge");
                  tr3_td3_span1.classList.add("badge-pill");
                  tr3_td3_span1.classList.add("badge-warning");
                  tr3_td3_span1.innerHTML="0,0";
                  tr3_td3.appendChild(tr3_td3_span1);
                  var tr3_td4= document.createElement("td");
                  tr3_td4.setAttribute("style","border:none;");
                  var tr3_td4_span2 = document.createElement("span");
                  tr3_td4_span2.id="span2"+i;
                  tr3_td4_span2.classList.add("badge");
                  tr3_td4_span2.classList.add("badge-pill");
                  tr3_td4_span2.classList.add("badge-success");
                  tr3_td4_span2.innerHTML="0,0";
                  tr3_td4.appendChild(tr3_td4_span2);
                  var tr3_td5= document.createElement("td");
                  tr3_td5.setAttribute("style","border:none;");
                  var tr3_td5_span3 = document.createElement("span");
                  tr3_td5_span3.id="span3"+i;
                  tr3_td5_span3.classList.add("badge");
                  tr3_td5_span3.classList.add("badge-pill");
                  tr3_td5_span3.classList.add("badge-danger");
                  tr3_td5_span3.innerHTML="0,0";
                  tr3_td5.appendChild(tr3_td5_span3);
                  var tr3_td6= document.createElement("td");
                  tr3_td6.setAttribute("style","border:none;");
                  var tr3_td6_span4= document.createElement("span");
                  tr3_td6_span4.id="span4"+i;
                  tr3_td6_span4.classList.add("badge");
                  tr3_td6_span4.classList.add("badge-pill");
                  tr3_td6_span4.classList.add("badge-primary");
                  tr3_td6_span4.innerHTML="0,0";
                  tr3_td6.appendChild(tr3_td6_span4);
                  tr3.appendChild(tr3_td1);
                  tr3.appendChild(tr3_td2);
                  tr3.appendChild(tr3_td3);
                  tr3.appendChild(tr3_td4);
                  tr3.appendChild(tr3_td5);
                  tr3.appendChild(tr3_td6);
                  var label3 = document.createElement("label");
                  label3.id="label3"+i
                  label3.innerHTML="Öğle Yemeği";
                  var tr4 = document.createElement("tr");
                  tr4.id="table"+((8*i)+3);
                  var tr4_td1 = document.createElement("td");
                  tr4_td1.setAttribute("style","border:none;");
                  tr4_td1.appendChild(label3);
                  var input3 = document.createElement("TEXTAREA");
                  // input3.setAttribute("type","text");
                  input3.setAttribute("id","inpt3"+i);
                  input3.setAttribute("oninput","dragFood(this.id);");
                  // input3.classList.add("clearable");
                  var tr4_td2 = document.createElement("td");
                  tr4_td2.setAttribute("style","border:none;");
                  tr4_td2.appendChild(input3);
                  var tr4_td3= document.createElement("td");
                  tr4_td3.setAttribute("style","border:none;");
                  var tr4_td3_span1 = document.createElement("span");
                  tr4_td3_span1.id="span1"+i;
                  tr4_td3_span1.classList.add("badge");
                  tr4_td3_span1.classList.add("badge-pill");
                  tr4_td3_span1.classList.add("badge-warning");
                  tr4_td3_span1.innerHTML="0,0";
                  tr4_td3.appendChild(tr4_td3_span1);
                  var tr4_td4= document.createElement("td");
                  tr4_td4.setAttribute("style","border:none;");
                  var tr4_td4_span2 = document.createElement("span");
                  tr4_td4_span2.id="span2"+i;
                  tr4_td4_span2.classList.add("badge");
                  tr4_td4_span2.classList.add("badge-pill");
                  tr4_td4_span2.classList.add("badge-success");
                  tr4_td4_span2.innerHTML="0,0";
                  tr4_td4.appendChild(tr4_td4_span2);
                  var tr4_td5= document.createElement("td");
                  tr4_td5.setAttribute("style","border:none;");
                  var tr4_td5_span3 = document.createElement("span");
                  tr4_td5_span3.id="span3"+i;
                  tr4_td5_span3.classList.add("badge");
                  tr4_td5_span3.classList.add("badge-pill");
                  tr4_td5_span3.classList.add("badge-danger");
                  tr4_td5_span3.innerHTML="0,0";
                  tr4_td5.appendChild(tr4_td5_span3);
                  var tr4_td6= document.createElement("td");
                  tr4_td6.setAttribute("style","border:none;");
                  var tr4_td6_span4= document.createElement("span");
                  tr4_td6_span4.id="span4"+i;
                  tr4_td6_span4.classList.add("badge");
                  tr4_td6_span4.classList.add("badge-pill");
                  tr4_td6_span4.classList.add("badge-primary");
                  tr4_td6_span4.innerHTML="0,0";
                  tr4_td6.appendChild(tr4_td6_span4);
                  tr4.appendChild(tr4_td1);
                  tr4.appendChild(tr4_td2);
                  tr4.appendChild(tr4_td3);
                  tr4.appendChild(tr4_td4);
                  tr4.appendChild(tr4_td5);
                  tr4.appendChild(tr4_td6);
                  var label4 = document.createElement("label");
                  label4.id="label4"+i
                  label4.innerHTML="2. Ara Öğün";
                  var tr5 = document.createElement("tr");
                  tr5.id="table"+((8*i)+4);
                  var tr5_td1 = document.createElement("td");
                  tr5_td1.setAttribute("style","border:none;");
                  tr5_td1.appendChild(label4);
                  var input4 = document.createElement("TEXTAREA");
                  // input4.setAttribute("type","text");
                  input4.setAttribute("id","inpt4"+i);
                  input4.setAttribute("oninput","dragFood(this.id);");
                  // input4.classList.add("clearable");
                  var tr5_td2 = document.createElement("td");
                  tr5_td2.setAttribute("style","border:none;");
                  tr5_td2.appendChild(input4);
                  var tr5_td3= document.createElement("td");
                  tr5_td3.setAttribute("style","border:none;");
                  var tr5_td3_span1 = document.createElement("span");
                  tr5_td3_span1.id="span1"+i;
                  tr5_td3_span1.classList.add("badge");
                  tr5_td3_span1.classList.add("badge-pill");
                  tr5_td3_span1.classList.add("badge-warning");
                  tr5_td3_span1.innerHTML="0,0";
                  tr5_td3.appendChild(tr5_td3_span1);
                  var tr5_td4= document.createElement("td");
                  tr5_td4.setAttribute("style","border:none;");
                  var tr5_td4_span2 = document.createElement("span");
                  tr5_td4_span2.id="span2"+i;
                  tr5_td4_span2.classList.add("badge");
                  tr5_td4_span2.classList.add("badge-pill");
                  tr5_td4_span2.classList.add("badge-success");
                  tr5_td4_span2.innerHTML="0,0";
                  tr5_td4.appendChild(tr5_td4_span2);
                  var tr5_td5= document.createElement("td");
                  tr5_td5.setAttribute("style","border:none;");
                  var tr5_td5_span3 = document.createElement("span");
                  tr5_td5_span3.id="span3"+i;
                  tr5_td5_span3.classList.add("badge");
                  tr5_td5_span3.classList.add("badge-pill");
                  tr5_td5_span3.classList.add("badge-danger");
                  tr5_td5_span3.innerHTML="0,0";
                  tr5_td5.appendChild(tr5_td5_span3);
                  var tr5_td6= document.createElement("td");
                  tr5_td6.setAttribute("style","border:none;");
                  var tr5_td6_span4= document.createElement("span");
                  tr5_td6_span4.id="span4"+i;
                  tr5_td6_span4.classList.add("badge");
                  tr5_td6_span4.classList.add("badge-pill");
                  tr5_td6_span4.classList.add("badge-primary");
                  tr5_td6_span4.innerHTML="0,0";
                  tr5_td6.appendChild(tr5_td6_span4);
                  tr5.appendChild(tr5_td1);
                  tr5.appendChild(tr5_td2);
                  tr5.appendChild(tr5_td3);
                  tr5.appendChild(tr5_td4);
                  tr5.appendChild(tr5_td5);
                  tr5.appendChild(tr5_td6);
                  var label5 = document.createElement("label");
                  label5.id="label5"+i
                  label5.innerHTML="Akşam Yemeği";
                  var tr6 = document.createElement("tr");
                  tr6.id="table"+((8*i)+5);
                  var tr6_td1 = document.createElement("td");
                  tr6_td1.setAttribute("style","border:none;");
                  tr6_td1.appendChild(label5);
                  var input5 = document.createElement("TEXTAREA");
                  // input5.setAttribute("type","text");
                  input5.setAttribute("id","inpt5"+i);
                  input5.setAttribute("oninput","dragFood(this.id);");
                  // input5.classList.add("clearable");
                  var tr6_td2 = document.createElement("td");
                  tr6_td2.setAttribute("style","border:none;");
                  tr6_td2.appendChild(input5);
                  var tr6_td3= document.createElement("td");
                  tr6_td3.setAttribute("style","border:none;");
                  var tr6_td3_span1 = document.createElement("span");
                  tr6_td3_span1.id="span1"+i;
                  tr6_td3_span1.classList.add("badge");
                  tr6_td3_span1.classList.add("badge-pill");
                  tr6_td3_span1.classList.add("badge-warning");
                  tr6_td3_span1.innerHTML="0,0";
                  tr6_td3.appendChild(tr6_td3_span1);
                  var tr6_td4= document.createElement("td");
                  tr6_td4.setAttribute("style","border:none;");
                  var tr6_td4_span2 = document.createElement("span");
                  tr6_td4_span2.id="span2"+i;
                  tr6_td4_span2.classList.add("badge");
                  tr6_td4_span2.classList.add("badge-pill");
                  tr6_td4_span2.classList.add("badge-success");
                  tr6_td4_span2.innerHTML="0,0";
                  tr6_td4.appendChild(tr6_td4_span2);
                  var tr6_td5= document.createElement("td");
                  tr6_td5.setAttribute("style","border:none;");
                  var tr6_td5_span3 = document.createElement("span");
                  tr6_td5_span3.id="span3"+i;
                  tr6_td5_span3.classList.add("badge");
                  tr6_td5_span3.classList.add("badge-pill");
                  tr6_td5_span3.classList.add("badge-danger");
                  tr6_td5_span3.innerHTML="0,0";
                  tr6_td5.appendChild(tr6_td5_span3);
                  var tr6_td6= document.createElement("td");
                  tr6_td6.setAttribute("style","border:none;");
                  var tr6_td6_span4= document.createElement("span");
                  tr6_td6_span4.id="span4"+i;
                  tr6_td6_span4.classList.add("badge");
                  tr6_td6_span4.classList.add("badge-pill");
                  tr6_td6_span4.classList.add("badge-primary");
                  tr6_td6_span4.innerHTML="0,0";
                  tr6_td6.appendChild(tr6_td6_span4);
                  tr6.appendChild(tr6_td1);
                  tr6.appendChild(tr6_td2);
                  tr6.appendChild(tr6_td3);
                  tr6.appendChild(tr6_td4);
                  tr6.appendChild(tr6_td5);
                  tr6.appendChild(tr6_td6);
                  var label6 = document.createElement("label");
                  label6.id="label6"+i
                  label6.innerHTML="3. Ara Öğün";
                  var tr7 = document.createElement("tr");
                  tr7.id="table"+((8*i)+6);
                  var tr7_td1 = document.createElement("td");
                  tr7_td1.setAttribute("style","border:none;");
                  tr7_td1.appendChild(label6);
                  var input6 = document.createElement("TEXTAREA");
                  // input6.setAttribute("type","text");
                  input6.setAttribute("id","inpt6"+i);
                  input6.setAttribute("oninput","dragFood(this.id);");
                  // input6.classList.add("clearable");
                  var tr7_td2 = document.createElement("td");
                  tr7_td2.setAttribute("style","border:none;");
                  tr7_td2.appendChild(input6);
                  var tr7_td3= document.createElement("td");
                  tr7_td3.setAttribute("style","border:none;");
                  var tr7_td3_span1 = document.createElement("span");
                  tr7_td3_span1.id="span1"+i;
                  tr7_td3_span1.classList.add("badge");
                  tr7_td3_span1.classList.add("badge-pill");
                  tr7_td3_span1.classList.add("badge-warning");
                  tr7_td3_span1.innerHTML="0,0";
                  tr7_td3.appendChild(tr7_td3_span1);
                  var tr7_td4= document.createElement("td");
                  tr7_td4.setAttribute("style","border:none;");
                  var tr7_td4_span2 = document.createElement("span");
                  tr7_td4_span2.id="span2"+i;
                  tr7_td4_span2.classList.add("badge");
                  tr7_td4_span2.classList.add("badge-pill");
                  tr7_td4_span2.classList.add("badge-success");
                  tr7_td4_span2.innerHTML="0,0";
                  tr7_td4.appendChild(tr7_td4_span2);
                  var tr7_td5= document.createElement("td");
                  tr7_td5.setAttribute("style","border:none;");
                  var tr7_td5_span3 = document.createElement("span");
                  tr7_td5_span3.id="span3"+i;
                  tr7_td5_span3.classList.add("badge");
                  tr7_td5_span3.classList.add("badge-pill");
                  tr7_td5_span3.classList.add("badge-danger");
                  tr7_td5_span3.innerHTML="0,0";
                  tr7_td5.appendChild(tr7_td5_span3);
                  var tr7_td6= document.createElement("td");
                  tr7_td6.setAttribute("style","border:none;");
                  var tr7_td6_span4= document.createElement("span");
                  tr7_td6_span4.id="span4"+i;
                  tr7_td6_span4.classList.add("badge");
                  tr7_td6_span4.classList.add("badge-pill");
                  tr7_td6_span4.classList.add("badge-primary");
                  tr7_td6_span4.innerHTML="0,0";
                  tr7_td6.appendChild(tr7_td6_span4);
                  tr7.appendChild(tr7_td1);
                  tr7.appendChild(tr7_td2);
                  tr7.appendChild(tr7_td3);
                  tr7.appendChild(tr7_td4);
                  tr7.appendChild(tr7_td5);
                  tr7.appendChild(tr7_td6);
                  var label7 = document.createElement("label");
                  label7.id="label7"+i
                  label7.innerHTML="Alternatif";
                  var tr8 = document.createElement("tr");
                  tr8.id="table"+((8*i)+7);
                  var tr8_td1 = document.createElement("td");
                  tr8_td1.setAttribute("style","border:none;");
                  tr8_td1.appendChild(label7);
                  var input7 = document.createElement("TEXTAREA");
                  // input7.setAttribute("type","text");
                  input7.setAttribute("id","inpt7"+i);
                  input7.setAttribute("oninput","dragFood(this.id);");
                  // input7.classList.add("clearable");
                  var tr8_td2 = document.createElement("td");
                  tr8_td2.setAttribute("style","border:none;");
                  tr8_td2.appendChild(input7);
                  var tr8_td3= document.createElement("td");
                  tr8_td3.setAttribute("style","border:none;");
                  var tr8_td3_span1 = document.createElement("span");
                  tr8_td3_span1.id="span1"+i;
                  tr8_td3_span1.classList.add("badge");
                  tr8_td3_span1.classList.add("badge-pill");
                  tr8_td3_span1.classList.add("badge-warning");
                  tr8_td3_span1.innerHTML="0,0";
                  tr8_td3.appendChild(tr8_td3_span1);
                  var tr8_td4= document.createElement("td");
                  tr8_td4.setAttribute("style","border:none;");
                  var tr8_td4_span2 = document.createElement("span");
                  tr8_td4_span2.id="span2"+i;
                  tr8_td4_span2.classList.add("badge");
                  tr8_td4_span2.classList.add("badge-pill");
                  tr8_td4_span2.classList.add("badge-success");
                  tr8_td4_span2.innerHTML="0,0";
                  tr8_td4.appendChild(tr8_td4_span2);
                  var tr8_td5= document.createElement("td");
                  tr8_td5.setAttribute("style","border:none;");
                  var tr8_td5_span3 = document.createElement("span");
                  tr8_td5_span3.id="span3"+i;
                  tr8_td5_span3.classList.add("badge");
                  tr8_td5_span3.classList.add("badge-pill");
                  tr8_td5_span3.classList.add("badge-danger");
                  tr8_td5_span3.innerHTML="0,0";
                  tr8_td5.appendChild(tr8_td5_span3);
                  var tr8_td6= document.createElement("td");
                  tr8_td6.setAttribute("style","border:none;");
                  var tr8_td6_span4= document.createElement("span");
                  tr8_td6_span4.id="span4"+i;
                  tr8_td6_span4.classList.add("badge");
                  tr8_td6_span4.classList.add("badge-pill");
                  tr8_td6_span4.classList.add("badge-primary");
                  tr8_td6_span4.innerHTML="0,0";
                  tr8_td6.appendChild(tr8_td6_span4);
                  tr8.appendChild(tr8_td1);
                  tr8.appendChild(tr8_td2);
                  tr8.appendChild(tr8_td3);
                  tr8.appendChild(tr8_td4);
                  tr8.appendChild(tr8_td5);
                  tr8.appendChild(tr8_td6);
                  var tr9 =document.createElement("tr");
                  tr9.id="table"+((8*i)+8);
                  var tr9_td1 = document.createElement("td");
                  tr9_td1.setAttribute("style","border:none;");
                  tr9_td1.innerHTML="";
                  var tr9_td2 = document.createElement("td");
                  tr9_td2.setAttribute("style","height:70px;border:none");
                  var b = document.createElement("B");
                  b.innerHTML="  TOPLAM";
                  tr9_td2.appendChild(b);
                  var tr9_td3 = document.createElement("td");
                  tr9_td3.setAttribute("style","border:none;");
                  var tr9_td3_span1 = document.createElement("span");
                  tr9_td3_span1.classList.add("badge");
                  tr9_td3_span1.classList.add("badge-pill");
                  tr9_td3_span1.classList.add("badge-info");
                  tr9_td3_span1.id="span1"+i;
                  tr9_td3_span1.innerHTML="0,0";
                  tr9_td3.appendChild(tr9_td3_span1);
                  var tr9_td4 = document.createElement("td");
                  tr9_td4.setAttribute("style","border:none;");
                  var tr9_td4_span1 = document.createElement("span");
                  tr9_td4_span1.classList.add("badge");
                  tr9_td4_span1.classList.add("badge-pill");
                  tr9_td4_span1.classList.add("badge-info");
                  tr9_td4_span1.id="span2"+i;
                  tr9_td4_span1.innerHTML="0,0";
                  tr9_td4.appendChild(tr9_td4_span1);
                  var tr9_td5 = document.createElement("td");
                  tr9_td5.setAttribute("style","border:none;");
                  var tr9_td5_span1 = document.createElement("span");
                  tr9_td5_span1.classList.add("badge");
                  tr9_td5_span1.classList.add("badge-pill");
                  tr9_td5_span1.classList.add("badge-info");
                  tr9_td5_span1.id="span3"+i;
                  tr9_td5_span1.innerHTML="0,0";
                  tr9_td5.appendChild(tr9_td5_span1);
                  var tr9_td6 = document.createElement("td");
                  tr9_td6.setAttribute("style","border:none;");
                  var tr9_td6_span1 = document.createElement("span");
                  tr9_td6_span1.classList.add("badge");
                  tr9_td6_span1.classList.add("badge-pill");
                  tr9_td6_span1.classList.add("badge-info");
                  tr9_td6_span1.id="span4"+i;
                  tr9_td6_span1.innerHTML="0,0";
                  tr9_td6.appendChild(tr9_td6_span1);
                  tr9.appendChild(tr9_td1);
                  tr9.appendChild(tr9_td2);
                  tr9.appendChild(tr9_td3);
                  tr9.appendChild(tr9_td4);
                  tr9.appendChild(tr9_td5);
                  tr9.appendChild(tr9_td6);
                  var br = document.createElement("br");
                  tableGun.appendChild(tr1);
                  tableGun.appendChild(tr2);
                  tableGun.appendChild(tr3);
                  tableGun.appendChild(tr4);
                  tableGun.appendChild(tr5);
                  tableGun.appendChild(tr6);
                  tableGun.appendChild(tr7);
                  tableGun.appendChild(tr8);
                  tableGun.appendChild(tr9);
                  form.appendChild(tableGun);
                  form.appendChild(br);



                }
                tableProGun.appendChild(form);
              }

                swal("Nice!", "You wrote: " + inputValue, "success");
              });






              if(localStroage.getItem("Acem Pilavı")!=undefined){
                console.log("localde var");
              }else{
                console.log("localde yok");
              }




              var refSearchFoodList = firebase.database().ref("veriler");
              refSearchFoodList.once("value").then(function(snapshot){
                food_list = [];
                snapshot.forEach(function(childSnapshot){
                  var foodInfos = childSnapshot.key.toString();

                  var foodName = firebase.database().ref("veriler/"+foodInfos+"/food_name").once("value")
                  .then(function(snapshot2){
                    return snapshot2.val();
                  });
                  var unitFood = firebase.database().ref("veriler/"+foodInfos+"/unit").once("value")
                  .then(function(snapshot3){
                    return snapshot3.val();
                  });

                  food_list.push(foodName);
                  food_list.push(unitFood);
                });
                Promise.all(food_list).then(function(food_list)
                {
                  window.localStorage.clear();
                    for (var a=0; a<food_list.length; a=a+2)
                    {
                      // console.log(food_list[a]+"  "+food_list[a+1]);
                      if(typeof(Storage) !== "undefined") {
                        // localStorage can be used
                        localStorage.setItem(food_list[a],food_list[a+1]);
                      } else {
                        // can't be used
                        console.log("asfas");
                      }
                    }
                    console.log( "Benim adım " + localStorage.getItem("Acem Pilavı"));
                    console.log(localStroage.getItem());
                });

              });



              var input1 = document.createElement("table");
              input1.setAttribute("style","width:100%");
              var input1_tr = document.createElement("tr");
              var input1_td = document.createElement("td");
              input1_td.setAttribute("style","padding:15px");
              input1_td.setAttribute("ondrop","drop(event)");
              input1_td.setAttribute("ondragover","allowDrop(event)");
              var input1_tr2 = document.createElement("tr");
              var input1_td2 = document.createElement("td");
              input1_td2.setAttribute("style","padding:15px");
              var input1_tr3 = document.createElement("tr");
              var input1_td3 = document.createElement("td");
              input1_td3.setAttribute("style","padding:15px");
              var input1_tr4 = document.createElement("tr");
              var input1_td4 = document.createElement("td");
              input1_td4.setAttribute("style","padding:15px");
              var input1_tr5 = document.createElement("tr");
              var input1_td5 = document.createElement("td");
              input1_td5.setAttribute("style","padding:15px");
              input1_tr.appendChild(input1_td);
              input1_tr2.appendChild(input1_td2);
              input1_tr3.appendChild(input1_td3);
              input1_tr4.appendChild(input1_td4);
              input1_tr5.appendChild(input1_td5);
              input1.appendChild(input1_tr);
              input1.appendChild(input1_tr2);
              input1.appendChild(input1_tr3);
              input1.appendChild(input1_tr4);
              input1.appendChild(input1_tr5);


                                  <a href="#" class="bg-success br-success btn-circle-40" data-toggle="tooltip" title="" data-original-title="Delete" style="position:absolute;right:10px">
    									<i class="light-cl fa fa-trash-o" aria-hidden="true"></i>
    								</a>
















                    Promise.all(del_list).then(function(del_list){
                       // parseFloat(del_list[0].replace(",","."));
                      console.log(del_list[0]);
                      console.log(del_list[1]);
                      console.log(del_list[2]);
                      console.log(del_list[3]);
                      var protein_span = document.getElementById(id).parentElement.parentElement.children[2].innerText;
                      // var deger1 = document.getElementById(parent).cells[2].children[0].innerHTML;
                      // console.log(deger1);
                      var sonDeger = parseFloat(protein_span.replace(",","."))-parseFloat(del_list[0].replace(",","."));;
                      document.getElementById(ele).parentElement.parentElement.children[2].children[0].innerHTML=parseFloat(sonDeger.toFixed(2));
                      var carbonhydrate_span = document.getElementById(id).parentElement.parentElement.children[3].innerText;
                      // var deger1 = document.getElementById(parent).cells[2].children[0].innerHTML;
                      // console.log(deger1);
                      var sonDeger2 = parseFloat(carbonhydrate_span.replace(",","."))-parseFloat(del_list[1].replace(",","."));;
                      document.getElementById(ele).parentElement.parentElement.children[3].children[0].innerHTML=parseFloat(sonDeger2.toFixed(2));
                      var fat_span = document.getElementById(id).parentElement.parentElement.children[4].innerText;
                      // var deger1 = document.getElementById(parent).cells[2].children[0].innerHTML;
                      // console.log(deger1);
                      var sonDeger3 = parseFloat(fat_span.replace(",","."))-parseFloat(del_list[2].replace(",","."));;
                      document.getElementById(ele).parentElement.parentElement.children[4].children[0].innerHTML=parseFloat(sonDeger3.toFixed(2));
                      var calory_span = document.getElementById(id).parentElement.parentElement.children[5].innerText;
                      // var deger1 = document.getElementById(parent).cells[2].children[0].innerHTML;
                      // console.log(deger1);
                      var sonDeger4 = parseFloat(calory_span.replace(",","."))-parseFloat(del_list[3].replace(",","."));;
                      document.getElementById(ele).parentElement.parentElement.children[5].children[0].innerHTML=parseFloat(sonDeger4.toFixed(2));
                    });





                    if(small_name.toString().trim() == splitName[0].toString().trim() && unit_name.toString().trim() == splitName[1].toString().trim()){
                      console.log("asfas");
                      // console.log(small_name);
                      var delete_food_protein = firebase.database().ref("veriler/"+child_name+"/protein").once("value")
                      .then(function(snapshot2){
                        return snapshot2.val();
                      });
                      var delete_food_carbonhydrate = firebase.database().ref("veriler/"+child_name+"/carbonhydrate").once("value")
                      .then(function(snapshot3){
                        return snapshot3.val();
                      });
                      var delete_food_fat = firebase.database().ref("veriler/"+child_name+"/fat").once("value")
                      .then(function(snapshot4){
                        return snapshot4.val();
                      });
                      var delete_food_calory = firebase.database().ref("veriler/"+child_name+"/calory").once("value")
                      .then(function(snapshot5){
                        return snapshot5.val();
                      });
                      del_list.push(delete_food_protein);
                      del_list.push(delete_food_fat);
                      del_list.push(delete_food_carbonhydrate);
                      del_list.push(delete_food_calory);

                    }
                    else{
                      // console.log("hata");
                    }












                    {
                        var tableProGen = document.getElementById("accordion");
                        var tableDiv = document.createElement("div");
                        tableDiv.id="hazırProgram";
                        var formGen = document.createElement("form");
                        var kalın = document.createElement("b");
                        var br90 = document.createElement("br");
                        var labelTitle = document.createElement("label");
                        labelTitle.classList.add("titleBaslık");
                        labelTitle.id=proName;
                        labelTitle.innerHTML=proName+" İsimli Program";
                        var labelGen = document.createElement("label");
                        labelGen.classList.add("tarih");
                        labelGen.id=program_infos[a+12];
                        labelGen.innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspGENEL PROGRAM";
                        labelGen.setAttribute("style","color:red;font-weight:bold");
                        var br11= document.createElement("br");
                        var tableGen = document.createElement("table");
                        tableGen.id="table";
                        var tr = document.createElement("tr");
                        var th1 = document.createElement("th");
                        th1.setAttribute("style","color:#2d2e82;font-weight:bold;text-align:center;");
                        th1.innerHTML="Öğünler";
                        var th2 = document.createElement("th");
                        th2.setAttribute("style","color:#2d2e82;font-weight:bold;text-align:center;");
                        th2.innerHTML="Besinler";
                        var th3 = document.createElement("th");
                        th3.setAttribute("style","color:#2d2e82;font-weight:bold;text-align:center;");
                        th3.innerHTML="Protein";
                        var th4 = document.createElement("th");
                        th4.setAttribute("style","color:#2d2e82;font-weight:bold;text-align:center;");
                        th4.innerHTML="Yağ";
                        var th5 = document.createElement("th");
                        th5.setAttribute("style","color:#2d2e82;font-weight:bold;text-align:center;");
                        th5.innerHTML="Karbonhidrat";
                        var th6 = document.createElement("th");
                        th6.setAttribute("style","color:#2d2e82;font-weight:bold;text-align:center;");
                        th6.innerHTML="Kalori";
                        var label11 = document.createElement("label");
                        var i_1 = document.createElement("i");
                        i_1.id="spn11";
                        i_1.classList.add("fa");
                        i_1.classList.add("fa-fw");
                        i_1.classList.add("fa-plus");
                        i_1.setAttribute("onclick","newBox(this.id);");
                        label11.id="label11";
                        label11.innerHTML="Sabah kahvaltısı";
                        var tr2 = document.createElement("tr");
                        tr2.id="table100";
                        var tr2_td1= document.createElement("td");
                        tr2_td1.setAttribute("style","border:none;");
                        tr2_td1.appendChild(label11);
                        tr2_td1.appendChild(i_1);
                        var tr2_td2=document.createElement("td");
                        tr2_td2.setAttribute("style","border:none;");
                        var line = sabah_foods.length;
                        for(var i=1;i<line;i++){
                          var newTextBoxInput = document.createElement("INPUT");
                               newTextBoxInput.setAttribute("id","inptt1"+i);
                               newTextBoxInput.value=sabah_foods[i];
                               newTextBoxInput.setAttribute("oninput","dragFood(this.id);");
                               newTextBoxInput.setAttribute("type","text");
                          var newSpan = document.createElement("span");
                               newSpan.setAttribute("id", "inptt1" + i);
                               newSpan.setAttribute("onclick","clearText(this.id);");
                               newSpan.classList.add("fa");
                               newSpan.classList.add("fa-fw");
                               newSpan.classList.add("fa-trash");
                            tr2_td2.appendChild(newTextBoxInput);
                            tr2_td2.appendChild(newSpan);
                          // td.appendChild(newTextBoxInput);
                          // td.appendChild(newSpan);
                        }
                        // var input11 = document.createElement("INPUT");
                        // input11.setAttribute("type","text");
                        // input11.setAttribute("id","inpuut11");
                        // input11.setAttribute("oninput","dragFood(this.id);");
                        // input11.value=program_infos[a+26];
                        // input11.classList.add("clearable");
                        // tr2_td2.appendChild(input11);
                        var tr2_td3= document.createElement("td");
                        tr2_td3.setAttribute("style","width:100px;border:none");
                        var tr2_span1 = document.createElement("span");
                        tr2_span1.id="span1";
                        tr2_span1.classList.add("badge");
                        tr2_span1.classList.add("badge-pill");
                        tr2_span1.classList.add("badge-warning");
                        tr2_span1.innerHTML=program_infos[a+23];
                        tr2_td3.appendChild(tr2_span1);
                        var tr2_td4= document.createElement("td");
                        tr2_td4.setAttribute("style","width:100px;border:none");
                        var tr2_span2 = document.createElement("span");
                        tr2_span2.id="span2";
                        tr2_span2.classList.add("badge");
                        tr2_span2.classList.add("badge-pill");
                        tr2_span2.classList.add("badge-success");
                        tr2_span2.innerHTML=program_infos[a+24];
                        tr2_td4.appendChild(tr2_span2);
                        var tr2_td5= document.createElement("td");
                        tr2_td5.setAttribute("style","width:120px;border:none");
                        var tr2_span3 = document.createElement("span");
                        tr2_span3.id="span3";
                        tr2_span3.classList.add("badge");
                        tr2_span3.classList.add("badge-pill");
                        tr2_span3.classList.add("badge-danger");
                        tr2_span3.innerHTML=program_infos[a+22];
                        tr2_td5.appendChild(tr2_span3);
                        var tr2_td6= document.createElement("td");
                        tr2_td6.setAttribute("style","width:100px;border:none");
                        var tr2_span4= document.createElement("span");
                        tr2_span4.id="span4";
                        tr2_span4.classList.add("badge");
                        tr2_span4.classList.add("badge-pill");
                        tr2_span4.classList.add("badge-primary");
                        tr2_span4.innerHTML=program_infos[a+21];
                        tr2_td6.appendChild(tr2_span4);
                        var br12= document.createElement("br");
                        var label12 = document.createElement("label");
                        var i_2 = document.createElement("i");
                        i_2.id="spn12";
                        i_2.classList.add("fa");
                        i_2.classList.add("fa-fw");
                        i_2.classList.add("fa-plus");
                        i_2.setAttribute("onclick","newBox(this.id);");
                        label12.id="label12";
                        label12.innerHTML="1.Ara Öğün";
                        var tr3 = document.createElement("tr");
                        tr3.id="table110";
                        var tr3_td1 = document.createElement("td");
                        tr3_td1.setAttribute("style","border:none;");
                        tr3_td1.appendChild(label12);
                        tr3_td1.appendChild(i_2);
                        // var input12 = document.createElement("INPUT");
                        // input12.setAttribute("type","text");
                        // input12.setAttribute("id","inpuut12");
                        // input12.setAttribute("oninput","dragFood(this.id);");
                        // input12.value=program_infos[a+10];
                        // input12.classList.add("clearable");
                        var tr3_td2=document.createElement("td");
                        tr3_td2.setAttribute("style","border:none;");
                        var line2 = birinci_foods.length;
                        for(var r=1;r<line2;r++){
                          var newTextBoxInput2 = document.createElement("INPUT");
                               newTextBoxInput2.setAttribute("id","inptt1"+r);
                               newTextBoxInput2.value=sabah_foods[r];
                               newTextBoxInput2.setAttribute("oninput","dragFood(this.id);");
                               newTextBoxInput2.setAttribute("type","text");
                          var newSpan2 = document.createElement("span");
                               newSpan2.setAttribute("id", "inptt1" + r);
                               newSpan2.setAttribute("onclick","clearText(this.id);");
                               newSpan2.classList.add("fa");
                               newSpan2.classList.add("fa-fw");
                               newSpan2.classList.add("fa-trash");
                            tr3_td2.appendChild(newTextBoxInput2);
                            tr3_td2.appendChild(newSpan2);
                          // td.appendChild(newTextBoxInput);
                          // td.appendChild(newSpan);
                        }
                        // tr3_td2.appendChild(input12);
                        var tr3_td3= document.createElement("td");
                        tr3_td3.setAttribute("style","border:none;");
                        var tr3_span1 = document.createElement("span");
                        tr3_span1.id="span11";
                        tr3_span1.classList.add("badge");
                        tr3_span1.classList.add("badge-pill");
                        tr3_span1.classList.add("badge-warning");
                        tr3_span1.innerHTML=program_infos[a+11];
                        tr3_td3.appendChild(tr3_span1);
                        var tr3_td4= document.createElement("td");
                        tr3_td4.setAttribute("style","border:none;");
                        var tr3_span2 = document.createElement("span");
                        tr3_span2.id="span12";
                        tr3_span2.classList.add("badge");
                        tr3_span2.classList.add("badge-pill");
                        tr3_span2.classList.add("badge-success");
                        tr3_span2.innerHTML=program_infos[a+12];
                        tr3_td4.appendChild(tr3_span2);
                        var tr3_td5= document.createElement("td");
                        tr3_td5.setAttribute("style","border:none;");
                        var tr3_span3 = document.createElement("span");
                        tr3_span3.id="span13";
                        tr3_span3.classList.add("badge");
                        tr3_span3.classList.add("badge-pill");
                        tr3_span3.classList.add("badge-danger");
                        tr3_span3.innerHTML=program_infos[a+10];
                        tr3_td5.appendChild(tr3_span3);
                        var tr3_td6= document.createElement("td");
                        tr3_td6.setAttribute("style","border:none;");
                        var tr3_span4 = document.createElement("span");
                        tr3_span4.id="span14";
                        tr3_span4.classList.add("badge");
                        tr3_span4.classList.add("badge-pill");
                        tr3_span4.classList.add("badge-primary");
                        tr3_span4.innerHTML=program_infos[a+9];
                        tr3_td6.appendChild(tr3_span4);
                        var br13= document.createElement("br");
                        var label13 = document.createElement("label");
                        var i_3 = document.createElement("i");
                        i_3.id="spn13";
                        i_3.classList.add("fa");
                        i_3.classList.add("fa-fw");
                        i_3.classList.add("fa-plus");
                        i_3.setAttribute("onclick","newBox(this.id);");
                        label13.id="label13";
                        label13.innerHTML="Öğle Yemeği";
                        var tr4 = document.createElement("tr");
                        tr4.id="table120";
                        var tr4_td1 = document.createElement("td");
                        tr4_td1.setAttribute("style","border:none;");
                        tr4_td1.appendChild(label13);
                        tr4_td1.appendChild(i_3);
                        // var input13 = document.createElement("TEXTAREA");
                        // input13.setAttribute("type","text");
                        // input13.setAttribute("id","inpuut13");
                        // input13.setAttribute("oninput","dragFood(this.id);");
                        // input13.value=program_infos[a+21];
                        // input13.classList.add("clearable");
                        var tr4_td2=document.createElement("td");
                        tr4_td2.setAttribute("style","border:none;");
                        var line3 = ogle_foods.length;
                        for(var e=1;e<line3;e++){
                          var newTextBoxInput3 = document.createElement("INPUT");
                               newTextBoxInput3.setAttribute("id","inptt1"+e);
                               newTextBoxInput3.value=ogle_foods[e];
                               newTextBoxInput3.setAttribute("oninput","dragFood(this.id);");
                               newTextBoxInput3.setAttribute("type","text");
                          var newSpan3 = document.createElement("span");
                               newSpan3.setAttribute("id", "inptt1" + e);
                               newSpan3.setAttribute("onclick","clearText(this.id);");
                               newSpan3.classList.add("fa");
                               newSpan3.classList.add("fa-fw");
                               newSpan3.classList.add("fa-trash");
                            tr4_td2.appendChild(newTextBoxInput3);
                            tr4_td2.appendChild(newSpan3);
                          // td.appendChild(newTextBoxInput);
                          // td.appendChild(newSpan);
                        }
                        // tr4_td2.appendChild(input13);
                        var tr4_td3= document.createElement("td");
                        tr4_td3.setAttribute("style","border:none;");
                        var tr4_span1 = document.createElement("span");
                        tr4_span1.id="span21";
                        tr4_span1.classList.add("badge");
                        tr4_span1.classList.add("badge-pill");
                        tr4_span1.classList.add("badge-warning");
                        tr4_span1.innerHTML=program_infos[a+21];
                        tr4_td3.appendChild(tr4_span1);
                        var tr4_td4= document.createElement("td");
                        tr4_td4.setAttribute("style","border:none;");
                        var tr4_span2 = document.createElement("span");
                        tr4_span2.id="span22";
                        tr4_span2.classList.add("badge");
                        tr4_span2.classList.add("badge-pill");
                        tr4_span2.classList.add("badge-success");
                        tr4_span2.innerHTML=program_infos[a+22];
                        tr4_td4.appendChild(tr4_span2);
                        var tr4_td5= document.createElement("td");
                        tr4_td5.setAttribute("style","border:none;");
                        var tr4_span3 = document.createElement("span");
                        tr4_span3.id="span23";
                        tr4_span3.classList.add("badge");
                        tr4_span3.classList.add("badge-pill");
                        tr4_span3.classList.add("badge-danger");
                        tr4_span3.innerHTML=program_infos[a+20];
                        tr4_td5.appendChild(tr4_span3);
                        var tr4_td6= document.createElement("td");
                        tr4_td6.setAttribute("style","border:none;");
                        var tr4_span4 = document.createElement("span");
                        tr4_span4.id="span24";
                        tr4_span4.classList.add("badge");
                        tr4_span4.classList.add("badge-pill");
                        tr4_span4.classList.add("badge-primary");
                        tr4_span4.innerHTML=program_infos[a+19];
                        tr4_td6.appendChild(tr4_span4);
                        var br14= document.createElement("br");
                        var label14 = document.createElement("label");
                        var i_4 = document.createElement("i");
                        i_4.id="spn14";
                        i_4.classList.add("fa");
                        i_4.classList.add("fa-fw");
                        i_4.classList.add("fa-plus");
                        i_4.setAttribute("onclick","newBox(this.id);");
                        label14.id="label14";
                        label14.innerHTML="2.Ara Öğün";
                        var tr5 = document.createElement("tr");
                        tr5.id="table130";
                        var tr5_td1 = document.createElement("td");
                        tr5_td1.setAttribute("style","border:none;");
                        tr5_td1.appendChild(label14);
                        tr5_td1.appendChild(i_4);
                        // var input14 = document.createElement("TEXTAREA");
                        // input14.setAttribute("type","text");
                        // input14.setAttribute("id","inpuut14");
                        // input14.setAttribute("oninput","dragFood(this.id);");
                        // input14.value=program_infos[a+16];
                        // input14.classList.add("clearable");
                        var tr5_td2 = document.createElement("td");
                        tr5_td2.setAttribute("style","border:none;");
                        var line4 = ikinci_foods.length;
                        for(var q=1;q<line4;q++){
                          var newTextBoxInput4 = document.createElement("INPUT");
                               newTextBoxInput4.setAttribute("id","inptt1"+q);
                               newTextBoxInput4.value=ikinci_foods[q];
                               newTextBoxInput4.setAttribute("oninput","dragFood(this.id);");
                               newTextBoxInput4.setAttribute("type","text");
                          var newSpan4 = document.createElement("span");
                               newSpan4.setAttribute("id", "inptt1" + q);
                               newSpan4.setAttribute("onclick","clearText(this.id);");
                               newSpan4.classList.add("fa");
                               newSpan4.classList.add("fa-fw");
                               newSpan4.classList.add("fa-trash");
                            tr5_td2.appendChild(newTextBoxInput4);
                            tr5_td2.appendChild(newSpan4);
                          // td.appendChild(newTextBoxInput);
                          // td.appendChild(newSpan);
                        }
                        // tr5_td2.appendChild(input14);
                        var tr5_td3= document.createElement("td");
                        tr5_td3.setAttribute("style","border:none;");
                        var tr5_span1 = document.createElement("span");
                        tr5_span1.id="span31";
                        tr5_span1.classList.add("badge");
                        tr5_span1.classList.add("badge-pill");
                        tr5_span1.classList.add("badge-warning");
                        tr5_span1.innerHTML=program_infos[a+17];
                        tr5_td3.appendChild(tr5_span1);
                        var tr5_td4= document.createElement("td");
                        tr5_td4.setAttribute("style","border:none;");
                        var tr5_span2 = document.createElement("span");
                        tr5_span2.id="span32";
                        tr5_span2.classList.add("badge");
                        tr5_span2.classList.add("badge-pill");
                        tr5_span2.classList.add("badge-success");
                        tr5_span2.innerHTML=program_infos[a+18];
                        tr5_td4.appendChild(tr5_span2);
                        var tr5_td5= document.createElement("td");
                        tr5_td5.setAttribute("style","border:none;");
                        var tr5_span3 = document.createElement("span");
                        tr5_span3.id="span33";
                        tr5_span3.classList.add("badge");
                        tr5_span3.classList.add("badge-pill");
                        tr5_span3.classList.add("badge-danger");
                        tr5_span3.innerHTML=program_infos[a+16];
                        tr5_td5.appendChild(tr5_span3);
                        var tr5_td6= document.createElement("td");
                        tr5_td6.setAttribute("style","border:none;");
                        var tr5_span4 = document.createElement("span");
                        tr5_span4.id="span34";
                        tr5_span4.classList.add("badge");
                        tr5_span4.classList.add("badge-pill");
                        tr5_span4.classList.add("badge-primary");
                        tr5_span4.innerHTML=program_infos[a+15];
                        tr5_td6.appendChild(tr5_span4);
                        var br15= document.createElement("br");
                        var label15 = document.createElement("label");
                        var i_5 = document.createElement("i");
                        i_5.id="spn15";
                        i_5.classList.add("fa");
                        i_5.classList.add("fa-fw");
                        i_5.classList.add("fa-plus");
                        i_5.setAttribute("onclick","newBox(this.id);");
                        label15.id="label15";
                        label15.innerHTML="Akşam Yemeği";
                        var tr6= document.createElement("tr");
                        tr6.id="table140";
                        var tr6_td1=document.createElement("td");
                        tr6_td1.setAttribute("style","border:none;");
                        tr6_td1.appendChild(label15);
                        tr6_td1.appendChild(i_5);
                        // var input15 = document.createElement("TEXTAREA");
                        // input15.setAttribute("type","text");
                        // input15.setAttribute("id","inpuut15");
                        // input15.setAttribute("oninput","dragFood(this.id);");
                        // input15.value=program_infos[a];
                        // input15.classList.add("clearable");
                        var tr6_td2= document.createElement("td");
                        tr6_td2.setAttribute("style","border:none;");
                        var line5 = aksam_foods.length;
                        for(var p=1;p<line5;p++){
                          var newTextBoxInput5 = document.createElement("INPUT");
                               newTextBoxInput5.setAttribute("id","inptt1"+p);
                               newTextBoxInput5.value=aksam_foods[p];
                               newTextBoxInput5.setAttribute("oninput","dragFood(this.id);");
                               newTextBoxInput5.setAttribute("type","text");
                          var newSpan5 = document.createElement("span");
                               newSpan5.setAttribute("id", "inptt1" + p);
                               newSpan5.setAttribute("onclick","clearText(this.id);");
                               newSpan5.classList.add("fa");
                               newSpan5.classList.add("fa-fw");
                               newSpan5.classList.add("fa-trash");
                            tr6_td2.appendChild(newTextBoxInput5);
                            tr6_td2.appendChild(newSpan5);
                          // td.appendChild(newTextBoxInput);
                          // td.appendChild(newSpan);
                        }
                        // tr6_td2.appendChild(input15);
                        var tr6_td3= document.createElement("td");
                        tr6_td3.setAttribute("style","border:none;");
                        var tr6_span1 = document.createElement("span");
                        tr6_span1.id="span41";
                        tr6_span1.classList.add("badge");
                        tr6_span1.classList.add("badge-pill");
                        tr6_span1.classList.add("badge-warning");
                        tr6_span1.innerHTML=program_infos[a+2];
                        tr6_td3.appendChild(tr6_span1);
                        var tr6_td4= document.createElement("td");
                        tr6_td4.setAttribute("style","border:none;");
                        var tr6_span2 = document.createElement("span");
                        tr6_span2.id="span42";
                        tr6_span2.classList.add("badge");
                        tr6_span2.classList.add("badge-pill");
                        tr6_span2.classList.add("badge-success");
                        tr6_span2.innerHTML=program_infos[a+3];
                        tr6_td4.appendChild(tr6_span2);
                        var tr6_td5= document.createElement("td");
                        tr6_td5.setAttribute("style","border:none;");
                        var tr6_span3 = document.createElement("span");
                        tr6_span3.id="span43";
                        tr6_span3.classList.add("badge");
                        tr6_span3.classList.add("badge-pill");
                        tr6_span3.classList.add("badge-danger");
                        tr6_span3.innerHTML=program_infos[a+1];
                        tr6_td5.appendChild(tr6_span3);
                        var tr6_td6= document.createElement("td");
                        tr6_td6.setAttribute("style","border:none;");
                        var tr6_span4 = document.createElement("span");
                        tr6_span4.id="span44";
                        tr6_span4.classList.add("badge");
                        tr6_span4.classList.add("badge-pill");
                        tr6_span4.classList.add("badge-primary");
                        tr6_span4.innerHTML=program_infos[a];
                        tr6_td6.appendChild(tr6_span4);
                        var br16= document.createElement("br");
                        var label16 = document.createElement("label");
                        var i_6 = document.createElement("i");
                        i_6.id="spn16";
                        i_6.classList.add("fa");
                        i_6.classList.add("fa-fw");
                        i_6.classList.add("fa-plus");
                        i_6.setAttribute("onclick","newBox(this.id);");
                        label16.id="label16";
                        label16.innerHTML="3.Ara Öğün";
                        var tr7 = document.createElement("tr");
                        tr7.id="table150";
                        var tr7_td1= document.createElement("td");
                        tr7_td1.setAttribute("style","border:none;");
                        tr7_td1.appendChild(label16);
                        tr7_td1.appendChild(i_6);
                        // var input16 = document.createElement("TEXTAREA");
                        // input16.setAttribute("type","text");
                        // input16.setAttribute("id","inpuut16");
                        // input16.setAttribute("oninput","dragFood(this.id);");
                        // input16.value=program_infos[a+35];
                        // input16.classList.add("clearable");
                        var tr7_td2= document.createElement("td");
                        tr7_td2.setAttribute("style","border:none;");
                        var line6 = ucuncu_foods.length;
                        for(var g=1;g<line6;g++){
                          var newTextBoxInput6 = document.createElement("INPUT");
                               newTextBoxInput6.setAttribute("id","inptt1"+g);
                               newTextBoxInput6.value=ucuncu_foods[g];
                               newTextBoxInput6.setAttribute("oninput","dragFood(this.id);");
                               newTextBoxInput6.setAttribute("type","text");
                          var newSpan6 = document.createElement("span");
                               newSpan6.setAttribute("id", "inptt1" + g);
                               newSpan6.setAttribute("onclick","clearText(this.id);");
                               newSpan6.classList.add("fa");
                               newSpan6.classList.add("fa-fw");
                               newSpan6.classList.add("fa-trash");
                            tr7_td2.appendChild(newTextBoxInput6);
                            tr7_td2.appendChild(newSpan6);
                          // td.appendChild(newTextBoxInput);
                          // td.appendChild(newSpan);
                        }
                        // tr7_td2.appendChild(input16);
                        var tr7_td3= document.createElement("td");
                        tr7_td3.setAttribute("style","border:none;");
                        var tr7_span1 = document.createElement("span");
                        tr7_span1.id="span51";
                        tr7_span1.classList.add("badge");
                        tr7_span1.classList.add("badge-pill");
                        tr7_span1.classList.add("badge-warning");
                        tr7_span1.innerHTML=program_infos[a+32];
                        tr7_td3.appendChild(tr7_span1);
                        var tr7_td4= document.createElement("td");
                        tr7_td4.setAttribute("style","border:none;");
                        var tr7_span2 = document.createElement("span");
                        tr7_span2.id="span52";
                        tr7_span2.classList.add("badge");
                        tr7_span2.classList.add("badge-pill");
                        tr7_span2.classList.add("badge-success");
                        tr7_span2.innerHTML=program_infos[a+33];
                        tr7_td4.appendChild(tr7_span2);
                        var tr7_td5= document.createElement("td");
                        tr7_td5.setAttribute("style","border:none;");
                        var tr7_span3 = document.createElement("span");
                        tr7_span3.id="span53";
                        tr7_span3.classList.add("badge");
                        tr7_span3.classList.add("badge-pill");
                        tr7_span3.classList.add("badge-danger");
                        tr7_span3.innerHTML=program_infos[a+31];
                        tr7_td5.appendChild(tr7_span3);
                        var tr7_td6= document.createElement("td");
                        tr7_td6.setAttribute("style","border:none;");
                        var tr7_span4 = document.createElement("span");
                        tr7_span4.id="span54";
                        tr7_span4.classList.add("badge");
                        tr7_span4.classList.add("badge-pill");
                        tr7_span4.classList.add("badge-primary");
                        tr7_span4.innerHTML=program_infos[a+30];
                        tr7_td6.appendChild(tr7_span4);
                        var br17= document.createElement("br");
                        var label17 = document.createElement("label");
                        var i_7 = document.createElement("i");
                        i_7.id="spn17";
                        i_7.classList.add("fa");
                        i_7.classList.add("fa-fw");
                        i_7.classList.add("fa-plus");
                        i_7.setAttribute("onclick","newBox(this.id);");
                        label17.id="label17";
                        label17.innerHTML="Alternatif";
                        var tr8 = document.createElement("tr");
                        tr8.id="table160";
                        var tr8_td1= document.createElement("td");
                        tr8_td1.setAttribute("style","border:none;");
                        tr8_td1.appendChild(label17);
                        tr8_td1.appendChild(i_7);
                        // var input17 = document.createElement("TEXTAREA");
                        // input17.setAttribute("type","text");
                        // input17.setAttribute("id","inpuut17");
                        // input17.setAttribute("oninput","dragFood(this.id);");
                        // input17.value=program_infos[a+5];
                        // input17.classList.add("clearable");
                        var tr8_td2= document.createElement("td");
                        tr8_td2.setAttribute("style","border:none;");
                        var line7 = Object.keys(program_infos[10]).length;
                        for(var y=1;y<=line7;y++){
                          var newTextBoxInput7 = document.createElement("INPUT");
                               newTextBoxInput7.setAttribute("id","inptt1"+y);
                               newTextBoxInput7.value=program_infos[10][y.toString() + "_Besin"];
                               newTextBoxInput7.setAttribute("oninput","dragFood(this.id);");
                               newTextBoxInput7.setAttribute("type","text");
                          var newSpan7 = document.createElement("span");
                               newSpan7.setAttribute("id", "inptt1" + y);
                               newSpan7.setAttribute("onclick","clearText(this.id);");
                               newSpan7.classList.add("fa");
                               newSpan7.classList.add("fa-fw");
                               newSpan7.classList.add("fa-trash");
                            tr8_td2.appendChild(newTextBoxInput7);
                            tr8_td2.appendChild(newSpan7);
                          // td.appendChild(newTextBoxInput);
                          // td.appendChild(newSpan);
                        }
                        // tr8_td2.appendChild(input17);
                        var tr8_td3= document.createElement("td");
                        tr8_td3.setAttribute("style","border:none;");
                        var tr8_span1 = document.createElement("span");
                        tr8_span1.id="span61";
                        tr8_span1.classList.add("badge");
                        tr8_span1.classList.add("badge-pill");
                        tr8_span1.classList.add("badge-warning");
                        tr8_span1.innerHTML=program_infos[a+6];
                        tr8_td3.appendChild(tr8_span1);
                        var tr8_td4= document.createElement("td");
                        tr8_td4.setAttribute("style","border:none;");
                        var tr8_span2 = document.createElement("span");
                        tr8_span2.id="span62";
                        tr8_span2.classList.add("badge");
                        tr8_span2.classList.add("badge-pill");
                        tr8_span2.classList.add("badge-success");
                        tr8_span2.innerHTML=program_infos[a+7];
                        tr8_td4.appendChild(tr8_span2);
                        var tr8_td5= document.createElement("td");
                        tr8_td5.setAttribute("style","border:none;");
                        var tr8_span3 = document.createElement("span");
                        tr8_span3.id="span63";
                        tr8_span3.classList.add("badge");
                        tr8_span3.classList.add("badge-pill");
                        tr8_span3.classList.add("badge-danger");
                        tr8_span3.innerHTML=program_infos[a+5];
                        tr8_td5.appendChild(tr8_span3);
                        var tr8_td6= document.createElement("td");
                        tr8_td6.setAttribute("style","border:none;");
                        var tr8_span4 = document.createElement("span");
                        tr8_span4.id="span64";
                        tr8_span4.classList.add("badge");
                        tr8_span4.classList.add("badge-pill");
                        tr8_span4.classList.add("badge-primary");
                        tr8_span4.innerHTML=program_infos[a+4];
                        tr8_td6.appendChild(tr8_span4);
                        var tr9 =document.createElement("tr");
                        tr9.id="table170";
                        var tr9_td1 = document.createElement("td");
                        tr9_td1.setAttribute("style","border:none;");
                        tr9_td1.innerHTML="";
                        var tr9_td2 = document.createElement("td");
                        tr9_td2.setAttribute("style","height:70px;border:none");
                        var b = document.createElement("B");
                        b.innerHTML="  TOPLAM";
                        tr9_td2.appendChild(b);
                        var tr9_td3 = document.createElement("td");
                        tr9_td3.setAttribute("style","border:none;");
                        var tr9_td3_span1 = document.createElement("span");
                        tr9_td3_span1.classList.add("badge");
                        tr9_td3_span1.classList.add("badge-pill");
                        tr9_td3_span1.classList.add("badge-info");
                        tr9_td3_span1.id="span71";
                        tr9_td3_span1.innerHTML=program_infos[a+29];
                        tr9_td3.appendChild(tr9_td3_span1);
                        var tr9_td4 = document.createElement("td");
                        tr9_td4.setAttribute("style","border:none;");
                        var tr9_td4_span1 = document.createElement("span");
                        tr9_td4_span1.classList.add("badge");
                        tr9_td4_span1.classList.add("badge-pill");
                        tr9_td4_span1.classList.add("badge-info");
                        tr9_td4_span1.id="span72";
                        tr9_td4_span1.innerHTML=program_infos[a+28];
                        tr9_td4.appendChild(tr9_td4_span1);
                        var tr9_td5 = document.createElement("td");
                        tr9_td5.setAttribute("style","border:none;");
                        var tr9_td5_span1 = document.createElement("span");
                        tr9_td5_span1.classList.add("badge");
                        tr9_td5_span1.classList.add("badge-pill");
                        tr9_td5_span1.classList.add("badge-info");
                        tr9_td5_span1.id="span73";
                        tr9_td5_span1.innerHTML=program_infos[a+27];
                        tr9_td5.appendChild(tr9_td5_span1);
                        var tr9_td6 = document.createElement("td");
                        tr9_td6.setAttribute("style","border:none;");
                        var tr9_td6_span1 = document.createElement("span");
                        tr9_td6_span1.classList.add("badge");
                        tr9_td6_span1.classList.add("badge-pill");
                        tr9_td6_span1.classList.add("badge-info");
                        tr9_td6_span1.id="span74";
                        tr9_td6_span1.innerHTML=program_infos[a+26];
                        tr9_td6.appendChild(tr9_td6_span1);
                        // var btn = document.createElement("INPUT");
                        // btn.setAttribute("type", "button");
                        // btn.setAttribute("value", "Programı Güncelle ve Gönder");
                        // btn.id=proName;
                        // btn.classList.add("btn");
                        // btn.classList.add("btn-outline-primary");
                        // btn.classList.add("btn-rounded");
                        // btn.setAttribute("onclick","updateGeneralProgram();");
                        // btn.setAttribute("style","position:absolute;left:20%;font-family: times new roman");
                        // var btn2 = document.createElement("INPUT");
                        // btn2.setAttribute("type", "button");
                        // btn2.setAttribute("value", "Programı Arşivime Ekle");
                        // btn2.id="bisi";
                        // btn2.classList.add("btn");
                        // btn2.classList.add("btn-outline-primary");
                        // btn2.classList.add("btn-rounded");
                        // btn2.setAttribute("onclick","saveUpdatedGeneralProgramArsiv();");
                        // btn2.setAttribute("style","position:absolute;left:60%;font-family: times new roman");
                        tr.appendChild(th1);
                        tr.appendChild(th2);
                        tr.appendChild(th3);
                        tr.appendChild(th4);
                        tr.appendChild(th5);
                        tr.appendChild(th6);
                        tr2.appendChild(tr2_td1);
                        tr2.appendChild(tr2_td2);
                        tr2.appendChild(tr2_td3);
                        tr2.appendChild(tr2_td4);
                        tr2.appendChild(tr2_td5);
                        tr2.appendChild(tr2_td6);
                        tr3.appendChild(tr3_td1);
                        tr3.appendChild(tr3_td2);
                        tr3.appendChild(tr3_td3);
                        tr3.appendChild(tr3_td4);
                        tr3.appendChild(tr3_td5);
                        tr3.appendChild(tr3_td6);
                        tr4.appendChild(tr4_td1);
                        tr4.appendChild(tr4_td2);
                        tr4.appendChild(tr4_td3);
                        tr4.appendChild(tr4_td4);
                        tr4.appendChild(tr4_td5);
                        tr4.appendChild(tr4_td6);
                        tr5.appendChild(tr5_td1);
                        tr5.appendChild(tr5_td2);
                        tr5.appendChild(tr5_td3);
                        tr5.appendChild(tr5_td4);
                        tr5.appendChild(tr5_td5);
                        tr5.appendChild(tr5_td6);
                        tr6.appendChild(tr6_td1);
                        tr6.appendChild(tr6_td2);
                        tr6.appendChild(tr6_td3);
                        tr6.appendChild(tr6_td4);
                        tr6.appendChild(tr6_td5);
                        tr6.appendChild(tr6_td6);
                        tr7.appendChild(tr7_td1);
                        tr7.appendChild(tr7_td2);
                        tr7.appendChild(tr7_td3);
                        tr7.appendChild(tr7_td4);
                        tr7.appendChild(tr7_td5);
                        tr7.appendChild(tr7_td6);
                        tr8.appendChild(tr8_td1);
                        tr8.appendChild(tr8_td2);
                        tr8.appendChild(tr8_td3);
                        tr8.appendChild(tr8_td4);
                        tr8.appendChild(tr8_td5);
                        tr8.appendChild(tr8_td6);
                        tr9.appendChild(tr9_td1);
                        tr9.appendChild(tr9_td2);
                        tr9.appendChild(tr9_td3);
                        tr9.appendChild(tr9_td4);
                        tr9.appendChild(tr9_td5);
                        tr9.appendChild(tr9_td6);
                        tableGen.appendChild(tr);
                        tableGen.appendChild(tr2);
                        tableGen.appendChild(tr3);
                        tableGen.appendChild(tr4);
                        tableGen.appendChild(tr5);
                        tableGen.appendChild(tr6);
                        tableGen.appendChild(tr7);
                        tableGen.appendChild(tr8);
                        tableGen.appendChild(tr9);
                        kalın.appendChild(labelGen);
                        formGen.appendChild(labelTitle);
                        formGen.appendChild(br90);
                        formGen.appendChild(kalın);
                        formGen.appendChild(tableGen);
                        // formGen.appendChild(btn);
                        // formGen.appendChild(btn2);
                        tableDiv.appendChild(formGen);
                        tableProGen.appendChild(tableDiv);


                        first=false;

                    }



                    // var ref_sabah = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Programlar/"+advisee_user_id+"/Genel/"+child+"/sabahKahvaltisi");
                    // ref_sabah.once("value").then(function(snapshotPro2){
                    //   var count_child = snapshotPro2.numChildren();
                    //   sabah_foods = [];
                    //   sabah_foods.push(count_child);
                    //   snapshotPro2.forEach(function(childSnapshotPro2){
                    //     // var name1=childSnapshotPro.key;
                    //     // console.log(name1);
                    //     var food2 = childSnapshotPro2.val();
                    //     sabah_foods.push(food2);
                    //   });
                    //   var ref_birinci = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Programlar/"+advisee_user_id+"/Genel/"+child+"/birinciAraOgun");
                    //   ref_birinci.once("value").then(function(snapshotPro3){
                    //     var count_child2 = snapshotPro3.numChildren();
                    //     birinci_foods = [];
                    //     birinci_foods.push(count_child2);
                    //     snapshotPro3.forEach(function(childSnapshotPro3){
                    //       // var name1=childSnapshotPro.key;
                    //       // console.log(name1);
                    //       var food3 = childSnapshotPro3.val();
                    //       birinci_foods.push(food3);
                    //     });
                    //     var ref_ogle = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Programlar/"+advisee_user_id+"/Genel/"+child+"/ogleYemegi");
                    //     ref_ogle.once("value").then(function(snapshotPro4){
                    //       var count_child3 = snapshotPro4.numChildren();
                    //       ogle_foods = [];
                    //       ogle_foods.push(count_child3);
                    //       snapshotPro4.forEach(function(childSnapshotPro4){
                    //         // var name1=childSnapshotPro.key;
                    //         // console.log(name1);
                    //         var food4 = childSnapshotPro4.val();
                    //         ogle_foods.push(food4);
                    //       });
                    //     var ref_ikinci = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Programlar/"+advisee_user_id+"/Genel/"+child+"/ikinciAraOgun");
                    //     ref_ikinci.once("value").then(function(snapshotPro5){
                    //       var count_child4 = snapshotPro5.numChildren();
                    //       ikinci_foods = [];
                    //       ikinci_foods.push(count_child4);
                    //       snapshotPro5.forEach(function(childSnapshotPro5){
                    //         // var name1=childSnapshotPro.key;
                    //         // console.log(name1);
                    //         var food5 = childSnapshotPro5.val();
                    //         ikinci_foods.push(food5);
                    //         });
                    //       var ref_aksam = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Programlar/"+advisee_user_id+"/Genel/"+child+"/aksamYemegi");
                    //       ref_aksam.once("value").then(function(snapshotPro6){
                    //         var count_child5 = snapshotPro6.numChildren();
                    //         aksam_foods = [];
                    //         aksam_foods.push(count_child5);
                    //         snapshotPro6.forEach(function(childSnapshotPro6){
                    //           // var name1=childSnapshotPro.key;
                    //           // console.log(name1);
                    //           var food6 = childSnapshotPro6.val();
                    //           aksam_foods.push(food6);
                    //           });
                    //         var ref_ucuncu = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Programlar/"+advisee_user_id+"/Genel/"+child+"/ucuncuAraOgun");
                    //         ref_ucuncu.once("value").then(function(snapshotPro7){
                    //           var count_child6 = snapshotPro7.numChildren();
                    //           ucuncu_foods = [];
                    //           ucuncu_foods.push(count_child6);
                    //           snapshotPro7.forEach(function(childSnapshotPro7){
                    //             // var name1=childSnapshotPro.key;
                    //             // console.log(name1);
                    //             var food7 = childSnapshotPro7.val();
                    //             ucuncu_foods.push(food7);
                    //             });
                    //         var ref_alternatif = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Programlar/"+advisee_user_id+"/Genel/"+child+"/alternatif");
                    //         ref_alternatif.once("value").then(function(snapshotPro8){
                    //           var count_child7 = snapshotPro8.numChildren();
                    //           alternatif_foods = [];
                    //           alternatif_foods.push(count_child7);
                    //           snapshotPro8.forEach(function(childSnapshotPro8){
                    //             // var name1=childSnapshotPro.key;
                    //                 // console.log(name1);
                    //             var food8 = childSnapshotPro8.val();
                    //             alternatif_foods.push(food8);
                    //             });
  <i class="fa fa-fw fa-birthday-cake"></i>

if($("#MyBesList input").val()!=""){

swal("Başarısız", "Belirtilen Alanları Eksiksiz Doldurunuz !", "error");
                    // var local_foods = JSON.parse(localStorage.getItem("Foods"));
                    // for (i = 0; i <= local_foods.length - 1; i++) {
                    //   // var foodName = localStorage.getItem(foodName);
                    //   // var unit = localStorage.getItem(unit);
                    //   var foodName = local_foods[i].food_name;
                    //   var unit = local_foods[i].unit;
                    //   var ul = document.getElementById("myUL");
                    //       var li = document.createElement("li");
                    //       li.classList.add("col-letter");
                    //       // li.setAttribute(" onclick","dragFood(this.id);");
                    //       li.id="bes"+i;
                    //       li.setAttribute("ondragstart","dragStart(event);");
                    //       var b = document.createElement("B");
                    //       var span = document.createElement("span");
                    //       span.setAttribute("draggable","true");
                    //       span.setAttribute("id",i);
                    //       span.innerText=foodName+" - "+unit;
                    //       b.appendChild(span);
                    //       li.appendChild(b);
                    //       ul.appendChild(li);
                    // }

                    if(local_foods[i].food_name == splitName[0].toString().trim() && local_foods[i].unit == splitName[1].toString().trim())
                    {
                      var protein = local_foods[i].protein;
                      var carbonhydrate = local_foods[i].carbonhydrate;
                      var fat = local_foods[i].fat;
                      var calory = local_foods[i].calory;
                      del_list.push(protein);
                      del_list.push(carbonhydrate);
                      del_list.push(fat);
                      del_list.push(calory);
                    }
                    var refref = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim");
                    refref.once("value").then(function(c_s){
                      c_s.forEach(function(ch_sn){
                        ch_sn.forEach(function(chi_snap){
                          var name= chi_snap.val();
                          if(name.toString()==splitName[0] ){}
                        });
                      });
                    });



                    var referans = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim");
                    referans.once("value")
                    .then(function(snapshot){
                      snapshot.forEach(function(child){
                        var food_id = child.key;
                        var food_nameE = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim/"+food_id+"/food_name").once("value")
                        .then(function(t){
                          return t.val();
                        });
                        var food_unitT = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim/"+food_id+"/unit").once("value")
                        .then(function(y){
                          return y.val();
                        });
                        Promise.all([food_nameE,food_unitT]).then(function([food_nameE,food_unitT]){
                          if(splitName[0].toString().trim() == food_nameE && splitName[1].toString().trim() == food_unitT){
                            var food_proteinN = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim/"+food_id+"/protein").once("value")
                            .then(function(t){
                              return t.val();
                            });
                            var food_fatT = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim/"+food_id+"/fat").once("value")
                            .then(function(y){
                              return y.val();
                            });
                            var food_carbonhydrateE = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim/"+food_id+"/carbonhydrate").once("value")
                            .then(function(t){
                              return t.val();
                            });
                            var food_caloryY = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim/"+food_id+"/calory").once("value")
                            .then(function(y){
                              return y.val();
                            });
                            del_list.push(food_proteinN);
                            del_list.push(food_fatT);
                            del_list.push(food_carbonhydrateE);
                            del_list.push(food_caloryY);
                          }
                        });
                      });
                    });


<button style=""type="button" name="button"class="btn cl-white gredient-bg outline-secondary bg-white-save" style="float: right; color: white !important;"></button>

                    <div class="row">

                      <!-- Order Status -->
                      <div class="col-md-12 col-sm-12">
                        <div class="card">
                          <!-- <div class="card-header">
                            <h4 class="mb-0">Danışanlarım</h4>
                          </div> -->
                          <div class="card-body padd-0">
                            <div id="used_for_no_advisee" class="table-responsive" style="height:425px;overflow:auto;">
                              <form id="formGun">
                                <label style="color:orange;font-weight:bold">1. GÜN (22-3-2019)</label>
                                <table id="tableE0">
                                  <tr>
                                    <th style="color:#2d2e82;font-weight:bold;text-align:center;">Öğünler</th>
                                    <th style="color:#2d2e82;font-weight:bold;text-align:center;"></th>
                                    <th style="color:#2d2e82;font-weight:bold;text-align:center;">Besinler</th>
                                    <th style="color:#2d2e82;font-weight:bold;text-align:center;"></th>
                                    <th style="color:#2d2e82;font-weight:bold;text-align:center;">Protein</th>
                                    <th style="color:#2d2e82;font-weight:bold;text-align:center;">Yağ</th>
                                    <th style="color:#2d2e82;font-weight:bold;text-align:center;">Karbonhidrat</th>
                                    <th style="color:#2d2e82;font-weight:bold;text-align:center;">Kalori</th>
                                  </tr>
                                  <tr id="table1">
                                    <td style="border:none;width:200px">
                                      <label id="label10">Sabah Kahvaltısı</label>
                                    </td>
                                    <td style="border:none;text-align:center;">
                                      <i id="spn2" class="fa fa-fw fa-plus" onclick="newBox(this.id);"></i>
                                    </td>
                                    <td style="border:none;">
                                      <input disabled="true" id="inpt10" oninput="dragFood(this.id);" type="text">
                                    </td>
                                    <td style="border:none;">
                                      <span id="inpt10" onclick="clearTextDefault(this.id);" class="fa fa-fw fa-trash"></span>
                                    </td>
                                    <td style="width:100px;border:none;">
                                      <span style="text-align:center" id="span1" class="badge badge-pill badge-warning">0,0</span>
                                    </td>
                                    <td style="width:100px;border:none;">
                                      <span id="span2" class="badge badge-pill badge-success">0,0</span>
                                    </td>
                                    <td style="width:120px;border:none;">
                                      <span id="span3" class="badge badge-pill badge-danger">0,0</span>
                                    </td>
                                    <td style="width:100px;border:none;">
                                      <span id="span4" class="badge badge-pill badge-primary">0,0</span>
                                    </td>
                                  </tr>
                                  <tr id="table2">
                                    <td style="border:none;width:200px">
                                      <label id="label10">1.Ara Öğün</label>
                                    </td>
                                    <td style="border:none;text-align:center;">
                                      <i id="spn2" class="fa fa-fw fa-plus" onclick="newBox(this.id);"></i>
                                    </td>
                                    <td style="border:none;">
                                      <input disabled="true" id="inpt10" oninput="dragFood(this.id);" type="text">
                                    </td>
                                    <td style="border:none;">
                                      <span id="inpt10" onclick="clearTextDefault(this.id);" class="fa fa-fw fa-trash"></span>
                                    </td>
                                    <td style="width:100px;border:none;">
                                      <span style="text-align:center" id="span1" class="badge badge-pill badge-warning">0,0</span>
                                    </td>
                                    <td style="width:100px;border:none;">
                                      <span id="span2" class="badge badge-pill badge-success">0,0</span>
                                    </td>
                                    <td style="width:120px;border:none;">
                                      <span id="span3" class="badge badge-pill badge-danger">0,0</span>
                                    </td>
                                    <td style="width:100px;border:none;">
                                      <span id="span4" class="badge badge-pill badge-primary">0,0</span>
                                    </td>
                                  </tr>
                                  <tr id="table2">
                                    <td style="border:none;width:200px">
                                      <label id="label10">Öğle Yemeği</label>
                                    </td>
                                    <td style="border:none;text-align:center;">
                                      <i id="spn2" class="fa fa-fw fa-plus" onclick="newBox(this.id);"></i>
                                    </td>
                                    <td style="border:none;">
                                      <input disabled="true" id="inpt10" oninput="dragFood(this.id);" type="text">
                                    </td>
                                    <td style="border:none;">
                                      <span id="inpt10" onclick="clearTextDefault(this.id);" class="fa fa-fw fa-trash"></span>
                                    </td>
                                    <td style="width:100px;border:none;">
                                      <span style="text-align:center" id="span1" class="badge badge-pill badge-warning">0,0</span>
                                    </td>
                                    <td style="width:100px;border:none;">
                                      <span id="span2" class="badge badge-pill badge-success">0,0</span>
                                    </td>
                                    <td style="width:120px;border:none;">
                                      <span id="span3" class="badge badge-pill badge-danger">0,0</span>
                                    </td>
                                    <td style="width:100px;border:none;">
                                      <span id="span4" class="badge badge-pill badge-primary">0,0</span>
                                    </td>
                                  </tr>
                                  <tr id="table2">
                                    <td style="border:none;width:200px">
                                      <label id="label10">2.Ara Öğün</label>
                                    </td>
                                    <td style="border:none;text-align:center;">
                                      <i id="spn2" class="fa fa-fw fa-plus" onclick="newBox(this.id);"></i>
                                    </td>
                                    <td style="border:none;">
                                      <input disabled="true" id="inpt10" oninput="dragFood(this.id);" type="text">
                                    </td>
                                    <td style="border:none;">
                                      <span id="inpt10" onclick="clearTextDefault(this.id);" class="fa fa-fw fa-trash"></span>
                                    </td>
                                    <td style="width:100px;border:none;">
                                      <span style="text-align:center" id="span1" class="badge badge-pill badge-warning">0,0</span>
                                    </td>
                                    <td style="width:100px;border:none;">
                                      <span id="span2" class="badge badge-pill badge-success">0,0</span>
                                    </td>
                                    <td style="width:120px;border:none;">
                                      <span id="span3" class="badge badge-pill badge-danger">0,0</span>
                                    </td>
                                    <td style="width:100px;border:none;">
                                      <span id="span4" class="badge badge-pill badge-primary">0,0</span>
                                    </td>
                                  </tr>
                                  <tr id="table2">
                                    <td style="border:none;width:200px">
                                      <label id="label10">Akşam Yemeği</label>
                                    </td>
                                    <td style="border:none;text-align:center;">
                                      <i id="spn2" class="fa fa-fw fa-plus" onclick="newBox(this.id);"></i>
                                    </td>
                                    <td style="border:none;">
                                      <input disabled="true" id="inpt10" oninput="dragFood(this.id);" type="text">
                                    </td>
                                    <td style="border:none;">
                                      <span id="inpt10" onclick="clearTextDefault(this.id);" class="fa fa-fw fa-trash"></span>
                                    </td>
                                    <td style="width:100px;border:none;">
                                      <span style="text-align:center" id="span1" class="badge badge-pill badge-warning">0,0</span>
                                    </td>
                                    <td style="width:100px;border:none;">
                                      <span id="span2" class="badge badge-pill badge-success">0,0</span>
                                    </td>
                                    <td style="width:120px;border:none;">
                                      <span id="span3" class="badge badge-pill badge-danger">0,0</span>
                                    </td>
                                    <td style="width:100px;border:none;">
                                      <span id="span4" class="badge badge-pill badge-primary">0,0</span>
                                    </td>
                                  </tr>
                                  <tr id="table2">
                                    <td style="border:none;width:200px">
                                      <label id="label10">3.Ara Öğün</label>
                                    </td>
                                    <td style="border:none;text-align:center;">
                                      <i id="spn2" class="fa fa-fw fa-plus" onclick="newBox(this.id);"></i>
                                    </td>
                                    <td style="border:none;">
                                      <input disabled="true" id="inpt10" oninput="dragFood(this.id);" type="text">
                                    </td>
                                    <td style="border:none;">
                                      <span id="inpt10" onclick="clearTextDefault(this.id);" class="fa fa-fw fa-trash"></span>
                                    </td>
                                    <td style="width:100px;border:none;">
                                      <span style="text-align:center" id="span1" class="badge badge-pill badge-warning">0,0</span>
                                    </td>
                                    <td style="width:100px;border:none;">
                                      <span id="span2" class="badge badge-pill badge-success">0,0</span>
                                    </td>
                                    <td style="width:120px;border:none;">
                                      <span id="span3" class="badge badge-pill badge-danger">0,0</span>
                                    </td>
                                    <td style="width:100px;border:none;">
                                      <span id="span4" class="badge badge-pill badge-primary">0,0</span>
                                    </td>
                                  </tr>
                                  <tr id="table2">
                                    <td style="border:none;width:200px">
                                      <label id="label10">Alternatif</label>
                                    </td>
                                    <td style="border:none;text-align:center;">
                                      <i id="spn2" class="fa fa-fw fa-plus" onclick="newBox(this.id);"></i>
                                    </td>
                                    <td style="border:none;">
                                      <input disabled="true" id="inpt10" oninput="dragFood(this.id);" type="text">
                                    </td>
                                    <td style="border:none;">
                                      <span id="inpt10" onclick="clearTextDefault(this.id);" class="fa fa-fw fa-trash"></span>
                                    </td>
                                    <td style="width:100px;border:none;">
                                      <span style="text-align:center" id="span1" class="badge badge-pill badge-warning">0,0</span>
                                    </td>
                                    <td style="width:100px;border:none;">
                                      <span id="span2" class="badge badge-pill badge-success">0,0</span>
                                    </td>
                                    <td style="width:120px;border:none;">
                                      <span id="span3" class="badge badge-pill badge-danger">0,0</span>
                                    </td>
                                    <td style="width:100px;border:none;">
                                      <span id="span4" class="badge badge-pill badge-primary">0,0</span>
                                    </td>
                                  </tr>
                                </form>
                            </div>
                          </div>
                        </div>
                      </div>




                    </div>
                    var x = $('#empty').find('label').length;
                    x=x/8;

                      $("#tablee"+((8*a)+1)+" :input").each(function () {
                        updates1['/'+j+'_Besin'] = this.value;
                        var day = a+1+"_gün";
                        var ref1 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük/"+name+"/"+day+"/sabahKahvaltisi");
                        ref1.update(updates1);
                      }


                      $("#tablee"+((8*a)+2)+" :input").each(function () {
                        updates2['/'+j+'_Besin'] = this.value;
                        var day = a+1+"_gün";
                        var ref2 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük/"+name+"/"+day+"/birinciAraOgun");
                        ref2.update(updates2);
                      }


                      $("#tablee"+((8*a)+3)+" :input").each(function () {
                        updates3['/'+j+'_Besin'] = this.value;
                        var day = a+1+"_gün";
                        var ref3 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük/"+name+"/"+day+"/ogleYemegi");
                        ref3.update(updates3);
                      }


                      $("#tablee"+((8*a)+4)+" :input").each(function () {
                        updates4['/'+j+'_Besin'] = this.value;
                        var day = a+1+"_gün";
                        var ref4 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük/"+name+"/"+day+"/ikinciAraOgun");
                        ref4.update(updates4);
                      }


                      $("#tablee"+((8*a)+5)+" :input").each(function () {
                        updates5['/'+j+'_Besin'] = this.value;
                        var day = a+1+"_gün";
                        var ref5 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük/"+name+"/"+day+"/aksamYemegi");
                        ref5.update(updates5);
                      }


                      $("#tablee"+((8*a)+6)+" :input").each(function () {
                        updates6['/'+j+'_Besin'] = this.value;
                        var day = a+1+"_gün";
                        var ref6 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük/"+name+"/"+day+"/ucuncuAraOgun");
                        ref6.update(updates6);
                      }


                      $("#tablee"+((8*a)+7)+" :input").each(function () {
                        updates7['/'+j+'_Besin'] = this.value;
                        var day = a+1+"_gün";
                        var ref7 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük/"+name+"/"+day+"/alternatif");
                        ref7.update(updates7);
                      }
                      var br1 = document.createElement("br");
                      var span_br1 = document.createElement("br");
                      var newTextBoxInput11 = document.createElement("INPUT");
                           newTextBoxInput11.setAttribute("id","inptt10");
                           newTextBoxInput11.setAttribute("disabled","true");
                           newTextBoxInput11.value=program_infos[26]["1_Besin"];
                           newTextBoxInput11.setAttribute("oninput","dragFood(this.id);");
                           newTextBoxInput11.setAttribute("type","text");
                           var newSpan11 = document.createElement("span");
                                newSpan11.setAttribute("id", "inptt10");
                                newSpan11.setAttribute("onclick","clearTextDefault(this.id);");
                                newSpan11.classList.add("fa");
                                newSpan11.classList.add("fa-fw");
                                newSpan11.classList.add("fa-trash");
                                tr2_td2.appendChild(br1);
                             tr2_td2.appendChild(newTextBoxInput11);
                             tr2_td2_1.appendChild(span_br1);
                             tr2_td2_1.appendChild(newSpan11);
                      var line1 = Object.keys(program_infos[26]).length;
                      for(var y=2;y<=line1;y++){
                        var br2 = document.createElement("br");
                        var span_br2 = document.createElement("br");
                        var newTextBoxInput1 = document.createElement("INPUT");
                             newTextBoxInput1.setAttribute("id","inptt1"+y);
                             newTextBoxInput1.setAttribute("disabled","true");
                             newTextBoxInput1.value=program_infos[26][y.toString() + "_Besin"];
                             newTextBoxInput1.setAttribute("oninput","dragFood(this.id);");
                             newTextBoxInput1.setAttribute("type","text");
                        var newSpan1 = document.createElement("span");
                             newSpan1.setAttribute("id", "inptt1" + y);
                             newSpan1.setAttribute("onclick","clearText(this.id);");
                             newSpan1.classList.add("fa");
                             newSpan1.classList.add("fa-fw");
                             newSpan1.classList.add("fa-trash");
                             tr2_td2.appendChild(br2);
                          tr2_td2.appendChild(newTextBoxInput1);
                          tr2_td2_1.appendChild(span_br2);
                          tr2_td2_1.appendChild(newSpan1);
                      }



                      var th1_1 = document.createElement("th");
                      th1_1.setAttribute("style","color:#2d2e82;font-weight:bold;text-align:center;");
                      th1_1.innerHTML="";
                      var th2_1 = document.createElement("th");
                      th2_1.setAttribute("style","color:#2d2e82;font-weight:bold;text-align:center;");
                      th2_1.innerHTML="";
                      ,


                      <label class="toggler toggler-danger" style="margin-left:15%; color: #677897;">
												<input id="photo_upload" type="file">
												<i class="fa fa-picture-o" aria-hidden="true"></i>
											</label>
