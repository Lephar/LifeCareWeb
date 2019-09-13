var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  auth: {
    user: 'iletisim@lifecare.fit',
    pass: 'qwerty415263'
  }
});

var x = "abc";
var y = "cde";

var mailOptions = {
  from: 'iletisim@lifecare.fit',
  to: 'lifecare.fit.iletisim@gmail.com',
  subject: 'Sending Email using Node.js',
  html: x + " adlı kullanıcı " + y + " mail hesabıyla ön sipariş sistemine kayıt oldu.<br><br><img style='width: 130px; height:33px;' src='cid:iletisim@lifecare.fit'/>",
  attachments: [{
      filename: 'lifecarelogo.png',
      path: 'etc/lifecarelogo.png',
      cid: 'iletisim@lifecare.fit'
  }]
};

var transporter_lifecare_fit = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  auth: {
    user: 'iletisim@lifecare.fit',
    pass: 'qwerty415263'
  }
});

var mailOptions2 = {
  from: 'iletisim@lifecare.fit',
  to: 'lifecare.fit.iletisim@gmail.com',
  subject: '',
  html: ''
};

var username = "furkan";

transporter_lifecare_fit.sendMail(
  mailOptions2 =
  {
    from: 'iletisim@lifecare.fit',
    to: 'lifecare.fit.iletisim@gmail.com',
    subject: "lifecare.fit - Diyetisyen Hesabı Aktivasyonu",
    html: "Sayın Diyetisyen " +
    username +
    ",<br><br>" +
    "Sitemizde açmak istediğiniz diyetisyen hesabınız site yöneticilerimiz tarafından onaylanmıştır. Bizi beklediğiniz için teşekkür ederiz, iyi çalışmalar dileriz.<br><br>" +
    "Tüm soru, görüş ve önerilerinizi iletisim@lifecare.fit adresi üzerinden bizimle paylaşabilirsiniz.<br><br>" +
    "<img style='width: 130px; height:33px;' src='cid:iletisim@lifecare.fit'/>",
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

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
