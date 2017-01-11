$(function(){
  // Initialize Firebase
    var config = {
      apiKey: "AIzaSyD4I6Hcv-lh_JfLWvhpGegD9ZXQQvF-m7k",
      authDomain: "final-24940.firebaseapp.com",
      databaseURL: "https://final-24940.firebaseio.com",
      storageBucket: "final-24940.appspot.com",
      messagingSenderId: "508634277677"
    };
    firebase.initializeApp(config);

  // Firebase database reference
  var dbLogIn = firebase.database().ref().child('login');
  var dbUser = firebase.database().ref().child('user');
  var dbPic1 = firebase.database().ref().child('user').child('pic1');
  var dbRef = firebase.database().ref();
  //card input
  var $input = $(".card_input");


  // REGISTER DOM ELEMENTS
  const $email = $('#email');
  const $password = $('#password');
  const $btnSignIn = $('#btnSignIn');
  const $btnSignUp = $('#btnSignUp');
  const $btnSignOut = $('#btnSignOut');
  const $btnSubmit = $('#btnSubmit');
  const $signInfo = $('#sign-info');
  //sign in
  const $signPic = $('#sign_pic');


  var storageRef = firebase.storage().ref();


  // SignIn/SignUp/SignOut Button status
  var user = firebase.auth().currentUser;
  if (user) {
    $btnSignIn.attr('disabled', 'disabled');
    $btnSignUp.attr('disabled', 'disabled');
    $btnSignOut.removeAttr('disabled')
  } else {
    $btnSignOut.attr('disabled', 'disabled');
    $btnSignIn.removeAttr('disabled')
    $btnSignUp.removeAttr('disabled')
  }

  // Sign In
  $btnSignIn.click(function(e){
    const email = $email.val();
    const pass = $password.val();
    const auth = firebase.auth();
    // signIn
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(function(e){
      console.log(e.message);
      $signInfo.html(e.message);
    });
    promise.then(function(){
      console.log('SignIn User');
    });
  });

  // SignUp
  $btnSignUp.click(function(e){
    const email = $email.val();
    const pass = $password.val();
    const auth = firebase.auth();
    // signUp
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(function(e){
      console.log(e.message);
      $signInfo.html(e.message);
    });
    promise.then(function(user){
      console.log("SignUp user is "+user.email);
    });
  });

  // Listening Login User
  firebase.auth().onAuthStateChanged(function(user){
    var use = firebase.auth().currentUser;
    console.log(use);

    if(user) {
      console.log(user);
      const loginName = user.displayName || user.email;
      const dbUserid = dbUser.child(use.uid);
      $signInfo.html(loginName+" is login...");
      $btnSignIn.attr('disabled', 'disabled');
      $btnSignUp.attr('disabled', 'disabled');
      $btnSignOut.removeAttr('disabled')

      //change button
      $btnSignIn.removeClass("colorset");
      //change pic
      $signPic.attr("src", "img/sign_in.jpg");
      $(".title_text").css("margin-top", "-50px");
      $(".title_text").html("WELCOME !");
      //user_icon change
      $("#user_icon").attr("src","img/item/user_in.png")
      //like pics appear
      $(".move").css("display", "none");
      $("#like_text").css("display", "block");
      $("#like_pic").css("display", "block");

    } else{
    console.log("not logged in");

    //user_icon change
    $("#user_icon").attr("src","img/item/user.png")
    //like pics appear
    $(".move").css("display", "block");
    $("#like_text").css("display", "none");
    $("#like_pic").css("display", "none");

    }
  });

  // SignOut
  $btnSignOut.click(function(){
    firebase.auth().signOut();
    console.log('LogOut');
    $signInfo.html('No one login...');
    $btnSignOut.attr('disabled', 'disabled');
    $btnSignIn.removeAttr('disabled');
    $btnSignUp.removeAttr('disabled');

    //clear input
    $input.val('');
    //change button
    $btnSignIn.addClass("colorset");
    //change pic
    $signPic.attr("src", "img/sign.jpg");
    $(".title_text").css("margin-top", "-190px");
    $(".title_text").html("SIGN UP/IN");

    // location.reload();
  });


  //like system 收藏系統
  var $like = $(".like").parent("li");
  var Pic1=""; var Pic2=""; var Pic3=""; var Pic4="";
  var x; /*暫存用*/
      $like.click(function(like){
        var likePic = $(this).parent("ul").children(".pic").attr("href");
        var use = firebase.auth().currentUser;
        const dbUserid = dbUser.child(use.uid);

        //heart change red ___ add on user card
        if($(this).hasClass("click")){
          $(this).removeClass("click");
          $(this).children("p").css("color", "black");
          // dislike__remove
          if(Pic1 == likePic){Pic1 = "";}
          if(Pic2 == likePic){Pic2 = "";}
          if(Pic3 == likePic){Pic3 = "";}
          if(Pic4 == likePic){Pic4 = "";}
          dbUserid.set({pic1:Pic1, pic2:Pic2, pic3:Pic3, pic4:Pic4});
        }
        else{
          $(this).addClass("click");
          $(this).children("p").css("color", "red");

          // if hole in the middle, put the pic there first
          if( (Pic1=="")&&((Pic2||Pic3||Pic4)!="") ){
            Pic1 = likePic;
            dbUserid.set({pic1:Pic1, pic2:Pic2, pic3:Pic3, pic4:Pic4});
          }
          else if((Pic2=="")&&((Pic3||Pic4)!="")){
            Pic2 = likePic;
            dbUserid.set({pic1:Pic1, pic2:Pic2, pic3:Pic3, pic4:Pic4});
          }
          else if((Pic3=="")&&(Pic4!="")){
            Pic3 = likePic;
            dbUserid.set({pic1:Pic1, pic2:Pic2, pic3:Pic3, pic4:Pic4});
          }
          else{
            x = Pic4; Pic4 = Pic3; Pic3 = Pic2; Pic2 = Pic1;
            Pic1 = likePic; //move to the first hole
            dbUserid.set({pic1:Pic1, pic2:Pic2, pic3:Pic3, pic4:Pic4});
          }
          return false;
        }
      });

      firebase.auth().onAuthStateChanged(function(user){
        if(user){
          var use = firebase.auth().currentUser;
          const dbUserid = dbUser.child(use.uid);
          var $pic1 = dbUserid.child('pic1');
          var $pic2 = dbUserid.child('pic2');
          var $pic3 = dbUserid.child('pic3');
          var $pic4 = dbUserid.child('pic4');

        //show on user card
          $pic1.on('value', function(snap){
            $("#pic1").attr("src", Pic1);
          });
          $pic2.on('value', function(snap){
            $("#pic2").attr("src", Pic2);
          });
          $pic3.on('value', function(snap){
            $("#pic3").attr("src", Pic3);
          });
          $pic4.on('value', function(snap){
            $("#pic4").attr("src", Pic4);
          });
        }
      });
  //like system end 收藏系統


});
