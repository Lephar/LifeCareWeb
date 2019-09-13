'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

var nodemailer = require('nodemailer');

var transporter_gmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lifecare.fit.iletisim@gmail.com',
    pass: 'Qwerty415263'
  }
});

var transporter_lifecare_fit = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  auth: {
    user: 'iletisim@lifecare.fit',
    pass: 'qwerty415263'
  }
});

var mailOptions = {
  from: 'lifecare.fit.iletisim@gmail.com',
  to: 'iletisim@lifecare.fit',
  subject: '',
  text: ''
};

// function calculate_age(d)
// {
//   var today = new Date();
//   d = d.split(".");
//   d = d[2] + "-" + d[1] + "-" + d[0];
//   var birthDate = new Date(d);
//   var age = today.getFullYear() - birthDate.getFullYear();
//   var m = today.getMonth() - birthDate.getMonth();
//   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
//   {
//     age--;
//   }
//   return age;
// }
//
// exports.connect_advisee_dietitian = functions.database.ref('/Chats/{pushId}/AppUserID')
// .onCreate((snapshot, context) => {
//   admin.database().ref("Chats/" + context.params.pushId + "/dietitian_id").once("value")
//   .then(function(snapshot1)
//   {
//     var updates;
//     admin.database().ref("AppUsers/" + snapshot.val() + "/PersonalInfo/gender").once("value")
//     .then(function(snapshot2)
//     {
//       admin.database().ref("WebUsers/UserInfos/" + snapshot1.val() + "/advisees_stat_info/gender/" + snapshot2.val()).once("value")
//       .then(function(snapshot3)
//       {
//         if (snapshot3.val() === null)
//         {
//           updates = {};
//           updates["WebUsers/UserInfos/" + snapshot1.val() + "/advisees_stat_info/gender/" + snapshot2.val()] = 1;
//           admin.database().ref().update(updates);
//         }
//         else
//         {
//           updates = {};
//           updates["WebUsers/UserInfos/" + snapshot1.val() + "/advisees_stat_info/gender/" + snapshot2.val()] = snapshot3.val()+1;
//           admin.database().ref().update(updates);
//         }
//         return console.log("returned: ", "1_1");
//       })
//       .catch(function(error)
//       {
//         return console.log("Error: ", error);
//       });
//
//       admin.database().ref("AppUsers/" + snapshot.val() + "/PersonalInfo/birth_date").once("value")
//       .then(function(snapshot2_1)
//       {
//         var age = calculate_age(snapshot2_1.val());
//         if (snapshot2.val() === "Erkek")
//         {
//           admin.database().ref("WebUsers/UserInfos/" + snapshot1.val() + "/advisees_stat_info/birth_dates/" + age.toString() + "/Erkek").once("value")
//           .then(function(snapshot3)
//           {
//             if (snapshot3.val() === null)
//             {
//               updates = {};
//               updates["WebUsers/UserInfos/" + snapshot1.val() + "/advisees_stat_info/birth_dates/" + age.toString() + "/Erkek"] = 1;
//               admin.database().ref().update(updates);
//             }
//             else
//             {
//               updates = {};
//               updates["WebUsers/UserInfos/" + snapshot1.val() + "/advisees_stat_info/birth_dates/" + age.toString() + "/Erkek"] = snapshot3.val()+1;
//               admin.database().ref().update(updates);
//             }
//             return console.log("returned: ", "2_1");
//           })
//           .catch(function(error)
//           {
//             return console.log("Error: ", error);
//           });
//         }
//         else if (snapshot2.val() === "Kadın")
//         {
//           admin.database().ref("WebUsers/UserInfos/" + snapshot1.val() + "/advisees_stat_info/birth_dates/" + age.toString() + "/Kadın").once("value")
//           .then(function(snapshot3)
//           {
//             if (snapshot3.val() === null)
//             {
//               updates = {};
//               updates["WebUsers/UserInfos/" + snapshot1.val() + "/advisees_stat_info/birth_dates/" + age.toString() + "/Kadın"] = 1;
//               admin.database().ref().update(updates);
//             }
//             else
//             {
//               updates = {};
//               updates["WebUsers/UserInfos/" + snapshot1.val() + "/advisees_stat_info/birth_dates/" + age.toString() + "/Kadın"] = snapshot3.val()+1;
//               admin.database().ref().update(updates);
//             }
//             return console.log("returned: ", "2_1");
//           })
//           .catch(function(error)
//           {
//             return console.log("Error: ", error);
//           });
//         }
//         return console.log("returned: ", "2");
//       })
//       .catch(function(error)
//       {
//         return console.log("Error: ", error);
//       });
//
//       return console.log("returned: ", "1");
//     })
//     .catch(function(error)
//     {
//       return console.log("Error: ", error);
//     });
//
//
//     admin.database().ref("AppUsers/" + snapshot.val() + "/PersonalInfo/country").once("value")
//     .then(function(country_snapshot)
//     {
//       if (country_snapshot.val() !== null)
//       {
//         if (country_snapshot.val() === "Türkiye")
//         {
//           admin.database().ref("AppUsers/" + snapshot.val() + "/PersonalInfo/city").once("value")
//           .then(function(snapshot2)
//           {
//             if (snapshot2.val() !== null)
//             {
//               admin.database().ref("WebUsers/UserInfos/" + snapshot1.val() + "/advisees_stat_info/countries/" + country_snapshot.val() + "/" + snapshot2.val()).once("value")
//               .then(function(snapshot3)
//               {
//                 if (snapshot3.val() === null)
//                 {
//                   updates = {};
//                   updates["WebUsers/UserInfos/" + snapshot1.val() + "/advisees_stat_info/countries/" + country_snapshot.val() + "/" + snapshot2.val()] = 1;
//                   admin.database().ref().update(updates);
//                 }
//                 else
//                 {
//                   updates = {};
//                   updates["WebUsers/UserInfos/" + snapshot1.val() + "/advisees_stat_info/countries/" + country_snapshot.val() + "/" + snapshot2.val()] = snapshot3.val()+1;
//                   admin.database().ref().update(updates);
//                 }
//                 return console.log("returned: ", "3_1");
//               })
//               .catch(function(error)
//               {
//                 return console.log("Error: ", error);
//               });
//             }
//             else
//             {
//               admin.database().ref("WebUsers/UserInfos/" + snapshot1.val() + "/advisees_stat_info/countries/Türkiye_just").once("value")
//               .then(function(snapshot3)
//               {
//                 if (snapshot3.val() === null)
//                 {
//                   updates = {};
//                   updates["WebUsers/UserInfos/" + snapshot1.val() + "/advisees_stat_info/countries/Türkiye_just"] = 1;
//                   admin.database().ref().update(updates);
//                 }
//                 else
//                 {
//                   updates = {};
//                   updates["WebUsers/UserInfos/" + snapshot1.val() + "/advisees_stat_info/countries/Türkiye_just"] = snapshot3.val()+1;
//                   admin.database().ref().update(updates);
//                 }
//                 return console.log("returned: ", "3_2");
//               })
//               .catch(function(error)
//               {
//                 return console.log("Error: ", error);
//               });
//             }
//             return console.log("returned: ", "3_0.5");
//           })
//           .catch(function(error)
//           {
//             return console.log("Error: ", error);
//           });
//         }
//         else
//         {
//           admin.database().ref("WebUsers/UserInfos/" + snapshot1.val() + "/advisees_stat_info/countries/" + country_snapshot.val()).once("value")
//           .then(function(snapshot3)
//           {
//             if (snapshot3.val() === null)
//             {
//               updates = {};
//               updates["WebUsers/UserInfos/" + snapshot1.val() + "/advisees_stat_info/countries/" + country_snapshot.val()] = 1;
//               admin.database().ref().update(updates);
//             }
//             else
//             {
//               updates = {};
//               updates["WebUsers/UserInfos/" + snapshot1.val() + "/advisees_stat_info/countries/" + country_snapshot.val()] = snapshot3.val()+1;
//               admin.database().ref().update(updates);
//             }
//             return console.log("returned: ", "3_3");
//           })
//           .catch(function(error)
//           {
//             return console.log("Error: ", error);
//           });
//         }
//       }
//       return console.log("returned: ", "3");
//     })
//     .catch(function(error)
//     {
//       return console.log("Error: ", error);
//     });
//     return console.log("returned: ", "last");
//   })
//   .catch(function(error)
//   {
//     return console.log("Error: ", error);
//   });
//   return console.log("returned: ", "first");
// });

