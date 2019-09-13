function checkGenel(){
  if(document.getElementById("checkbox2").checked==true){
    // console.log("asds");
    $("#empty").hide();
    $("#newW").show();
    var title = document.getElementById("programNm").innerHTML;
    var split = title.split(" Program ");
    document.getElementById("programNm").innerHTML="General Program "+split[1];
  }
}
function checkGunluk(){
  if(document.getElementById("checkbox1").checked==true){
    first=true;
    $("#empty").show();
    $("#newW").hide();
    var title = document.getElementById("programNm").innerHTML;
    var split = title.split(" Program ");
    document.getElementById("programNm").innerHTML="Daily Program '"+split[1]+"'";
  }
}
function myFunction() {
  document.getElementById("menu").classList.toggle("show");
}
function showPrograms(){

  var tbodyArsiv = document.getElementById("programs");

  // var tbody1 = document.createElement("tbody");
  // tbody1.setAttribute("id","arsivTable");
  // aşağıda listelere click veriyoruz
    var user = firebase.auth().currentUser;
    // var now_date= firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Genel/now_date").once("value").then(function(sn){
    //   return sn.val();
    // });
    // Promise.all([now_date]).then(function([now_date]) {
    //
    // });
    var referans_1 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Genel");
    referans_1.once("value")
    .then(function(snapshot_1){
      snapshot_1.forEach(function(child){
        var key_1 = child.key;

        var now_date = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Genel/"+key_1+"/now_date").once("value").then(function(temp){
          return temp.val();
        });
        var calory = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Genel/"+key_1+"/toplamCalory").once("value").then(function(temp2){
          return temp2.val();
        });
        Promise.all([now_date,calory]).then(function([now_date,calory]){

              var key=key_1;
              var tr = document.createElement("tr");
              tr.style="";
              var td1 = document.createElement("td");
              td1.setAttribute("style","text-align:center");
              // td1.setAttribute("onclick","showArchiveGeneral(this.id);");
              var b = document.createElement("span");
              b.innerHTML=key;
              td1.appendChild(b);
              var td2 = document.createElement("td");
              td2.setAttribute("style","text-align:center");
              var span = document.createElement("span");
              span.innerText="General Program";
              td2.appendChild(span);
              var td3 = document.createElement("td");
              td3.setAttribute("style","text-align:center");
              var td3_span = document.createElement("span");
              td3_span.innerText="-";
              td3.appendChild(td3_span);
              var td4 = document.createElement("td");
              td4.setAttribute("style","text-align:center");
              var td4_span = document.createElement("span");
              td4_span.innerText=calory;
              td4.appendChild(td4_span);
              var td5 = document.createElement("td");
              td5.setAttribute("style","text-align:center");
              var td5_span = document.createElement("span");
              td5_span.innerText=now_date;
              td5.appendChild(td5_span);
              var td5_1 = document.createElement("td");
              td5_1.setAttribute("style","text-align:center");
              var ahref_arrow = document.createElement("a");
              ahref_arrow.setAttribute("onclick","bişi");
              ahref_arrow.classList.add("show-more");
              ahref_arrow.setAttribute("data-toggle","tooltip");
              var td5_1_i = document.createElement("i");
              td5_1_i.classList.add("ti-arrow-right");
              ahref_arrow.appendChild(td5_1_i);
              td5_1.appendChild(ahref_arrow);
              var td6 = document.createElement("td");
              td6.setAttribute("style","text-align:center");
              var ahref = document.createElement("a");
              ahref.classList.add("delete");
              var td6_span = document.createElement("i");
              td6_span.classList.add("ti-trash");
              ahref.appendChild(td6_span);
              td6_span.setAttribute("onclick","delete_table_general(this);");
              td6.appendChild(ahref);
              tr.appendChild(td1);
              tr.appendChild(td2);
              tr.appendChild(td3);
              tr.appendChild(td4);
              tr.appendChild(td5);
              tr.appendChild(td5_1);
              tr.appendChild(td6);
              // tbody1.appendChild(tr);
              tbodyArsiv.appendChild(tr);


        });
      });
    });
    var referans_2 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük");
    referans_2.once("value")
    .then(function(snapshot_2){
      snapshot_2.forEach(function(child2){
        var key_2 = child2.key;

        var now_date2 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük/"+key_2+"/now_date").once("value").then(function(temp5){
          return temp5.val();
        });
        var date2 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük/"+key_2+"/number_of_day").once("value").then(function(temp6){
          return temp6.val();
        });
        Promise.all([now_date2,date2]).then(function([now_date2,date2]){
          // console.log(date2);
              // var splitDate = date2.split(" - ");
              // var daySplit1 = splitDate[0].split("-");
              // var daySplit2 = splitDate[1].split("-");
              // var number_of_day = parseInt(daySplit2[2])-parseInt(daySplit1[2])+1;
              // console.log(number_of_day);
              var key=key_2;
              var tr = document.createElement("tr");
              tr.style="";
              var td1 = document.createElement("td");
              td1.setAttribute("style","text-align:center");
              // td1.setAttribute("onclick","showArchiveGeneral(this.id);");
              var b = document.createElement("span");
              b.innerHTML=key;
              td1.appendChild(b);
              var td2 = document.createElement("td");
              td2.setAttribute("style","text-align:center");
              var span = document.createElement("span");
              span.innerText="Daily Program";
              td2.appendChild(span);
              var td3 = document.createElement("td");
              td3.setAttribute("style","text-align:center");
              var td3_span = document.createElement("span");
              td3_span.innerText=date2;
              td3.appendChild(td3_span);
              var td4 = document.createElement("td");
              td4.setAttribute("style","text-align:center");
              var td4_span = document.createElement("span");
              td4_span.innerText="calory";
              td4.appendChild(td4_span);
              var td5 = document.createElement("td");
              td5.setAttribute("style","text-align:center");
              var td5_span = document.createElement("span");
              td5_span.innerText=now_date2;
              td5.appendChild(td5_span);
              var td5_1 = document.createElement("td");
              td5_1.setAttribute("style","text-align:center");
              var ahref_arrow = document.createElement("a");
              ahref_arrow.setAttribute("onclick","bişi");
              ahref_arrow.classList.add("show-more");
              ahref_arrow.setAttribute("data-toggle","tooltip");
              var td5_1_i = document.createElement("i");
              td5_1_i.classList.add("ti-arrow-right");
              ahref_arrow.appendChild(td5_1_i);
              td5_1.appendChild(ahref_arrow);
              var td6 = document.createElement("td");
              td6.setAttribute("style","text-align:center");
              var ahref = document.createElement("a");
              ahref.classList.add("delete");
              var td6_span = document.createElement("i");
              td6_span.classList.add("ti-trash");
              ahref.appendChild(td6_span);
              td6_span.setAttribute("onclick","delete_table_daily(this)");
              td6.appendChild(ahref);
              tr.appendChild(td1);
              tr.appendChild(td2);
              tr.appendChild(td3);
              tr.appendChild(td4);
              tr.appendChild(td5);
              tr.appendChild(td5_1);
              tr.appendChild(td6);
              // tbody1.appendChild(tr);
              tbodyArsiv.appendChild(tr);


        });
      });
    });
}
function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("archive_table");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
function prepare(){

//   swal({
//   title: "Delete your account?",
//   text: "Clicking on continue will permanently delete your account.",
//   type: "warning",
//   confirmButtonText: "Continue",
//   closeOnConfirm: false
// }, function () {
//   swal("Deleted account", "We'll miss you!", "success");
// });
// swal({
//   title: "An input!",
//   text: "Write something interesting:",
//   type: "input",
//   showCancelButton: true,
//   closeOnConfirm: false,
//   inputPlaceholder: "Write something"
// }, function (inputValue) {
//   if (inputValue === false) return false;
//   if (inputValue === "") {
//     swal.showInputError("You need to write something!");
//     return false
//   }
//   swal("Nice!", "You wrote: " + inputValue, "success");
// });


  // swal("Programınızı Hazırlayabilirsiniz!", "", "success");
  swal("Give a nutrition plan name to save for your archive", {
  content: "input",
})
.then((value) => {
  if(value!=""){
    $("#BesList").hide();
    $("#MyBesList").hide();
    document.getElementById("program_hazırla").style.display="block";
    scrollingElement = (document.scrollingElement || document.body)
    $(scrollingElement).animate({
      scrollTop: document.body.scrollHeight
    }, 500);
    swal("You can prepare your program!");
    document.getElementById("programNm").innerHTML=" Daily Program "+value;
  }
  else{
    swal("Failed", "", "error");
  }
});
}
// arşiv besinlerim butonları
function number_of_day(element){
  $("#empty").empty();
  var number = element.innerHTML;
  console.log(number);
  window.onclick = function(event) {
    if (!event.target.matches('#dropdownMenuButton')) {
      var dropdowns = document.getElementsByClassName("dropdown-menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  var i =0;
  var div = document.getElementById("empty");
  for(var k=0;k<number;k++){
        var brbr=document.createElement("br");
        var label = document.createElement("label");
        label.setAttribute("style","color:orange;font-weight:bold");
        label.innerHTML=i+1+". DAY ";
        var tableGun = document.createElement("table");
        tableGun.id="tableE"+i;
        var tr1 = document.createElement("tr");
        var th1 = document.createElement("th");
        th1.setAttribute("style","color#2d2e82;font-weight:bold;text-align:center;");
        th1.innerHTML="Meals";
        tr1.appendChild(th1);
        var th1_1 = document.createElement("th");
        th1_1.setAttribute("style","color:#2d2e82;font-weight:bold;text-align:center;");
        th1_1.innerHTML="";
        tr1.appendChild(th1_1);
        var th2 = document.createElement("th");
        th2.setAttribute("style","color#2d2e82;font-weight:bold;text-align:center;");
        th2.innerHTML="Foods";
        tr1.appendChild(th2);
        var th2_1 = document.createElement("th");
        th2_1.setAttribute("style","color:#2d2e82;font-weight:bold;text-align:center;");
        th2_1.innerHTML="";
        tr1.appendChild(th2_1);
        var th3 = document.createElement("th");
        th3.setAttribute("style","color#2d2e82;font-weight:bold;text-align:center;");
        th3.innerHTML="Protein";
        tr1.appendChild(th3);
        var th4 = document.createElement("th");
        th4.setAttribute("style","color#2d2e82;font-weight:bold;text-align:center;");
        th4.innerHTML="Fat";
        tr1.appendChild(th4);
        var th5 = document.createElement("th");
        th5.setAttribute("style","color#2d2e82;font-weight:bold;text-align:center;");
        th5.innerHTML="Carbonhydrate";
        tr1.appendChild(th5);
        var th6 = document.createElement("th");
        th6.setAttribute("style","color#2d2e82;font-weight:bold;text-align:center;");
        th6.innerHTML="Calory";
        tr1.appendChild(th6);
        var label1 = document.createElement("label");
        label1.id="label1"+i;
        var i_1 = document.createElement("i");
        i_1.id="spn"+((8*i)+1);
        i_1.classList.add("fa");
        i_1.classList.add("fa-fw");
        i_1.classList.add("fa-plus");
        i_1.setAttribute("onclick","newBox(this.id);");
        label1.innerHTML="Breakfast";
        var tr2 = document.createElement("tr");
        tr2.id="tablee"+((8*i)+1);
        var tr2_td1 = document.createElement("td");
        tr2_td1.setAttribute("style","border:none;width:200px");
        var tr2_td1_1 = document.createElement("td");
        tr2_td1_1.setAttribute("style","border:none;text-align:center;");
        tr2_td1.appendChild(label1);
        tr2_td1_1.appendChild(i_1);
        // var input1 = document.createElement("TEXTAREA");
        // input1.setAttribute("ondrop","drop(event)");
        // input1.setAttribute("ondragover","allowDrop(event)");
        // input1.setAttribute("type","text");
        // input1.setAttribute("id","inpuut1"+i); // input1.setAttribute("id", i.toString() + "_inpuut1");
        // input1.value = pro_list[j+25];
        // input1.setAttribute("oninput","dragFood(this.id);");
        // input1.classList.add("clearable");
        var tr2_td2 = document.createElement("td");
        tr2_td2.setAttribute("style","border:none;");
        var tr2_td2_1 = document.createElement("td");
        tr2_td2_1.setAttribute("style","border:none;");

        // var span_br1 = document.createElement("br");
        var newTextBoxInput11 = document.createElement("INPUT");
        newTextBoxInput11.setAttribute("disabled","true");
             newTextBoxInput11.setAttribute("id","inptt1"+i);
             newTextBoxInput11.setAttribute("oninput","dragFood(this.id);");
             newTextBoxInput11.setAttribute("type","text");
        var newSpan11 = document.createElement("span");
             newSpan11.setAttribute("id", "inptt1" +i);
             newSpan11.setAttribute("onclick","clearTextDefault(this.id);");
             newSpan11.classList.add("fa");
             newSpan11.classList.add("fa-fw");
             newSpan11.classList.add("fa-trash");
          tr2_td2.appendChild(newTextBoxInput11);
          // tr2_td2_1.appendChild(span_br1);
          tr2_td2_1.appendChild(newSpan11);
        // tr2_td2.appendChild(input1);
        var tr2_td3= document.createElement("td");
        tr2_td3.setAttribute("style","width:100px;border:none;");
        var tr2_td3_span1 = document.createElement("span");
        tr2_td3_span1.setAttribute("style","margin-right:30px");
        tr2_td3_span1.id="span1";
        tr2_td3_span1.classList.add("badge");
        tr2_td3_span1.classList.add("badge-pill");
        tr2_td3_span1.classList.add("badge-warning");
        tr2_td3_span1.innerHTML="0,0";
        tr2_td3.appendChild(tr2_td3_span1);
        var tr2_td4= document.createElement("td");
        tr2_td4.setAttribute("style","width:100px;border:none;");
        var tr2_td4_span2 = document.createElement("span");
        tr2_td4_span2.setAttribute("style","margin-right:30px");
        tr2_td4_span2.id="span2";
        tr2_td4_span2.classList.add("badge");
        tr2_td4_span2.classList.add("badge-pill");
        tr2_td4_span2.classList.add("badge-success");
        tr2_td4_span2.innerHTML="0,0";
        tr2_td4.appendChild(tr2_td4_span2);
        var tr2_td5= document.createElement("td");
        tr2_td5.setAttribute("style","width:120px;border:none;");
        var tr2_td5_span3 = document.createElement("span");
        tr2_td5_span3.setAttribute("style","margin-right:30px");
        tr2_td5_span3.id="span3";
        tr2_td5_span3.classList.add("badge");
        tr2_td5_span3.classList.add("badge-pill");
        tr2_td5_span3.classList.add("badge-danger");
        tr2_td5_span3.innerHTML="0,0";
        tr2_td5.appendChild(tr2_td5_span3);
        var tr2_td6= document.createElement("td");
        tr2_td6.setAttribute("style","width:100px;border:none;");
        var tr2_td6_span4= document.createElement("span");
        tr2_td6_span4.setAttribute("style","margin-right:30px");
        tr2_td6_span4.id="span4";
        tr2_td6_span4.classList.add("badge");
        tr2_td6_span4.classList.add("badge-pill");
        tr2_td6_span4.classList.add("badge-primary");
        tr2_td6_span4.innerHTML="0,0";
        tr2_td6.appendChild(tr2_td6_span4);
        tr2.appendChild(tr2_td1);
        tr2.appendChild(tr2_td1_1);
        tr2.appendChild(tr2_td2);
        tr2.appendChild(tr2_td2_1);
        tr2.appendChild(tr2_td3);
        tr2.appendChild(tr2_td4);
        tr2.appendChild(tr2_td5);
        tr2.appendChild(tr2_td6);
        var label2 = document.createElement("label");
        label2.id="label2"+i
        var i_2 = document.createElement("i");
        i_2.id="spn"+((8*i)+2);
        i_2.classList.add("fa");
        i_2.classList.add("fa-fw");
        i_2.classList.add("fa-plus");
        i_2.setAttribute("onclick","newBox(this.id);");
        label2.innerHTML="1. Snacks";
        var tr3 = document.createElement("tr");
        tr3.id="tablee"+((8*i)+2);
        var tr3_td1 = document.createElement("td");
        tr3_td1.setAttribute("style","border:none;width:200px");
        var tr3_td1_1 = document.createElement("td");
        tr3_td1_1.setAttribute("style","border:none;text-align:center;");
        tr3_td1.appendChild(label2);
        tr3_td1_1.appendChild(i_2);
        // var input2 = document.createElement("TEXTAREA");
        // input2.setAttribute("type","text");
        // input2.setAttribute("id","inpuut2"+i);
        // input2.value=pro_list[j+10];
        // input2.setAttribute("oninput","dragFood(this.id);");
        // input2.classList.add("clearable");
        var tr3_td2 = document.createElement("td");
        tr3_td2.setAttribute("style","border:none;");
        var tr3_td2_1 = document.createElement("td");
        tr3_td2_1.setAttribute("style","border:none;");
        // var br3 = document.createElement("br");
        // var span_br3 = document.createElement("br");
        var newTextBoxInput22 = document.createElement("INPUT");
        newTextBoxInput22.setAttribute("disabled","true");
             newTextBoxInput22.setAttribute("id","inpttt1"+i);
             newTextBoxInput22.setAttribute("oninput","dragFood(this.id);");
             newTextBoxInput22.setAttribute("type","text");
        var newSpan22 = document.createElement("span");
             newSpan22.setAttribute("id", "inpttt1" +i);
             newSpan22.setAttribute("onclick","clearTextDefault(this.id);");
             newSpan22.classList.add("fa");
             newSpan22.classList.add("fa-fw");
             newSpan22.classList.add("fa-trash");
             // tr3_td2.appendChild(br3);
          tr3_td2.appendChild(newTextBoxInput22);
          // tr3_td2_1.appendChild(span_br3);
          tr3_td2_1.appendChild(newSpan22);

        // tr3_td2.appendChild(input2);
        var tr3_td3= document.createElement("td");
        tr3_td3.setAttribute("style","border:none;");
        var tr3_td3_span1 = document.createElement("span");
        tr3_td3_span1.setAttribute("style","margin-right:30px");
        tr3_td3_span1.id="span1"+i;
        tr3_td3_span1.classList.add("badge");
        tr3_td3_span1.classList.add("badge-pill");
        tr3_td3_span1.classList.add("badge-warning");
        tr3_td3_span1.innerHTML="0,0";
        tr3_td3.appendChild(tr3_td3_span1);
        var tr3_td4= document.createElement("td");
        tr3_td4.setAttribute("style","border:none;");
        var tr3_td4_span2 = document.createElement("span");
        tr3_td4_span2.setAttribute("style","margin-right:30px");
        tr3_td4_span2.id="span2"+i;
        tr3_td4_span2.classList.add("badge");
        tr3_td4_span2.classList.add("badge-pill");
        tr3_td4_span2.classList.add("badge-success");
        tr3_td4_span2.innerHTML="0,0";
        tr3_td4.appendChild(tr3_td4_span2);
        var tr3_td5= document.createElement("td");
        tr3_td5.setAttribute("style","border:none;");
        var tr3_td5_span3 = document.createElement("span");
        tr3_td5_span3.setAttribute("style","margin-right:30px");
        tr3_td5_span3.id="span3"+i;
        tr3_td5_span3.classList.add("badge");
        tr3_td5_span3.classList.add("badge-pill");
        tr3_td5_span3.classList.add("badge-danger");
        tr3_td5_span3.innerHTML="0,0";
        tr3_td5.appendChild(tr3_td5_span3);
        var tr3_td6= document.createElement("td");
        tr3_td6.setAttribute("style","border:none;");
        var tr3_td6_span4= document.createElement("span");
        tr3_td6_span4.setAttribute("style","margin-right:30px");
        tr3_td6_span4.id="span4"+i;
        tr3_td6_span4.classList.add("badge");
        tr3_td6_span4.classList.add("badge-pill");
        tr3_td6_span4.classList.add("badge-primary");
        tr3_td6_span4.innerHTML="0,0";
        tr3_td6.appendChild(tr3_td6_span4);
        tr3.appendChild(tr3_td1);
        tr3.appendChild(tr3_td1_1);
        tr3.appendChild(tr3_td2);
        tr3.appendChild(tr3_td2_1);
        tr3.appendChild(tr3_td3);
        tr3.appendChild(tr3_td4);
        tr3.appendChild(tr3_td5);
        tr3.appendChild(tr3_td6);
        var label3 = document.createElement("label");
        label3.id="label3"+i
        var i_3 = document.createElement("i");
        i_3.id="spn"+((8*i)+3);
        i_3.classList.add("fa");
        i_3.classList.add("fa-fw");
        i_3.classList.add("fa-plus");
        i_3.setAttribute("onclick","newBox(this.id);");
        label3.innerHTML="Lunch";
        var tr4 = document.createElement("tr");
        tr4.id="tablee"+((8*i)+3);
        var tr4_td1 = document.createElement("td");
        tr4_td1.setAttribute("style","border:none;width:200px");
        var tr4_td1_1 = document.createElement("td");
        tr4_td1_1.setAttribute("style","border:none;text-align:center;");
        tr4_td1.appendChild(label3);
        tr4_td1_1.appendChild(i_3);
        // var input3 = document.createElement("TEXTAREA");
        // input3.setAttribute("type","text");
        // input3.setAttribute("id","inpuut3"+i);
        // input3.value=pro_list[j+20];
        // input3.setAttribute("oninput","dragFood(this.id);");
        // input3.classList.add("clearable");
        var tr4_td2 = document.createElement("td");
        tr4_td2.setAttribute("style","border:none;");
        var tr4_td2_1 = document.createElement("td");
        tr4_td2_1.setAttribute("style","border:none;");
        // var br5 = document.createElement("br");
        // var span_br5 = document.createElement("br");
        var newTextBoxInput33 = document.createElement("INPUT");
        newTextBoxInput33.setAttribute("disabled","true");
             newTextBoxInput33.setAttribute("id","inptttt1"+i);
             newTextBoxInput33.setAttribute("oninput","dragFood(this.id);");
             newTextBoxInput33.setAttribute("type","text");
        var newSpan33 = document.createElement("span");
             newSpan33.setAttribute("id", "inptttt1" +i);
             newSpan33.setAttribute("onclick","clearText(this.id);");
             newSpan33.classList.add("fa");
             newSpan33.classList.add("fa-fw");
             newSpan33.classList.add("fa-trash");
             // tr4_td2.appendChild(br5);
          tr4_td2.appendChild(newTextBoxInput33);
          // tr4_td2_1.appendChild(span_br5);
          tr4_td2_1.appendChild(newSpan33);

        // tr4_td2.appendChild(input3);
        var tr4_td3= document.createElement("td");
        tr4_td3.setAttribute("style","border:none;");
        var tr4_td3_span1 = document.createElement("span");
        tr4_td3_span1.setAttribute("style","margin-right:30px");
        tr4_td3_span1.id="span1"+i;
        tr4_td3_span1.classList.add("badge");
        tr4_td3_span1.classList.add("badge-pill");
        tr4_td3_span1.classList.add("badge-warning");
        tr4_td3_span1.innerHTML="0,0";
        tr4_td3.appendChild(tr4_td3_span1);
        var tr4_td4= document.createElement("td");
        tr4_td4.setAttribute("style","border:none;");
        var tr4_td4_span2 = document.createElement("span");
        tr4_td4_span2.setAttribute("style","margin-right:30px");
        tr4_td4_span2.id="span2"+i;
        tr4_td4_span2.classList.add("badge");
        tr4_td4_span2.classList.add("badge-pill");
        tr4_td4_span2.classList.add("badge-success");
        tr4_td4_span2.innerHTML="0,0";
        tr4_td4.appendChild(tr4_td4_span2);
        var tr4_td5= document.createElement("td");
        tr4_td5.setAttribute("style","border:none;");
        var tr4_td5_span3 = document.createElement("span");
        tr4_td5_span3.setAttribute("style","margin-right:30px");
        tr4_td5_span3.id="span3"+i;
        tr4_td5_span3.classList.add("badge");
        tr4_td5_span3.classList.add("badge-pill");
        tr4_td5_span3.classList.add("badge-danger");
        tr4_td5_span3.innerHTML="0,0";
        tr4_td5.appendChild(tr4_td5_span3);
        var tr4_td6= document.createElement("td");
        tr4_td6.setAttribute("style","border:none;");
        var tr4_td6_span4= document.createElement("span");
        tr4_td6_span4.setAttribute("style","margin-right:30px");
        tr4_td6_span4.id="span4"+i;
        tr4_td6_span4.classList.add("badge");
        tr4_td6_span4.classList.add("badge-pill");
        tr4_td6_span4.classList.add("badge-primary");
        tr4_td6_span4.innerHTML="0,0";
        tr4_td6.appendChild(tr4_td6_span4);
        tr4.appendChild(tr4_td1);
        tr4.appendChild(tr4_td1_1);
        tr4.appendChild(tr4_td2);
        tr4.appendChild(tr4_td2_1);
        tr4.appendChild(tr4_td3);
        tr4.appendChild(tr4_td4);
        tr4.appendChild(tr4_td5);
        tr4.appendChild(tr4_td6);
        var label4 = document.createElement("label");
        label4.id="label4"+i
        var i_4 = document.createElement("i");
        i_4.id="spn"+((8*i)+4);
        i_4.classList.add("fa");
        i_4.classList.add("fa-fw");
        i_4.classList.add("fa-plus");
        i_4.setAttribute("onclick","newBox(this.id);");
        label4.innerHTML="2. Snacks";
        var tr5 = document.createElement("tr");
        tr5.id="tablee"+((8*i)+4);
        var tr5_td1 = document.createElement("td");
        tr5_td1.setAttribute("style","border:none;width:200px");
        var tr5_td1_1 = document.createElement("td");
        tr5_td1_1.setAttribute("style","border:none;text-align:center;");
        tr5_td1.appendChild(label4);
        tr5_td1_1.appendChild(i_4);
        // var input4 = document.createElement("TEXTAREA");
        // input4.setAttribute("type","text");
        // input4.setAttribute("id","inpuut4"+i);
        // input4.value=pro_list[j+15];
        // input4.setAttribute("oninput","dragFood(this.id);");
        // input4.classList.add("clearable");
        var tr5_td2 = document.createElement("td");
        tr5_td2.setAttribute("style","border:none;");
        var tr5_td2_1 = document.createElement("td");
        tr5_td2_1.setAttribute("style","border:none;");
        // var br7 = document.createElement("br");
        // var span_br7 = document.createElement("br");
        var newTextBoxInput44 = document.createElement("INPUT");
        newTextBoxInput44.setAttribute("disabled","true");
             newTextBoxInput44.setAttribute("id","inpttttt1"+i);
             newTextBoxInput44.setAttribute("oninput","dragFood(this.id);");
             newTextBoxInput44.setAttribute("type","text");
        var newSpan44 = document.createElement("span");
             newSpan44.setAttribute("id", "inpttttt1" +i);
             newSpan44.setAttribute("onclick","clearTextDefault(this.id);");
             newSpan44.classList.add("fa");
             newSpan44.classList.add("fa-fw");
             newSpan44.classList.add("fa-trash");
             // tr5_td2.appendChild(br7);
          tr5_td2.appendChild(newTextBoxInput44);
          // tr5_td2_1.appendChild(span_br7);
          tr5_td2_1.appendChild(newSpan44);

        // tr5_td2.appendChild(input4);
        var tr5_td3= document.createElement("td");
        tr5_td3.setAttribute("style","border:none;");
        var tr5_td3_span1 = document.createElement("span");
        tr5_td3_span1.setAttribute("style","margin-right:30px");
        tr5_td3_span1.id="span1"+i;
        tr5_td3_span1.classList.add("badge");
        tr5_td3_span1.classList.add("badge-pill");
        tr5_td3_span1.classList.add("badge-warning");
        tr5_td3_span1.innerHTML="0,0";
        tr5_td3.appendChild(tr5_td3_span1);
        var tr5_td4= document.createElement("td");
        tr5_td4.setAttribute("style","border:none;");
        var tr5_td4_span2 = document.createElement("span");
        tr5_td4_span2.setAttribute("style","margin-right:30px");
        tr5_td4_span2.id="span2"+i;
        tr5_td4_span2.classList.add("badge");
        tr5_td4_span2.classList.add("badge-pill");
        tr5_td4_span2.classList.add("badge-success");
        tr5_td4_span2.innerHTML="0,0";
        tr5_td4.appendChild(tr5_td4_span2);
        var tr5_td5= document.createElement("td");
        tr5_td5.setAttribute("style","border:none;");
        var tr5_td5_span3 = document.createElement("span");
        tr5_td5_span3.setAttribute("style","margin-right:30px");
        tr5_td5_span3.id="span3"+i;
        tr5_td5_span3.classList.add("badge");
        tr5_td5_span3.classList.add("badge-pill");
        tr5_td5_span3.classList.add("badge-danger");
        tr5_td5_span3.innerHTML="0,0";
        tr5_td5.appendChild(tr5_td5_span3);
        var tr5_td6= document.createElement("td");
        tr5_td6.setAttribute("style","border:none;");
        var tr5_td6_span4= document.createElement("span");
        tr5_td6_span4.setAttribute("style","margin-right:30px");
        tr5_td6_span4.id="span4"+i;
        tr5_td6_span4.classList.add("badge");
        tr5_td6_span4.classList.add("badge-pill");
        tr5_td6_span4.classList.add("badge-primary");
        tr5_td6_span4.innerHTML="0,0";
        tr5_td6.appendChild(tr5_td6_span4);
        tr5.appendChild(tr5_td1);
        tr5.appendChild(tr5_td1_1);
        tr5.appendChild(tr5_td2);
        tr5.appendChild(tr5_td2_1);
        tr5.appendChild(tr5_td3);
        tr5.appendChild(tr5_td4);
        tr5.appendChild(tr5_td5);
        tr5.appendChild(tr5_td6);
        var label5 = document.createElement("label");
        label5.id="label5"+i
        var i_5 = document.createElement("i");
        i_5.id="spn"+((8*i)+5);
        i_5.classList.add("fa");
        i_5.classList.add("fa-fw");
        i_5.classList.add("fa-plus");
        i_5.setAttribute("onclick","newBox(this.id);");
        label5.innerHTML="Dinnner";
        var tr6 = document.createElement("tr");
        tr6.id="tablee"+((8*i)+5);
        var tr6_td1 = document.createElement("td");
        tr6_td1.setAttribute("style","border:none;width:200px");
        var tr6_td1_1 = document.createElement("td");
        tr6_td1_1.setAttribute("style","border:none;text-align:center;");
        tr6_td1.appendChild(label5);
        tr6_td1_1.appendChild(i_5);
        // var input5 = document.createElement("TEXTAREA");
        // input5.setAttribute("type","text");
        // input5.setAttribute("id","inpuut5"+i);
        // input5.value=pro_list[j];
        // input5.setAttribute("oninput","dragFood(this.id);");
        // input5.classList.add("clearable");
        var tr6_td2 = document.createElement("td");
        tr6_td2.setAttribute("style","border:none;");
        var tr6_td2_1 = document.createElement("td");
        tr6_td2_1.setAttribute("style","border:none;");
        // var br9 = document.createElement("br");
        // var span_br9 = document.createElement("br");
        var newTextBoxInput55 = document.createElement("INPUT");
        newTextBoxInput55.setAttribute("disabled","true");
             newTextBoxInput55.setAttribute("id","inptttttt1"+i);
             newTextBoxInput55.setAttribute("oninput","dragFood(this.id);");
             newTextBoxInput55.setAttribute("type","text");
        var newSpan55 = document.createElement("span");
             newSpan55.setAttribute("id", "inptttttt1"+i);
             newSpan55.setAttribute("onclick","clearTextDefault(this.id);");
             newSpan55.classList.add("fa");
             newSpan55.classList.add("fa-fw");
             newSpan55.classList.add("fa-trash");
             // tr6_td2.appendChild(br9);
          tr6_td2.appendChild(newTextBoxInput55);
          // tr6_td2_1.appendChild(span_br9);
          tr6_td2_1.appendChild(newSpan55);

        // tr6_td2.appendChild(input5);
        var tr6_td3= document.createElement("td");
        tr6_td3.setAttribute("style","border:none;");
        var tr6_td3_span1 = document.createElement("span");
        tr6_td3_span1.setAttribute("style","margin-right:30px");
        tr6_td3_span1.id="span1"+i;
        tr6_td3_span1.classList.add("badge");
        tr6_td3_span1.classList.add("badge-pill");
        tr6_td3_span1.classList.add("badge-warning");
        tr6_td3_span1.innerHTML="0,0";
        tr6_td3.appendChild(tr6_td3_span1);
        var tr6_td4= document.createElement("td");
        tr6_td4.setAttribute("style","border:none;");
        var tr6_td4_span2 = document.createElement("span");
        tr6_td4_span2.setAttribute("style","margin-right:30px");
        tr6_td4_span2.id="span2"+i;
        tr6_td4_span2.classList.add("badge");
        tr6_td4_span2.classList.add("badge-pill");
        tr6_td4_span2.classList.add("badge-success");
        tr6_td4_span2.innerHTML="0,0";
        tr6_td4.appendChild(tr6_td4_span2);
        var tr6_td5= document.createElement("td");
        tr6_td5.setAttribute("style","border:none;");
        var tr6_td5_span3 = document.createElement("span");
        tr6_td5_span3.setAttribute("style","margin-right:30px");
        tr6_td5_span3.id="span3"+i;
        tr6_td5_span3.classList.add("badge");
        tr6_td5_span3.classList.add("badge-pill");
        tr6_td5_span3.classList.add("badge-danger");
        tr6_td5_span3.innerHTML="0,0";
        tr6_td5.appendChild(tr6_td5_span3);
        var tr6_td6= document.createElement("td");
        tr6_td6.setAttribute("style","border:none;");
        var tr6_td6_span4= document.createElement("span");
        tr6_td6_span4.setAttribute("style","margin-right:30px");
        tr6_td6_span4.id="span4"+i;
        tr6_td6_span4.classList.add("badge");
        tr6_td6_span4.classList.add("badge-pill");
        tr6_td6_span4.classList.add("badge-primary");
        tr6_td6_span4.innerHTML="0,0";
        tr6_td6.appendChild(tr6_td6_span4);
        tr6.appendChild(tr6_td1);
        tr6.appendChild(tr6_td1_1);
        tr6.appendChild(tr6_td2);
        tr6.appendChild(tr6_td2_1);
        tr6.appendChild(tr6_td3);
        tr6.appendChild(tr6_td4);
        tr6.appendChild(tr6_td5);
        tr6.appendChild(tr6_td6);
        var label6 = document.createElement("label");
        label6.id="label6"+i
        var i_6 = document.createElement("i");
        i_6.id="spn"+((8*i)+6);
        i_6.classList.add("fa");
        i_6.classList.add("fa-fw");
        i_6.classList.add("fa-plus");
        i_6.setAttribute("onclick","newBox(this.id);");
        label6.innerHTML="3. Snacks";
        var tr7 = document.createElement("tr");
        tr7.id="tablee"+((8*i)+6);
        var tr7_td1 = document.createElement("td");
        tr7_td1.setAttribute("style","border:none;width:200px");
        var tr7_td1_1 = document.createElement("td");
        tr7_td1_1.setAttribute("style","border:none;text-align:center;");
        tr7_td1.appendChild(label6);
        tr7_td1_1.appendChild(i_6);
        // var input6 = document.createElement("TEXTAREA");
        // input6.setAttribute("type","text");
        // input6.setAttribute("id","inpuut6"+i);
        // input6.value=pro_list[j+34];
        // input6.setAttribute("oninput","dragFood(this.id);");
        // input6.classList.add("clearable");
        var tr7_td2 = document.createElement("td");
        tr7_td2.setAttribute("style","border:none;");
        var tr7_td2_1 = document.createElement("td");
        tr7_td2_1.setAttribute("style","border:none;");
        // var br11 = document.createElement("br");
        // var span_br11 = document.createElement("br");
        var newTextBoxInput66 = document.createElement("INPUT");
        newTextBoxInput66.setAttribute("disabled","true");
             newTextBoxInput66.setAttribute("id","inpttttttt1"+i);
             newTextBoxInput66.setAttribute("oninput","dragFood(this.id);");
             newTextBoxInput66.setAttribute("type","text");
        var newSpan66 = document.createElement("span");
             newSpan66.setAttribute("id", "inpttttttt1" +i);
             newSpan66.setAttribute("onclick","clearTextDefault(this.id);");
             newSpan66.classList.add("fa");
             newSpan66.classList.add("fa-fw");
             newSpan66.classList.add("fa-trash");
             // tr7_td2.appendChild(br11);
          tr7_td2.appendChild(newTextBoxInput66);
          // tr7_td2_1.appendChild(span_br11);
          tr7_td2_1.appendChild(newSpan66);
        // tr7_td2.appendChild(input6);

        var tr7_td3= document.createElement("td");
        tr7_td3.setAttribute("style","border:none;");
        var tr7_td3_span1 = document.createElement("span");
        tr7_td3_span1.setAttribute("style","margin-right:30px");
        tr7_td3_span1.id="span1"+i;
        tr7_td3_span1.classList.add("badge");
        tr7_td3_span1.classList.add("badge-pill");
        tr7_td3_span1.classList.add("badge-warning");
        tr7_td3_span1.innerHTML="0,0";
        tr7_td3.appendChild(tr7_td3_span1);
        var tr7_td4= document.createElement("td");
        tr7_td4.setAttribute("style","border:none;");
        var tr7_td4_span2 = document.createElement("span");
        tr7_td4_span2.setAttribute("style","margin-right:30px");
        tr7_td4_span2.id="span2"+i;
        tr7_td4_span2.classList.add("badge");
        tr7_td4_span2.classList.add("badge-pill");
        tr7_td4_span2.classList.add("badge-success");
        tr7_td4_span2.innerHTML="0,0";
        tr7_td4.appendChild(tr7_td4_span2);
        var tr7_td5= document.createElement("td");
        tr7_td5.setAttribute("style","border:none;");
        var tr7_td5_span3 = document.createElement("span");
        tr7_td5_span3.setAttribute("style","margin-right:30px");
        tr7_td5_span3.id="span3"+i;
        tr7_td5_span3.classList.add("badge");
        tr7_td5_span3.classList.add("badge-pill");
        tr7_td5_span3.classList.add("badge-danger");
        tr7_td5_span3.innerHTML="0,0";
        tr7_td5.appendChild(tr7_td5_span3);
        var tr7_td6= document.createElement("td");
        tr7_td6.setAttribute("style","border:none;");
        var tr7_td6_span4= document.createElement("span");
        tr7_td6_span4.setAttribute("style","margin-right:30px");
        tr7_td6_span4.id="span4"+i;
        tr7_td6_span4.classList.add("badge");
        tr7_td6_span4.classList.add("badge-pill");
        tr7_td6_span4.classList.add("badge-primary");
        tr7_td6_span4.innerHTML="0,0";
        tr7_td6.appendChild(tr7_td6_span4);
        tr7.appendChild(tr7_td1);
        tr7.appendChild(tr7_td1_1);
        tr7.appendChild(tr7_td2);
        tr7.appendChild(tr7_td2_1);
        tr7.appendChild(tr7_td3);
        tr7.appendChild(tr7_td4);
        tr7.appendChild(tr7_td5);
        tr7.appendChild(tr7_td6);
        var label7 = document.createElement("label");
        label7.id="label7"+i
        var i_7 = document.createElement("i");
        i_7.id="spn"+((8*i)+7);
        i_7.classList.add("fa");
        i_7.classList.add("fa-fw");
        i_7.classList.add("fa-plus");
        i_7.setAttribute("onclick","newBox(this.id);");
        label7.innerHTML="Alternative";
        var tr8 = document.createElement("tr");
        tr8.id="tablee"+((8*i)+7);
        var tr8_td1 = document.createElement("td");
        tr8_td1.setAttribute("style","border:none;width:200px");
        var tr8_td1_1 = document.createElement("td");
        tr8_td1_1.setAttribute("style","border:none;text-align:center;");
        tr8_td1.appendChild(label7);
        tr8_td1_1.appendChild(i_7);
        // var input7 = document.createElement("TEXTAREA");
        // input7.setAttribute("type","text");
        // input7.setAttribute("id","inpuut7"+i);
        // input7.value=pro_list[j+5];
        // input7.setAttribute("oninput","dragFood(this.id);");
        // input7.classList.add("clearable");
        var tr8_td2 = document.createElement("td");
        tr8_td2.setAttribute("style","border:none;");
        var tr8_td2_1 = document.createElement("td");
        tr8_td2_1.setAttribute("style","border:none;");
        // var br13 = document.createElement("br");
        // var span_br13 = document.createElement("br");
        var newTextBoxInput77 = document.createElement("INPUT");
        newTextBoxInput77.setAttribute("disabled","true");
             newTextBoxInput77.setAttribute("id","inptttttttt1"+i);
             newTextBoxInput77.setAttribute("oninput","dragFood(this.id);");
             newTextBoxInput77.setAttribute("type","text");
        var newSpan77 = document.createElement("span");
             newSpan77.setAttribute("id", "inptttttttt1" +i);
             newSpan77.setAttribute("onclick","clearTextDefault(this.id);");
             newSpan77.classList.add("fa");
             newSpan77.classList.add("fa-fw");
             newSpan77.classList.add("fa-trash");
             // tr8_td2.appendChild(br13);
          tr8_td2.appendChild(newTextBoxInput77);
          // tr8_td2_1.appendChild(span_br13);
          tr8_td2_1.appendChild(newSpan77);

        // tr8_td2.appendChild(input7);
        var tr8_td3= document.createElement("td");
        tr8_td3.setAttribute("style","border:none;");
        var tr8_td3_span1 = document.createElement("span");
        tr8_td3_span1.setAttribute("style","margin-right:30px");
        tr8_td3_span1.id="span1"+i;
        tr8_td3_span1.classList.add("badge");
        tr8_td3_span1.classList.add("badge-pill");
        tr8_td3_span1.classList.add("badge-warning");
        tr8_td3_span1.innerHTML="0,0";
        tr8_td3.appendChild(tr8_td3_span1);
        var tr8_td4= document.createElement("td");
        tr8_td4.setAttribute("style","border:none;");
        var tr8_td4_span2 = document.createElement("span");
        tr8_td4_span2.setAttribute("style","margin-right:30px");
        tr8_td4_span2.id="span2"+i;
        tr8_td4_span2.classList.add("badge");
        tr8_td4_span2.classList.add("badge-pill");
        tr8_td4_span2.classList.add("badge-success");
        tr8_td4_span2.innerHTML="0,0";
        tr8_td4.appendChild(tr8_td4_span2);
        var tr8_td5= document.createElement("td");
        tr8_td5.setAttribute("style","border:none;");
        var tr8_td5_span3 = document.createElement("span");
        tr8_td5_span3.setAttribute("style","margin-right:30px");
        tr8_td5_span3.id="span3"+i;
        tr8_td5_span3.classList.add("badge");
        tr8_td5_span3.classList.add("badge-pill");
        tr8_td5_span3.classList.add("badge-danger");
        tr8_td5_span3.innerHTML="0,0";
        tr8_td5.appendChild(tr8_td5_span3);
        var tr8_td6= document.createElement("td");
        tr8_td6.setAttribute("style","border:none;");
        var tr8_td6_span4= document.createElement("span");
        tr8_td6_span4.setAttribute("style","margin-right:30px");
        tr8_td6_span4.id="span4"+i;
        tr8_td6_span4.classList.add("badge");
        tr8_td6_span4.classList.add("badge-pill");
        tr8_td6_span4.classList.add("badge-primary");
        tr8_td6_span4.innerHTML="0,0";
        tr8_td6.appendChild(tr8_td6_span4);
        tr8.appendChild(tr8_td1);
        tr8.appendChild(tr8_td1_1);
        tr8.appendChild(tr8_td2);
        tr8.appendChild(tr8_td2_1);
        tr8.appendChild(tr8_td3);
        tr8.appendChild(tr8_td4);
        tr8.appendChild(tr8_td5);
        tr8.appendChild(tr8_td6);
        var tr9 =document.createElement("tr");
        tr9.id="tablee"+((8*i)+8);
        var tr9_td1 = document.createElement("td");
        tr9_td1.setAttribute("style","border:none;width:200px");
        tr9_td1.innerHTML="";
        var tr9_td1_1 = document.createElement("td");
        tr9_td1_1.setAttribute("style","border:none;text-align:center;");
        var tr9_td2 = document.createElement("td");
        tr9_td2.setAttribute("style","height:70px;border:none");
        var b = document.createElement("B");
        b.innerHTML="  TOTAL";
        tr9_td2.appendChild(b);
        var tr9_td2_1 = document.createElement("td");
        tr9_td2_1.setAttribute("style","border:none;");
        var tr9_td3 = document.createElement("td");
        tr9_td3.setAttribute("style","border:none;");
        var tr9_td3_span1 = document.createElement("span");
        tr9_td3_span1.setAttribute("style","margin-right:30px");
        tr9_td3_span1.classList.add("badge");
        tr9_td3_span1.classList.add("badge-pill");
        tr9_td3_span1.classList.add("badge-info");
        tr9_td3_span1.id="span1"+i;
        tr9_td3_span1.innerHTML="0,0";
        tr9_td3.appendChild(tr9_td3_span1);
        var tr9_td4 = document.createElement("td");
        tr9_td4.setAttribute("style","border:none;");
        var tr9_td4_span1 = document.createElement("span");
        tr9_td4_span1.setAttribute("style","margin-right:30px");
        tr9_td4_span1.classList.add("badge");
        tr9_td4_span1.classList.add("badge-pill");
        tr9_td4_span1.classList.add("badge-info");
        tr9_td4_span1.id="span2"+i;
        tr9_td4_span1.innerHTML="0,0";
        tr9_td4.appendChild(tr9_td4_span1);
        var tr9_td5 = document.createElement("td");
        tr9_td5.setAttribute("style","border:none;");
        var tr9_td5_span1 = document.createElement("span");
        tr9_td5_span1.setAttribute("style","margin-right:30px");
        tr9_td5_span1.classList.add("badge");
        tr9_td5_span1.classList.add("badge-pill");
        tr9_td5_span1.classList.add("badge-info");
        tr9_td5_span1.id="span3"+i;
        tr9_td5_span1.innerHTML="0,0";
        tr9_td5.appendChild(tr9_td5_span1);
        var tr9_td6 = document.createElement("td");
        tr9_td6.setAttribute("style","border:none;");
        var tr9_td6_span1 = document.createElement("span");
        tr9_td6_span1.setAttribute("style","margin-right:30px");
        tr9_td6_span1.classList.add("badge");
        tr9_td6_span1.classList.add("badge-pill");
        tr9_td6_span1.classList.add("badge-info");
        tr9_td6_span1.id="span4"+i;
        tr9_td6_span1.innerHTML="0,0";
        tr9_td6.appendChild(tr9_td6_span1);
        tr9.appendChild(tr9_td1);
        tr9.appendChild(tr9_td1_1);
        tr9.appendChild(tr9_td2);
        tr9.appendChild(tr9_td2_1);
        tr9.appendChild(tr9_td3);
        tr9.appendChild(tr9_td4);
        tr9.appendChild(tr9_td5);
        tr9.appendChild(tr9_td6);
        // var br = document.createElement("br");
        tableGun.appendChild(brbr);
        tableGun.appendChild(label);
        tableGun.appendChild(tr1);
        tableGun.appendChild(tr2);
        tableGun.appendChild(tr3);
        tableGun.appendChild(tr4);
        tableGun.appendChild(tr5);
        tableGun.appendChild(tr6);
        tableGun.appendChild(tr7);
        tableGun.appendChild(tr8);
        tableGun.appendChild(tr9);
        div.appendChild(tableGun);


        i++;
  }
}
function localStroage(){
  local_foods = [];
  $("#BesList").hide();
  if(typeof(Storage) !== "undefined") {

    // console.log(local_foods);
    // console.log(local_foods.length);
    var control = localStorage.getItem("Foods");
    if(control!=undefined){
      var local_foods = JSON.parse(localStorage.getItem("Foods"));
      for (i = 0; i <= local_foods.length - 1; i++) {
        // var foodName = localStorage.getItem(foodName);
        // var unit = localStorage.getItem(unit);
        var foodName = local_foods[i].food_name;
        var unit = local_foods[i].unit;
        var ul = document.getElementById("myUL");
            var li = document.createElement("li");
            li.classList.add("col-letter");
            // li.setAttribute(" onclick","dragFood(this.id);");
            li.id="bes"+i;
            li.setAttribute("ondragstart","dragStart(event);");
            var b = document.createElement("B");
            var span = document.createElement("span");
            span.setAttribute("draggable","true");
            span.setAttribute("id",i);
            span.innerText=foodName+" - "+unit;
            b.appendChild(span);
            li.appendChild(b);
            ul.appendChild(li);
      }
      // console.log(localStorage.length);

    }else{
      myDataGroup = [];
      function myDataStore (myDataPass)
                    {localStorage.setItem("Foods", JSON.stringify(myDataPass));}
      var myDataRead = firebase.database().ref("veriler");
        myDataRead.on('value', function(snapshot) {
            snapshot.forEach(function(child_snapshot){

              myDataGroup.push(child_snapshot.val());
              // console.log(myDataGroup);
            });
            myDataStore (myDataGroup);

        });


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
          food_list.push(foodInfos);

        });
        Promise.all(food_list).then(function(food_list)
        {

            for (var a=0; a<food_list.length; a=a+3)
            {
                // // localStorage.setItem(food_list[a],food_list[a+1]);
                // var number=food_list[a+2];
                // var food = food_list[a];
                // var unit_t = food_list[a+1];
                // var testObject = {number:{food:unit_t}};

                // localStorage.setItem('testObject'+a, JSON.stringify(testObject));
                var ul = document.getElementById("myUL");
                var li = document.createElement("li");
                li.classList.add("col-letter");
                // li.setAttribute("onclick","dragFood(this.id);");
                li.id="bes"+a;
                li.setAttribute("ondragstart","dragStart(event);");
                // li.classList.add("ui-widget");
                // li.setAttribute("ondragstart","return dragStart(event);");
                // li.innerHTML="<b><a href='#' onchange='dragFood(this.id);' >"+food_list[a]+' - '+food_list[a+1]+"</a>";
                var b = document.createElement("B");
                var span = document.createElement("span");
                span.setAttribute("draggable","true");
                span.setAttribute("id",food_list[a+2]);
                span.innerText=food_list[a]+" - "+food_list[a+1];
                b.appendChild(span);
                li.appendChild(b);
                ul.appendChild(li);
            }
        });

      });
    }
  } else {
    // can't be used
  }
}
var name1;
function dragStart(event)
{
  document.addEventListener('dragstart',function(event){
    event.dataTransfer.setData('Text',event.target.innerHTML+"\r\n  ");
  });
     // event.dataTransfer.setData("Text ",event.target.id);
     name1 = event.target.id.toString();
     console.log(name1);

     $("#accordion :input").removeAttr("disabled");
     // $( "#accordion input:disabled")=false;
     // console.log("id: ", event.target.id);
     // console.log("name1: ", name1);
}
$("#list_food tr td").click(function(){
  $(this).addClass('selected').siblings().removeClass('selected');
  var value=$(this).find('td:first').html();
  });
