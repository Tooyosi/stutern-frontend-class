$(document).ready(()=>{
  
  
  var modalTitle = $(".modal-title");
  var modalBody = $(".modal-body");
  var modalFooter = $(".modal-footer");
  $('button[type = "button"]').click(()=>{
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    modalTitle.text("Hello " + name);
    modalBody.text("We recieved a message: " +message);
    modalFooter.text("A reply has been sent to " + email);
  })
})