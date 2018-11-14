$(document).ready(()=>{
  
  
  var modalTitle = $(".modal-title");
  var modalBody = $(".modal-body");
  var modalFooter = $(".modal-footer");
  $('button[type = "submit"]').click((e)=>{
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    if(name !='' || email !='' || message !=''){
      modalTitle.text("Hello " + name);
      modalBody.text("We recieved a message: " +message);
      modalFooter.text("A reply has been sent to " + email); 
    }else{
      modalTitle.text("Please input your name");
      modalBody.text("Please input your message");
      modalFooter.text("Please input your email" ); 
    }
    })
})