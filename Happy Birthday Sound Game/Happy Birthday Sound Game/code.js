var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["94850ad1-982b-44e3-b190-b99a4d4fb40e","82eca0e7-d4a4-4c43-8bcd-6d0bd10e9c36","750ef167-e02b-437f-b907-137d261b5af7","bfdc94c9-4a9a-490b-ae3c-301599d3c786","f0c34ce8-a455-4094-95a7-02b96e90ff13","090a69ed-8360-4f2b-9d21-5bf82b29ac06","8c41959e-f16a-4b09-839b-86117b9bfc55","2db0582d-662f-45e6-a2d3-8ba76a93737e","d7abef41-62f9-45b3-9463-c630264fa7f8","43613b14-663c-4408-b7e6-21c82ab1367b","46fd728d-f47d-40f3-a8a7-164725b6cbfb","d36c0b38-c26b-4043-a359-4c001b2693f7","06617ff2-2f28-4b62-a087-24835a6a8479"],"propsByKey":{"94850ad1-982b-44e3-b190-b99a4d4fb40e":{"name":"Boy1","sourceUrl":"assets/v3/animations/mblCrZstxjGn_7zCPXmNNLgo94b2oLp58TIdneDXFWY/94850ad1-982b-44e3-b190-b99a4d4fb40e.png","frameSize":{"x":667,"y":801},"frameCount":1,"looping":true,"frameDelay":4,"version":"ZZWWIoUIgEx5F6T.Zw8nbaJQYBkY0DJk","loadedFromSource":true,"saved":true,"sourceSize":{"x":667,"y":801},"rootRelativePath":"assets/v3/animations/mblCrZstxjGn_7zCPXmNNLgo94b2oLp58TIdneDXFWY/94850ad1-982b-44e3-b190-b99a4d4fb40e.png"},"82eca0e7-d4a4-4c43-8bcd-6d0bd10e9c36":{"name":"Boy2","sourceUrl":null,"frameSize":{"x":667,"y":801},"frameCount":1,"looping":true,"frameDelay":12,"version":"IKcK7Q2GCnAgNXqEN8GZT5Y2MZhKkJIr","loadedFromSource":true,"saved":true,"sourceSize":{"x":667,"y":801},"rootRelativePath":"assets/82eca0e7-d4a4-4c43-8bcd-6d0bd10e9c36.png"},"750ef167-e02b-437f-b907-137d261b5af7":{"name":"pushbutton","sourceUrl":null,"frameSize":{"x":550,"y":550},"frameCount":1,"looping":true,"frameDelay":12,"version":"f5JLff4OeodEmfQkVb3TD_kN60ZqFLFj","loadedFromSource":true,"saved":true,"sourceSize":{"x":550,"y":550},"rootRelativePath":"assets/750ef167-e02b-437f-b907-137d261b5af7.png"},"bfdc94c9-4a9a-490b-ae3c-301599d3c786":{"name":"arrow","sourceUrl":null,"frameSize":{"x":769,"y":1112},"frameCount":1,"looping":true,"frameDelay":12,"version":"xNL5biTKaxw6cDPbuXBFYJNUMitHHu3V","loadedFromSource":true,"saved":true,"sourceSize":{"x":769,"y":1112},"rootRelativePath":"assets/bfdc94c9-4a9a-490b-ae3c-301599d3c786.png"},"f0c34ce8-a455-4094-95a7-02b96e90ff13":{"name":"birthday","sourceUrl":"assets/v3/animations/mblCrZstxjGn_7zCPXmNNLgo94b2oLp58TIdneDXFWY/f0c34ce8-a455-4094-95a7-02b96e90ff13.png","frameSize":{"x":600,"y":300},"frameCount":1,"looping":true,"frameDelay":4,"version":"b7eekMCjzQ.gtwRRDIYsOlPCcNYoW9_W","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":300},"rootRelativePath":"assets/v3/animations/mblCrZstxjGn_7zCPXmNNLgo94b2oLp58TIdneDXFWY/f0c34ce8-a455-4094-95a7-02b96e90ff13.png"},"090a69ed-8360-4f2b-9d21-5bf82b29ac06":{"name":"party1","sourceUrl":"assets/v3/animations/mblCrZstxjGn_7zCPXmNNLgo94b2oLp58TIdneDXFWY/090a69ed-8360-4f2b-9d21-5bf82b29ac06.png","frameSize":{"x":947,"y":961},"frameCount":1,"looping":true,"frameDelay":4,"version":"eaywy6QKiM3g24DLfy_xsIJpybhmdlkd","loadedFromSource":true,"saved":true,"sourceSize":{"x":947,"y":961},"rootRelativePath":"assets/v3/animations/mblCrZstxjGn_7zCPXmNNLgo94b2oLp58TIdneDXFWY/090a69ed-8360-4f2b-9d21-5bf82b29ac06.png"},"8c41959e-f16a-4b09-839b-86117b9bfc55":{"name":"party2","sourceUrl":null,"frameSize":{"x":947,"y":961},"frameCount":1,"looping":true,"frameDelay":12,"version":"GtKX7G0IhTd_bUlREUlEDklj1UsRRRLk","loadedFromSource":true,"saved":true,"sourceSize":{"x":947,"y":961},"rootRelativePath":"assets/8c41959e-f16a-4b09-839b-86117b9bfc55.png"},"2db0582d-662f-45e6-a2d3-8ba76a93737e":{"name":"hi1","sourceUrl":null,"frameSize":{"x":282,"y":396},"frameCount":1,"looping":true,"frameDelay":12,"version":"B..jDrNH6LR.71l_LBueFZ._Uvf9OD9O","loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":396},"rootRelativePath":"assets/2db0582d-662f-45e6-a2d3-8ba76a93737e.png"},"d7abef41-62f9-45b3-9463-c630264fa7f8":{"name":"hi2","sourceUrl":null,"frameSize":{"x":282,"y":396},"frameCount":1,"looping":true,"frameDelay":12,"version":"0kijyWtqm6GY1kVlkl_se7sxLGPtW62I","loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":396},"rootRelativePath":"assets/d7abef41-62f9-45b3-9463-c630264fa7f8.png"},"43613b14-663c-4408-b7e6-21c82ab1367b":{"name":"play","sourceUrl":"assets/v3/animations/mblCrZstxjGn_7zCPXmNNLgo94b2oLp58TIdneDXFWY/43613b14-663c-4408-b7e6-21c82ab1367b.png","frameSize":{"x":602,"y":603},"frameCount":1,"looping":true,"frameDelay":4,"version":"RKU017KMhi_4_pduaXh3f5bvyPm3d7iX","loadedFromSource":true,"saved":true,"sourceSize":{"x":602,"y":603},"rootRelativePath":"assets/v3/animations/mblCrZstxjGn_7zCPXmNNLgo94b2oLp58TIdneDXFWY/43613b14-663c-4408-b7e6-21c82ab1367b.png"},"46fd728d-f47d-40f3-a8a7-164725b6cbfb":{"name":"star","sourceUrl":"assets/v3/animations/mblCrZstxjGn_7zCPXmNNLgo94b2oLp58TIdneDXFWY/46fd728d-f47d-40f3-a8a7-164725b6cbfb.png","frameSize":{"x":1200,"y":1200},"frameCount":1,"looping":true,"frameDelay":4,"version":"1hhusp.a5bFdq6bjOjTy328TZ08lIye2","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":1200},"rootRelativePath":"assets/v3/animations/mblCrZstxjGn_7zCPXmNNLgo94b2oLp58TIdneDXFWY/46fd728d-f47d-40f3-a8a7-164725b6cbfb.png"},"d36c0b38-c26b-4043-a359-4c001b2693f7":{"sourceSize":{"x":992,"y":1480},"frameSize":{"x":992,"y":1480},"frameCount":1,"frameDelay":4,"name":"PUDU1","sourceUrl":"assets/v3/animations/mblCrZstxjGn_7zCPXmNNLgo94b2oLp58TIdneDXFWY/d36c0b38-c26b-4043-a359-4c001b2693f7.png","size":97390,"version":"_4KakkTYsVI0WrmWrusz_gs.AWwKt8Oh","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/mblCrZstxjGn_7zCPXmNNLgo94b2oLp58TIdneDXFWY/d36c0b38-c26b-4043-a359-4c001b2693f7.png"},"06617ff2-2f28-4b62-a087-24835a6a8479":{"sourceSize":{"x":992,"y":1480},"frameSize":{"x":992,"y":1480},"frameCount":1,"frameDelay":12,"name":"PUDU2","sourceUrl":null,"size":97390,"version":"4tt3sjT6CH6rW6g6I5gcBCMT3_KSloJY","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/06617ff2-2f28-4b62-a087-24835a6a8479.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var hide = createSprite(195 , 40, 310, 65);
hide.shapeColor = "lightpink";
hide.visible = false;

var play = createSprite(200, 320, 20, 20);
play.scale = 0.22;
play.setAnimation("play");
play.visible = false;

var party1 = createSprite(70, 180, 20, 20);
party1.scale = 0.13;
party1.setAnimation("party1");
party1.visible = false;

var party2 = createSprite(330, 180, 20, 20);
party2.scale = 0.13;
party2.setAnimation("party2");
party2.visible = false;

var rudu1 = createSprite(70, 330, 20, 20);
rudu1.scale = 0.11;
rudu1.setAnimation("PUDU1");
rudu1.visible = false;

var rudu2 = createSprite(330, 330, 20, 20);
rudu2.scale = 0.11;
rudu2.setAnimation("PUDU2");
rudu2.visible = false;

var man1= createSprite(60, 50, 20, 20);
man1.scale = 0.4;
man1.setAnimation("hi1");
man1.visible = false;


var man2 = createSprite(340, 50, 20, 20);
man2.scale = 0.4;
man2.setAnimation("hi2");
man2.visible = false;

var man3 = createSprite(200, 50, 20, 20);
man3.scale = 0.4;
man3.setAnimation("hi2");
man3.visible = false;

var star = createSprite(200, 185, 20, 20);
star.scale = 0.13;
star.setAnimation("star");
star.visible = false;

var boy1 = createSprite(70, 200, 20, 20);
boy1.scale = 0.19;
boy1.setAnimation("Boy1");

var boy2 = createSprite(330, 200, 20, 20);
boy2.scale = 0.19;
boy2.setAnimation("Boy2");

var button = createSprite(200, 210, 20, 20);
button.scale = 0.13;
button.setAnimation("pushbutton");

var arrow = createSprite(200, 115, 20 ,20);
arrow.scale = 0.09;
arrow.setAnimation("arrow");

var b = createSprite(190, 325, 20 ,20);
b.scale = 0.5;
b.setAnimation("birthday");

function draw() {
background("lightpink");

textFont("French Script MT");
textSize(50);
fill(0);
text("Press For A Surprise", 45, 45);

if(mousePressedOver(button)){

rudu1.visible = true;
rudu2.visible = true;
play.visible = true;
man1.visible = true;
man2.visible = true;
man3.visible = true;
hide.visible = true;
star.visible = true;
party1.visible = true;
party2.visible = true;

boy1.visible = false;
boy2.visible = false;
button.visible = false;
arrow.visible = false;
b.visible = false;

}

if(mousePressedOver(play)){
playSound("assets/Rudransh--AudioTrimmer.com-.mp3");
}

if(mousePressedOver(rudu1) || (mousePressedOver(rudu2))){
  playSound("assets/fart-03.mp3");
}

if(mousePressedOver(man1) || (mousePressedOver(man2)) || (mousePressedOver(man3))){
  playSound("assets/ringtonefree-baby-laughing-34459.mp3");
  }
  
if(mousePressedOver(star)){
playSound("assets/avocados_from_mexico.mp3");
}

if(mousePressedOver(party1) || (mousePressedOver(party2))){
  playSound("assets/category_human/character_calvin_no_1.mp3");
}

drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
