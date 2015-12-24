window.onload = function(){


  var bod= $('#bod');


    var headerDiv=$('<div>').attr('id','header');
    var pitch ="Want better, bigger, expanding, inviting Butt...ons?";
    headerDiv.text(pitch);
    bod.append(headerDiv);

    var headerDivTwo=$('<div>').attr('id','headertwo');
    var pitchtwo ="Then click below!";
    headerDivTwo.text(pitchtwo);
    bod.append(headerDivTwo);

    var buttonDiv= $('<div>').attr('id', 'buttDiv');
    bod.append(buttonDiv);

    var buttButton=$('<button>').attr('class', 'mybutt');
    buttonDiv.append(buttButton);

// var headerDiv= document.createElement('div');
// headerDiv.id='header';
// headerDiv.innerHTML='Want better, bigger, expanding, inviting Butt...ons?';
// document.body.appendChild(headerDiv);

// var headerDivTwo=document.createElement('div');
// headerDivTwo.id='headertwo';
// headerDivTwo.innerHTML='Then click below!';
// document.body.appendChild(headerDivTwo);



};