function dragFood(id){
  var uid = firebase.auth().currentUser.uid;
  if($("#list_food tbody tr td:first").attr("class")!=""){
    list = [];
    list_plus = [];
    var name = document.getElementById(name1).innerText;
    // console.log(name1);
    console.log(name);
    if(name !=""){
      // console.log(name1+" asfasa");

      var foodName = firebase.database().ref("veriler/"+name1.toString()+"/food_name").once("value")
      .then(function(snapshot2){
        return snapshot2.val();
      });
      list.push(foodName);
      list.push(name);
      Promise.all(list).then(function(list)
      {
        // console.log(foodName);
        // console.log(name);

        // console.log(name); parse edecez
        var splitName = list[1].split(" - ");
          if(list[0] == splitName[0]){
            list_amount = [];

            // console.log(name1);
            // var x = document.getElementById(id).parentNode.parentNode.rowIndex; eşitse verileri çekecez
            var protein = firebase.database().ref("veriler/"+name1+"/protein").once("value")
            .then(function(snap){
              return snap.val();
            });
            var fat = firebase.database().ref("veriler/"+name1+"/fat").once("value")
            .then(function(snap2){
              return snap2.val();
            });
            var carbonhydrate = firebase.database().ref("veriler/"+name1+"/carbonhydrate").once("value")
            .then(function(snap3){
              return snap3.val();
            });
            var calory = firebase.database().ref("veriler/"+name1+"/calory").once("value")
            .then(function(snap4){
              return snap4.val();
            });
            // list_amount[0]=protein;
            // // var v1 = parseFloat(list_amount[0]);
            // list_amount.push(fat);
            // list_amount.push(carbonhydrate);
            // list_amount.push(calory);


            Promise.all([protein,fat,carbonhydrate,calory]).then(function([protein,fat,carbonhydrate,calory])
            {

              // console.log(protein);
              // console.log(fat);
              // console.log(carbonhydrate);
              // console.log(calory);
              list_plus[0] = parseFloat(protein.replace(",","."));
              list_plus[1] = parseFloat(fat.replace(",","."));
              list_plus[2] = parseFloat(carbonhydrate.replace(",","."));
              list_plus[3] = parseFloat(calory.replace(",","."));
              var parent = document.getElementById(id).parentNode.parentNode.id;
              console.log(parent);
              var deger1 = document.getElementById(parent).cells[4].children[0].innerHTML;
              console.log(deger1);
              var sonDeger = parseFloat(deger1.replace(",","."))+list_plus[0];
              console.log(sonDeger);
              document.getElementById(parent).cells[4].children[0].innerHTML=parseFloat(sonDeger.toFixed(2));
              var deger2 = document.getElementById(parent).cells[5].children[0].innerHTML;
              var sonDeger2 = parseFloat(deger2.replace(",","."))+list_plus[1];
              document.getElementById(parent).cells[5].children[0].innerHTML=parseFloat(sonDeger2.toFixed(2));
              var deger3 = document.getElementById(parent).cells[6].children[0].innerHTML;
              var sonDeger3 = parseFloat(deger3.replace(",","."))+list_plus[2];
              document.getElementById(parent).cells[6].children[0].innerHTML=parseFloat(sonDeger3.toFixed(2));
              var deger4 = document.getElementById(parent).cells[7].children[0].innerHTML;
              var sonDeger4 = parseFloat(deger4.replace(",","."))+list_plus[3];
              document.getElementById(parent).cells[7].children[0].innerHTML=parseFloat(sonDeger4.toFixed(2));

              var deger0 = document.getElementById(parent).parentNode.rows[1].cells[4].children[0].innerHTML;
              console.log(deger0);
              var deger1 = document.getElementById(parent).parentNode.rows[2].cells[4].children[0].innerHTML;
              var deger2 = document.getElementById(parent).parentNode.rows[3].cells[4].children[0].innerHTML;
              var deger3 = document.getElementById(parent).parentNode.rows[4].cells[4].children[0].innerHTML;
              var deger4 = document.getElementById(parent).parentNode.rows[5].cells[4].children[0].innerHTML;
              var deger5 = document.getElementById(parent).parentNode.rows[6].cells[4].children[0].innerHTML;
              var deger6 = document.getElementById(parent).parentNode.rows[7].cells[4].children[0].innerHTML;
              var toplamDegerSon = parseFloat(deger0.replace(",","."))+parseFloat(deger1.replace(",","."))+parseFloat(deger2.replace(",","."))+parseFloat(deger3.replace(",","."))+parseFloat(deger4.replace(",","."))+parseFloat(deger5.replace(",","."))+parseFloat(deger6.replace(",","."));
              console.log(toplamDegerSon);
              document.getElementById(parent).parentNode.rows[8].cells[4].children[0].innerHTML=parseFloat(toplamDegerSon.toFixed(2));

              var deger10 = document.getElementById(parent).parentNode.rows[1].cells[5].children[0].innerHTML;
              var deger11 = document.getElementById(parent).parentNode.rows[2].cells[5].children[0].innerHTML;
              var deger12 = document.getElementById(parent).parentNode.rows[3].cells[5].children[0].innerHTML;
              var deger13 = document.getElementById(parent).parentNode.rows[4].cells[5].children[0].innerHTML;
              var deger14 = document.getElementById(parent).parentNode.rows[5].cells[5].children[0].innerHTML;
              var deger15 = document.getElementById(parent).parentNode.rows[6].cells[5].children[0].innerHTML;
              var deger16 = document.getElementById(parent).parentNode.rows[7].cells[5].children[0].innerHTML;
              var toplamDegerSon2 = parseFloat(deger10.replace(",","."))+parseFloat(deger11.replace(",","."))+parseFloat(deger12.replace(",","."))+parseFloat(deger13.replace(",","."))+parseFloat(deger14.replace(",","."))+parseFloat(deger15.replace(",","."))+parseFloat(deger16.replace(",","."));
              document.getElementById(parent).parentNode.rows[8].cells[5].children[0].innerHTML=parseFloat(toplamDegerSon2.toFixed(2));

              var deger20 = document.getElementById(parent).parentNode.rows[1].cells[6].children[0].innerHTML;
              var deger21 = document.getElementById(parent).parentNode.rows[2].cells[6].children[0].innerHTML;
              var deger22 = document.getElementById(parent).parentNode.rows[3].cells[6].children[0].innerHTML;
              var deger23 = document.getElementById(parent).parentNode.rows[4].cells[6].children[0].innerHTML;
              var deger24 = document.getElementById(parent).parentNode.rows[5].cells[6].children[0].innerHTML;
              var deger25 = document.getElementById(parent).parentNode.rows[6].cells[6].children[0].innerHTML;
              var deger26 = document.getElementById(parent).parentNode.rows[7].cells[6].children[0].innerHTML;
              var toplamDegerSon3 = parseFloat(deger20.replace(",","."))+parseFloat(deger21.replace(",","."))+parseFloat(deger22.replace(",","."))+parseFloat(deger23.replace(",","."))+parseFloat(deger24.replace(",","."))+parseFloat(deger25.replace(",","."))+parseFloat(deger26.replace(",","."));
              document.getElementById(parent).parentNode.rows[8].cells[6].children[0].innerHTML=parseFloat(toplamDegerSon3.toFixed(2));

              var deger30 = document.getElementById(parent).parentNode.rows[1].cells[7].children[0].innerHTML;
              var deger31 = document.getElementById(parent).parentNode.rows[2].cells[7].children[0].innerHTML;
              var deger32 = document.getElementById(parent).parentNode.rows[3].cells[7].children[0].innerHTML;
              var deger33 = document.getElementById(parent).parentNode.rows[4].cells[7].children[0].innerHTML;
              var deger34 = document.getElementById(parent).parentNode.rows[5].cells[7].children[0].innerHTML;
              var deger35 = document.getElementById(parent).parentNode.rows[6].cells[7].children[0].innerHTML;
              var deger36 = document.getElementById(parent).parentNode.rows[7].cells[7].children[0].innerHTML;
              var toplamDegerSon4 = parseFloat(deger30.replace(",","."))+parseFloat(deger31.replace(",","."))+parseFloat(deger32.replace(",","."))+parseFloat(deger33.replace(",","."))+parseFloat(deger34.replace(",","."))+parseFloat(deger35.replace(",","."))+parseFloat(deger36.replace(",","."));
              document.getElementById(parent).parentNode.rows[8].cells[7].children[0].innerHTML=parseFloat(toplamDegerSon4.toFixed(2));
            });
            // yukarısı çalışıyor. Genele tablo satırı ekleyecez. Arkasından firebase toplam calorileri çekecem!!!!!!!!!!!!!!!!!!!!!!! 23 OCAK Çarşamba
            // console.log(column1);
            // console.log(parent);
          }
          else{
            console.log("böyle bir besin yok");
          }
      });
      // console.log(foodName+" ASd");


    }else{
      // console.log("qwerty");
    }
  }else{
    list2 = [];
    list_plus2 = [];
    var name = document.getElementById(name1).innerText;
    if(name !=""){
      var foodName2 = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim/"+name1.toString()+"/food_name").once("value")
      .then(function(snapshot2){
        return snapshot2.val();
      });
      list2.push(foodName2);
      list2.push(name);
      Promise.all(list2).then(function(list2)
      {
        var splitName2 = list2[1].split(" - ");
        console.log(splitName2[0]);
        console.log(list2[0]);
          if(list2[0] == splitName2[0]){
            list_amount2 = [];
            var protein2 = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim/"+name1.toString()+"/protein").once("value")
            .then(function(snaps){
              return snaps.val();
            });
            var fat2 = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim/"+name1.toString()+"/fat").once("value")
            .then(function(snaps2){
              return snaps2.val();
            });
            var carbonhydrate2 = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim/"+name1.toString()+"/carbonhydrate").once("value")
            .then(function(snaps3){
              return snaps3.val();
            });
            var calory2 = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim/"+name1.toString()+"/calory").once("value")
            .then(function(snaps4){
              return snaps4.val();
            });
            Promise.all([protein2,fat2,carbonhydrate2,calory2]).then(function([protein2,fat2,carbonhydrate2,calory2])
            {
              list_plus2[0] = parseFloat(protein2.replace(",","."));
              list_plus2[1] = parseFloat(fat2.replace(",","."));
              list_plus2[2] = parseFloat(carbonhydrate2.replace(",","."));
              list_plus2[3] = parseFloat(calory2.replace(",","."));
              var parent = document.getElementById(id).parentNode.parentNode.id;
              var deger1 = document.getElementById(parent).cells[4].children[0].innerHTML;
              var sonDeger = parseFloat(deger1.replace(",","."))+list_plus2[0];
              document.getElementById(parent).cells[4].children[0].innerHTML=parseFloat(sonDeger.toFixed(2));
              var deger2 = document.getElementById(parent).cells[5].children[0].innerHTML;
              var sonDeger2 = parseFloat(deger2.replace(",","."))+list_plus2[1];
              document.getElementById(parent).cells[5].children[0].innerHTML=parseFloat(sonDeger2.toFixed(2));
              var deger3 = document.getElementById(parent).cells[6].children[0].innerHTML;
              var sonDeger3 = parseFloat(deger3.replace(",","."))+list_plus2[2];
              document.getElementById(parent).cells[6].children[0].innerHTML=parseFloat(sonDeger3.toFixed(2));
              var deger4 = document.getElementById(parent).cells[7].children[0].innerHTML;
              var sonDeger4 = parseFloat(deger4.replace(",","."))+list_plus2[3];
              document.getElementById(parent).cells[7].children[0].innerHTML=parseFloat(sonDeger4.toFixed(2));

              var deger0 = document.getElementById(parent).parentNode.rows[1].cells[4].children[0].innerHTML;
              var deger1 = document.getElementById(parent).parentNode.rows[2].cells[4].children[0].innerHTML;
              var deger2 = document.getElementById(parent).parentNode.rows[3].cells[4].children[0].innerHTML;
              var deger3 = document.getElementById(parent).parentNode.rows[4].cells[4].children[0].innerHTML;
              var deger4 = document.getElementById(parent).parentNode.rows[5].cells[4].children[0].innerHTML;
              var deger5 = document.getElementById(parent).parentNode.rows[6].cells[4].children[0].innerHTML;
              var deger6 = document.getElementById(parent).parentNode.rows[7].cells[4].children[0].innerHTML;
              var toplamDegerSon = parseFloat(deger0.replace(",","."))+parseFloat(deger1.replace(",","."))+parseFloat(deger2.replace(",","."))+parseFloat(deger3.replace(",","."))+parseFloat(deger4.replace(",","."))+parseFloat(deger5.replace(",","."))+parseFloat(deger6.replace(",","."));
              document.getElementById(parent).parentNode.rows[8].cells[4].children[0].innerHTML=parseFloat(toplamDegerSon.toFixed(2));

              var deger10 = document.getElementById(parent).parentNode.rows[1].cells[5].children[0].innerHTML;
              var deger11 = document.getElementById(parent).parentNode.rows[2].cells[5].children[0].innerHTML;
              var deger12 = document.getElementById(parent).parentNode.rows[3].cells[5].children[0].innerHTML;
              var deger13 = document.getElementById(parent).parentNode.rows[4].cells[5].children[0].innerHTML;
              var deger14 = document.getElementById(parent).parentNode.rows[5].cells[5].children[0].innerHTML;
              var deger15 = document.getElementById(parent).parentNode.rows[6].cells[5].children[0].innerHTML;
              var deger16 = document.getElementById(parent).parentNode.rows[7].cells[5].children[0].innerHTML;
              var toplamDegerSon2 = parseFloat(deger10.replace(",","."))+parseFloat(deger11.replace(",","."))+parseFloat(deger12.replace(",","."))+parseFloat(deger13.replace(",","."))+parseFloat(deger14.replace(",","."))+parseFloat(deger15.replace(",","."))+parseFloat(deger16.replace(",","."));
              document.getElementById(parent).parentNode.rows[8].cells[5].children[0].innerHTML=parseFloat(toplamDegerSon2.toFixed(2));

              var deger20 = document.getElementById(parent).parentNode.rows[1].cells[6].children[0].innerHTML;
              var deger21 = document.getElementById(parent).parentNode.rows[2].cells[6].children[0].innerHTML;
              var deger22 = document.getElementById(parent).parentNode.rows[3].cells[6].children[0].innerHTML;
              var deger23 = document.getElementById(parent).parentNode.rows[4].cells[6].children[0].innerHTML;
              var deger24 = document.getElementById(parent).parentNode.rows[5].cells[6].children[0].innerHTML;
              var deger25 = document.getElementById(parent).parentNode.rows[6].cells[6].children[0].innerHTML;
              var deger26 = document.getElementById(parent).parentNode.rows[7].cells[6].children[0].innerHTML;
              var toplamDegerSon3 = parseFloat(deger20.replace(",","."))+parseFloat(deger21.replace(",","."))+parseFloat(deger22.replace(",","."))+parseFloat(deger23.replace(",","."))+parseFloat(deger24.replace(",","."))+parseFloat(deger25.replace(",","."))+parseFloat(deger26.replace(",","."));
              document.getElementById(parent).parentNode.rows[8].cells[6].children[0].innerHTML=parseFloat(toplamDegerSon3.toFixed(2));

              var deger30 = document.getElementById(parent).parentNode.rows[1].cells[7].children[0].innerHTML;
              var deger31 = document.getElementById(parent).parentNode.rows[2].cells[7].children[0].innerHTML;
              var deger32 = document.getElementById(parent).parentNode.rows[3].cells[7].children[0].innerHTML;
              var deger33 = document.getElementById(parent).parentNode.rows[4].cells[7].children[0].innerHTML;
              var deger34 = document.getElementById(parent).parentNode.rows[5].cells[7].children[0].innerHTML;
              var deger35 = document.getElementById(parent).parentNode.rows[6].cells[7].children[0].innerHTML;
              var deger36 = document.getElementById(parent).parentNode.rows[7].cells[7].children[0].innerHTML;
              var toplamDegerSon4 = parseFloat(deger30.replace(",","."))+parseFloat(deger31.replace(",","."))+parseFloat(deger32.replace(",","."))+parseFloat(deger33.replace(",","."))+parseFloat(deger34.replace(",","."))+parseFloat(deger35.replace(",","."))+parseFloat(deger36.replace(",","."));
              document.getElementById(parent).parentNode.rows[8].cells[7].children[0].innerHTML=parseFloat(toplamDegerSon4.toFixed(2));
            });
            // yukarısı çalışıyor. Genele tablo satırı ekleyecez. Arkasından firebase toplam calorileri çekecem!!!!!!!!!!!!!!!!!!!!!!! 23 OCAK Çarşamba
            // console.log(column1);
            // console.log(parent);
          }
          else{
          }
      });
      // console.log(foodName+" ASd");


    }else{
      // console.log("qwerty");
    }
  }

  // var name = document.getElementById(event.target.id).innerText.toString();
  // console.log(name);
  $("#accordion :input[type=text]").attr("disabled","true");
}
function searchFood(){
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("span")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}
function searchArchive() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInput2");
  filter = input.value.toUpperCase();
  table = document.getElementById("diyet-tablo2");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function searchMyFood() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInput3");
  filter = input.value.toUpperCase();
  table = document.getElementById("diyet-tablo3");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