exports.check_last_measure_time = functions.database.ref('/AppUsers/{userID}/Olcumlerim/{date}')
.onCreate((snapshot, context) => {
  var user_id = context.params.userID;
  var post_date = context.params.date;
  admin.database().ref("AppUsers/" + context.params.userID.toString() + "/PersonalInfo/last_measure_date").once("value")
  .then(function(snapshot)
  {
    var updates = {};
    if (!snapshot.val())
    {
      updates["last_measure_date"] = context.params.date;
      return admin.database().ref("AppUsers/" + context.params.userID.toString() + "/PersonalInfo/").update(updates);
    }
    else if (context.params.date > snapshot.val())
    {
      updates["last_measure_date"] = context.params.date;
      return admin.database().ref("AppUsers/" + context.params.userID.toString() + "/PersonalInfo/").update(updates);
    }
    return console.log("given date is not bigger than last_measure_date");
  })
  .catch(function()
  {
    return console.log("error");
  });
});

exports.sendMailPreorders = functions.database.ref('/preOrders/{pushId}/email')
    .onCreate((snapshot, context) => {
      return admin.database().ref("preOrders/" + context.params.pushId + "/name").on('value', function(snapshot2){
          transporter_gmail.sendMail(mailOptions = {
          from: 'lifecare.fit.iletisim@gmail.com',
          to: 'iletisim@lifecare.fit',
          subject: "Yeni Ön Sipariş",
          text: snapshot2.val() + " adlı kullanıcı " + snapshot.val() + " mail hesabıyla ön sipariş sistemine kayıt oldu.",
          html: 'Embedded image: <img src="etc/lifecarelogo.png"/>',
          attachments: [{
              filename: 'lifecarelogo.png',
              path: 'etc/lifecarelogo.png',
              cid: 'etc/lifecarelogo.png' //same cid value as in the html img src
          }]
        }, function(error, info){
          if (error) {
            console.log(error);
            return false;
          } else {
            console.log('Email sent: ' + info.response);
            return true;
          }
        });
      });
});


