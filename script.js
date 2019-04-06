$(function(){
  $('.tabT').on('touchstart',function () {
  	$('.mainIcon').fadeIn(2000);

    $('.April').hide();
    $('.label').hide();
    $('.days').hide();
    $('.calender').hide();
    $('.textBox').hide();

    $('.oritorBox').hide();

    $('.movieBox').hide();
  });
  $('.tabS').on('touchstart',function () {
  	$('.mainIcon').hide();

    $('.April').fadeIn(500);
    $('.label').fadeIn(1000);
    $('.calender').fadeIn(1500);
    $('.days').fadeIn(3000);
    $('.textBox').fadeIn(3000);
    $('.mainIcon').fadeOut(500);

    $('.oritorBox').hide();

    $('.movieBox').hide();
  });
  $('.tabO').on('touchstart',function () {
  	$('.mainIcon').hide();

    $('.April').hide();
    $('.label').hide();
    $('.days').hide();
    $('.calender').hide();
    $('.textBox').hide();

    $('.oritorBox').show();
    $('.omM').css('opacity','0.01');
    $('.omM').fadeTo(2000,1.0);
    $('.omN').css('opacity','0.01');
    $('.omO').css('opacity','0.01');

    $('.movieBox').hide();
  });
  $('.tabN').on('touchstart',function () {
  	$('.mainIcon').hide();

    $('.April').hide();
    $('.label').hide();
    $('.days').hide();
    $('.calender').hide();
    $('.textBox').hide();

    $('.oritorBox').hide();

    $(".movieBox").animate(
        {height: "toggle", opacity: "toggle"},2000,"swing"
      );
  });

  $('.d1').on('touchstart',function () {
    $('.d1').css('background-color','#717171');
    $('.d2').css('background-color','#DEBC86');
    $('.d4').css('background-color','#DEBC86');
    $('.d5').css('background-color','#DEBC86');
    $('.d6').css('background-color','#DEBC86');
    $('.d7').css('background-color','#DEBC86');
    $('.d8').css('background-color','#DEBC86');
    $('.d9').css('background-color','#DEBC86');
    $('.d13').css('background-color','#DEBC86');
    $('.d19').css('background-color','#DEBC86');
    $('.c1').fadeIn('slow');
    $('.c2').fadeOut('fast');
    $('.c4').fadeOut('fast');
    $('.c5').fadeOut('fast');
    $('.c6').fadeOut('fast');
    $('.c7').fadeOut('fast');
    $('.c8').fadeOut('fast');
    $('.c9').fadeOut('fast');
    $('.c13').fadeOut('fast');
    $('.c19').fadeOut('fast');
  });
  $('.d2').on('touchstart',function () {
    $('.d2').css('background-color','#717171');
    $('.d1').css('background-color','#DEBC86');
    $('.d4').css('background-color','#DEBC86');
    $('.d5').css('background-color','#DEBC86');
    $('.d6').css('background-color','#DEBC86');
    $('.d7').css('background-color','#DEBC86');
    $('.d8').css('background-color','#DEBC86');
    $('.d9').css('background-color','#DEBC86');
    $('.d13').css('background-color','#DEBC86');
    $('.d19').css('background-color','#DEBC86');
    $('.c2').fadeIn('slow');
    $('.c1').fadeOut('fast');
    $('.c4').fadeOut('fast');
    $('.c5').fadeOut('fast');
    $('.c6').fadeOut('fast');
    $('.c7').fadeOut('fast');
    $('.c8').fadeOut('fast');
    $('.c9').fadeOut('fast');
    $('.c13').fadeOut('fast');
    $('.c19').fadeOut('fast');
  });
  $('.d4').on('touchstart',function () {
    $('.d4').css('background-color','#717171');
    $('.d2').css('background-color','#DEBC86');
    $('.d1').css('background-color','#DEBC86');
    $('.d5').css('background-color','#DEBC86');
    $('.d6').css('background-color','#DEBC86');
    $('.d7').css('background-color','#DEBC86');
    $('.d8').css('background-color','#DEBC86');
    $('.d9').css('background-color','#DEBC86');
    $('.d13').css('background-color','#DEBC86');
    $('.d19').css('background-color','#DEBC86');
    $('.c4').fadeIn('slow');
    $('.c2').fadeOut('fast');
    $('.c1').fadeOut('fast');
    $('.c5').fadeOut('fast');
    $('.c6').fadeOut('fast');
    $('.c7').fadeOut('fast');
    $('.c8').fadeOut('fast');
    $('.c9').fadeOut('fast');
    $('.c13').fadeOut('fast');
    $('.c19').fadeOut('fast');
  });
  $('.d5').on('touchstart',function () {
    $('.d5').css('background-color','#717171');
    $('.d2').css('background-color','#DEBC86');
    $('.d4').css('background-color','#DEBC86');
    $('.d1').css('background-color','#DEBC86');
    $('.d6').css('background-color','#DEBC86');
    $('.d7').css('background-color','#DEBC86');
    $('.d8').css('background-color','#DEBC86');
    $('.d9').css('background-color','#DEBC86');
    $('.d13').css('background-color','#DEBC86');
    $('.d19').css('background-color','#DEBC86');
    $('.c5').fadeIn('slow');
    $('.c2').fadeOut('fast');
    $('.c4').fadeOut('fast');
    $('.c1').fadeOut('fast');
    $('.c6').fadeOut('fast');
    $('.c7').fadeOut('fast');
    $('.c8').fadeOut('fast');
    $('.c9').fadeOut('fast');
    $('.c13').fadeOut('fast');
    $('.c19').fadeOut('fast');
  });
  $('.d6').on('touchstart',function () {
    $('.d6').css('background-color','#717171');
    $('.d2').css('background-color','#DEBC86');
    $('.d4').css('background-color','#DEBC86');
    $('.d5').css('background-color','#DEBC86');
    $('.d1').css('background-color','#DEBC86');
    $('.d7').css('background-color','#DEBC86');
    $('.d8').css('background-color','#DEBC86');
    $('.d9').css('background-color','#DEBC86');
    $('.d13').css('background-color','#DEBC86');
    $('.d19').css('background-color','#DEBC86');
    $('.c6').fadeIn('slow');
    $('.c2').fadeOut('fast');
    $('.c4').fadeOut('fast');
    $('.c5').fadeOut('fast');
    $('.c1').fadeOut('fast');
    $('.c7').fadeOut('fast');
    $('.c8').fadeOut('fast');
    $('.c9').fadeOut('fast');
    $('.c13').fadeOut('fast');
    $('.c19').fadeOut('fast');
  });
  $('.d7').on('touchstart',function () {
    $('.d7').css('background-color','#717171');
    $('.d2').css('background-color','#DEBC86');
    $('.d4').css('background-color','#DEBC86');
    $('.d5').css('background-color','#DEBC86');
    $('.d6').css('background-color','#DEBC86');
    $('.d1').css('background-color','#DEBC86');
    $('.d8').css('background-color','#DEBC86');
    $('.d9').css('background-color','#DEBC86');
    $('.d13').css('background-color','#DEBC86');
    $('.d19').css('background-color','#DEBC86');
    $('.c7').fadeIn('slow');
    $('.c2').fadeOut('fast');
    $('.c4').fadeOut('fast');
    $('.c5').fadeOut('fast');
    $('.c6').fadeOut('fast');
    $('.c1').fadeOut('fast');
    $('.c8').fadeOut('fast');
    $('.c9').fadeOut('fast');
    $('.c13').fadeOut('fast');
    $('.c19').fadeOut('fast');
  });
  $('.d8').on('touchstart',function () {
    $('.d8').css('background-color','#717171');
    $('.d2').css('background-color','#DEBC86');
    $('.d4').css('background-color','#DEBC86');
    $('.d5').css('background-color','#DEBC86');
    $('.d6').css('background-color','#DEBC86');
    $('.d7').css('background-color','#DEBC86');
    $('.d1').css('background-color','#DEBC86');
    $('.d9').css('background-color','#DEBC86');
    $('.d13').css('background-color','#DEBC86');
    $('.d19').css('background-color','#DEBC86');
    $('.c8').fadeIn('slow');
    $('.c2').fadeOut('fast');
    $('.c4').fadeOut('fast');
    $('.c5').fadeOut('fast');
    $('.c6').fadeOut('fast');
    $('.c7').fadeOut('fast');
    $('.c1').fadeOut('fast');
    $('.c9').fadeOut('fast');
    $('.c13').fadeOut('fast');
    $('.c19').fadeOut('fast');
  });
  $('.d9').on('touchstart',function () {
    $('.d9').css('background-color','#717171');
    $('.d2').css('background-color','#DEBC86');
    $('.d4').css('background-color','#DEBC86');
    $('.d5').css('background-color','#DEBC86');
    $('.d6').css('background-color','#DEBC86');
    $('.d7').css('background-color','#DEBC86');
    $('.d8').css('background-color','#DEBC86');
    $('.d1').css('background-color','#DEBC86');
    $('.d13').css('background-color','#DEBC86');
    $('.d19').css('background-color','#DEBC86');
    $('.c9').fadeIn('slow');
    $('.c2').fadeOut('fast');
    $('.c4').fadeOut('fast');
    $('.c5').fadeOut('fast');
    $('.c6').fadeOut('fast');
    $('.c7').fadeOut('fast');
    $('.c8').fadeOut('fast');
    $('.c1').fadeOut('fast');
    $('.c13').fadeOut('fast');
    $('.c19').fadeOut('fast');
  });
  $('.d13').on('touchstart',function () {
    $('.d13').css('background-color','#717171');
    $('.d2').css('background-color','#DEBC86');
    $('.d4').css('background-color','#DEBC86');
    $('.d5').css('background-color','#DEBC86');
    $('.d6').css('background-color','#DEBC86');
    $('.d7').css('background-color','#DEBC86');
    $('.d8').css('background-color','#DEBC86');
    $('.d9').css('background-color','#DEBC86');
    $('.d1').css('background-color','#DEBC86');
    $('.d19').css('background-color','#DEBC86');
    $('.c13').fadeIn('slow');
    $('.c2').fadeOut('fast');
    $('.c4').fadeOut('fast');
    $('.c5').fadeOut('fast');
    $('.c6').fadeOut('fast');
    $('.c7').fadeOut('fast');
    $('.c8').fadeOut('fast');
    $('.c9').fadeOut('fast');
    $('.c1').fadeOut('fast');
    $('.c19').fadeOut('fast');
  });
  $('.d19').on('touchstart',function () {
    $('.d19').css('background-color','#717171');
    $('.d2').css('background-color','#DEBC86');
    $('.d4').css('background-color','#DEBC86');
    $('.d5').css('background-color','#DEBC86');
    $('.d6').css('background-color','#DEBC86');
    $('.d7').css('background-color','#DEBC86');
    $('.d8').css('background-color','#DEBC86');
    $('.d9').css('background-color','#DEBC86');
    $('.d13').css('background-color','#DEBC86');
    $('.d1').css('background-color','#DEBC86');
    $('.c19').fadeIn('slow');
    $('.c2').fadeOut('fast');
    $('.c4').fadeOut('fast');
    $('.c5').fadeOut('fast');
    $('.c6').fadeOut('fast');
    $('.c7').fadeOut('fast');
    $('.c8').fadeOut('fast');
    $('.c9').fadeOut('fast');
    $('.c13').fadeOut('fast');
    $('.c1').fadeOut('fast');
  });
  




  $('.don').on('touchstart',function () {
  	$('.don1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.doru').on('touchstart',function () {
  	$('.doru1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.eri').on('touchstart',function () {
  	$('.eri1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.ikea').on('touchstart',function () {
  	$('.ikea1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.man').on('touchstart',function () {
  	$('.man1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.myu').on('touchstart',function () {
  	$('.myu1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.neo').on('touchstart',function () {
  	$('.neo1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.pic').on('touchstart',function () {
  	$('.pic1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.rit').on('touchstart',function () {
  	$('.rit1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.sha').on('touchstart',function () {
  	$('.sha1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.spo').on('touchstart',function () {
  	$('.spo1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.tohi').on('touchstart',function () {
  	$('.tohi1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.tyo').on('touchstart',function () {
  	$('.tyo1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.uzu').on('touchstart',function () {
  	$('.uzu1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.wad').on('touchstart',function () {
  	$('.wad1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.mita').on('touchstart',function () {
  	$('.mita1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.sii').on('touchstart',function () {
  	$('.sii1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.jii').on('touchstart',function () {
  	$('.jii1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.azu').on('touchstart',function () {
  	$('.azu1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.kim').on('touchstart',function () {
  	$('.kim1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });


  $('.shan').on('touchstart',function () {
  	$('.shan1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.tyoka').on('touchstart',function () {
  	$('.tyoka1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.nana').on('touchstart',function () {
  	$('.nana1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.remo').on('touchstart',function () {
  	$('.remo1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.ptt').on('touchstart',function () {
  	$('.ptt1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.mit').on('touchstart',function () {
  	$('.mit1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.karu').on('touchstart',function () {
  	$('.karu1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.masi').on('touchstart',function () {
  	$('.masi1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.ska').on('touchstart',function () {
  	$('.ska1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.zayu').on('touchstart',function () {
  	$('.zayu1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.shap').on('touchstart',function () {
  	$('.shap1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.jih').on('touchstart',function () {
  	$('.jih1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.otu').on('touchstart',function () {
  	$('.otu1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.dani').on('touchstart',function () {
  	$('.dani1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.pai').on('touchstart',function () {
  	$('.pai1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.mash').on('touchstart',function () {
  	$('.mash1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.siso').on('touchstart',function () {
  	$('.siso1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.bata').on('touchstart',function () {
  	$('.bata1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.nih').on('touchstart',function () {
  	$('.nih1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.sin').on('touchstart',function () {
  	$('.sin1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.bura').on('touchstart',function () {
  	$('.bura1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.joy').on('touchstart',function () {
  	$('.joy1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.ame').on('touchstart',function () {
  	$('.ame1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });


  $('.ouk').on('touchstart',function () {
  	$('.ouk1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.shako').on('touchstart',function () {
  	$('.shako1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.yubi').on('touchstart',function () {
  	$('.yubi1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.mon').on('touchstart',function () {
  	$('.mon1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.mika').on('touchstart',function () {
  	$('.mika1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.jan').on('touchstart',function () {
  	$('.jan1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.pa').on('touchstart',function () {
  	$('.pa1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.rubi').on('touchstart',function () {
  	$('.rubi1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.eno').on('touchstart',function () {
  	$('.eno1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.ahu').on('touchstart',function () {
  	$('.ahu1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.sara').on('touchstart',function () {
  	$('.sara1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.rin').on('touchstart',function () {
  	$('.rin1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.sisa').on('touchstart',function () {
  	$('.sisa1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.oga').on('touchstart',function () {
  	$('.oga1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.rob').on('touchstart',function () {
  	$('.rob1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.asi').on('touchstart',function () {
  	$('.asi1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.mini').on('touchstart',function () {
  	$('.mini1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.esu').on('touchstart',function () {
  	$('.esu1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.non').on('touchstart',function () {
  	$('.non1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.thi').on('touchstart',function () {
  	$('.thi1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.hosi').on('touchstart',function () {
  	$('.hosi1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.swa').on('touchstart',function () {
  	$('.swa1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });
  $('.muu').on('touchstart',function () {
  	$('.muu1').show();
  	$('.modal').fadeIn(200);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  });











  $('.backB').on('touchstart',function () {
  	$('.modal').fadeOut(500);
  	$(".window").animate(
        {height: "toggle", opacity: "toggle"},"slow","swing"
      );
  	$('.don1').hide();
  	$('.doru1').hide();
  	$('.eri1').hide();
  	$('.ikea1').hide();
  	$('.man1').hide();
  	$('.myu1').hide();
  	$('.neo1').hide();
  	$('.pic1').hide();
  	$('.rit1').hide();
  	$('.sha1').hide();
  	$('.spo1').hide();
  	$('.tohi1').hide();
  	$('.tyo1').hide();
  	$('.uzu1').hide();
  	$('.wad1').hide();
  	$('.sii1').hide();
  	$('.mita1').hide();
  	$('.azu1').hide();
  	$('.jii1').hide();
  	$('.kim1').hide();

  	$('.shan1').hide();
  	$('.tyoka1').hide();
  	$('.remo1').hide();
  	$('.nana1').hide();
  	$('.ptt1').hide();
  	$('.mit1').hide();
  	$('.karu1').hide();
  	$('.masi1').hide();
  	$('.ska1').hide();
  	$('.zayu1').hide();
  	$('.shap1').hide();
  	$('.jih1').hide();
  	$('.otu1').hide();
  	$('.dani1').hide();
  	$('.pai1').hide();
  	$('.mash1').hide();
  	$('.siso1').hide();
  	$('.bata1').hide();
  	$('.nih1').hide();
  	$('.sin1').hide();
  	$('.joy1').hide();
  	$('.bura1').hide();
  	$('.ame1').hide();


  	$('.ouk1').hide();
  	$('.shako1').hide();
  	$('.yubi1').hide();
  	$('.mon1').hide();
  	$('.mika1').hide();
  	$('.jan1').hide();
  	$('.pa1').hide();
  	$('.rubi1').hide();
  	$('.eno1').hide();
  	$('.ahu1').hide();
  	$('.sara1').hide();
  	$('.rin1').hide();
  	$('.sisa1').hide();
  	$('.oga1').hide();
  	$('.rob1').hide();
  	$('.asi1').hide();
  	$('.mini1').hide();
  	$('.esu1').hide();
  	$('.non1').hide();
  	$('.thi1').hide();
  	$('.hosi1').hide();
  	$('.swa1').hide();
  	$('.muu1').hide();
  });
});










$(window).on('load',function () {
    $('.mainIcon').fadeIn(500);
  });


$(window).scroll(function () {
    if($(this).scrollTop()>800){
    	$('.omN').fadeTo(2000,1.0);
    }
  });
$(window).scroll(function () {
    if($(this).scrollTop()>2300){
    	$('.omO').fadeTo(2000,1.0);
    }
  });