var first=true;
function showArchive(){

    if(first==true){
      $("#BesLis").hide();
      $("#MyBesList").hide();
      $("#myFood").empty();
      // $("#MyBesList").empty();
      var tableArsiv = document.getElementById("Arsiv");
      var table1 = document.createElement("table");
      table1.classList.add("table");
      table1.classList.add("table-bordered");
      table1.setAttribute("id","diyet-tablo2");
      // var tbody1 = document.createElement("tbody");
      // tbody1.setAttribute("id","arsivTable");
      // aşağıda listelere click veriyoruz
        var user = firebase.auth().currentUser;
        var referans = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Genel");
        referans.once("value")
        .then(function(snapshot){
          snapshot.forEach(function(childSnapshot){
            var key=childSnapshot.key;
            var tr = document.createElement("tr");
            tr.style="";
            tr.classList.add(key);
            var td1 = document.createElement("td");
            td1.setAttribute("onclick","showArchiveGeneral(this.id);");
            td1.id=key;
            var b = document.createElement("B");
            b.innerHTML=key;
            td1.appendChild(b);
            var td2 = document.createElement("td");
            var span = document.createElement("span");
            span.id=key;
            span.classList.add("fa");
            span.classList.add("fa-fw");
            span.classList.add("fa-trash");
            span.setAttribute("onclick","deleteProgramArchiveGeneral(this.id);");
            td2.appendChild(span);
            tr.appendChild(td1);
            tr.appendChild(td2);
            table1.appendChild(tr);
            // tbody1.appendChild(tr);
          });
        });
        var referans1 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük");
        referans1.once("value")
        .then(function(snapshot){
          snapshot.forEach(function(childSnapshot){

            var key2=childSnapshot.key;
            var tr = document.createElement("tr");
            tr.style="";
            tr.classList.add(key2);
            var td1 = document.createElement("td");
            td1.setAttribute("onclick","showArchiveDay(this.id);");
            td1.id=key2;
            var b = document.createElement("B");
            b.innerHTML=key2;
            td1.appendChild(b);
            var td2 = document.createElement("td");
            var span = document.createElement("span");
            span.id=key2;
            span.classList.add("fa");
            span.classList.add("fa-fw");
            span.classList.add("fa-trash");
            span.setAttribute("onclick","deleteProgramArchiveDay(this.id);");
            td2.appendChild(span);
            tr.appendChild(td1);
            tr.appendChild(td2);
            table1.appendChild(tr);
            // tbody1.appendChild(tr);
            // $("#arsivTable").append("<tr><td class='name'><b>"+key2+"</b></td><td><span class='fa fa-fw fa-trash' onclick='deleteProgramDay();'></span></td></tr>");
            // $('.name').attr('id', key2);

          });
        });

      // table1.appendChild(tr);
      tableArsiv.appendChild(table1);
      first=false;
      $("#BesList").show();
    }else if(first==false){
      return;
    }
}
function showFoodList(){
  first=true;
  $("#BesLis").show();
  $("#BesList").hide();
  $("#MyBesList").hide();
  $("#Arsiv").empty();
  $("#myFood").empty();

}
function showMyFood(){
  first=true;
  $("#BesList").hide();
  $("#myFood").empty();
  // $("#BesList").empty();
  $("#BesLis").hide();
  $("#MyBesList").show();
  $("#Arsiv").empty();
  var tableArsiv = document.getElementById("myFood");
  var table1 = document.createElement("table");
  table1.classList.add("table");
  table1.classList.add("table-bordered");
  table1.setAttribute("id","diyet-tablo3");
  table1.setAttribute("style","width:110%;max-width:200%");
  table1.setAttribute("ondragstart","dragStart(event);");
  // var tbody1 = document.createElement("tbody");
  // tbody1.setAttribute("id","arsivTable");
  // aşağıda listelere click veriyoruz
    var user = firebase.auth().currentUser;
    var referans = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Besinlerim");
    referans.once("value")
    .then(function(snapshot){
      snapshot.forEach(function(childSnapshot){
        var key=childSnapshot.key;
        var f_unit = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Besinlerim/"+key+"/unit").once("value")
        .then(function(snapshot2)
        {
          return snapshot2.val();
        });
        Promise.all([f_unit]).then(function([f_unit]){

          var ref = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Besinlerim/"+key+"/food_name");
          ref.once("value").then(function(ch_sn){
            var f_name = ch_sn.val();
            // console.log(f_name);
            var tr = document.createElement("tr");
            tr.style="";
            tr.classList.add(key);
            var td1 = document.createElement("td");
            td1.id=key;
            var b = document.createElement("B");
            b.id=key
            b.setAttribute("draggable","true");
            b.innerHTML=f_name+" - "+f_unit;
            td1.appendChild(b);
            var td2 = document.createElement("td");
            var span = document.createElement("span");
            span.id=key;
            span.classList.add("fa");
            span.classList.add("fa-fw");
            span.classList.add("fa-trash");
            span.setAttribute("onclick","myFoodDelete(this.id);");
            td2.appendChild(span);
            tr.appendChild(td1);
            tr.appendChild(td2);
            table1.appendChild(tr);
            tableArsiv.appendChild(table1);
          });
        });
      });
    });
}
function closeModal(){
   $("#food_table input:nth-child(1)").val("");
}
function modalSaveFood(){

  swal({
  title: "Oluşturduğunuz Besini Kaydetmek İstediğinizden Emin Misiniz ?",
  text: "",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    if($("#food_table input:nth-child(1)").val()!="" && $("#food_table tr:nth-child(2) input").val()!="" && $("#food_table tr:nth-child(3) input").val()!="" && $("#food_table tr:nth-child(4) input").val()!="" && $("#food_table tr:nth-child(5) input").val()!="" && $("#food_table tr:nth-child(6) input").val()!=""){
      swal("Başarıyla Kaydedildi", {
        icon: "success",
      }).then(function(){
        var user = firebase.auth().currentUser;
        var food_name = $("#food_table input:nth-child(1)").val();
        var food_unit = $("#food_table tr:nth-child(2) input").val();
        var food_protein = $("#food_table tr:nth-child(3) input").val();
        var food_fat= $("#food_table tr:nth-child(4) input").val();
        var food_carbonhydrate = $("#food_table tr:nth-child(5) input").val();
        var food_calory = $("#food_table tr:nth-child(6) input").val();
        var referans = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Besinlerim");
        referans.push ({
          food_name:food_name,
          unit:food_unit,
          protein:food_protein,
          fat:food_fat,
          carbonhydrate:food_carbonhydrate,
          calory:food_calory
        });
        setTimeout(function(){
          $("#showFood").click();
           $("#modal_close").click();
        }, 1000);
      });
    }else{
      swal("Unsuccessful", "Complete the specified fields!", "error");
    }

  } else {
    swal("You have canceled your transaction");
  }
});
}
function myFoodDelete(id){
  var user = firebase.auth().currentUser;

  swal({
    title: "Are You Sure You Want to Delete Your Food?",
    text: "",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((will_delete) => {
    if (will_delete) {
        document.getElementById(id).parentElement.remove();
        var referans = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Besinlerim/"+id);
      referans.remove()
        .then(function(){
          swal("Successfully Deleted!", {
          icon: "success",
          });
        });

    } else {
      swal("Cancel Your Deletion ..");
    }
  });
}
function deleteProgramArchiveDay(id){

  var user = firebase.auth().currentUser;
  var urlParams = new URLSearchParams(window.location.search);
  var advisee_user_id1 = urlParams.get('u');
  var archiveRef3 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük");
  archiveRef3.once("value").then(function(snapshot){
    snapshot.forEach(function(childSnapshot){
      var child2 = childSnapshot.key.toString().trim();
      // console.log(id);
      var proName2=document.getElementsByClassName(id)[0].innerText.toString().trim();
      // console.log(proName2);
      if(proName2 == child2){

        var ref2 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük/"+child2);
        $('#diyet-tablo2 tr').click(function(){
        swal({
          title: "Are You Sure You Want to Delete the Program in Your Archive?",
          text: "",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((will_delete) => {
          if (will_delete) {
            // showPrograms();
              $(this).remove();
            ref2.remove()
              .then(function(){
                $("#programs tr").remove();
                setTimeout(function(){
                  showPrograms();
                }, 1000);
                setTimeout(function(){
                  sortTable();
                }, 2000);
                swal("Successfully Deleted!", {
                icon: "success",
                });
              });

          } else {
            swal("Cancel Your Deletion ..");
          }
        });
        });
      }
    });
    // buraya promise yapacaz sayfayı yenilemek için
  });
}
function deleteProgramArchiveGeneral(id){
  var user = firebase.auth().currentUser;
  var urlParams = new URLSearchParams(window.location.search);
  var advisee_user_id1 = urlParams.get('u');
  var archiveRef3 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Genel");
  archiveRef3.once("value").then(function(snapshot){
    snapshot.forEach(function(childSnapshot){
      var child2 = childSnapshot.key.toString().trim();
      var proName2=document.getElementsByClassName(id)[0].innerText.toString().trim();
      if(proName2 == child2){
        var ref2 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Genel/"+child2);
        $('#diyet-tablo2 tr').click(function(){
        swal({
          title: "Are You Sure You Want to Delete the Program in Your Archive?",
          text: "",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((will_delete) => {
          if (will_delete) {
            $(this).remove();
            ref2.remove()
              .then(function(){
                $("#programs tr").remove();
                setTimeout(function(){
                  showPrograms();
                }, 1000);
                setTimeout(function(){
                  sortTable();
                }, 2000);
                swal("Successfully Deleted!", {
                icon: "success",
              });
              });

          } else {
            swal("Cancel Your Deletion ..");
          }
          });
        });
      }
    });
    // buraya promise yapacaz sayfayı yenilemek için
  });
}
function delete_table_general(element){
  var user = firebase.auth().currentUser;
  var elem = element.parentElement.parentElement.children[0].children[0].innerText;
  // console.log(element.parentElement.parentElement.children[0].children[0].innerText);
  var ref2 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Genel/"+elem);
  swal({
    title: "Are You Sure You Want to Delete the Program in Your Archive?",
    text: "",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((will_delete) => {
    if (will_delete) {
        // $(this).remove();
      ref2.remove()
        .then(function(){
          $("#programs tr").remove();
          setTimeout(function(){
            showPrograms();
          }, 1000);
          swal("Successfully Deleted!", {
          icon: "success",
          });
        });

    } else {
      swal("Cancel Your Deletion ..");
    }
  });
}
function delete_table_daily(element){
  var user = firebase.auth().currentUser;
  var elem = element.parentElement.parentElement.parentElement.children[0].children[0].innerText;
  console.log(elem);
  console.log(element.parentElement.parentElement.children[0].children[0].innerText);
  var ref2 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük/"+elem);
  swal({
    title: "Are You Sure You Want to Delete the Program in Your Archive?",
    text: "",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((will_delete) => {
    if (will_delete) {
        // $(this).remove();
      ref2.remove()
        .then(function(){
          $("#programs tr").remove();
          setTimeout(function(){
            showPrograms();
          }, 1000);
          swal("Successfully Deleted !", {
          icon: "success",
          });
        });

    } else {
      swal("Cancel Your Deletion ..");
    }
  });
}
var counter = 1;
function newBox(id){
  // var number = $("#table1 input").length;
  // console.log(number);
  // console.log("12114124");
  // console.log(id);
  var td1 = document.getElementById(id).parentElement.parentElement.children[2];
  console.log(td1);
  var td2 = document.getElementById(id).parentElement.parentElement.children[3];



  $(document.createElement('INPUT'))
	     .attr("id", 'inpt10' + counter);
       var br = document.createElement("br");
       // br.id="inpuutt1"+counter;
       var span_br = document.createElement("br");
       // span_br.id="inpuutt1" + counter;
	var newTextBoxInput = document.createElement("INPUT");
  newTextBoxInput.setAttribute("disabled","true");
       newTextBoxInput.setAttribute("id","inpuutt1"+counter);
       newTextBoxInput.setAttribute("oninput","dragFood(this.id);");
       newTextBoxInput.setAttribute("type","text");
  var newSpan = document.createElement("span");
	     newSpan.setAttribute("id", "inpuutt1" + counter);
       newSpan.setAttribute("onclick","clearText(this.id);");
       newSpan.classList.add("fa");
       newSpan.classList.add("fa-fw");
       newSpan.classList.add("fa-trash");
  td1.appendChild(br);
	td1.appendChild(newTextBoxInput);
  td2.appendChild(span_br);
  td2.appendChild(newSpan);


	counter++;

}
function clearTextDefault(id){
  var uid = firebase.auth().currentUser.uid;
  del_list = [];
  // foodUnit = [];
  var ele = document.getElementById(id).parentElement.children[id].id;
  console.log(ele);
  var delete_food_name = document.getElementById(ele).value;
  var splitName = delete_food_name.split(" - ");
  document.getElementById(ele).value="";
          var local_foods = JSON.parse(localStorage.getItem("Foods"));
          for (var i = 0; i <= local_foods.length - 1; i++) {
            if(local_foods[i].food_name.toString().trim() == splitName[0].toString().trim() && local_foods[i].unit.toString().trim() == splitName[1].toString().trim()){
              var delete_food_protein = local_foods[i].protein;
              var delete_food_carbonhydrate = local_foods[i].carbonhydrate;
              var delete_food_fat = local_foods[i].fat;
              var delete_food_calory = local_foods[i].calory;
              del_list.push(delete_food_protein);
              del_list.push(delete_food_fat);
              del_list.push(delete_food_carbonhydrate);
              del_list.push(delete_food_calory);
              var protein_span = document.getElementById(id).parentElement.parentElement.children[4].innerText;
              var sonDeger = parseFloat(protein_span.replace(",","."))-parseFloat(del_list[0].replace(",","."));
              document.getElementById(ele).parentElement.parentElement.children[4].children[0].innerHTML=parseFloat(sonDeger.toFixed(2));
              var carbonhydrate_span = document.getElementById(id).parentElement.parentElement.children[5].innerText;
              var sonDeger2 = parseFloat(carbonhydrate_span.replace(",","."))-parseFloat(del_list[1].replace(",","."));
              document.getElementById(ele).parentElement.parentElement.children[5].children[0].innerHTML=parseFloat(sonDeger2.toFixed(2));
              var fat_span = document.getElementById(id).parentElement.parentElement.children[6].innerText;
              var sonDeger3 = parseFloat(fat_span.replace(",","."))-parseFloat(del_list[2].replace(",","."));
              document.getElementById(ele).parentElement.parentElement.children[6].children[0].innerHTML=parseFloat(sonDeger3.toFixed(2));
              var calory_span = document.getElementById(id).parentElement.parentElement.children[7].innerText;
              var sonDeger4 = parseFloat(calory_span.replace(",","."))-parseFloat(del_list[3].replace(",","."));
              document.getElementById(ele).parentElement.parentElement.children[7].children[0].innerHTML=parseFloat(sonDeger4.toFixed(2));

              var toplam_protein = document.getElementById(ele).parentElement.parentElement.parentElement.children[8].children[4].children[0].innerHTML;
              var son_toplam_protein = parseFloat(toplam_protein.replace(",","."))-parseFloat(del_list[0].replace(",","."));
              document.getElementById(ele).parentElement.parentElement.parentElement.children[8].children[4].children[0].innerHTML=parseFloat(son_toplam_protein.toFixed(2));

              var toplam_carbonhydrate = document.getElementById(ele).parentElement.parentElement.parentElement.children[8].children[5].children[0].innerHTML;
              var son_toplam_carbonhydrate = parseFloat(toplam_carbonhydrate.replace(",","."))-parseFloat(del_list[1].replace(",","."));
              document.getElementById(ele).parentElement.parentElement.parentElement.children[8].children[5].children[0].innerHTML=parseFloat(son_toplam_carbonhydrate.toFixed(2));

              var toplam_fat = document.getElementById(ele).parentElement.parentElement.parentElement.children[8].children[6].children[0].innerHTML;
              var son_toplam_fat = parseFloat(toplam_fat.replace(",","."))-parseFloat(del_list[2].replace(",","."));
              document.getElementById(ele).parentElement.parentElement.parentElement.children[8].children[6].children[0].innerHTML=parseFloat(son_toplam_fat.toFixed(2));

              var toplam_calory = document.getElementById(ele).parentElement.parentElement.parentElement.children[8].children[7].children[0].innerHTML;
              var son_toplam_calory = parseFloat(toplam_calory.replace(",","."))-parseFloat(del_list[3].replace(",","."));
              document.getElementById(ele).parentElement.parentElement.parentElement.children[8].children[7].children[0].innerHTML=parseFloat(son_toplam_calory.toFixed(2));
              break;
            }
          }

            console.log("asdfasf");
            var referansS = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim");
            referansS.once("value").then(function(snapshot){
              snapshot.forEach(function(childSnapshot){
                var food_id = childSnapshot.key;
                var f_name = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim/"+food_id+"/food_name").once("value")
                .then(function(snapshot2)
                {
                  return snapshot2.val();
                });
                var f_unit = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim/"+food_id+"/unit").once("value")
                .then(function(snapshot3)
                {
                  return snapshot3.val();
                });
                list_myfood = [];
                list_myfood.push(f_name);
                list_myfood.push(f_unit);
                Promise.all(list_myfood).then(function(list_myfood){
                  // console.log(list_myfood[0]+"--"+list_myfood[1]);
                  // console.log("+++++++");
                  // console.log(splitName[0].toString().trim()+"***"+splitName[1].toString().trim());
                  if(list_myfood[0].toString().trim() == splitName[0].toString().trim() && list_myfood[1].toString().trim() == splitName[1].toString().trim()){
                    console.log("PROMİSE");

                    var f_protein = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim/"+food_id+"/protein").once("value")
                    .then(function(snapshot32)
                    {
                      return snapshot32.val();
                    });
                    var f_fat = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim/"+food_id+"/fat").once("value")
                    .then(function(snapshot33)
                    {
                      return snapshot33.val();
                    });
                    var f_carbonhydrate = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim/"+food_id+"/carbonhydrate").once("value")
                    .then(function(snapshot34)
                    {
                      return snapshot34.val();
                    });
                    var f_calory = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim/"+food_id+"/calory").once("value")
                    .then(function(snapshot35)
                    {
                      return snapshot35.val();
                    });

                    // console.log(f_protein);
                    del_list.push(f_protein);
                    del_list.push(f_fat);
                    del_list.push(f_carbonhydrate);
                    del_list.push(f_calory);
                    Promise.all(del_list).then(function(del_list){
                      console.log(del_list);
                      var protein_span = document.getElementById(id).parentElement.parentElement.children[4].innerText;
                      var sonDeger = parseFloat(protein_span.replace(",","."))-parseFloat(del_list[0].replace(",","."));
                      document.getElementById(ele).parentElement.parentElement.children[4].children[0].innerHTML=parseFloat(sonDeger.toFixed(2));
                      var carbonhydrate_span = document.getElementById(id).parentElement.parentElement.children[5].innerText;
                      var sonDeger2 = parseFloat(carbonhydrate_span.replace(",","."))-parseFloat(del_list[1].replace(",","."));
                      document.getElementById(ele).parentElement.parentElement.children[5].children[0].innerHTML=parseFloat(sonDeger2.toFixed(2));
                      var fat_span = document.getElementById(id).parentElement.parentElement.children[6].innerText;
                      var sonDeger3 = parseFloat(fat_span.replace(",","."))-parseFloat(del_list[2].replace(",","."));
                      document.getElementById(ele).parentElement.parentElement.children[6].children[0].innerHTML=parseFloat(sonDeger3.toFixed(2));
                      var calory_span = document.getElementById(id).parentElement.parentElement.children[7].innerText;
                      var sonDeger4 = parseFloat(calory_span.replace(",","."))-parseFloat(del_list[3].replace(",","."));
                      document.getElementById(ele).parentElement.parentElement.children[7].children[0].innerHTML=parseFloat(sonDeger4.toFixed(2));

                      var toplam_protein = document.getElementById(ele).parentElement.parentElement.parentElement.children[10].children[4].children[0].innerHTML;
                      var son_toplam_protein = parseFloat(toplam_protein.replace(",","."))-parseFloat(del_list[0].replace(",","."));
                      document.getElementById(ele).parentElement.parentElement.parentElement.children[10].children[4].children[0].innerHTML=parseFloat(son_toplam_protein.toFixed(2));

                      var toplam_carbonhydrate = document.getElementById(ele).parentElement.parentElement.parentElement.children[10].children[5].children[0].innerHTML;
                      var son_toplam_carbonhydrate = parseFloat(toplam_carbonhydrate.replace(",","."))-parseFloat(del_list[1].replace(",","."));
                      document.getElementById(ele).parentElement.parentElement.parentElement.children[10].children[5].children[0].innerHTML=parseFloat(son_toplam_carbonhydrate.toFixed(2));

                      var toplam_fat = document.getElementById(ele).parentElement.parentElement.parentElement.children[10].children[6].children[0].innerHTML;
                      var son_toplam_fat = parseFloat(toplam_fat.replace(",","."))-parseFloat(del_list[2].replace(",","."));
                      document.getElementById(ele).parentElement.parentElement.parentElement.children[10].children[6].children[0].innerHTML=parseFloat(son_toplam_fat.toFixed(2));

                      var toplam_calory = document.getElementById(ele).parentElement.parentElement.parentElement.children[10].children[7].children[0].innerHTML;
                      var son_toplam_calory = parseFloat(toplam_calory.replace(",","."))-parseFloat(del_list[3].replace(",","."));
                      document.getElementById(ele).parentElement.parentElement.parentElement.children[10].children[7].children[0].innerHTML=parseFloat(son_toplam_calory.toFixed(2));

                    });
                  }
                });

              });
            });

            // break;

}
function clearText(id){
  // childSnapshot.forEach(function(childSna){
  //   childSna.forEach(function(qwe){
  //     var x = qwe.val();
  //     pro_list.push(x);
  //   });
  var uid = firebase.auth().currentUser.uid;
  console.log("id=="+id);
  del_list = [];
  // foodUnit = [];
  var ele = document.getElementById(id).parentElement.children[id].id;
  console.log(ele);
  var delete_food_name = document.getElementById(ele).value;
  var splitName = delete_food_name.split(" - ");
  document.getElementById(ele).value="";
          var local_foods = JSON.parse(localStorage.getItem("Foods"));
          for (var i = 0; i <= local_foods.length - 1; i++) {
            if(local_foods[i].food_name.toString().trim() == splitName[0].toString().trim() && local_foods[i].unit.toString().trim() == splitName[1].toString().trim()){
              var delete_food_protein = local_foods[i].protein;
              // console.log(delete_food_protein);
              var delete_food_carbonhydrate = local_foods[i].carbonhydrate;
              var delete_food_fat = local_foods[i].fat;
              var delete_food_calory = local_foods[i].calory;
              del_list.push(delete_food_protein);
              del_list.push(delete_food_fat);
              del_list.push(delete_food_carbonhydrate);
              del_list.push(delete_food_calory);
                        var protein_span = document.getElementById(id).parentElement.parentElement.children[4].innerText;
                        var sonDeger = parseFloat(protein_span.replace(",","."))-parseFloat(del_list[0].replace(",","."));
                        document.getElementById(ele).parentElement.parentElement.children[4].children[0].innerHTML=parseFloat(sonDeger.toFixed(2));
                        var carbonhydrate_span = document.getElementById(id).parentElement.parentElement.children[5].innerText;
                        var sonDeger2 = parseFloat(carbonhydrate_span.replace(",","."))-parseFloat(del_list[1].replace(",","."));
                        document.getElementById(ele).parentElement.parentElement.children[5].children[0].innerHTML=parseFloat(sonDeger2.toFixed(2));
                        var fat_span = document.getElementById(id).parentElement.parentElement.children[6].innerText;
                        var sonDeger3 = parseFloat(fat_span.replace(",","."))-parseFloat(del_list[2].replace(",","."));
                        document.getElementById(ele).parentElement.parentElement.children[6].children[0].innerHTML=parseFloat(sonDeger3.toFixed(2));
                        var calory_span = document.getElementById(id).parentElement.parentElement.children[7].innerText;
                        var sonDeger4 = parseFloat(calory_span.replace(",","."))-parseFloat(del_list[3].replace(",","."));
                        document.getElementById(ele).parentElement.parentElement.children[7].children[0].innerHTML=parseFloat(sonDeger4.toFixed(2));

                        var toplam_protein = document.getElementById(ele).parentElement.parentElement.parentElement.children[8].children[4].children[0].innerHTML;
                        var son_toplam_protein = parseFloat(toplam_protein.replace(",","."))-parseFloat(del_list[0].replace(",","."));
                        document.getElementById(ele).parentElement.parentElement.parentElement.children[8].children[4].children[0].innerHTML=parseFloat(son_toplam_protein.toFixed(2));

                        var toplam_carbonhydrate = document.getElementById(ele).parentElement.parentElement.parentElement.children[8].children[5].children[0].innerHTML;
                        var son_toplam_carbonhydrate = parseFloat(toplam_carbonhydrate.replace(",","."))-parseFloat(del_list[1].replace(",","."));
                        document.getElementById(ele).parentElement.parentElement.parentElement.children[8].children[5].children[0].innerHTML=parseFloat(son_toplam_carbonhydrate.toFixed(2));

                        var toplam_fat = document.getElementById(ele).parentElement.parentElement.parentElement.children[8].children[6].children[0].innerHTML;
                        var son_toplam_fat = parseFloat(toplam_fat.replace(",","."))-parseFloat(del_list[2].replace(",","."));
                        document.getElementById(ele).parentElement.parentElement.parentElement.children[8].children[6].children[0].innerHTML=parseFloat(son_toplam_fat.toFixed(2));

                        var toplam_calory = document.getElementById(ele).parentElement.parentElement.parentElement.children[8].children[7].children[0].innerHTML;
                        var son_toplam_calory = parseFloat(toplam_calory.replace(",","."))-parseFloat(del_list[3].replace(",","."));
                        document.getElementById(ele).parentElement.parentElement.parentElement.children[8].children[7].children[0].innerHTML=parseFloat(son_toplam_calory.toFixed(2));

              $("span[id="+ele+"]").remove();
              $("input[id="+ele+"]").remove();
              $("br[id="+ele+"]").remove();
              break;
          }
        }


          var referansS = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim");
          referansS.once("value").then(function(snapshot){
            snapshot.forEach(function(childSnapshot){
              var food_id = childSnapshot.key;
              var f_name = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim/"+food_id+"/food_name").once("value")
              .then(function(snapshot2)
              {
                return snapshot2.val();
              });
              var f_unit = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim/"+food_id+"/unit").once("value")
              .then(function(snapshot3)
              {
                return snapshot3.val();
              });
              list_myfood = [];
              list_myfood.push(f_name);
              list_myfood.push(f_unit);
              Promise.all(list_myfood).then(function(list_myfood){
                // console.log(list_myfood[0]+"--"+list_myfood[1]);
                // console.log("+++++++");
                // console.log(splitName[0].toString().trim()+"***"+splitName[1].toString().trim());
                if(list_myfood[0].toString().trim() == splitName[0].toString().trim() && list_myfood[1].toString().trim() == splitName[1].toString().trim()){


                  var f_protein = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim/"+food_id+"/protein").once("value")
                  .then(function(snapshot32)
                  {
                    return snapshot32.val();
                  });
                  var f_fat = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim/"+food_id+"/fat").once("value")
                  .then(function(snapshot33)
                  {
                    return snapshot33.val();
                  });
                  var f_carbonhydrate = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim/"+food_id+"/carbonhydrate").once("value")
                  .then(function(snapshot34)
                  {
                    return snapshot34.val();
                  });
                  var f_calory = firebase.database().ref("WebUsers/UserInfos/"+uid+"/Besinlerim/"+food_id+"/calory").once("value")
                  .then(function(snapshot35)
                  {
                    return snapshot35.val();
                  });

                  // console.log(f_protein);
                  del_list.push(f_protein);
                  del_list.push(f_fat);
                  del_list.push(f_carbonhydrate);
                  del_list.push(f_calory);
                  Promise.all(del_list).then(function(del_list){
                    console.log(del_list);
                    var protein_span = document.getElementById(id).parentElement.parentElement.children[4].innerText;
                    var sonDeger = parseFloat(protein_span.replace(",","."))-parseFloat(del_list[0].replace(",","."));
                    document.getElementById(ele).parentElement.parentElement.children[4].children[0].innerHTML=parseFloat(sonDeger.toFixed(2));
                    var carbonhydrate_span = document.getElementById(id).parentElement.parentElement.children[5].innerText;
                    var sonDeger2 = parseFloat(carbonhydrate_span.replace(",","."))-parseFloat(del_list[1].replace(",","."));
                    document.getElementById(ele).parentElement.parentElement.children[5].children[0].innerHTML=parseFloat(sonDeger2.toFixed(2));
                    var fat_span = document.getElementById(id).parentElement.parentElement.children[6].innerText;
                    var sonDeger3 = parseFloat(fat_span.replace(",","."))-parseFloat(del_list[2].replace(",","."));
                    document.getElementById(ele).parentElement.parentElement.children[6].children[0].innerHTML=parseFloat(sonDeger3.toFixed(2));
                    var calory_span = document.getElementById(id).parentElement.parentElement.children[7].innerText;
                    var sonDeger4 = parseFloat(calory_span.replace(",","."))-parseFloat(del_list[3].replace(",","."));
                    document.getElementById(ele).parentElement.parentElement.children[7].children[0].innerHTML=parseFloat(sonDeger4.toFixed(2));

                    var toplam_protein = document.getElementById(ele).parentElement.parentElement.parentElement.children[10].children[4].children[0].innerHTML;
                    var son_toplam_protein = parseFloat(toplam_protein.replace(",","."))-parseFloat(del_list[0].replace(",","."));
                    document.getElementById(ele).parentElement.parentElement.parentElement.children[10].children[4].children[0].innerHTML=parseFloat(son_toplam_protein.toFixed(2));

                    var toplam_carbonhydrate = document.getElementById(ele).parentElement.parentElement.parentElement.children[10].children[5].children[0].innerHTML;
                    var son_toplam_carbonhydrate = parseFloat(toplam_carbonhydrate.replace(",","."))-parseFloat(del_list[1].replace(",","."));
                    document.getElementById(ele).parentElement.parentElement.parentElement.children[10].children[5].children[0].innerHTML=parseFloat(son_toplam_carbonhydrate.toFixed(2));

                    var toplam_fat = document.getElementById(ele).parentElement.parentElement.parentElement.children[10].children[6].children[0].innerHTML;
                    var son_toplam_fat = parseFloat(toplam_fat.replace(",","."))-parseFloat(del_list[2].replace(",","."));
                    document.getElementById(ele).parentElement.parentElement.parentElement.children[10].children[6].children[0].innerHTML=parseFloat(son_toplam_fat.toFixed(2));

                    var toplam_calory = document.getElementById(ele).parentElement.parentElement.parentElement.children[10].children[7].children[0].innerHTML;
                    var son_toplam_calory = parseFloat(toplam_calory.replace(",","."))-parseFloat(del_list[3].replace(",","."));
                    document.getElementById(ele).parentElement.parentElement.parentElement.children[10].children[7].children[0].innerHTML=parseFloat(son_toplam_calory.toFixed(2));

          $("span[id="+ele+"]").remove();
          $("input[id="+ele+"]").remove();
                  });
                }else{
                  $("span[id="+ele+"]").remove();
                  $("input[id="+ele+"]").remove();
                }
              });

            });
          });


}
function saveDataArsiv(id){
  var n =  new Date();
  var y = n.getFullYear();
  var m = n.getMonth() + 1;
  var d = n.getDate();
  var now_date = d+"."+m+"."+y;
  if(document.getElementById("checkbox2").checked==true){
    swal({
      title: "You are about to save the nutrition plan that you have prepared to your archive. Are you sure?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((will_save) => {
      if (will_save) {
          swal("Successfully Saved!", {
          icon: "success",
        }).then(function(){
          var user = firebase.auth().currentUser;
          var updatesS = {};

          var updatesS1 = {};

          var updatesS2 = {};

          var updatesS3 = {};

          var updatesS4 = {};

          var updatesS5 = {};

          var updatesS6 = {};

          var updatesS7 = {};

          var number1_1= $("#table1000 input").length;
          var number2_2= $("#table1001 input").length;
          var number3_3= $("#table1002 input").length;
          var number4_4= $("#table1003 input").length;
          var number5_5= $("#table1004 input").length;
          var number6_6= $("#table1005 input").length;
          var number7_7= $("#table1006 input").length;
          var numberOfTables = $('div#empty table').length;
          var name_1 = document.getElementById("programNm").innerText;
          var split_name = name_1.split(" Program ");
          var name = split_name[1];
          console.log(name);
          var refGen8 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Genel/"+name);
          refGen8.set({
            now_date:now_date,
          });
          var j1 = 1;
          var j2 = 1;
          var j3 = 1;
          var j4 = 1;
          var j5 = 1;
          var j6 = 1;
          var j7 = 1;
            $("#table1000 :input").each(function () {
              updatesS1['/'+j1+'_Besin'] =this.value;
              var refe1 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Genel/"+name+"/sabahKahvaltisi");
              refe1.update(updatesS1);
              j1++;
            });
            $("#table1001 :input").each(function () {
              updatesS2['/'+j2+'_Besin'] =this.value;
              var refe2 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Genel/"+name+"/birinciAraOgun");
              refe2.update(updatesS2);
              j2++;
            });
            $("#table1002 :input").each(function () {
              updatesS3['/'+j3+'_Besin'] =this.value;
              var refe3 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Genel/"+name+"/ogleYemegi");
              refe3.update(updatesS3);
              j3++;
            });
            $("#table1003 :input").each(function () {
              updatesS4['/'+j4+'_Besin'] =this.value;
              var refe4 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Genel/"+name+"/ikinciAraOgun");
              refe4.update(updatesS4);
              j4++;
            });
            $("#table1004 :input").each(function () {
              updatesS5['/'+j5+'_Besin'] =this.value;
              var refe5 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Genel/"+name+"/aksamYemegi");
              refe5.update(updatesS5);
              j5++;
            });
            $("#table1005 :input").each(function () {
              updatesS6['/'+j6+'_Besin'] =this.value;
              var refe6 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Genel/"+name+"/ucuncuAraOgun");
              refe6.update(updatesS6);
              j6++;
            });
            $("#table1006 :input").each(function () {
              updatesS7['/'+j7+'_Besin'] =this.value;
              var refe7 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Genel/"+name+"/alternatif");
              refe7.update(updatesS7);
              j7++;
            });
          // updatesS['/sabahKahvaltisi'] = $('#inpt11').val();
          updatesS['/sabahKahvaltisiProtein'] = $('#span1').text();
          updatesS['/sabahKahvaltisiFat'] = $('#span2').text();
          updatesS['/sabahKahvaltisiCarbonhydrate'] = $('#span3').text();
          updatesS['/sabahKahvaltisiCalory'] = $('#span4').text();
          // updatesS['/birinciAraOgun'] = $('#inpt12').val();
          updatesS['/birinciAraOgunProtein'] = $('#span11').text();
          updatesS['/birinciAraOgunFat'] = $('#span12').text();
          updatesS['/birinciAraOgunCarbonhydrate'] = $('#span13').text();
          updatesS['/birinciAraOgunCalory'] = $('#span14').text();
          // updatesS['/ogleYemegi'] = $('#inpt13').val();
          updatesS['/ogleYemegiProtein'] = $('#span21').text();
          updatesS['/ogleYemegiFat'] = $('#span22').text();
          updatesS['/ogleYemegiCarbonhydrate'] = $('#span23').text();
          updatesS['/ogleYemegiCalory'] = $('#span24').text();
          // updatesS['/ikinciAraOgun'] = document.getElementById("inpt14").value;
          updatesS['/ikinciAraOgunProtein'] = $('#span31').text();
          updatesS['/ikinciAraOgunFat'] = $('#span32').text();
          updatesS['/ikinciAraOgunCarbonhydrate'] = $('#span33').text();
          updatesS['/ikinciAraOgunCalory'] = $('#span34').text();
          // updatesS['/aksamYemegi'] = document.getElementById("inpt15").value;
          updatesS['/aksamYemegiProtein'] = $('#span41').text();
          updatesS['/aksamYemegiFat'] = $('#span42').text();
          updatesS['/aksamYemegiCarbonhydrate'] = $('#span43').text();
          updatesS['/aksamYemegiCalory'] = $('#span44').text();
          // updatesS['/ucuncuAraOgun'] = document.getElementById("inpt16").value;
          updatesS['/ucuncuAraOgunProtein'] = $('#span51').text();
          updatesS['/ucuncuAraOgunFat'] = $('#span52').text();
          updatesS['/ucuncuAraOgunCarbonhydrate'] = $('#span53').text();
          updatesS['/ucuncuAraOgunCalory'] = $('#span54').text();
          // updatesS['/alternatif'] = document.getElementById("inpt17").value;
          updatesS['/alternatifProtein'] = $('#span61').text();
          updatesS['/alternatifFat'] = $('#span62').text();
          updatesS['/alternatifCarbonhydrate'] = $('#span63').text();
          updatesS['/alternatifCalory'] = $('#span64').text();
          updatesS['/toplamProtein'] = $('#span73').text();
          updatesS['/toplamFat'] = $('#span72').text();
          updatesS['/toplamCarbonhydrate'] = $('#span73').text();
          updatesS['/toplamCalory'] = $('#span74').text();
          var ref_19 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Genel/"+name);
          ref_19.update(updatesS);

          $("#programs tr").remove();
          setTimeout(function(){
            showPrograms();
          }, 1000);
          setTimeout(function(){
            sortTable();
          }, 2000);
        });
      } else {
        swal("Cancel Your Registration ..");
      }
    });
}else if(document.getElementById("checkbox1").checked==true){

  swal({
    title: "You are about to save the nutrition plan that you have prepared to your archive. Are you sure?",
    text: "",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((will_save) => {
    if (will_save) {
        swal("Successfully Saved!", {
        icon: "success",
      }).then(function(){
        var numberOfTables = $('div#empty table').length;
        // console.log(numberOfTables);
        var name_1 = document.getElementById("programNm").innerText;
        var split_name = name_1.split(" Program ");
        var name = split_name[1];
        console.log(name);
        var user = firebase.auth().currentUser;
        var urlParams = new URLSearchParams(window.location.search);
        var u = urlParams.get('u');
        var updates = {};

        var updatesDate = {};
        var updatesNowDate = {};

        var x = $('#empty').find('label').length;
        x=x/8;
        // console.log(x);
        updatesNowDate['/now_date'] = now_date;
        updatesDate['/number_of_day'] = numberOfTables;
        console.log(name);
        for(var i=0;i<x;i++){
          var updates1 = {};
          var updates2 = {};
          var updates3 = {};
          var updates4 = {};
          var updates5 = {};
          var updates6 = {};
          var updates7 = {};
          var node1 = document.getElementById("tableE"+i).rows[1].cells[4].innerText;
          var node2 = document.getElementById("tableE"+i).rows[1].cells[5].innerText;
          var node3 = document.getElementById("tableE"+i).rows[1].cells[6].innerText;
          var node4 = document.getElementById("tableE"+i).rows[1].cells[7].innerText;

          var node5 = document.getElementById("tableE"+i).rows[2].cells[4].innerText;
          var node6 = document.getElementById("tableE"+i).rows[2].cells[5].innerText;
          var node7 = document.getElementById("tableE"+i).rows[2].cells[6].innerText;
          var node8 = document.getElementById("tableE"+i).rows[2].cells[7].innerText;

          var node9 = document.getElementById("tableE"+i).rows[3].cells[4].innerText;
          var node10 = document.getElementById("tableE"+i).rows[3].cells[5].innerText;
          var node11 = document.getElementById("tableE"+i).rows[3].cells[6].innerText;
          var node12 = document.getElementById("tableE"+i).rows[3].cells[7].innerText;

          var node13 = document.getElementById("tableE"+i).rows[4].cells[4].innerText;
          var node14 = document.getElementById("tableE"+i).rows[4].cells[5].innerText;
          var node15 = document.getElementById("tableE"+i).rows[4].cells[6].innerText;
          var node16 = document.getElementById("tableE"+i).rows[4].cells[7].innerText;

          var node17 = document.getElementById("tableE"+i).rows[5].cells[4].innerText;
          var node18 = document.getElementById("tableE"+i).rows[5].cells[5].innerText;
          var node19 = document.getElementById("tableE"+i).rows[5].cells[6].innerText;
          var node20 = document.getElementById("tableE"+i).rows[5].cells[7].innerText;

          var node21 = document.getElementById("tableE"+i).rows[6].cells[4].innerText;
          var node22 = document.getElementById("tableE"+i).rows[6].cells[5].innerText;
          var node23 = document.getElementById("tableE"+i).rows[6].cells[6].innerText;
          var node24 = document.getElementById("tableE"+i).rows[6].cells[7].innerText;

          var node25 = document.getElementById("tableE"+i).rows[7].cells[4].innerText;
          var node26 = document.getElementById("tableE"+i).rows[7].cells[5].innerText;
          var node27 = document.getElementById("tableE"+i).rows[7].cells[6].innerText;
          var node28 = document.getElementById("tableE"+i).rows[7].cells[7].innerText;

          var node29 = document.getElementById("tableE"+i).rows[8].cells[4].innerText;
          var node30 = document.getElementById("tableE"+i).rows[8].cells[5].innerText;
          var node31 = document.getElementById("tableE"+i).rows[8].cells[6].innerText;
          var node32 = document.getElementById("tableE"+i).rows[8].cells[7].innerText;
          var j1 = 1;
          $("#tablee"+((8*i)+1)+" :input").each(function () {
            updates1['/'+j1+'_Besin'] = this.value;
            var day = i+1+"_gün";
            var ref1636 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük/"+name+"/"+day+"/sabahKahvaltisi");
            ref1636.update(updates1);
            j1++;
          });


          var j2 = 1;
          $("#tablee"+((8*i)+2)+" :input").each(function () {
            updates2['/'+j2+'_Besin'] = this.value;
            var day = i+1+"_gün";
            var ref2 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük/"+name+"/"+day+"/birinciAraOgun");
            ref2.update(updates2);
            j2++;
          });


          var j3 = 1;
          $("#tablee"+((8*i)+3)+" :input").each(function () {
            updates3['/'+j3+'_Besin'] = this.value;
            var day = i+1+"_gün";
            var ref3 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük/"+name+"/"+day+"/ogleYemegi");
            ref3.update(updates3);
            j3++;
          });


          var j4 = 1;
          $("#tablee"+((8*i)+4)+" :input").each(function () {
            updates4['/'+j4+'_Besin'] = this.value;
            var day = i+1+"_gün";
            var ref4 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük/"+name+"/"+day+"/ikinciAraOgun");
            ref4.update(updates4);
            j4++;
          });


          var j5 = 1;
          $("#tablee"+((8*i)+5)+" :input").each(function () {
            updates5['/'+j5+'_Besin'] = this.value;
            var day = i+1+"_gün";
            var ref5 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük/"+name+"/"+day+"/aksamYemegi");
            ref5.update(updates5);
            j5++;
          });


          var j6 = 1;
          $("#tablee"+((8*i)+6)+" :input").each(function () {
            updates6['/'+j6+'_Besin'] = this.value;
            var day = i+1+"_gün";
            var ref6 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük/"+name+"/"+day+"/ucuncuAraOgun");
            ref6.update(updates6);
            j6++;
          });


          var j7 = 1;
          $("#tablee"+((8*i)+7)+" :input").each(function () {
            updates7['/'+j7+'_Besin'] = this.value;
            var day = i+1+"_gün";
            var ref7 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük/"+name+"/"+day+"/alternatif");
            ref7.update(updates7);
            j7++;
          });

          // updates['/sabahKahvaltisi'] = $('#inpt1'+i).val();
          updates['/sabahKahvaltisiProtein'] = node1;
          updates['/sabahKahvaltisiFat'] = node2;
          updates['/sabahKahvaltisiCarbonhydrate'] = node3;
          updates['/sabahKahvaltisiCalory'] = node4;
          // updates['/birinciAraOgun'] = $('#inpt2'+i).val();
          updates['/birinciAraOgunProtein'] = node5;
          updates['/birinciAraOgunFat'] = node6;
          updates['/birinciAraOgunCarbonhydrate'] = node7;
          updates['/birinciAraOgunCalory'] = node8;
          // updates['/ogleYemegi'] = $('#inpt3'+i).val();
          updates['/ogleYemegiProtein'] = node9;
          updates['/ogleYemegiFat'] = node10;
          updates['/ogleYemegiCarbonhydrate'] = node11;
          updates['/ogleYemegiCalory'] = node12;
          // updates['/ikinciAraOgun'] = document.getElementById("inpt4"+i).value;
          updates['/ikinciAraOgunProtein'] = node13;
          updates['/ikinciAraOgunFat'] = node14;
          updates['/ikinciAraOgunCarbonhydrate'] = node15;
          updates['/ikinciAraOgunCalory'] = node16;
          // updates['/aksamYemegi'] = document.getElementById("inpt5"+i).value;
          updates['/aksamYemegiProtein'] = node17;
          updates['/aksamYemegiFat'] = node18;
          updates['/aksamYemegiCarbonhydrate'] = node19;
          updates['/aksamYemegiCalory'] = node20;
          // updates['/ucuncuAraOgun'] = document.getElementById("inpt6"+i).value;
          updates['/ucuncuAraOgunProtein'] = node21;
          updates['/ucuncuAraOgunFat'] = node22;
          updates['/ucuncuAraOgunCarbonhydrate'] = node23;
          updates['/ucuncuAraOgunCalory'] = node24;
          // updates['/alternatif'] = document.getElementById("inpt7"+i).value;
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
          var ref35 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük/"+name);
          ref35.update(updatesNowDate);
        }
        $("#programs tr").remove();
        setTimeout(function(){
          showPrograms();
        }, 1000);
        setTimeout(function(){
          sortTable();
        }, 2000);
      });
    } else {
      swal("Save was cancelled ..");
    }
  });
}
}
// ing çevrilecek
function showArchiveGeneral(id){
  var user = firebase.auth().currentUser;
  var archiveRef = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Genel");
  archiveRef.once("value").then(function(snapshot){
    snapshot.forEach(function(childSnapshot){
      // console.log("proname "+ proName);
      // console.log("snapshotname "+ childSnapshot.key);
      var child = childSnapshot.key.toString().trim();
      // console.log(id);
      // var proName=document.getElementById(id).innerText.toString().trim();
      // console.log(child+" asdas");
      // console.log(proname);
      if(id == child){

        // console.log("asfas");
        // var refe1 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Genel/"+child);
        // refe1.once("value").then(function(snapshotPro){
        //   snapshotPro.forEach(function(child_snap){
        //     var random = child_snap.key.toString().trim();
            // console.log(random);

            var ref2 = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Genel/"+child);
            ref2.once("value").then(function(childSnap){
              program_infos = [];
              childSnap.forEach(function(childSnapshotPro){
                // var name1=childSnapshotPro.key;
                // console.log(name1);
                var food = childSnapshotPro.val();
                program_infos.push(food);
              });
              Promise.all(program_infos).then(function(program_infos)
              {
                for (var a=0; a<program_infos.length; a+=40)
                {
                  // console.log(program_infos);
                  $("#addSend").hide();
                  $("#gunGen").show();
                  $('#accordion div').hide('');
                  $("#addSendDaily").hide();
                  $("#addSendGeneral").show();
                  $("#hazırProgram").remove();
                  $(".tarih").remove();
                  $("#BesList").show();
                  var tableProGen = document.getElementById("accordion");
                  // document.getElementById('out').className = "col-md-12";
                  var tableDiv = document.createElement("div");
                  tableDiv.classList.add("tarih")
                  var formGen = document.createElement("form");
                  var kalın = document.createElement("b");
                  var br90 = document.createElement("br");
                  var labelTitle = document.createElement("label");
                  labelTitle.classList.add("titleBaslık");
                  labelTitle.id=id;
                  labelTitle.innerHTML=id+" İsimli Program";
                  var labelGen = document.createElement("label");
                  labelGen.classList.add("tarih");
                  // labelGen.id=program_infos[a+15];
                  labelGen.innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspGENEL PROGRAM";
                  labelGen.setAttribute("style","color:red;font-weight:bold");
                  var br11= document.createElement("br");
                  var tableGen = document.createElement("table");
                  tableGen.id="table";
                  var tr = document.createElement("tr");
                  var th1 = document.createElement("th");
                  th1.setAttribute("style","color#2d2e82;font-weight:bold;text-align:center;");
                  th1.innerHTML="Öğünler";
                  var th1_1 = document.createElement("th");
                  th1_1.setAttribute("style","color:#2d2e82;font-weight:bold;text-align:center;");
                  th1_1.innerHTML="";
                  var th2 = document.createElement("th");
                  th2.setAttribute("style","color#2d2e82;font-weight:bold;text-align:center;");
                  th2.innerHTML="Besinler";
                  var th2_1 = document.createElement("th");
                  th2_1.setAttribute("style","color:#2d2e82;font-weight:bold;text-align:center;");
                  th2_1.innerHTML="";
                  var th3 = document.createElement("th");
                  th3.setAttribute("style","color#2d2e82;font-weight:bold;text-align:center;");
                  th3.innerHTML="Protein";
                  var th4 = document.createElement("th");
                  th4.setAttribute("style","color#2d2e82;font-weight:bold;text-align:center;");
                  th4.innerHTML="Yağ";
                  var th5 = document.createElement("th");
                  th5.setAttribute("style","color#2d2e82;font-weight:bold;text-align:center;");
                  th5.innerHTML="Karbonhidrat";
                  var th6 = document.createElement("th");
                  th6.setAttribute("style","color#2d2e82;font-weight:bold;text-align:center;");
                  th6.innerHTML="Kalori";
                  var label11 = document.createElement("label");
                  label11.id="label11";
                  label11.innerHTML="Sabah kahvaltısı";
                  var tr2 = document.createElement("tr");
                  tr2.id="table10";
                  var i_1 = document.createElement("i");
                  i_1.id="spn11";
                  i_1.classList.add("fa");
                  i_1.classList.add("fa-fw");
                  i_1.classList.add("fa-plus");
                  i_1.setAttribute("onclick","newBox(this.id);");
                  var tr2_td1= document.createElement("td");
                  tr2_td1.setAttribute("style","border:none;");
                  var tr2_td1_1= document.createElement("td");
                  tr2_td1_1.setAttribute("style","border:none;");
                  tr2_td1.appendChild(label11);
                  tr2_td1_1.appendChild(i_1);
                  var tr2_td2=document.createElement("td");
                  tr2_td2.setAttribute("style","border:none;");
                  var tr2_td2_1 = document.createElement("td");
                  tr2_td2_1.setAttribute("style","border:none;");
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
                  // var input11 = document.createElement("TEXTAREA");
                  // // input11.setAttribute("type","text");
                  // input11.setAttribute("id","inpuut11");
                  // input11.setAttribute("oninput","dragFood(this.id);");
                  // input11.value=program_infos[a+26];
                  // // input11.classList.add("clearable");
                  // tr2_td2.appendChild(input11);
                  var tr2_td3= document.createElement("td");
                  tr2_td3.setAttribute("style","width:100px;border:none");
                  var tr2_span1 = document.createElement("span");
                  tr2_span1.id="span1";
                  tr2_span1.classList.add("badge");
                  tr2_span1.classList.add("badge-pill");
                  tr2_span1.classList.add("badge-warning");
                  tr2_span1.innerHTML=program_infos[a+30];
                  tr2_td3.appendChild(tr2_span1);
                  var tr2_td4= document.createElement("td");
                  tr2_td4.setAttribute("style","width:100px;border:none");
                  var tr2_span2 = document.createElement("span");
                  tr2_span2.id="span2";
                  tr2_span2.classList.add("badge");
                  tr2_span2.classList.add("badge-pill");
                  tr2_span2.classList.add("badge-success");
                  tr2_span2.innerHTML=program_infos[a+29];
                  tr2_td4.appendChild(tr2_span2);
                  var tr2_td5= document.createElement("td");
                  tr2_td5.setAttribute("style","width:120px;border:none");
                  var tr2_span3 = document.createElement("span");
                  tr2_span3.id="span3";
                  tr2_span3.classList.add("badge");
                  tr2_span3.classList.add("badge-pill");
                  tr2_span3.classList.add("badge-danger");
                  tr2_span3.innerHTML=program_infos[a+28];
                  tr2_td5.appendChild(tr2_span3);
                  var tr2_td6= document.createElement("td");
                  tr2_td6.setAttribute("style","width:100px;border:none");
                  var tr2_span4= document.createElement("span");
                  tr2_span4.id="span4";
                  tr2_span4.classList.add("badge");
                  tr2_span4.classList.add("badge-pill");
                  tr2_span4.classList.add("badge-primary");
                  tr2_span4.innerHTML=program_infos[a+27];
                  tr2_td6.appendChild(tr2_span4);
                  var br12= document.createElement("br");
                  var label12 = document.createElement("label");
                  label12.id="label12";
                  label12.innerHTML="1.Ara Öğün";
                  var tr3 = document.createElement("tr");
                  tr3.id="table11";
                  var i_2 = document.createElement("i");
                  i_2.id="spn12";
                  i_2.classList.add("fa");
                  i_2.classList.add("fa-fw");
                  i_2.classList.add("fa-plus");
                  i_2.setAttribute("onclick","newBox(this.id);");
                  var tr3_td1 = document.createElement("td");
                  tr3_td1.setAttribute("style","border:none;");
                  var tr3_td1_1 = document.createElement("td");
                  tr3_td1_1.setAttribute("style","border:none;");
                  tr3_td1.appendChild(label12);
                  tr3_td1_1.appendChild(i_2);
                  // var input12 = document.createElement("TEXTAREA");
                  // // input12.setAttribute("type","text");
                  // input12.setAttribute("id","inpuut12");
                  // input12.setAttribute("oninput","dragFood(this.id);");
                  // input12.value=program_infos[a+10];
                  var tr3_td2=document.createElement("td");
                  tr3_td2.setAttribute("style","border:none;");
                  var tr3_td2_1 = document.createElement("td");
                  tr3_td2_1.setAttribute("style","border:none;");
                  var br3 = document.createElement("br");
                  var span_br3 = document.createElement("br");
                  var newTextBoxInput22 = document.createElement("INPUT");
                  newTextBoxInput22.setAttribute("disabled","true");
                       newTextBoxInput22.setAttribute("id","inpttt10");
                       newTextBoxInput22.value=program_infos[10]["1_Besin"];
                       newTextBoxInput22.setAttribute("oninput","dragFood(this.id);");
                       newTextBoxInput22.setAttribute("type","text");
                  var newSpan22 = document.createElement("span");
                       newSpan22.setAttribute("id", "inpttt10");
                       newSpan22.setAttribute("onclick","clearTextDefault(this.id);");
                       newSpan22.classList.add("fa");
                       newSpan22.classList.add("fa-fw");
                       newSpan22.classList.add("fa-trash");
                       tr3_td2.appendChild(br3);
                    tr3_td2.appendChild(newTextBoxInput22);
                    tr3_td2_1.appendChild(span_br3);
                    tr3_td2_1.appendChild(newSpan22);
                  var line2 = Object.keys(program_infos[10]).length;
                  for(var t=2;t<=line2;t++){
                    var br4 = document.createElement("br");
                    var span_br4 = document.createElement("br");
                    var newTextBoxInput2 = document.createElement("INPUT");
                    newTextBoxInput2.setAttribute("disabled","true");
                         newTextBoxInput2.setAttribute("id","inpttt1"+t);
                         newTextBoxInput2.value=program_infos[10][t.toString() + "_Besin"];
                         newTextBoxInput2.setAttribute("oninput","dragFood(this.id);");
                         newTextBoxInput2.setAttribute("type","text");
                    var newSpan2 = document.createElement("span");
                         newSpan2.setAttribute("id", "inpttt1" + t);
                         newSpan2.setAttribute("onclick","clearText(this.id);");
                         newSpan2.classList.add("fa");
                         newSpan2.classList.add("fa-fw");
                         newSpan2.classList.add("fa-trash");
                         tr3_td2.appendChild(br4);
                      tr3_td2.appendChild(newTextBoxInput2);
                      tr3_td2_1.appendChild(span_br4);
                      tr3_td2_1.appendChild(newSpan2);
                  }
                  // input12.classList.add("clearable");
                  // var tr3_td2=document.createElement("td");
                  // tr3_td2.setAttribute("style","border:none;");
                  // tr3_td2.appendChild(input12);
                  var tr3_td3= document.createElement("td");
                  tr3_td3.setAttribute("style","border:none;");
                  var tr3_span1 = document.createElement("span");
                  tr3_span1.id="span11";
                  tr3_span1.classList.add("badge");
                  tr3_span1.classList.add("badge-pill");
                  tr3_span1.classList.add("badge-warning");
                  tr3_span1.innerHTML=program_infos[a+14];
                  tr3_td3.appendChild(tr3_span1);
                  var tr3_td4= document.createElement("td");
                  tr3_td4.setAttribute("style","border:none;");
                  var tr3_span2 = document.createElement("span");
                  tr3_span2.id="span12";
                  tr3_span2.classList.add("badge");
                  tr3_span2.classList.add("badge-pill");
                  tr3_span2.classList.add("badge-success");
                  tr3_span2.innerHTML=program_infos[a+13];
                  tr3_td4.appendChild(tr3_span2);
                  var tr3_td5= document.createElement("td");
                  tr3_td5.setAttribute("style","border:none;");
                  var tr3_span3 = document.createElement("span");
                  tr3_span3.id="span13";
                  tr3_span3.classList.add("badge");
                  tr3_span3.classList.add("badge-pill");
                  tr3_span3.classList.add("badge-danger");
                  tr3_span3.innerHTML=program_infos[a+12];
                  tr3_td5.appendChild(tr3_span3);
                  var tr3_td6= document.createElement("td");
                  tr3_td6.setAttribute("style","border:none;");
                  var tr3_span4 = document.createElement("span");
                  tr3_span4.id="span14";
                  tr3_span4.classList.add("badge");
                  tr3_span4.classList.add("badge-pill");
                  tr3_span4.classList.add("badge-primary");
                  tr3_span4.innerHTML=program_infos[a+11];
                  tr3_td6.appendChild(tr3_span4);
                  var br13= document.createElement("br");
                  var label13 = document.createElement("label");
                  label13.id="label13";
                  label13.innerHTML="Öğle Yemeği";
                  var tr4 = document.createElement("tr");
                  tr4.id="table12";
                  var i_3 = document.createElement("i");
                  i_3.id="spn13";
                  i_3.classList.add("fa");
                  i_3.classList.add("fa-fw");
                  i_3.classList.add("fa-plus");
                  i_3.setAttribute("onclick","newBox(this.id);");
                  var tr4_td1 = document.createElement("td");
                  tr4_td1.setAttribute("style","border:none;");
                  var tr4_td1_1 = document.createElement("td");
                  tr4_td1_1.setAttribute("style","border:none;");
                  tr4_td1.appendChild(label13);
                  tr4_td1_1.appendChild(i_3);
                  // var input13 = document.createElement("TEXTAREA");
                  // // input13.setAttribute("type","text");
                  // input13.setAttribute("id","inpuut13");
                  // input13.setAttribute("oninput","dragFood(this.id);");
                  // input13.value=program_infos[a+21];
                  // // input13.classList.add("clearable");
                  // var tr4_td2=document.createElement("td");
                  // tr4_td2.setAttribute("style","border:none;");
                  // tr4_td2.appendChild(input13);
                  var tr4_td2=document.createElement("td");
                  tr4_td2.setAttribute("style","border:none;");
                  var tr4_td2_1 = document.createElement("td");
                  tr4_td2_1.setAttribute("style","border:none;");
                  var br5 = document.createElement("br");
                  var span_br5 = document.createElement("br");
                  var newTextBoxInput33 = document.createElement("INPUT");
                  newTextBoxInput33.setAttribute("disabled","true");
                       newTextBoxInput33.setAttribute("id","inptttt10");
                       newTextBoxInput33.value=program_infos[21]["1_Besin"];
                       newTextBoxInput33.setAttribute("oninput","dragFood(this.id);");
                       newTextBoxInput33.setAttribute("type","text");
                  var newSpan33 = document.createElement("span");
                       newSpan33.setAttribute("id", "inptttt10");
                       newSpan33.setAttribute("onclick","clearText(this.id);");
                       newSpan33.classList.add("fa");
                       newSpan33.classList.add("fa-fw");
                       newSpan33.classList.add("fa-trash");
                       tr4_td2.appendChild(br5);
                    tr4_td2.appendChild(newTextBoxInput33);
                    tr4_td2_1.appendChild(span_br5);
                    tr4_td2_1.appendChild(newSpan33);
                  var line3 = Object.keys(program_infos[21]).length;
                  for(var p=2;p<=line3;p++){
                    var br6 = document.createElement("br");
                    var span_br6 = document.createElement("br");
                    var newTextBoxInput3 = document.createElement("INPUT");
                    newTextBoxInput3.setAttribute("disabled","true");
                         newTextBoxInput3.setAttribute("id","inptttt1"+p);
                         newTextBoxInput3.value=program_infos[21][p.toString() + "_Besin"];
                         newTextBoxInput3.setAttribute("oninput","dragFood(this.id);");
                         newTextBoxInput3.setAttribute("type","text");
                    var newSpan3 = document.createElement("span");
                         newSpan3.setAttribute("id", "inptttt1" + p);
                         newSpan3.setAttribute("onclick","clearText(this.id);");
                         newSpan3.classList.add("fa");
                         newSpan3.classList.add("fa-fw");
                         newSpan3.classList.add("fa-trash");
                         tr4_td2.appendChild(br6);
                      tr4_td2.appendChild(newTextBoxInput3);
                      tr4_td2_1.appendChild(span_br6);
                      tr4_td2_1.appendChild(newSpan3);
                  }
                  var tr4_td3= document.createElement("td");
                  tr4_td3.setAttribute("style","border:none;");
                  var tr4_span1 = document.createElement("span");
                  tr4_span1.id="span21";
                  tr4_span1.classList.add("badge");
                  tr4_span1.classList.add("badge-pill");
                  tr4_span1.classList.add("badge-warning");
                  tr4_span1.innerHTML=program_infos[a+25];
                  tr4_td3.appendChild(tr4_span1);
                  var tr4_td4= document.createElement("td");
                  tr4_td4.setAttribute("style","border:none;");
                  var tr4_span2 = document.createElement("span");
                  tr4_span2.id="span22";
                  tr4_span2.classList.add("badge");
                  tr4_span2.classList.add("badge-pill");
                  tr4_span2.classList.add("badge-success");
                  tr4_span2.innerHTML=program_infos[a+24];
                  tr4_td4.appendChild(tr4_span2);
                  var tr4_td5= document.createElement("td");
                  tr4_td5.setAttribute("style","border:none;");
                  var tr4_span3 = document.createElement("span");
                  tr4_span3.id="span23";
                  tr4_span3.classList.add("badge");
                  tr4_span3.classList.add("badge-pill");
                  tr4_span3.classList.add("badge-danger");
                  tr4_span3.innerHTML=program_infos[a+23];
                  tr4_td5.appendChild(tr4_span3);
                  var tr4_td6= document.createElement("td");
                  tr4_td6.setAttribute("style","border:none;");
                  var tr4_span4 = document.createElement("span");
                  tr4_span4.id="span24";
                  tr4_span4.classList.add("badge");
                  tr4_span4.classList.add("badge-pill");
                  tr4_span4.classList.add("badge-primary");
                  tr4_span4.innerHTML=program_infos[a+22];
                  tr4_td6.appendChild(tr4_span4);
                  var br14= document.createElement("br");
                  var label14 = document.createElement("label");
                  label14.id="label14";
                  label14.innerHTML="2.Ara Öğün";
                  var tr5 = document.createElement("tr");
                  tr5.id="table13";
                  var i_4 = document.createElement("i");
                  i_4.id="spn14";
                  i_4.classList.add("fa");
                  i_4.classList.add("fa-fw");
                  i_4.classList.add("fa-plus");
                  i_4.setAttribute("onclick","newBox(this.id);");
                  var tr5_td1 = document.createElement("td");
                  tr5_td1.setAttribute("style","border:none;");
                  var tr5_td1_1 = document.createElement("td");
                  tr5_td1_1.setAttribute("style","border:none;");
                  tr5_td1.appendChild(label14);
                  tr5_td1_1.appendChild(i_4);
                  // var input14 = document.createElement("TEXTAREA");
                  // // input14.setAttribute("type","text");
                  // input14.setAttribute("id","inpuut14");
                  // input14.setAttribute("oninput","dragFood(this.id);");
                  // input14.value=program_infos[a+16];
                  // // input14.classList.add("clearable");
                  // var tr5_td2 = document.createElement("td");
                  // tr5_td2.setAttribute("style","border:none;");
                  // tr5_td2.appendChild(input14);
                  var tr5_td2 = document.createElement("td");
                  tr5_td2.setAttribute("style","border:none;");
                  var tr5_td2_1 = document.createElement("td");
                  tr5_td2_1.setAttribute("style","border:none;");
                  var br7 = document.createElement("br");
                  var span_br7 = document.createElement("br");
                  var newTextBoxInput44= document.createElement("INPUT");
                  newTextBoxInput44.setAttribute("disabled","true");
                       newTextBoxInput44.setAttribute("id","inpttttt10");
                       newTextBoxInput44.value=program_infos[15]["1_Besin"];
                       newTextBoxInput44.setAttribute("oninput","dragFood(this.id);");
                       newTextBoxInput44.setAttribute("type","text");
                  var newSpan44 = document.createElement("span");
                       newSpan44.setAttribute("id", "inpttttt10");
                       newSpan44.setAttribute("onclick","clearTextDefault(this.id);");
                       newSpan44.classList.add("fa");
                       newSpan44.classList.add("fa-fw");
                       newSpan44.classList.add("fa-trash");
                       tr5_td2.appendChild(br7);
                    tr5_td2.appendChild(newTextBoxInput44);
                    tr5_td2_1.appendChild(span_br7);
                    tr5_td2_1.appendChild(newSpan44);
                  var line4 = Object.keys(program_infos[15]).length;
                  for(var m=2;m<=line4;m++){
                    var br8 = document.createElement("br");
                    var span_br8 = document.createElement("br");
                    var newTextBoxInput4 = document.createElement("INPUT");
                    newTextBoxInput4.setAttribute("disabled","true");
                         newTextBoxInput4.setAttribute("id","inpttttt1"+m);
                         newTextBoxInput4.value=program_infos[15][m.toString() + "_Besin"];
                         newTextBoxInput4.setAttribute("oninput","dragFood(this.id);");
                         newTextBoxInput4.setAttribute("type","text");
                    var newSpan4 = document.createElement("span");
                         newSpan4.setAttribute("id", "inpttttt1" + m);
                         newSpan4.setAttribute("onclick","clearText(this.id);");
                         newSpan4.classList.add("fa");
                         newSpan4.classList.add("fa-fw");
                         newSpan4.classList.add("fa-trash");
                         tr5_td2.appendChild(br8);
                      tr5_td2.appendChild(newTextBoxInput4);
                      tr5_td2_1.appendChild(span_br8);
                      tr5_td2_1.appendChild(newSpan4);
                  }
                  var tr5_td3= document.createElement("td");
                  tr5_td3.setAttribute("style","border:none;");
                  var tr5_span1 = document.createElement("span");
                  tr5_span1.id="span31";
                  tr5_span1.classList.add("badge");
                  tr5_span1.classList.add("badge-pill");
                  tr5_span1.classList.add("badge-warning");
                  tr5_span1.innerHTML=program_infos[a+19];
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
                  tr5_span3.innerHTML=program_infos[a+17];
                  tr5_td5.appendChild(tr5_span3);
                  var tr5_td6= document.createElement("td");
                  tr5_td6.setAttribute("style","border:none;");
                  var tr5_span4 = document.createElement("span");
                  tr5_span4.id="span34";
                  tr5_span4.classList.add("badge");
                  tr5_span4.classList.add("badge-pill");
                  tr5_span4.classList.add("badge-primary");
                  tr5_span4.innerHTML=program_infos[a+16];
                  tr5_td6.appendChild(tr5_span4);
                  var br15= document.createElement("br");
                  var label15 = document.createElement("label");
                  label15.id="label15";
                  label15.innerHTML="Akşam Yemeği";
                  var tr6= document.createElement("tr");
                  tr6.id="table14";
                  var i_5 = document.createElement("i");
                  i_5.id="spn15";
                  i_5.classList.add("fa");
                  i_5.classList.add("fa-fw");
                  i_5.classList.add("fa-plus");
                  i_5.setAttribute("onclick","newBox(this.id);");
                  var tr6_td1=document.createElement("td");
                  tr6_td1.setAttribute("style","border:none;");
                  var tr6_td1_1=document.createElement("td");
                  tr6_td1_1.setAttribute("style","border:none;");
                  tr6_td1.appendChild(label15);
                  tr6_td1_1.appendChild(i_5);
                  // var input15 = document.createElement("TEXTAREA");
                  // // input15.setAttribute("type","text");
                  // input15.setAttribute("id","inpuut15");
                  // input15.setAttribute("oninput","dragFood(this.id);");
                  // input15.value=program_infos[a];
                  // // input15.classList.add("clearable");
                  // var tr6_td2= document.createElement("td");
                  // tr6_td2.setAttribute("style","border:none;");
                  // tr6_td2.appendChild(input15);
                  var tr6_td2= document.createElement("td");
                  tr6_td2.setAttribute("style","border:none;");
                  var tr6_td2_1 = document.createElement("td");
                  tr6_td2_1.setAttribute("style","border:none;");
                  var br9 = document.createElement("br");
                  var span_br9 = document.createElement("br");
                  var newTextBoxInput55 = document.createElement("INPUT");
                  newTextBoxInput55.setAttribute("disabled","true");
                       newTextBoxInput55.setAttribute("id","inptttttt10");
                       newTextBoxInput55.value=program_infos[0]["1_Besin"];
                       newTextBoxInput55.setAttribute("oninput","dragFood(this.id);");
                       newTextBoxInput55.setAttribute("type","text");
                  var newSpan55 = document.createElement("span");
                       newSpan55.setAttribute("id", "inptttttt10");
                       newSpan55.setAttribute("onclick","clearTextDefault(this.id);");
                       newSpan55.classList.add("fa");
                       newSpan55.classList.add("fa-fw");
                       newSpan55.classList.add("fa-trash");
                       tr6_td2.appendChild(br9);
                    tr6_td2.appendChild(newTextBoxInput55);
                    tr6_td2_1.appendChild(span_br9);
                    tr6_td2_1.appendChild(newSpan55);
                  var line5 = Object.keys(program_infos[0]).length;
                  for(var z=2;z<=line5;z++){
                    var br10 = document.createElement("br");
                    var span_br10 = document.createElement("br");
                    var newTextBoxInput5 = document.createElement("INPUT");
                    newTextBoxInput5.setAttribute("disabled","true");
                         newTextBoxInput5.setAttribute("id","inptttttt1"+z);
                         newTextBoxInput5.value=program_infos[0][z.toString() + "_Besin"];
                         newTextBoxInput5.setAttribute("oninput","dragFood(this.id);");
                         newTextBoxInput5.setAttribute("type","text");
                    var newSpan5 = document.createElement("span");
                         newSpan5.setAttribute("id", "inptttttt1" + z);
                         newSpan5.setAttribute("onclick","clearText(this.id);");
                         newSpan5.classList.add("fa");
                         newSpan5.classList.add("fa-fw");
                         newSpan5.classList.add("fa-trash");
                         tr6_td2.appendChild(br10);
                      tr6_td2.appendChild(newTextBoxInput5);
                      tr6_td2_1.appendChild(span_br10);
                      tr6_td2_1.appendChild(newSpan5);
                  }
                  var tr6_td3= document.createElement("td");
                  tr6_td3.setAttribute("style","border:none;");
                  var tr6_span1 = document.createElement("span");
                  tr6_span1.id="span41";
                  tr6_span1.classList.add("badge");
                  tr6_span1.classList.add("badge-pill");
                  tr6_span1.classList.add("badge-warning");
                  tr6_span1.innerHTML=program_infos[a+4];
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
                  tr6_span3.innerHTML=program_infos[a+2];
                  tr6_td5.appendChild(tr6_span3);
                  var tr6_td6= document.createElement("td");
                  tr6_td6.setAttribute("style","border:none;");
                  var tr6_span4 = document.createElement("span");
                  tr6_span4.id="span44";
                  tr6_span4.classList.add("badge");
                  tr6_span4.classList.add("badge-pill");
                  tr6_span4.classList.add("badge-primary");
                  tr6_span4.innerHTML=program_infos[a+1];
                  tr6_td6.appendChild(tr6_span4);
                  var br16= document.createElement("br");
                  var label16 = document.createElement("label");
                  label16.id="label16";
                  label16.innerHTML="3.Ara Öğün";
                  var tr7 = document.createElement("tr");
                  tr7.id="table15";
                  var i_6 = document.createElement("i");
                  i_6.id="spn16";
                  i_6.classList.add("fa");
                  i_6.classList.add("fa-fw");
                  i_6.classList.add("fa-plus");
                  i_6.setAttribute("onclick","newBox(this.id);");
                  var tr7_td1= document.createElement("td");
                  tr7_td1.setAttribute("style","border:none;");
                  var tr7_td1_1= document.createElement("td");
                  tr7_td1_1.setAttribute("style","border:none;");
                  tr7_td1.appendChild(label16);
                  tr7_td1_1.appendChild(i_6);
                  // var input16 = document.createElement("TEXTAREA");
                  // // input16.setAttribute("type","text");
                  // input16.setAttribute("id","inpuut16");
                  // input16.setAttribute("oninput","dragFood(this.id);");
                  // input16.value=program_infos[a+35];
                  // // input16.classList.add("clearable");
                  // var tr7_td2= document.createElement("td");
                  // tr7_td2.setAttribute("style","border:none;");
                  // tr7_td2.appendChild(input16);
                  var tr7_td2= document.createElement("td");
                  tr7_td2.setAttribute("style","border:none;");
                  var tr7_td2_1 = document.createElement("td");
                  tr7_td2_1.setAttribute("style","border:none;");
                  var br11 = document.createElement("br");
                  var span_br11 = document.createElement("br");
                  var newTextBoxInput66 = document.createElement("INPUT");
                  newTextBoxInput66.setAttribute("disabled","true");
                       newTextBoxInput66.setAttribute("id","inpttttttt10");
                       newTextBoxInput66.value=program_infos[35]["1_Besin"];
                       newTextBoxInput66.setAttribute("oninput","dragFood(this.id);");
                       newTextBoxInput66.setAttribute("type","text");
                  var newSpan66 = document.createElement("span");
                       newSpan66.setAttribute("id", "inpttttttt10");
                       newSpan66.setAttribute("onclick","clearText(this.id);");
                       newSpan66.classList.add("fa");
                       newSpan66.classList.add("fa-fw");
                       newSpan66.classList.add("fa-trash");
                       tr7_td2.appendChild(br11);
                    tr7_td2.appendChild(newTextBoxInput66);
                    tr7_td2_1.appendChild(span_br11);
                    tr7_td2_1.appendChild(newSpan66);
                  var line6 = Object.keys(program_infos[35]).length;
                  for(var q=2;q<=line6;q++){
                    var br12 = document.createElement("br");
                    var span_br12 = document.createElement("br");
                    var newTextBoxInput6 = document.createElement("INPUT");
                    newTextBoxInput6.setAttribute("disabled","true");
                         newTextBoxInput6.setAttribute("id","inpttttttt1"+q);
                         newTextBoxInput6.value=program_infos[35][q.toString() + "_Besin"];
                         newTextBoxInput6.setAttribute("oninput","dragFood(this.id);");
                         newTextBoxInput6.setAttribute("type","text");
                    var newSpan6 = document.createElement("span");
                         newSpan6.setAttribute("id", "inpttttttt1" + q);
                         newSpan6.setAttribute("onclick","clearText(this.id);");
                         newSpan6.classList.add("fa");
                         newSpan6.classList.add("fa-fw");
                         newSpan6.classList.add("fa-trash");
                         tr7_td2.appendChild(br12);
                      tr7_td2.appendChild(newTextBoxInput6);
                      tr7_td2_1.appendChild(span_br12);
                      tr7_td2_1.appendChild(newSpan6);
                  }
                  var tr7_td3= document.createElement("td");
                  tr7_td3.setAttribute("style","border:none;");
                  var tr7_span1 = document.createElement("span");
                  tr7_span1.id="span51";
                  tr7_span1.classList.add("badge");
                  tr7_span1.classList.add("badge-pill");
                  tr7_span1.classList.add("badge-warning");
                  tr7_span1.innerHTML=program_infos[a+39];
                  tr7_td3.appendChild(tr7_span1);
                  var tr7_td4= document.createElement("td");
                  tr7_td4.setAttribute("style","border:none;");
                  var tr7_span2 = document.createElement("span");
                  tr7_span2.id="span52";
                  tr7_span2.classList.add("badge");
                  tr7_span2.classList.add("badge-pill");
                  tr7_span2.classList.add("badge-success");
                  tr7_span2.innerHTML=program_infos[a+38];
                  tr7_td4.appendChild(tr7_span2);
                  var tr7_td5= document.createElement("td");
                  tr7_td5.setAttribute("style","border:none;");
                  var tr7_span3 = document.createElement("span");
                  tr7_span3.id="span53";
                  tr7_span3.classList.add("badge");
                  tr7_span3.classList.add("badge-pill");
                  tr7_span3.classList.add("badge-danger");
                  tr7_span3.innerHTML=program_infos[a+37];
                  tr7_td5.appendChild(tr7_span3);
                  var tr7_td6= document.createElement("td");
                  tr7_td6.setAttribute("style","border:none;");
                  var tr7_span4 = document.createElement("span");
                  tr7_span4.id="span54";
                  tr7_span4.classList.add("badge");
                  tr7_span4.classList.add("badge-pill");
                  tr7_span4.classList.add("badge-primary");
                  tr7_span4.innerHTML=program_infos[a+36];
                  tr7_td6.appendChild(tr7_span4);
                  var br17= document.createElement("br");
                  var label17 = document.createElement("label");
                  label17.id="label17";
                  label17.innerHTML="Alternatif";
                  var tr8 = document.createElement("tr");
                  tr8.id="table16";
                  var i_7 = document.createElement("i");
                  i_7.id="spn17";
                  i_7.classList.add("fa");
                  i_7.classList.add("fa-fw");
                  i_7.classList.add("fa-plus");
                  i_7.setAttribute("onclick","newBox(this.id);");
                  var tr8_td1= document.createElement("td");
                  tr8_td1.setAttribute("style","border:none;");
                  var tr8_td1_1= document.createElement("td");
                  tr8_td1_1.setAttribute("style","border:none;");
                  tr8_td1.appendChild(label17);
                  tr8_td1_1.appendChild(i_7);
                  // var input17 = document.createElement("TEXTAREA");
                  // // input17.setAttribute("type","text");
                  // input17.setAttribute("id","inpuut17");
                  // input17.setAttribute("oninput","dragFood(this.id);");
                  // input17.value=program_infos[a+5];
                  // // input17.classList.add("clearable");
                  // var tr8_td2= document.createElement("td");
                  // tr8_td2.setAttribute("style","border:none;");
                  // tr8_td2.appendChild(input17);
                  var tr8_td2= document.createElement("td");
                  tr8_td2.setAttribute("style","border:none;");
                  var tr8_td2_1 = document.createElement("td");
                  tr8_td2_1.setAttribute("style","border:none;");
                  var br13 = document.createElement("br");
                  var span_br13 = document.createElement("br");
                  var newTextBoxInput77 = document.createElement("INPUT");
                  newTextBoxInput77.setAttribute("disabled","true");
                       newTextBoxInput77.setAttribute("id","inptttttttt10");
                       newTextBoxInput77.value=program_infos[5]["1_Besin"];
                       newTextBoxInput77.setAttribute("oninput","dragFood(this.id);");
                       newTextBoxInput77.setAttribute("type","text");
                  var newSpan77 = document.createElement("span");
                       newSpan77.setAttribute("id", "inptttttttt10");
                       newSpan77.setAttribute("onclick","clearTextDefault(this.id);");
                       newSpan77.classList.add("fa");
                       newSpan77.classList.add("fa-fw");
                       newSpan77.classList.add("fa-trash");
                       tr8_td2.appendChild(br13);
                    tr8_td2.appendChild(newTextBoxInput77);
                    tr8_td2_1.appendChild(span_br13);
                    tr8_td2_1.appendChild(newSpan77);
                  var line7 = Object.keys(program_infos[5]).length;
                  for(var h=2;h<=line7;h++){
                    var br14 = document.createElement("br");
                    var span_br14 = document.createElement("br");
                    var newTextBoxInput7 = document.createElement("INPUT");
                    newTextBoxInput7.setAttribute("disabled","true");
                         newTextBoxInput7.setAttribute("id","inptttttttt1"+h);
                         newTextBoxInput7.value=program_infos[5][h.toString() + "_Besin"];
                         newTextBoxInput7.setAttribute("oninput","dragFood(this.id);");
                         newTextBoxInput7.setAttribute("type","text");
                    var newSpan7 = document.createElement("span");
                         newSpan7.setAttribute("id", "inptttttttt1" + h);
                         newSpan7.setAttribute("onclick","clearText(this.id);");
                         newSpan7.classList.add("fa");
                         newSpan7.classList.add("fa-fw");
                         newSpan7.classList.add("fa-trash");
                         tr8_td2.appendChild(br14);
                      tr8_td2.appendChild(newTextBoxInput7);
                      tr8_td2_1.appendChild(span_br14);
                      tr8_td2_1.appendChild(newSpan7);
                  }
                  var tr8_td3= document.createElement("td");
                  tr8_td3.setAttribute("style","border:none;");
                  var tr8_span1 = document.createElement("span");
                  tr8_span1.id="span61";
                  tr8_span1.classList.add("badge");
                  tr8_span1.classList.add("badge-pill");
                  tr8_span1.classList.add("badge-warning");
                  tr8_span1.innerHTML=program_infos[a+9];
                  tr8_td3.appendChild(tr8_span1);
                  var tr8_td4= document.createElement("td");
                  tr8_td4.setAttribute("style","border:none;");
                  var tr8_span2 = document.createElement("span");
                  tr8_span2.id="span62";
                  tr8_span2.classList.add("badge");
                  tr8_span2.classList.add("badge-pill");
                  tr8_span2.classList.add("badge-success");
                  tr8_span2.innerHTML=program_infos[a+8];
                  tr8_td4.appendChild(tr8_span2);
                  var tr8_td5= document.createElement("td");
                  tr8_td5.setAttribute("style","border:none;");
                  var tr8_span3 = document.createElement("span");
                  tr8_span3.id="span63";
                  tr8_span3.classList.add("badge");
                  tr8_span3.classList.add("badge-pill");
                  tr8_span3.classList.add("badge-danger");
                  tr8_span3.innerHTML=program_infos[a+7];
                  tr8_td5.appendChild(tr8_span3);
                  var tr8_td6= document.createElement("td");
                  tr8_td6.setAttribute("style","border:none;");
                  var tr8_span4 = document.createElement("span");
                  tr8_span4.id="span64";
                  tr8_span4.classList.add("badge");
                  tr8_span4.classList.add("badge-pill");
                  tr8_span4.classList.add("badge-primary");
                  tr8_span4.innerHTML=program_infos[a+6];
                  tr8_td6.appendChild(tr8_span4);
                  var tr9 =document.createElement("tr");
                  tr9.id="table17";
                  var tr9_td1 = document.createElement("td");
                  tr9_td1.setAttribute("style","border:none;");
                  tr9_td1.innerHTML="";
                  var tr9_td1_1 = document.createElement("td");
                  tr9_td1_1.setAttribute("style","border:none;");
                  var tr9_td2 = document.createElement("td");
                  tr9_td2.setAttribute("style","height:70px;border:none");
                  var b = document.createElement("B");
                  b.innerHTML="  TOPLAM";
                  tr9_td2.appendChild(b);
                  var tr9_td2_1 = document.createElement("td");
                  tr9_td2_1.setAttribute("style","border:none;");
                  var tr9_td3 = document.createElement("td");
                  tr9_td3.setAttribute("style","border:none;");
                  var tr9_td3_span1 = document.createElement("span");
                  tr9_td3_span1.classList.add("badge");
                  tr9_td3_span1.classList.add("badge-pill");
                  tr9_td3_span1.classList.add("badge-info");
                  tr9_td3_span1.id="span71";
                  tr9_td3_span1.innerHTML=program_infos[a+34];
                  tr9_td3.appendChild(tr9_td3_span1);
                  var tr9_td4 = document.createElement("td");
                  tr9_td4.setAttribute("style","border:none;");
                  var tr9_td4_span1 = document.createElement("span");
                  tr9_td4_span1.classList.add("badge");
                  tr9_td4_span1.classList.add("badge-pill");
                  tr9_td4_span1.classList.add("badge-info");
                  tr9_td4_span1.id="span72";
                  tr9_td4_span1.innerHTML=program_infos[a+33];
                  tr9_td4.appendChild(tr9_td4_span1);
                  var tr9_td5 = document.createElement("td");
                  tr9_td5.setAttribute("style","border:none;");
                  var tr9_td5_span1 = document.createElement("span");
                  tr9_td5_span1.classList.add("badge");
                  tr9_td5_span1.classList.add("badge-pill");
                  tr9_td5_span1.classList.add("badge-info");
                  tr9_td5_span1.id="span73";
                  tr9_td5_span1.innerHTML=program_infos[a+32];
                  tr9_td5.appendChild(tr9_td5_span1);
                  var tr9_td6 = document.createElement("td");
                  tr9_td6.setAttribute("style","border:none;");
                  var tr9_td6_span1 = document.createElement("span");
                  tr9_td6_span1.classList.add("badge");
                  tr9_td6_span1.classList.add("badge-pill");
                  tr9_td6_span1.classList.add("badge-info");
                  tr9_td6_span1.id="span74";
                  tr9_td6_span1.innerHTML=program_infos[a+31];
                  tr9_td6.appendChild(tr9_td6_span1);
                  tr.appendChild(th1);
                  tr.appendChild(th1_1);
                  tr.appendChild(th2);
                  tr.appendChild(th2_1);
                  tr.appendChild(th3);
                  tr.appendChild(th4);
                  tr.appendChild(th5);
                  tr.appendChild(th6);
                  tr2.appendChild(tr2_td1);
                  tr2.appendChild(tr2_td1_1);
                  tr2.appendChild(tr2_td2);
                  tr2.appendChild(tr2_td2_1);
                  tr2.appendChild(tr2_td3);
                  tr2.appendChild(tr2_td4);
                  tr2.appendChild(tr2_td5);
                  tr2.appendChild(tr2_td6);
                  tr3.appendChild(tr3_td1);
                  tr3.appendChild(tr3_td1_1);
                  tr3.appendChild(tr3_td2);
                  tr3.appendChild(tr3_td2_1);
                  tr3.appendChild(tr3_td3);
                  tr3.appendChild(tr3_td4);
                  tr3.appendChild(tr3_td5);
                  tr3.appendChild(tr3_td6);
                  tr4.appendChild(tr4_td1);
                  tr4.appendChild(tr4_td1_1);
                  tr4.appendChild(tr4_td2);
                  tr4.appendChild(tr4_td2_1);
                  tr4.appendChild(tr4_td3);
                  tr4.appendChild(tr4_td4);
                  tr4.appendChild(tr4_td5);
                  tr4.appendChild(tr4_td6);
                  tr5.appendChild(tr5_td1);
                  tr5.appendChild(tr5_td1_1);
                  tr5.appendChild(tr5_td2);
                  tr5.appendChild(tr5_td2_1);
                  tr5.appendChild(tr5_td3);
                  tr5.appendChild(tr5_td4);
                  tr5.appendChild(tr5_td5);
                  tr5.appendChild(tr5_td6);
                  tr6.appendChild(tr6_td1);
                  tr6.appendChild(tr6_td1_1);
                  tr6.appendChild(tr6_td2);
                  tr6.appendChild(tr6_td2_1);
                  tr6.appendChild(tr6_td3);
                  tr6.appendChild(tr6_td4);
                  tr6.appendChild(tr6_td5);
                  tr6.appendChild(tr6_td6);
                  tr7.appendChild(tr7_td1);
                  tr7.appendChild(tr7_td1_1);
                  tr7.appendChild(tr7_td2);
                  tr7.appendChild(tr7_td2_1);
                  tr7.appendChild(tr7_td3);
                  tr7.appendChild(tr7_td4);
                  tr7.appendChild(tr7_td5);
                  tr7.appendChild(tr7_td6);
                  tr8.appendChild(tr8_td1);
                  tr8.appendChild(tr8_td1_1);
                  tr8.appendChild(tr8_td2);
                  tr8.appendChild(tr8_td2_1);
                  tr8.appendChild(tr8_td3);
                  tr8.appendChild(tr8_td4);
                  tr8.appendChild(tr8_td5);
                  tr8.appendChild(tr8_td6);
                  tr9.appendChild(tr9_td1);
                  tr9.appendChild(tr9_td1_1);
                  tr9.appendChild(tr9_td2);
                  tr9.appendChild(tr9_td2_1);
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
                }
              });
            });
          // });
          // console.log("asfas");
      }
    });
    });


  // });
  // $("#diyet-tablo2 tr").click(function(){
  //   console.log("asfasfa");
  //   $(this).addClass('selected').siblings().removeClass('selected');
  //   var value=$(this).find('td:first').html();
  //   });
}
// ing çevrilecek
function showArchiveDay(id){
  var user = firebase.auth().currentUser;
  var archiveRef = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük");
  archiveRef.once("value").then(function(snapshot){
    snapshot.forEach(function(childSnapshot){
      // console.log("proname "+ proName);
      // console.log("snapshotname "+ childSnapshot.key);
      var child = childSnapshot.key.toString().trim();
      console.log(id);
      // var proName=document.getElementById(id).innerText.toString().trim();
      console.log(child+" asdas");
      // console.log(proname);
        if(id == child){
          $("#addSend").hide();
          $("#gunGen").show();
          $('#accordion div').hide('');
          $("#addSendGeneral").hide();
          $("#addSendDaily").show();
          // Yukarı kesin olacak !!
          var tableBig = document.getElementById("accordion");
          var tableDiv = document.createElement("div");
          tableDiv.classList.add("tarih");
          var date = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük/"+id+"/date").once("value")
          .then(function(snaps){
            return snaps.val();
          });
          Promise.all([date]).then(function([date]){
            console.log(date);
            tableDiv.id=date;
          });

          var form= document.createElement("form");
          form.id="FORM1";
          var kalın = document.createElement("b");
          var br90 = document.createElement("br");
          var labelTitle = document.createElement("label");
          labelTitle.classList.add("titleBaslık");
          labelTitle.id=id;
          labelTitle.innerHTML=id+" İsimli Günlük Program";
          var br40 = document.createElement("br");
          form.appendChild(kalın);
          form.appendChild(br90);
          form.appendChild(labelTitle);
          form.appendChild(br40);

          // Yukarıdaki kısıma dikkat et önemli bi detay burda kaldık!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

            // pro_list_i = [];
            // pro_list_i.push(i);
            // console.log(pro_list_i);
            var refe = firebase.database().ref("WebUsers/UserInfos/"+user.uid+"/Arsivim/Günlük/"+id);
              refe.once("value").then(function(childSnapshot){
                pro_list = [];
                childSnapshot.forEach(function(childSna){
                  childSna.forEach(function(qwe){
                    var x = qwe.val();
                    pro_list.push(x);
                  });

                  // pro_list.push(food);
                });
                console.log("QWEQWEQWEWQE");
                console.log(pro_list);
                var y = pro_list.length/39;
                var i =0;
                  for(var j=0;j<pro_list.length;j+=39){
                    var label = document.createElement("label");
                    // var day = start.getDate()+i;
                    // var month=startMnth;
                    // var year = start.getFullYear();
                    label.innerHTML=i+1+". GÜN ";
                    label.setAttribute("style","color:orange;font-weight:bold");
                    form.appendChild(label);
                    var tableGun = document.createElement("table");
                    tableGun.id="tableEee"+i;
                    var tr1 = document.createElement("tr");
                    var th1 = document.createElement("th");
                    th1.setAttribute("style","color#2d2e82;font-weight:bold;text-align:center;");
                    th1.innerHTML="Öğünler";
                    tr1.appendChild(th1);
                    var th1_1 = document.createElement("th");
                    th1_1.setAttribute("style","color#2d2e82;font-weight:bold;text-align:center;");
                    tr1.appendChild(th1_1);
                    var th2 = document.createElement("th");
                    th2.setAttribute("style","color:#2d2e82;font-weight:bold;text-align:center;");
                    th2.innerHTML="Besinler";
                    tr1.appendChild(th2);
                    var th2_1 = document.createElement("th");
                    th2_1.setAttribute("style","color:#2d2e82;font-weight:bold;text-align:center;");
                    tr1.appendChild(th2_1);
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
                    var i_1 = document.createElement("i");
                    i_1.id="spn"+((8*i)+1);
                    i_1.classList.add("fa");
                    i_1.classList.add("fa-fw");
                    i_1.classList.add("fa-plus");
                    i_1.setAttribute("onclick","newBox(this.id);");
                    var tr2_td1 = document.createElement("td");
                    tr2_td1.setAttribute("style","border:none;");
                    var tr2_td1_1 = document.createElement("td");
                    tr2_td1_1.setAttribute("style","border:none;");
                    tr2_td1.appendChild(label1);
                    tr2_td1_1.appendChild(i_1);
                    // var input1 = document.createElement("TEXTAREA");
                    // // input1.setAttribute("ondrop","drop(event)");
                    // // input1.setAttribute("ondragover","allowDrop(event)");
                    // // input1.setAttribute("type","text");
                    // input1.setAttribute("id","inpuut1"+i); // input1.setAttribute("id", i.toString() + "_inpuut1");
                    // input1.value = pro_list[j+25];
                    // input1.setAttribute("oninput","dragFood(this.id);");
                    // // input1.classList.add("clearable");
                    // var tr2_td2 = document.createElement("td");
                    // tr2_td2.setAttribute("style","border:none;");
                    // tr2_td2.appendChild(input1);
                    var tr2_td2 = document.createElement("td");
                    tr2_td2.setAttribute("style","border:none;");
                    var tr2_td2_1 = document.createElement("td");
                    tr2_td2_1.setAttribute("style","border:none;");
                    var br1 = document.createElement("br");
                    var span_br1 = document.createElement("br");
                    var newTextBoxInput11 = document.createElement("INPUT");
                    newTextBoxInput11.setAttribute("disabled","true");
                         newTextBoxInput11.setAttribute("id","inptt1"+i);
                         newTextBoxInput11.value=pro_list[j+25]["1_Besin"];
                         newTextBoxInput11.setAttribute("oninput","dragFood(this.id);");
                         newTextBoxInput11.setAttribute("type","text");
                    var newSpan11 = document.createElement("span");
                         newSpan11.setAttribute("id", "inptt1" +i);
                         newSpan11.setAttribute("onclick","clearTextDefault(this.id);");
                         newSpan11.classList.add("fa");
                         newSpan11.classList.add("fa-fw");
                         newSpan11.classList.add("fa-trash");
                         tr2_td2.appendChild(br1);
                      tr2_td2.appendChild(newTextBoxInput11);
                      tr2_td2_1.appendChild(span_br1);
                      tr2_td2_1.appendChild(newSpan11);
                    var line1 = Object.keys(pro_list[j+25]).length;
                    for(var r=2;r<=line1;r++){
                      var br2 = document.createElement("br");
                      var span_br2 = document.createElement("br");
                      var newTextBoxInput1 = document.createElement("INPUT");
                      newTextBoxInput1.setAttribute("disabled","true");
                           newTextBoxInput1.setAttribute("id","inptt1"+r+i);
                           newTextBoxInput1.value=pro_list[j+25][r.toString() + "_Besin"];
                           newTextBoxInput1.setAttribute("oninput","dragFood(this.id);");
                           newTextBoxInput1.setAttribute("type","text");
                      var newSpan1 = document.createElement("span");
                           newSpan1.setAttribute("id", "inptt1" + r+i);
                           newSpan1.setAttribute("onclick","clearText(this.id);");
                           newSpan1.classList.add("fa");
                           newSpan1.classList.add("fa-fw");
                           newSpan1.classList.add("fa-trash");
                           tr2_td2.appendChild(br2);
                        tr2_td2.appendChild(newTextBoxInput1);
                        tr2_td2_1.appendChild(span_br2);
                        tr2_td2_1.appendChild(newSpan1);
                      // td.appendChild(newTextBoxInput);
                      // td.appendChild(newSpan);
                    }
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
                    tr2_td4_span2.innerHTML=pro_list[j+29];
                    tr2_td4.appendChild(tr2_td4_span2);
                    var tr2_td5= document.createElement("td");
                    tr2_td5.setAttribute("style","width:120px;border:none;");
                    var tr2_td5_span3 = document.createElement("span");
                    tr2_td5_span3.id="span3";
                    tr2_td5_span3.classList.add("badge");
                    tr2_td5_span3.classList.add("badge-pill");
                    tr2_td5_span3.classList.add("badge-danger");
                    tr2_td5_span3.innerHTML=pro_list[j+29];
                    tr2_td5.appendChild(tr2_td5_span3);
                    var tr2_td6= document.createElement("td");
                    tr2_td6.setAttribute("style","width:100px;border:none;");
                    var tr2_td6_span4= document.createElement("span");
                    tr2_td6_span4.id="span4";
                    tr2_td6_span4.classList.add("badge");
                    tr2_td6_span4.classList.add("badge-pill");
                    tr2_td6_span4.classList.add("badge-primary");
                    tr2_td6_span4.innerHTML=pro_list[j+29];
                    tr2_td6.appendChild(tr2_td6_span4);
                    tr2.appendChild(tr2_td1);
                    tr2.appendChild(tr2_td1_1);
                    tr2.appendChild(tr2_td2);
                    tr2.appendChild(tr2_td2_1);
                    tr2.appendChild(tr2_td3);
                    tr2.appendChild(tr2_td4);
                    tr2.appendChild(tr2_td5);
                    tr2.appendChild(tr2_td6);
                    var label2 = document.createElement("label");
                    label2.id="label2"+i
                    label2.innerHTML="1. Ara Öğün";
                    var tr3 = document.createElement("tr");
                    tr3.id="table"+((8*i)+2);
                    var i_2 = document.createElement("i");
                    i_2.id="spn"+((8*i)+2);
                    i_2.classList.add("fa");
                    i_2.classList.add("fa-fw");
                    i_2.classList.add("fa-plus");
                    i_2.setAttribute("onclick","newBox(this.id);");
                    var tr3_td1 = document.createElement("td");
                    tr3_td1.setAttribute("style","border:none;");
                    var tr3_td1_1 = document.createElement("td");
                    tr3_td1_1.setAttribute("style","border:none;");
                    tr3_td1.appendChild(label2);
                    tr3_td1_1.appendChild(i_2);
                    // var input2 = document.createElement("TEXTAREA");
                    // // input2.setAttribute("type","text");
                    // input2.setAttribute("id","inpuut2"+i);
                    // input2.value=pro_list[j+10];
                    // input2.setAttribute("oninput","dragFood(this.id);");
                    // // input2.classList.add("clearable");
                    // var tr3_td2 = document.createElement("td");
                    // tr3_td2.setAttribute("style","border:none;");
                    // tr3_td2.appendChild(input2);
                    var tr3_td2 = document.createElement("td");
                    tr3_td2.setAttribute("style","border:none;");
                    var tr3_td2_1 = document.createElement("td");
                    tr3_td2_1.setAttribute("style","border:none;");
                    var br3 = document.createElement("br");
                    var span_br3 = document.createElement("br");
                    var newTextBoxInput22 = document.createElement("INPUT");
                    newTextBoxInput22.setAttribute("disabled","true");
                         newTextBoxInput22.setAttribute("id","inpttt1"+i);
                         newTextBoxInput22.value=pro_list[j+10]["1_Besin"];
                         newTextBoxInput22.setAttribute("oninput","dragFood(this.id);");
                         newTextBoxInput22.setAttribute("type","text");
                    var newSpan22 = document.createElement("span");
                         newSpan22.setAttribute("id", "inpttt1" +i);
                         newSpan22.setAttribute("onclick","clearTextDefault(this.id);");
                         newSpan22.classList.add("fa");
                         newSpan22.classList.add("fa-fw");
                         newSpan22.classList.add("fa-trash");
                         tr3_td2.appendChild(br3);
                      tr3_td2.appendChild(newTextBoxInput22);
                      tr3_td2_1.appendChild(span_br3);
                      tr3_td2_1.appendChild(newSpan22);
                    var line2 = Object.keys(pro_list[j+10]).length;
                    for(var w=2;w<=line2;w++){
                      var br4 = document.createElement("br");
                      var span_br4 = document.createElement("br");
                      var newTextBoxInput2 = document.createElement("INPUT");
                      newTextBoxInput2.setAttribute("disabled","true");
                           newTextBoxInput2.setAttribute("id","inpttt1"+w+i);
                           newTextBoxInput2.value=pro_list[j+10][w.toString() + "_Besin"];
                           newTextBoxInput2.setAttribute("oninput","dragFood(this.id);");
                           newTextBoxInput2.setAttribute("type","text");
                      var newSpan2 = document.createElement("span");
                           newSpan2.setAttribute("id", "inpttt1" + w+i);
                           newSpan2.setAttribute("onclick","clearText(this.id);");
                           newSpan2.classList.add("fa");
                           newSpan2.classList.add("fa-fw");
                           newSpan2.classList.add("fa-trash");
                           tr3_td2.appendChild(br4);
                        tr3_td2.appendChild(newTextBoxInput2);
                        tr3_td2_1.appendChild(span_br4);
                        tr3_td2_1.appendChild(newSpan2);
                      // td.appendChild(newTextBoxInput);
                      // td.appendChild(newSpan);
                    }
                    var tr3_td3= document.createElement("td");
                    tr3_td3.setAttribute("style","border:none;");
                    var tr3_td3_span1 = document.createElement("span");
                    tr3_td3_span1.id="span1"+i;
                    tr3_td3_span1.classList.add("badge");
                    tr3_td3_span1.classList.add("badge-pill");
                    tr3_td3_span1.classList.add("badge-warning");
                    tr3_td3_span1.innerHTML=pro_list[j+14];
                    tr3_td3.appendChild(tr3_td3_span1);
                    var tr3_td4= document.createElement("td");
                    tr3_td4.setAttribute("style","border:none;");
                    var tr3_td4_span2 = document.createElement("span");
                    tr3_td4_span2.id="span2"+i;
                    tr3_td4_span2.classList.add("badge");
                    tr3_td4_span2.classList.add("badge-pill");
                    tr3_td4_span2.classList.add("badge-success");
                    tr3_td4_span2.innerHTML=pro_list[j+13];
                    tr3_td4.appendChild(tr3_td4_span2);
                    var tr3_td5= document.createElement("td");
                    tr3_td5.setAttribute("style","border:none;");
                    var tr3_td5_span3 = document.createElement("span");
                    tr3_td5_span3.id="span3"+i;
                    tr3_td5_span3.classList.add("badge");
                    tr3_td5_span3.classList.add("badge-pill");
                    tr3_td5_span3.classList.add("badge-danger");
                    tr3_td5_span3.innerHTML=pro_list[j+12];
                    tr3_td5.appendChild(tr3_td5_span3);
                    var tr3_td6= document.createElement("td");
                    tr3_td6.setAttribute("style","border:none;");
                    var tr3_td6_span4= document.createElement("span");
                    tr3_td6_span4.id="span4"+i;
                    tr3_td6_span4.classList.add("badge");
                    tr3_td6_span4.classList.add("badge-pill");
                    tr3_td6_span4.classList.add("badge-primary");
                    tr3_td6_span4.innerHTML=pro_list[j+11];
                    tr3_td6.appendChild(tr3_td6_span4);
                    tr3.appendChild(tr3_td1);
                    tr3.appendChild(tr3_td1_1);
                    tr3.appendChild(tr3_td2);
                    tr3.appendChild(tr3_td2_1);
                    tr3.appendChild(tr3_td3);
                    tr3.appendChild(tr3_td4);
                    tr3.appendChild(tr3_td5);
                    tr3.appendChild(tr3_td6);
                    var label3 = document.createElement("label");
                    label3.id="label3"+i
                    label3.innerHTML="Öğle Yemeği";
                    var tr4 = document.createElement("tr");
                    tr4.id="table"+((8*i)+3);
                    var i_3 = document.createElement("i");
                    i_3.id="spn"+((8*i)+3);
                    i_3.classList.add("fa");
                    i_3.classList.add("fa-fw");
                    i_3.classList.add("fa-plus");
                    i_3.setAttribute("onclick","newBox(this.id);");
                    var tr4_td1 = document.createElement("td");
                    tr4_td1.setAttribute("style","border:none;");
                    var tr4_td1_1 = document.createElement("td");
                    tr4_td1_1.setAttribute("style","border:none;");
                    tr4_td1.appendChild(label3);
                    tr4_td1_1.appendChild(i_3);
                    // var input3 = document.createElement("TEXTAREA");
                    // // input3.setAttribute("type","text");
                    // input3.setAttribute("id","inpuut3"+i);
                    // input3.value=pro_list[j+20];
                    // input3.setAttribute("oninput","dragFood(this.id);");
                    // // input3.classList.add("clearable");
                    // var tr4_td2 = document.createElement("td");
                    // tr4_td2.setAttribute("style","border:none;");
                    // tr4_td2.appendChild(input3);
                    var tr4_td2 = document.createElement("td");
                    tr4_td2.setAttribute("style","border:none;");
                    var tr4_td2_1 = document.createElement("td");
                    tr4_td2_1.setAttribute("style","border:none;");
                    var br5 = document.createElement("br");
                    var span_br5 = document.createElement("br");
                    var newTextBoxInput33 = document.createElement("INPUT");
                    newTextBoxInput33.setAttribute("disabled","true");
                         newTextBoxInput33.setAttribute("id","inptttt1"+i);
                         newTextBoxInput33.value=pro_list[j+20]["1_Besin"];
                         newTextBoxInput33.setAttribute("oninput","dragFood(this.id);");
                         newTextBoxInput33.setAttribute("type","text");
                    var newSpan33 = document.createElement("span");
                         newSpan33.setAttribute("id", "inptttt1" +i);
                         newSpan33.setAttribute("onclick","clearText(this.id);");
                         newSpan33.classList.add("fa");
                         newSpan33.classList.add("fa-fw");
                         newSpan33.classList.add("fa-trash");
                         tr4_td2.appendChild(br5);
                      tr4_td2.appendChild(newTextBoxInput33);
                      tr4_td2_1.appendChild(span_br5);
                      tr4_td2_1.appendChild(newSpan33);
                    var line3 = Object.keys(pro_list[j+20]).length;
                    for(var z=2;z<=line3;z++){
                      var br6 = document.createElement("br");
                      var span_br6 = document.createElement("br");
                      var newTextBoxInput3 = document.createElement("INPUT");
                      newTextBoxInput3.setAttribute("disabled","true");
                           newTextBoxInput3.setAttribute("id","inptttt1"+z+i);
                           newTextBoxInput3.value=pro_list[j+20][z.toString() + "_Besin"];
                           newTextBoxInput3.setAttribute("oninput","dragFood(this.id);");
                           newTextBoxInput3.setAttribute("type","text");
                      var newSpan3 = document.createElement("span");
                           newSpan3.setAttribute("id", "inptttt1" + z+i);
                           newSpan3.setAttribute("onclick","clearText(this.id);");
                           newSpan3.classList.add("fa");
                           newSpan3.classList.add("fa-fw");
                           newSpan3.classList.add("fa-trash");
                           tr4_td2.appendChild(br6);
                        tr4_td2.appendChild(newTextBoxInput3);
                        tr4_td2_1.appendChild(span_br6);
                        tr4_td2_1.appendChild(newSpan3);
                      // td.appendChild(newTextBoxInput);
                      // td.appendChild(newSpan);
                    }
                    var tr4_td3= document.createElement("td");
                    tr4_td3.setAttribute("style","border:none;");
                    var tr4_td3_span1 = document.createElement("span");
                    tr4_td3_span1.id="span1"+i;
                    tr4_td3_span1.classList.add("badge");
                    tr4_td3_span1.classList.add("badge-pill");
                    tr4_td3_span1.classList.add("badge-warning");
                    tr4_td3_span1.innerHTML=pro_list[j+24];
                    tr4_td3.appendChild(tr4_td3_span1);
                    var tr4_td4= document.createElement("td");
                    tr4_td4.setAttribute("style","border:none;");
                    var tr4_td4_span2 = document.createElement("span");
                    tr4_td4_span2.id="span2"+i;
                    tr4_td4_span2.classList.add("badge");
                    tr4_td4_span2.classList.add("badge-pill");
                    tr4_td4_span2.classList.add("badge-success");
                    tr4_td4_span2.innerHTML=pro_list[j+23];
                    tr4_td4.appendChild(tr4_td4_span2);
                    var tr4_td5= document.createElement("td");
                    tr4_td5.setAttribute("style","border:none;");
                    var tr4_td5_span3 = document.createElement("span");
                    tr4_td5_span3.id="span3"+i;
                    tr4_td5_span3.classList.add("badge");
                    tr4_td5_span3.classList.add("badge-pill");
                    tr4_td5_span3.classList.add("badge-danger");
                    tr4_td5_span3.innerHTML=pro_list[j+22];
                    tr4_td5.appendChild(tr4_td5_span3);
                    var tr4_td6= document.createElement("td");
                    tr4_td6.setAttribute("style","border:none;");
                    var tr4_td6_span4= document.createElement("span");
                    tr4_td6_span4.id="span4"+i;
                    tr4_td6_span4.classList.add("badge");
                    tr4_td6_span4.classList.add("badge-pill");
                    tr4_td6_span4.classList.add("badge-primary");
                    tr4_td6_span4.innerHTML=pro_list[j+21];
                    tr4_td6.appendChild(tr4_td6_span4);
                    tr4.appendChild(tr4_td1);
                    tr4.appendChild(tr4_td1_1);
                    tr4.appendChild(tr4_td2);
                    tr4.appendChild(tr4_td2_1);
                    tr4.appendChild(tr4_td3);
                    tr4.appendChild(tr4_td4);
                    tr4.appendChild(tr4_td5);
                    tr4.appendChild(tr4_td6);
                    var label4 = document.createElement("label");
                    label4.id="label4"+i
                    label4.innerHTML="2. Ara Öğün";
                    var tr5 = document.createElement("tr");
                    tr5.id="table"+((8*i)+4);
                    var i_4 = document.createElement("i");
                    i_4.id="spn"+((8*i)+4);
                    i_4.classList.add("fa");
                    i_4.classList.add("fa-fw");
                    i_4.classList.add("fa-plus");
                    i_4.setAttribute("onclick","newBox(this.id);");
                    var tr5_td1 = document.createElement("td");
                    tr5_td1.setAttribute("style","border:none;");
                    var tr5_td1_1 = document.createElement("td");
                    tr5_td1_1.setAttribute("style","border:none;");
                    tr5_td1.appendChild(label4);
                    tr5_td1_1.appendChild(i_4);
                    // var input4 = document.createElement("TEXTAREA");
                    // // input4.setAttribute("type","text");
                    // input4.setAttribute("id","inpuut4"+i);
                    // input4.value=pro_list[j+15];
                    // input4.setAttribute("oninput","dragFood(this.id);");
                    // // input4.classList.add("clearable");
                    // var tr5_td2 = document.createElement("td");
                    // tr5_td2.setAttribute("style","border:none;");
                    // tr5_td2.appendChild(input4);
                    var tr5_td2 = document.createElement("td");
                    tr5_td2.setAttribute("style","border:none;");
                    var tr5_td2_1 = document.createElement("td");
                    tr5_td2_1.setAttribute("style","border:none;");
                    var br7 = document.createElement("br");
                    var span_br7 = document.createElement("br");
                    var newTextBoxInput44 = document.createElement("INPUT");
                    newTextBoxInput44.setAttribute("disabled","true");
                         newTextBoxInput44.setAttribute("id","inpttttt1"+i);
                         newTextBoxInput44.value=pro_list[j+15]["1_Besin"];
                         newTextBoxInput44.setAttribute("oninput","dragFood(this.id);");
                         newTextBoxInput44.setAttribute("type","text");
                    var newSpan44 = document.createElement("span");
                         newSpan44.setAttribute("id", "inpttttt1" +i);
                         newSpan44.setAttribute("onclick","clearTextDefault(this.id);");
                         newSpan44.classList.add("fa");
                         newSpan44.classList.add("fa-fw");
                         newSpan44.classList.add("fa-trash");
                         tr5_td2.appendChild(br7);
                      tr5_td2.appendChild(newTextBoxInput44);
                      tr5_td2_1.appendChild(span_br7);
                      tr5_td2_1.appendChild(newSpan44);
                    var line4 = Object.keys(pro_list[j+15]).length;
                    for(var v=2;v<=line4;v++){
                      var br8 = document.createElement("br");
                      var span_br8 = document.createElement("br");
                      var newTextBoxInput4 = document.createElement("INPUT");
                      newTextBoxInput4.setAttribute("disabled","true");
                           newTextBoxInput4.setAttribute("id","inpttttt1"+v+i);
                           newTextBoxInput4.value=pro_list[j+15][v.toString() + "_Besin"];
                           newTextBoxInput4.setAttribute("oninput","dragFood(this.id);");
                           newTextBoxInput4.setAttribute("type","text");
                      var newSpan4 = document.createElement("span");
                           newSpan4.setAttribute("id", "inpttttt1" + v+i);
                           newSpan4.setAttribute("onclick","clearText(this.id);");
                           newSpan4.classList.add("fa");
                           newSpan4.classList.add("fa-fw");
                           newSpan4.classList.add("fa-trash");
                           tr5_td2.appendChild(br8);
                        tr5_td2.appendChild(newTextBoxInput4);
                        tr5_td2_1.appendChild(span_br8);
                        tr5_td2_1.appendChild(newSpan4);
                      // td.appendChild(newTextBoxInput);
                      // td.appendChild(newSpan);
                    }
                    var tr5_td3= document.createElement("td");
                    tr5_td3.setAttribute("style","border:none;");
                    var tr5_td3_span1 = document.createElement("span");
                    tr5_td3_span1.id="span1"+i;
                    tr5_td3_span1.classList.add("badge");
                    tr5_td3_span1.classList.add("badge-pill");
                    tr5_td3_span1.classList.add("badge-warning");
                    tr5_td3_span1.innerHTML=pro_list[j+19];
                    tr5_td3.appendChild(tr5_td3_span1);
                    var tr5_td4= document.createElement("td");
                    tr5_td4.setAttribute("style","border:none;");
                    var tr5_td4_span2 = document.createElement("span");
                    tr5_td4_span2.id="span2"+i;
                    tr5_td4_span2.classList.add("badge");
                    tr5_td4_span2.classList.add("badge-pill");
                    tr5_td4_span2.classList.add("badge-success");
                    tr5_td4_span2.innerHTML=pro_list[j+18];
                    tr5_td4.appendChild(tr5_td4_span2);
                    var tr5_td5= document.createElement("td");
                    tr5_td5.setAttribute("style","border:none;");
                    var tr5_td5_span3 = document.createElement("span");
                    tr5_td5_span3.id="span3"+i;
                    tr5_td5_span3.classList.add("badge");
                    tr5_td5_span3.classList.add("badge-pill");
                    tr5_td5_span3.classList.add("badge-danger");
                    tr5_td5_span3.innerHTML=pro_list[j+17];
                    tr5_td5.appendChild(tr5_td5_span3);
                    var tr5_td6= document.createElement("td");
                    tr5_td6.setAttribute("style","border:none;");
                    var tr5_td6_span4= document.createElement("span");
                    tr5_td6_span4.id="span4"+i;
                    tr5_td6_span4.classList.add("badge");
                    tr5_td6_span4.classList.add("badge-pill");
                    tr5_td6_span4.classList.add("badge-primary");
                    tr5_td6_span4.innerHTML=pro_list[j+16];
                    tr5_td6.appendChild(tr5_td6_span4);
                    tr5.appendChild(tr5_td1);
                    tr5.appendChild(tr5_td1_1);
                    tr5.appendChild(tr5_td2);
                    tr5.appendChild(tr5_td2_1);
                    tr5.appendChild(tr5_td3);
                    tr5.appendChild(tr5_td4);
                    tr5.appendChild(tr5_td5);
                    tr5.appendChild(tr5_td6);
                    var label5 = document.createElement("label");
                    label5.id="label5"+i
                    label5.innerHTML="Akşam Yemeği";
                    var tr6 = document.createElement("tr");
                    tr6.id="table"+((8*i)+5);
                    var i_5 = document.createElement("i");
                    i_5.id="spn"+((8*i)+5);
                    i_5.classList.add("fa");
                    i_5.classList.add("fa-fw");
                    i_5.classList.add("fa-plus");
                    i_5.setAttribute("onclick","newBox(this.id);");
                    var tr6_td1 = document.createElement("td");
                    tr6_td1.setAttribute("style","border:none;");
                    var tr6_td1_1 = document.createElement("td");
                    tr6_td1_1.setAttribute("style","border:none;");
                    tr6_td1.appendChild(label5);
                    tr6_td1_1.appendChild(i_5);
                    // var input5 = document.createElement("TEXTAREA");
                    // // input5.setAttribute("type","text");
                    // input5.setAttribute("id","inpuut5"+i);
                    // input5.value=pro_list[j];
                    // input5.setAttribute("oninput","dragFood(this.id);");
                    // // input5.classList.add("clearable");
                    // var tr6_td2 = document.createElement("td");
                    // tr6_td2.setAttribute("style","border:none;");
                    // tr6_td2.appendChild(input5);
                    var tr6_td2 = document.createElement("td");
                    tr6_td2.setAttribute("style","border:none;");
                    var tr6_td2_1 = document.createElement("td");
                    tr6_td2_1.setAttribute("style","border:none;");
                    var br9 = document.createElement("br");
                    var span_br9 = document.createElement("br");
                    var newTextBoxInput55 = document.createElement("INPUT");
                    newTextBoxInput55.setAttribute("disabled","true");
                         newTextBoxInput55.setAttribute("id","inptttttt1"+i);
                         newTextBoxInput55.value=pro_list[j+0]["1_Besin"];
                         newTextBoxInput55.setAttribute("oninput","dragFood(this.id);");
                         newTextBoxInput55.setAttribute("type","text");
                    var newSpan55 = document.createElement("span");
                         newSpan55.setAttribute("id", "inptttttt1"+i);
                         newSpan55.setAttribute("onclick","clearTextDefault(this.id);");
                         newSpan55.classList.add("fa");
                         newSpan55.classList.add("fa-fw");
                         newSpan55.classList.add("fa-trash");
                         tr6_td2.appendChild(br9);
                      tr6_td2.appendChild(newTextBoxInput55);
                      tr6_td2_1.appendChild(span_br9);
                      tr6_td2_1.appendChild(newSpan55);
                    var line5 = Object.keys(pro_list[j+0]).length;
                    for(var u=2;u<=line5;u++){
                      var br10 = document.createElement("br");
                      var span_br10 = document.createElement("br");
                      var newTextBoxInput5 = document.createElement("INPUT");
                      newTextBoxInput5.setAttribute("disabled","true");
                           newTextBoxInput5.setAttribute("id","inptttttt1"+u+i);
                           newTextBoxInput5.value=pro_list[j+0][u.toString() + "_Besin"];
                           newTextBoxInput5.setAttribute("oninput","dragFood(this.id);");
                           newTextBoxInput5.setAttribute("type","text");
                      var newSpan5 = document.createElement("span");
                           newSpan5.setAttribute("id", "inptttttt1" + u+i);
                           newSpan5.setAttribute("onclick","clearText(this.id);");
                           newSpan5.classList.add("fa");
                           newSpan5.classList.add("fa-fw");
                           newSpan5.classList.add("fa-trash");
                           tr6_td2.appendChild(br10);
                        tr6_td2.appendChild(newTextBoxInput5);
                        tr6_td2_1.appendChild(span_br10);
                        tr6_td2_1.appendChild(newSpan5);
                      // td.appendChild(newTextBoxInput);
                      // td.appendChild(newSpan);
                    }
                    var tr6_td3= document.createElement("td");
                    tr6_td3.setAttribute("style","border:none;");
                    var tr6_td3_span1 = document.createElement("span");
                    tr6_td3_span1.id="span1"+i;
                    tr6_td3_span1.classList.add("badge");
                    tr6_td3_span1.classList.add("badge-pill");
                    tr6_td3_span1.classList.add("badge-warning");
                    tr6_td3_span1.innerHTML=pro_list[j+4];
                    tr6_td3.appendChild(tr6_td3_span1);
                    var tr6_td4= document.createElement("td");
                    tr6_td4.setAttribute("style","border:none;");
                    var tr6_td4_span2 = document.createElement("span");
                    tr6_td4_span2.id="span2"+i;
                    tr6_td4_span2.classList.add("badge");
                    tr6_td4_span2.classList.add("badge-pill");
                    tr6_td4_span2.classList.add("badge-success");
                    tr6_td4_span2.innerHTML=pro_list[j+3];
                    tr6_td4.appendChild(tr6_td4_span2);
                    var tr6_td5= document.createElement("td");
                    tr6_td5.setAttribute("style","border:none;");
                    var tr6_td5_span3 = document.createElement("span");
                    tr6_td5_span3.id="span3"+i;
                    tr6_td5_span3.classList.add("badge");
                    tr6_td5_span3.classList.add("badge-pill");
                    tr6_td5_span3.classList.add("badge-danger");
                    tr6_td5_span3.innerHTML=pro_list[j+2];
                    tr6_td5.appendChild(tr6_td5_span3);
                    var tr6_td6= document.createElement("td");
                    tr6_td6.setAttribute("style","border:none;");
                    var tr6_td6_span4= document.createElement("span");
                    tr6_td6_span4.id="span4"+i;
                    tr6_td6_span4.classList.add("badge");
                    tr6_td6_span4.classList.add("badge-pill");
                    tr6_td6_span4.classList.add("badge-primary");
                    tr6_td6_span4.innerHTML=pro_list[j+1];
                    tr6_td6.appendChild(tr6_td6_span4);
                    tr6.appendChild(tr6_td1);
                    tr6.appendChild(tr6_td1_1);
                    tr6.appendChild(tr6_td2);
                    tr6.appendChild(tr6_td2_1);
                    tr6.appendChild(tr6_td3);
                    tr6.appendChild(tr6_td4);
                    tr6.appendChild(tr6_td5);
                    tr6.appendChild(tr6_td6);
                    var label6 = document.createElement("label");
                    label6.id="label6"+i
                    label6.innerHTML="3. Ara Öğün";
                    var tr7 = document.createElement("tr");
                    tr7.id="table"+((8*i)+6);
                    var i_6 = document.createElement("i");
                    i_6.id="spn"+((8*i)+6);
                    i_6.classList.add("fa");
                    i_6.classList.add("fa-fw");
                    i_6.classList.add("fa-plus");
                    i_6.setAttribute("onclick","newBox(this.id);");
                    var tr7_td1 = document.createElement("td");
                    tr7_td1.setAttribute("style","border:none;");
                    var tr7_td1_1 = document.createElement("td");
                    tr7_td1_1.setAttribute("style","border:none;");
                    tr7_td1.appendChild(label6);
                    tr7_td1_1.appendChild(i_6);
                    // var input6 = document.createElement("TEXTAREA");
                    // // input6.setAttribute("type","text");
                    // input6.setAttribute("id","inpuut6"+i);
                    // input6.value=pro_list[j+34];
                    // input6.setAttribute("oninput","dragFood(this.id);");
                    // // input6.classList.add("clearable");
                    // var tr7_td2 = document.createElement("td");
                    // tr7_td2.setAttribute("style","border:none;");
                    // tr7_td2.appendChild(input6);
                    var tr7_td2 = document.createElement("td");
                    tr7_td2.setAttribute("style","border:none;");
                    var tr7_td2_1 = document.createElement("td");
                    tr7_td2_1.setAttribute("style","border:none;");
                    var br11 = document.createElement("br");
                    var span_br11 = document.createElement("br");
                    var newTextBoxInput66 = document.createElement("INPUT");
                    newTextBoxInput66.setAttribute("disabled","true");
                         newTextBoxInput66.setAttribute("id","inpttttttt1"+i);
                         newTextBoxInput66.value=pro_list[j+34]["1_Besin"];
                         newTextBoxInput66.setAttribute("oninput","dragFood(this.id);");
                         newTextBoxInput66.setAttribute("type","text");
                    var newSpan66 = document.createElement("span");
                         newSpan66.setAttribute("id", "inpttttttt1" +i);
                         newSpan66.setAttribute("onclick","clearTextDefault(this.id);");
                         newSpan66.classList.add("fa");
                         newSpan66.classList.add("fa-fw");
                         newSpan66.classList.add("fa-trash");
                         tr7_td2.appendChild(br11);
                      tr7_td2.appendChild(newTextBoxInput66);
                      tr7_td2_1.appendChild(span_br11);
                      tr7_td2_1.appendChild(newSpan66);
                    // tr7_td2.appendChild(input6);
                    var line6 = Object.keys(pro_list[j+34]).length;
                    for(var l=2;l<=line6;l++){
                      var br12 = document.createElement("br");
                      var span_br12 = document.createElement("br");
                      var newTextBoxInput6 = document.createElement("INPUT");
                      newTextBoxInput6.setAttribute("disabled","true");
                           newTextBoxInput6.setAttribute("id","inpttttttt1"+l+i);
                           newTextBoxInput6.value=pro_list[j+34][l.toString() + "_Besin"];
                           newTextBoxInput6.setAttribute("oninput","dragFood(this.id);");
                           newTextBoxInput6.setAttribute("type","text");
                      var newSpan6 = document.createElement("span");
                           newSpan6.setAttribute("id", "inpttttttt1" + l+i);
                           newSpan6.setAttribute("onclick","clearText(this.id);");
                           newSpan6.classList.add("fa");
                           newSpan6.classList.add("fa-fw");
                           newSpan6.classList.add("fa-trash");
                           tr7_td2.appendChild(br12);
                        tr7_td2.appendChild(newTextBoxInput6);
                        tr7_td2_1.appendChild(span_br12);
                        tr7_td2_1.appendChild(newSpan6);
                      // td.appendChild(newTextBoxInput);
                      // td.appendChild(newSpan);
                    }
                    var tr7_td3= document.createElement("td");
                    tr7_td3.setAttribute("style","border:none;");
                    var tr7_td3_span1 = document.createElement("span");
                    tr7_td3_span1.id="span1"+i;
                    tr7_td3_span1.classList.add("badge");
                    tr7_td3_span1.classList.add("badge-pill");
                    tr7_td3_span1.classList.add("badge-warning");
                    tr7_td3_span1.innerHTML=pro_list[j+38];
                    tr7_td3.appendChild(tr7_td3_span1);
                    var tr7_td4= document.createElement("td");
                    tr7_td4.setAttribute("style","border:none;");
                    var tr7_td4_span2 = document.createElement("span");
                    tr7_td4_span2.id="span2"+i;
                    tr7_td4_span2.classList.add("badge");
                    tr7_td4_span2.classList.add("badge-pill");
                    tr7_td4_span2.classList.add("badge-success");
                    tr7_td4_span2.innerHTML=pro_list[j+37];
                    tr7_td4.appendChild(tr7_td4_span2);
                    var tr7_td5= document.createElement("td");
                    tr7_td5.setAttribute("style","border:none;");
                    var tr7_td5_span3 = document.createElement("span");
                    tr7_td5_span3.id="span3"+i;
                    tr7_td5_span3.classList.add("badge");
                    tr7_td5_span3.classList.add("badge-pill");
                    tr7_td5_span3.classList.add("badge-danger");
                    tr7_td5_span3.innerHTML=pro_list[j+36];
                    tr7_td5.appendChild(tr7_td5_span3);
                    var tr7_td6= document.createElement("td");
                    tr7_td6.setAttribute("style","border:none;");
                    var tr7_td6_span4= document.createElement("span");
                    tr7_td6_span4.id="span4"+i;
                    tr7_td6_span4.classList.add("badge");
                    tr7_td6_span4.classList.add("badge-pill");
                    tr7_td6_span4.classList.add("badge-primary");
                    tr7_td6_span4.innerHTML=pro_list[j+35];
                    tr7_td6.appendChild(tr7_td6_span4);
                    tr7.appendChild(tr7_td1);
                    tr7.appendChild(tr7_td1_1);
                    tr7.appendChild(tr7_td2);
                    tr7.appendChild(tr7_td2_1);
                    tr7.appendChild(tr7_td3);
                    tr7.appendChild(tr7_td4);
                    tr7.appendChild(tr7_td5);
                    tr7.appendChild(tr7_td6);
                    var label7 = document.createElement("label");
                    label7.id="label7"+i
                    label7.innerHTML="Alternatif";
                    var tr8 = document.createElement("tr");
                    tr8.id="table"+((8*i)+7);
                    var i_7 = document.createElement("i");
                    i_7.id="spn"+((8*i)+7);
                    i_7.classList.add("fa");
                    i_7.classList.add("fa-fw");
                    i_7.classList.add("fa-plus");
                    i_7.setAttribute("onclick","newBox(this.id);");
                    var tr8_td1 = document.createElement("td");
                    tr8_td1.setAttribute("style","border:none;");
                    var tr8_td1_1 = document.createElement("td");
                    tr8_td1_1.setAttribute("style","border:none;");
                    tr8_td1.appendChild(label7);
                    tr8_td1_1.appendChild(i_7);
                    // var input7 = document.createElement("TEXTAREA");
                    // // input7.setAttribute("type","text");
                    // input7.setAttribute("id","inpuut7"+i);
                    // input7.value=pro_list[j+5];
                    // input7.setAttribute("oninput","dragFood(this.id);");
                    // // input7.classList.add("clearable");
                    // var tr8_td2 = document.createElement("td");
                    // tr8_td2.setAttribute("style","border:none;");
                    // tr8_td2.appendChild(input7);
                    var tr8_td2 = document.createElement("td");
                    tr8_td2.setAttribute("style","border:none;");
                    var tr8_td2_1 = document.createElement("td");
                    tr8_td2_1.setAttribute("style","border:none;");
                    var br13 = document.createElement("br");
                    var span_br13 = document.createElement("br");
                    var newTextBoxInput77 = document.createElement("INPUT");
                    newTextBoxInput77.setAttribute("disabled","true");
                         newTextBoxInput77.setAttribute("id","inptttttttt1"+i);
                         newTextBoxInput77.value=pro_list[j+5]["1_Besin"];
                         newTextBoxInput77.setAttribute("oninput","dragFood(this.id);");
                         newTextBoxInput77.setAttribute("type","text");
                    var newSpan77 = document.createElement("span");
                         newSpan77.setAttribute("id", "inptttttttt1" +i);
                         newSpan77.setAttribute("onclick","clearTextDefault(this.id);");
                         newSpan77.classList.add("fa");
                         newSpan77.classList.add("fa-fw");
                         newSpan77.classList.add("fa-trash");
                         tr8_td2.appendChild(br13);
                      tr8_td2.appendChild(newTextBoxInput77);
                      tr8_td2_1.appendChild(span_br13);
                      tr8_td2_1.appendChild(newSpan77);
                    var line7 = Object.keys(pro_list[j+5]).length;
                    for(var f=2;f<=line7;f++){
                      var br14 = document.createElement("br");
                      var span_br14 = document.createElement("br");
                      var newTextBoxInput7 = document.createElement("INPUT");
                      newTextBoxInput7.setAttribute("disabled","true");
                           newTextBoxInput7.setAttribute("id","inptttttttt1"+f+i);
                           newTextBoxInput7.value=pro_list[j+5][f.toString() + "_Besin"];
                           newTextBoxInput7.setAttribute("oninput","dragFood(this.id);");
                           newTextBoxInput7.setAttribute("type","text");
                      var newSpan7 = document.createElement("span");
                           newSpan7.setAttribute("id", "inptttttttt1" + f+i);
                           newSpan7.setAttribute("onclick","clearText(this.id);");
                           newSpan7.classList.add("fa");
                           newSpan7.classList.add("fa-fw");
                           newSpan7.classList.add("fa-trash");
                           tr8_td2.appendChild(br14);
                        tr8_td2.appendChild(newTextBoxInput7);
                        tr8_td2_1.appendChild(span_br14);
                        tr8_td2_1.appendChild(newSpan7);
                      // td.appendChild(newTextBoxInput);
                      // td.appendChild(newSpan);
                    }
                    var tr8_td3= document.createElement("td");
                    tr8_td3.setAttribute("style","border:none;");
                    var tr8_td3_span1 = document.createElement("span");
                    tr8_td3_span1.id="span1"+i;
                    tr8_td3_span1.classList.add("badge");
                    tr8_td3_span1.classList.add("badge-pill");
                    tr8_td3_span1.classList.add("badge-warning");
                    tr8_td3_span1.innerHTML=pro_list[j+9];
                    tr8_td3.appendChild(tr8_td3_span1);
                    var tr8_td4= document.createElement("td");
                    tr8_td4.setAttribute("style","border:none;");
                    var tr8_td4_span2 = document.createElement("span");
                    tr8_td4_span2.id="span2"+i;
                    tr8_td4_span2.classList.add("badge");
                    tr8_td4_span2.classList.add("badge-pill");
                    tr8_td4_span2.classList.add("badge-success");
                    tr8_td4_span2.innerHTML=pro_list[j+8];
                    tr8_td4.appendChild(tr8_td4_span2);
                    var tr8_td5= document.createElement("td");
                    tr8_td5.setAttribute("style","border:none;");
                    var tr8_td5_span3 = document.createElement("span");
                    tr8_td5_span3.id="span3"+i;
                    tr8_td5_span3.classList.add("badge");
                    tr8_td5_span3.classList.add("badge-pill");
                    tr8_td5_span3.classList.add("badge-danger");
                    tr8_td5_span3.innerHTML=pro_list[j+7];
                    tr8_td5.appendChild(tr8_td5_span3);
                    var tr8_td6= document.createElement("td");
                    tr8_td6.setAttribute("style","border:none;");
                    var tr8_td6_span4= document.createElement("span");
                    tr8_td6_span4.id="span4"+i;
                    tr8_td6_span4.classList.add("badge");
                    tr8_td6_span4.classList.add("badge-pill");
                    tr8_td6_span4.classList.add("badge-primary");
                    tr8_td6_span4.innerHTML=pro_list[j+6];
                    tr8_td6.appendChild(tr8_td6_span4);
                    tr8.appendChild(tr8_td1);
                    tr8.appendChild(tr8_td1_1);
                    tr8.appendChild(tr8_td2);
                    tr8.appendChild(tr8_td2_1);
                    tr8.appendChild(tr8_td3);
                    tr8.appendChild(tr8_td4);
                    tr8.appendChild(tr8_td5);
                    tr8.appendChild(tr8_td6);
                    var tr9 =document.createElement("tr");
                    tr9.id="table"+((8*i)+8);
                    var tr9_td1 = document.createElement("td");
                    tr9_td1.setAttribute("style","border:none;");
                    var tr9_td1_1 = document.createElement("td");
                    tr9_td1_1.setAttribute("style","border:none;");
                    tr9_td1.innerHTML="";
                    var tr9_td2 = document.createElement("td");
                    tr9_td2.setAttribute("style","height:70px;border:none");
                    var b = document.createElement("B");
                    b.innerHTML="  TOPLAM";
                    var tr9_td2_1 = document.createElement("td");
                    tr9_td2_1.setAttribute("style","height:70px;border:none");
                    tr9_td2.appendChild(b);
                    var tr9_td3 = document.createElement("td");
                    tr9_td3.setAttribute("style","border:none;");
                    var tr9_td3_span1 = document.createElement("span");
                    tr9_td3_span1.classList.add("badge");
                    tr9_td3_span1.classList.add("badge-pill");
                    tr9_td3_span1.classList.add("badge-info");
                    tr9_td3_span1.id="span1"+i;
                    tr9_td3_span1.innerHTML=pro_list[j+33];
                    tr9_td3.appendChild(tr9_td3_span1);
                    var tr9_td4 = document.createElement("td");
                    tr9_td4.setAttribute("style","border:none;");
                    var tr9_td4_span1 = document.createElement("span");
                    tr9_td4_span1.classList.add("badge");
                    tr9_td4_span1.classList.add("badge-pill");
                    tr9_td4_span1.classList.add("badge-info");
                    tr9_td4_span1.id="span2"+i;
                    tr9_td4_span1.innerHTML=pro_list[j+32];
                    tr9_td4.appendChild(tr9_td4_span1);
                    var tr9_td5 = document.createElement("td");
                    tr9_td5.setAttribute("style","border:none;");
                    var tr9_td5_span1 = document.createElement("span");
                    tr9_td5_span1.classList.add("badge");
                    tr9_td5_span1.classList.add("badge-pill");
                    tr9_td5_span1.classList.add("badge-info");
                    tr9_td5_span1.id="span3"+i;
                    tr9_td5_span1.innerHTML=pro_list[j+31];
                    tr9_td5.appendChild(tr9_td5_span1);
                    var tr9_td6 = document.createElement("td");
                    tr9_td6.setAttribute("style","border:none;");
                    var tr9_td6_span1 = document.createElement("span");
                    tr9_td6_span1.classList.add("badge");
                    tr9_td6_span1.classList.add("badge-pill");
                    tr9_td6_span1.classList.add("badge-info");
                    tr9_td6_span1.id="span4"+i;
                    tr9_td6_span1.innerHTML=pro_list[j+30];
                    tr9_td6.appendChild(tr9_td6_span1);
                    tr9.appendChild(tr9_td1);
                    tr9.appendChild(tr9_td1_1);
                    tr9.appendChild(tr9_td2);
                    tr9.appendChild(tr9_td2_1);
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


                    i++;
                  }
                  // form.appendChild(btn);
                  // form.appendChild(btn2);
                  tableDiv.appendChild(form);
                  tableBig.appendChild(tableDiv);
                  console.log(pro_list);



              });
              // tableDiv.appendChild(form);
              // tableBig.appendChild(tableDiv);

        }
      });
    });

}