exports.sendMailDietitians = functions.database.ref('/Dietitians/{pushId}/email')
    .onCreate((snapshot, context) => {
      admin.database().ref("Dietitians/" + context.params.pushId + "/name").on('value', function(snapshot2){
          transporter_gmail.sendMail(mailOptions = {
          from: 'lifecare.fit.iletisim@gmail.com',
          to: 'iletisim@lifecare.fit',
          subject: "Yeni Kullanıcı Girişi",
          text: snapshot2.val() + " adlı diyetisyen " + snapshot.val() + " mail hesabıyla sisteme kayıt oldu."
        }, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
      });
});

exports.sendMailAdvisees = functions.database.ref('/Advisees/{pushId}/email')
    .onCreate((snapshot, context) => {
      admin.database().ref("Advisees/" + context.params.pushId + "/name").on('value', function(snapshot2){
          transporter_gmail.sendMail(mailOptions = {
          from: 'lifecare.fit.iletisim@gmail.com',
          to: 'iletisim@lifecare.fit',
          subject: "Yeni Kullanıcı Girişi",
          text: snapshot2.val() + " adlı danışan " + snapshot.val() + " mail hesabıyla sisteme kayıt oldu."
        }, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
      });
});

function send_verification_mail_to_admins(uid, req)
{
  var returned = true;
  transporter_gmail.sendMail(
    mailOptions =
    {
      from: 'lifecare.fit.iletisim@gmail.com',
      to: 'iletisim@lifecare.fit',
      subject: "Yeni Diyetisyen Kaydı",
      text: "Yeni bir diyetisten sisteme kayıt oldu.\n\nDiyetisyenin Bilgileri:\n" +
      "Adı Soyadı: " + req.new_user.name.toString() + "\n" +
      "Email Adresi: " + req.new_user.email.toString() + "\n" +
      "TC Kimlik Numarası: " + req.new_user.tcno.toString() + "\n" +
      "Mezun Olduğu Okul: " + req.new_user.graduated.toString() + "\n" +
      "Diploma Numarası: " + req.new_user.diplomano.toString() + "\n" +
      "Bu kullanıcıyı onaylamak için lütfen aşağıdaki linke tıklayınız.\n\n" +
      "https://us-central1-lifecare-55c38.cloudfunctions.net/make_a_dietitian_active_to_login?user=" + uid + "\n"
    },
    function(error, info)
    {
      if (error)
      {
        console.log(error);
        returned = false;
      }
      else
      {
        console.log('Email sent: ' + info.response);
        returned = true;
      }
    }
  );
  console.log("Function returned: ", returned);
  return returned;
}

function send_activated_mail_to_advisees(username, mail)
{
  var returned = true;
  transporter_gmail.sendMail(
    mailOptions =
    {
      from: 'lifecare.fit.iletisim@gmail.com',
      to: mail,
      subject: "lifecare.fit - Diyetisyen Hesabı Aktivasyonu",
      html: "Sayın Diyetisyen " +
      username +
      ",<br><br>" +
      "Sitemizde açmak istediğiniz diyetisyen hesabınız site yöneticilerimiz tarafından onaylanmıştır. Bizi beklediğiniz için teşekkür ederiz, iyi çalışmalar dileriz.<br><br>" +
      "Tüm soru, görüş ve önerilerinizi iletisim@lifecare.fit adresi üzerinden bizimle paylaşabilirsiniz.<br><br>" +
      "<img style='width: 130px; height:33px; margin-left: 5%;' src='cid:iletisim@lifecare.fit'/>",
      attachments: [{
          filename: 'lifecarelogo.png',
          path: 'etc/lifecarelogo.png',
          cid: 'iletisim@lifecare.fit'
      }]
    },
    function(error, info)
    {
      if (error)
      {
        console.log(error);
        return false;
      }
      else
      {
        console.log('Email sent: ' + info.response);
        return true;
      }
    }
  );
  console.log("Function returned: ", returned);
  return returned;
}

exports.create_new_user = functions.https.onCall((req, context) => {
  return admin.auth().getUserByEmail(req.new_user.email)
  .then(function(userRecord)
  {
    return admin.auth().updateUser(userRecord.uid, {
    emailVerified: false,
    displayName: req.new_user.name.toString(),
    disabled: false
    })
    .then(function(userRecord)
    {
      admin.database().ref("WebUsers/UserInfos/" + userRecord.uid).set({
        tcno: req.new_user.tcno.toString(),
        graduated: req.new_user.graduated.toString(),
        diplomano: req.new_user.diplomano.toString(),
        isActive: false,
        monthly_income: 0
      });
      var returned = send_verification_mail_to_admins(userRecord.uid, req);
      if (returned === true)
      {
        return {text: "successful"};
      }
      else
      {
        return {text: "other"};
      }
    })
    .catch(function(error)
    {
      return {text: "other"};
    });
  })
  .catch(function(error)
  {
    console.log("Error creating new user:", error);
    return {text: error.errorInfo.code};
  });
});

exports.make_a_dietitian_active_to_login = functions.https.onRequest((req, res) => {
    admin.auth().getUser(req.query.user.toString())
    .then(function(userRecord)
    {
      var updates = {};
      updates["WebUsers/UserInfos/" + req.query.user.toString() + "/isActive"] = true;
      admin.database().ref().update(updates);
      var returned = send_activated_mail_to_advisees(userRecord.displayName, userRecord.email);
      console.log("returned: ", returned);
      if (returned === true)
      {
        return res.send(req.query.user.toString() + " succesfully activated.");
      }
      else
      {
        return res.send(req.query.user.toString() + " cannot be activated.");
      }
    })
    .catch(function(error) {
      console.log("Error fetching user data:", error);
      return res.send(req.query.user.toString() + " cannot be activated.");
    });
});

exports.new_preorder = functions.https.onCall((req, context) => {
  var name = req.new_user.username;
  var mail = req.new_user.email;
  return admin.database().ref("preOrders/").orderByChild("email").equalTo(mail).once("value")
  .then(function(snapshot)
  {
    if (snapshot.val() !== null)
    {
      return {text: "mail_error"};
    }
    else
    {
      return admin.database().ref("preOrders/").push(
      {
        name: name.toString(),
        email: mail.toString()
      })
      .then(function()
      {
        return {text: "successful"};
      })
      .catch(function()
      {
        return {text: "error"};
      });
    }
  })
  .catch(function(error)
  {
    return {text: "error"};
  });
});

exports.send_generated_code_to_advisee = functions.https.onCall((req, context) => {
  var mail = req.new_mail.email;
  var generated_code = req.new_mail.code;
  var dietitian_name = req.new_mail.name;
  return admin.auth().getUserByEmail(mail)
  .then(function(userRecord) {
    return transporter_gmail.sendMail(
      mailOptions =
      {
        from: 'lifecare.fit.iletisim@gmail.com',
        to: userRecord.email,
        subject: "lifecare.fit - Diyetisyen Kodu",
        html: "Sayın " +
        userRecord.displayName +
        ",<br><br>" +
        "Diyetisyeninizin sizinle bağlantı kurup daha iyi bir şekilde yardımcı olabilmesi için hesaplarınızın bağlanması gerekmektedir. Bu sebeple diyetisyeniniz " + dietitian_name + " size bağlantı kodu göndermiştir. <br>Aşağıdaki kodu uygulamanızda hesabınızı açtıktan sonra girdiğinizde diyetisyeninizle bağlantınız sağlanacaktır.<br><br>" + "Diyetisyeninizin sizinle paylaştığı kod:<br>" + generated_code + "<br><br>Tüm soru, görüş ve önerilerinizi iletisim@lifecare.fit adresi üzerinden bizimle paylaşabilirsiniz.<br><br>" +
        "<img style='width: 130px; height:33px; margin-left: 5%;' src='cid:iletisim@lifecare.fit'/>",
        attachments: [{
            filename: 'lifecarelogo.png',
            path: 'etc/lifecarelogo.png',
            cid: 'iletisim@lifecare.fit'
        }]
      },
      function(error, info)
      {
        if (error)
        {
          console.log(error);
          return {text: "mail_error"};
        }
        else
        {
          console.log('Email sent: ' + info.response);
          return {text: "successful"};
        }
      }
    );
  })
  .catch(function(error) {
    if (error.code === "auth/user-not-found")
    {
      return {text: "advisee_error"};
    }
    else
    {
      return {text: "mail_error"};
    }
  });
});

exports.check_user_to_login = functions.https.onCall((req, context) => {
  var email = req.data.email;
  return admin.auth().getUserByEmail(email)
  .then(function(userRecord)
  {
    return admin.database().ref("WebUsers/UserInfos/" + userRecord.uid).once("value").then(function(snapshot1)
    {
      if (snapshot1.val() !== null)
      {
        if (userRecord.emailVerified === true)
        {
          return admin.database().ref("WebUsers/UserInfos/" + userRecord.uid + "/isActive").once("value").then(function(snapshot2)
          {
            if (snapshot2.val() === true)
            {
              return {text: "ok"};
            }
            else
            {
              return {text: "not_admin_verified"};
            }
          })
          .catch(function()
          {
            console.log("unexpected_error_1");
            return {text: "unexpected_error"};
          });
        }
        else
        {
          return {text: "not_user_verified"};
        }
      }
      else
      {
        return {text: "not_dietitian"};
      }
    })
    .catch(function()
    {
      console.log("unexpected_error_2");
      return {text: "unexpected_error"};
    });
  })
  .catch(function(error)
  {
    if (error.code === "auth/user-not-found")
    {
      return {text: "not_a_user"};
    }
    else
    {
      console.log("unexpected_error_3");
      return {text: "unexpected_error"};
    }
  });

});
