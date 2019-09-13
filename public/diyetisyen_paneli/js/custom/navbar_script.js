function search_button(q)
{
  q = q.replace(/ /g, "|");
  window.location.href = "danisanlar.html?s=" + q;
}

function nav_bar_part_of_the_page(user)
{
  document.getElementById("user_name_1").innerHTML = user.displayName;
  document.getElementById("user_name_3").innerHTML = user.displayName;
  document.getElementById("user_name_2").innerHTML = user.displayName.split(" ")[0];
  if (user.photoURL != null)
  {
    document.getElementById("user_photo_1").src = user.photoURL;
    document.getElementById("user_photo_2").src = user.photoURL;
    document.getElementById("user_photo_3").src = user.photoURL;
  }
  else
  {
    document.getElementById("user_photo_1").src = "diyetisyen_paneli/img/black_user.jpg";
    document.getElementById("user_photo_2").src = "diyetisyen_paneli/img/black_user.jpg";
    document.getElementById("user_photo_3").src = "diyetisyen_paneli/img/black_user.jpg";
  }
}

function put_user_to_message_box(photo_url, user_name, unread_messages, user_id)
{
  var old_element = document.getElementById("new_message_notification." + user_id);
  if (old_element != null)
  {
    old_element.parentElement.removeChild(old_element);
  }
  else
  {
    var old_value = parseInt(document.getElementById("new_messages_count").innerHTML);
    document.getElementById("new_messages_count").innerHTML = (old_value+1).toString() + " Yeni";

    var old_value_2 = parseInt(document.getElementById("new_messages_count_header").innerHTML);
    document.getElementById("new_messages_count_header").innerHTML = (old_value_2+1).toString();
  }
  var ele1 = document.createElement("a");
  ele1.href = "chatting.html?u=" + user_id;
  var ele1_1 = document.createElement("img");
  ele1_1.classList.add("ground-avatar");
  if (photo_url == null)
  {
    ele1_1.src = "diyetisyen_paneli/img/black_user.jpg";
  }
  else
  {
    ele1_1.src = photo_url;
  }
  ele1.appendChild(ele1_1);

  var ele2 = document.createElement("div");
  ele2.classList.add("ground-content");
  var ele2_1 = document.createElement("h6");
  var ele2_1_1 = document.createElement("a");
  ele2_1_1.href = "chatting.html?u=" + user_id;
  ele2_1_1.innerHTML = user_name;
  ele2_1.appendChild(ele2_1_1);
  ele2.appendChild(ele2_1);

  var ele3 = document.createElement("div");
  ele3.classList.add("ground-right");
  var ele3_1 = document.createElement("span");
  ele3_1.classList.add("badge");
  ele3_1.classList.add("bg-danger");
  ele3_1.classList.add("badge-pill");
  ele3_1.innerHTML = unread_messages;
  // ele3_1.classList.add("small");
  // ele3_1.innerHTML = last_message_time + " - " + unread_messages;
  ele3.appendChild(ele3_1);

  var ele0 = document.createElement("div");
  ele0.id = "new_message_notification." + user_id;
  ele0.classList.add("ground");
  ele0.classList.add("ground-single-list");
  ele0.appendChild(ele1);
  ele0.appendChild(ele2);
  ele0.appendChild(ele3);
  document.getElementById("message-box").appendChild(ele0);
}

function fill_message_box(user)
{
  firebase.database().ref("WebUsers/UserInfos/" + user.uid + "/ChatIDs").once("value")
  .then(function(snapshot)
  {
    snapshot.forEach(function(childSnapshot)
    {
      firebase.database().ref("Chats/" + childSnapshot.val() + "/DietitianUnreadedMessages").on("value", function(snapshot2)
      {
        if (snapshot2.val() != 0)
        {
          var unreaded_user_id = firebase.database().ref("Chats/" + childSnapshot.val() + "/AppUserID").once("value")
          .then(function(snapshot2_1)
          {
            return snapshot2_1.val();
          });

          var unreaded_user_name = firebase.database().ref("Chats/" + childSnapshot.val() + "/AppUserName").once("value")
          .then(function(snapshot3)
          {
            return snapshot3.val();
          });

          var unreaded_user_photo = firebase.database().ref("AppUsers/" + childSnapshot.key.toString() + "/PersonalInfo/photo_url").once("value")
          .then(function(snapshot4)
          {
            return snapshot4.val();
          });

          // var unreaded_user_last_message_time = firebase.database().ref("Chats/" + childSnapshot.val() + "/last_message_time").once("value")
          // .then(function(snapshot5)
          // {
          //   var last_message_time = snapshot5.val();
          //   var d = new Date(last_message_time);
          //   var minutes = d.getMinutes();
          //   if (minutes<10)
          //   {
          //     minutes = "0" + minutes.toString();
          //   }
          //   d = d.getHours() + ":" + minutes + " - " + d.getDate() + "." + (d.getMonth()+1) + "." + d.getFullYear();
          //   return d;
          // });

          var unreaded_user_unread_messages = snapshot2.val();
          Promise.all([unreaded_user_photo, unreaded_user_name, unreaded_user_unread_messages, unreaded_user_id]).then(function(values)
          {
            put_user_to_message_box(values[0], values[1], values[2], values[3]);
            // document.getElementById("butt").innerHTML += values[0] + "</br>" + values[1] + "</br>" + values[2] + "</br>" + values[3] + "</br>";
          });
        }
        else
        {
          firebase.database().ref("Chats/" + childSnapshot.val() + "/AppUserID").once("value")
          .then(function(snapshot6)
          {
            var old_element = document.getElementById("new_message_notification." + 	snapshot6.val());
            if (old_element != null)
            {
              old_element.parentElement.removeChild(old_element);
              var old_value = parseInt(document.getElementById("new_messages_count").innerHTML);
              document.getElementById("new_messages_count").innerHTML = (old_value-1).toString() + " Yeni";
              var old_value_2 = parseInt(document.getElementById("new_messages_count_header").innerHTML);
              document.getElementById("new_messages_count_header").innerHTML = (old_value_2-1).toString();
            }
          });
        }
      });
    });
  });
}

function log_out()
{
  firebase.auth().signOut().then(function()
  {
    document.location.replace("login.html");
  }, function(error)
  {

  });
}
