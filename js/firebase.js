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

    } else{
    console.log("not logged in");

    //user_icon change
    $("#user_icon").attr("src","img/item/user.png")

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


});
