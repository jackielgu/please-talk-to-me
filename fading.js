        $(document).ready(function() {
            var tenEms = Number(getComputedStyle(document.body, "").fontSize.match(/(\d*(\.\d*)?)px/)[1]) * 10;
            console.log(tenEms);
            var prev_scroll = $(window).scrollTop();
            $('.firsttext').hide();
            $('#greendot').hide();


            $('#img1').hide();     // tumblr
            $('#img2').hide();     
            $('#img3').hide();
            $('#img4').hide();

            $('#img5').hide();     
            $('#img6').hide();


            $('#img7').hide();     // banter
            $('#img8').hide();
            $('#img9').hide();
            $('#img10').hide();
            $('#img11').hide();
            $('#img12').hide();

            $('#lonely1').hide();  // thread1
            $('#lonely2').hide();
            $('#lonely3').hide();
            $('#lonely4').hide();


            $('#img13').hide();

            $('#img14').hide();    // banter2
            $('#img15').hide();
            $('#img16').hide();
            $('#img17').hide();
            $('#img18').hide();
            $('#img19').hide();

            $('#img20').hide();     // banter
            $('#img21').hide();

            $('#img22').hide();    // goodnight
            $('#img23').hide();
            $('#img24').hide();

            $('#img25').hide();
            $('#img26').hide();    // girlfriend

            $('#img27').hide();    // flirting
            $('#img28').hide();
            $('#img29').hide();
            $('#img30').hide();
            $('#img31').hide();

            $('#img32').hide();    // reallife
            $('#img33').hide();
            $('#img34').hide();

            $('#img35').hide();    // vulnerable
            $('#img36').hide();
            $('#img37').hide();
            $('#img38').hide();
            $('#img39').hide();
            $('#img40').hide();
            $('#tiredofpeople').hide();

            $('#lonely6').hide();  // thread2
            $('#lonely7').hide();
            $('#lonely8').hide();
            $('#lonely9').hide();

            $('#img41').hide();    // strangers    
            $('#img42').hide();
            $('#img43').hide();    // last

            $('#lonely11').hide(); // thread3
            $('#lonely10').hide();
            $('#lonely5').hide();

            var title_top = $('.title').offset().top;
            //console.log(title_top)
            //console.log($('#img1').offset().top)

            $(window).scroll(function() {
            
                var window_top = $(window).scrollTop();
                //console.log(window_top);

                // scrolling down
                if (prev_scroll < $(window).scrollTop()) {
                   
                    if ((title_top - window_top) < 120) {
                    $('.title').stop().fadeTo(500, 0);
                    } 
                    $(".firsttext").fadeIn(2000);
                    // $("#graydot").fadeIn(4000);

                    if (prev_scroll > 4.5*tenEms) {                             // tumblr
                        $("#img1").fadeIn();
                    }

                    if (prev_scroll > 5.5*tenEms ) {
                        $("#img2").fadeIn();
                    }

                    if (prev_scroll > 6.5*tenEms) {
                        $("#img3").fadeIn();
                    }

                    if (prev_scroll > 7.5*tenEms) {
                        $("#img4").fadeIn();
                    }                    

                    if (prev_scroll > 8.5*tenEms) {
                        $('.tumblr').css({opacity:'.35'});
                    }

                    if (prev_scroll > 11.75*tenEms) {
                        $('#img5').fadeIn();
                    }

                    if (prev_scroll > 14.25*tenEms) {                            // firstmessage
                        $('.firstmessage').css({opacity:'.35'});
                        $('#img5').css({position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'});
                    }

                    if (prev_scroll > 18*tenEms) {                           // banter
                        // $('#graydot').css({opacity:'0'}); 
                        $('#greendot').show();         
                        $('#img6').fadeIn();
                    }

                    if (prev_scroll > 19*tenEms) {
                        $('#img6').css({opacity:'.35'});
                        $('#img7').fadeIn();
                    }                     

                    if (prev_scroll > 20*tenEms) {
                        $('#img7').css({opacity:'.35'});
                        $('#img8').fadeIn();
                    }   

                    if (prev_scroll > 21*tenEms) {
                        $('#img8').css({opacity:'.35'});
                        $('#img9').fadeIn();
                    }

                    if (prev_scroll > 22*tenEms) {
                        $('#img9').css({opacity:'.35'});
                        $('#img10').fadeIn();
                    }

                    if (prev_scroll > 23*tenEms) {
                        $('#img10').css({opacity:'.35'});
                        $('#img11').fadeIn();
                    }

                    if (prev_scroll > 24*tenEms) {
                        $('#img11').css({opacity:'.35'});
                        $('#img12').fadeIn();
                    }

                    if (prev_scroll > 25*tenEms) {
                        $('#img12').css({opacity:'.35'});
                        $('#greendot').css({opacity:'0'});
                    }

                    // if (prev_scroll > 3500) {
                    //     $('#greendot').css({opacity:'0'});
                    // }

                    if (prev_scroll > 28.5*tenEms) {                             // thread1
                        $('#lonely1').fadeIn();
                    }

                    if (prev_scroll > 29.5*tenEms) {
                        $('#lonely1').css({opacity:'.35'});                             
                        $('#lonely2').fadeIn();
                    }

                    if (prev_scroll > 30.5*tenEms) { 
                        $('#lonely2').css({opacity:'.35'});                            
                        $('#lonely3').fadeIn();
                    }

                    if (prev_scroll > 31.5*tenEms) {                             
                        $('#lonely3').css({opacity:'.35'});
                        $('#lonely4').fadeIn();
                    }

                    if (prev_scroll > 32.5*tenEms) {
                        $('#lonely4').css({opacity:'.35'});
                    }   
                

                    if (prev_scroll > 37.5*tenEms) {                             // banter2
                        $('#greendot').css({opacity:'1'});        
                        $('#img13').fadeIn();
                    }
                    

                    if (prev_scroll > 38.5*tenEms) {
                        $('#img13').css({opacity:'.35'});
                        $('#img14').fadeIn();
                    }   

                    if (prev_scroll > 39.5*tenEms) {
                        $('#img14').css({opacity:'.35'});
                        $('#img15').fadeIn();
                    }

                    if (prev_scroll > 40.5*tenEms) {
                        $('#img15').css({opacity:'.35'});
                        $('#img16').fadeIn();
                    }

                    if (prev_scroll > 41.5*tenEms) {
                        $('#img16').css({opacity:'.35'});
                        $('#img17').fadeIn();
                    }

                    if (prev_scroll > 42.5*tenEms) {
                        $('#img17').css({opacity:'.35'});
                        $('#img18').fadeIn();
                    }

                    if (prev_scroll > 43.5*tenEms) {
                        $('#img18').css({opacity:'.35'});
                        $('#img19').fadeIn();
                    }

                    if (prev_scroll > 44.5*tenEms) {
                        $('#img19').css({opacity:'.35'});
                        $('#greendot').css({opacity:'0'});
                    }

                    // if (prev_scroll > 6100) {
                    //    $('#greendot').css({opacity:'0'});
                    // }

                    if (prev_scroll > 47*tenEms) {                            // fiveyearstime
                        $('#greendot').css({opacity:'1'});
                        $('#img20').fadeIn();
                    }

                    if (prev_scroll > 48.5*tenEms) {                            
                        $('#img20').css({opacity:'.35'});
                        $('#greendot').css({opacity:'0'});
                    }

                    // if (prev_scroll > 6800) {
                    //     $('#greendot').css({opacity:'0'});
                    // }


                    if (prev_scroll > 55*tenEms) {                            // goodnight
                        $('#greendot').css({opacity:'1'});
                        $('#img21').fadeIn();
                    }

                    if (prev_scroll > 56*tenEms) {
                        $('#img21').css({opacity:'.35'});
                        $('#img22').fadeIn();
                    }

                    if (prev_scroll > 57*tenEms) {
                        $('#img22').css({opacity:'.35'});
                        $('#img23').fadeIn();
                    }

                    if (prev_scroll > 58*tenEms) {
                        $('#img23').css({opacity:'.35'});
                        $('#img24').fadeIn();
                    }

                    if (prev_scroll > 59*tenEms) {
                        $('#img24').css({opacity:'.35'});
                        $('#greendot').css({opacity:'0'});
                    }

                    

                    if (prev_scroll > 64*tenEms) {                           // girlfriend
                        $('#greendot').css({opacity:'1'});
                        $('#img25').fadeIn();
                    }

                    if (prev_scroll > 65*tenEms) {
                        $('#img25').css({opacity:'.35'});
                        $('#img26').fadeIn();
                    }

                    if (prev_scroll > 66*tenEms) {
                        $('#img26').css({opacity:'.35'}); 
                        $('#greendot').css({opacity:'0'});                   
                    }


                    if (prev_scroll > 69.5*tenEms) {                            // flirting
                        $('#greendot').css({opacity:'1'});
                        $('#img27').fadeIn();
                    }

                    if (prev_scroll > 70.5*tenEms) {
                        $('#img27').css({opacity:'.35'});
                        $('#img28').fadeIn();
                    }

                    if (prev_scroll > 71.5*tenEms) {
                        $('#img28').css({opacity:'.35'});
                        $('#img29').fadeIn();
                    }

                    if (prev_scroll > 72.5*tenEms) {
                        $('#img29').css({opacity:'.35'});
                        $('#img30').fadeIn();
                    }

                    if (prev_scroll > 73.5*tenEms) {
                        $('#img30').css({opacity:'.35'});
                        $('#img31').fadeIn();
                    }

                    if (prev_scroll > 74.5*tenEms) {
                        $('#img31').css({opacity:'.35'}); 
                        $('#greendot').css({opacity:'0'});                  
                    }

                    if (prev_scroll > 81.5*tenEms) {                            // reallife
                        $('#greendot').css({opacity:'1'});
                        $('#img32').fadeIn();
                    }

                    if (prev_scroll > 82.5*tenEms) {
                        $('#img32').css({opacity:'.35'});
                        $('#img33').fadeIn();
                    }

                    if (prev_scroll > 83.5*tenEms) {
                        $('#img33').css({opacity:'.35'});
                        $('#img34').fadeIn();
                    }

                    if (prev_scroll > 84.5*tenEms) {
                        $('#img34').css({opacity:'.35'});
                        $('#greendot').css({opacity:'0'});
                    }


                    if (prev_scroll > 90.5*tenEms) {                            // vulnerable
                        $('#greendot').css({opacity:'1'});
                        $('#img35').fadeIn();
                    }

                    if (prev_scroll > 91.5*tenEms) {
                        $('#img35').css({opacity:'.35'});
                        $('#img36').fadeIn();
                    }

                    if (prev_scroll > 92.5*tenEms) {
                        $('#img36').css({opacity:'.35'});
                        $('#img37').fadeIn();
                    }

                    if (prev_scroll > 93.5*tenEms) {
                        $('#img37').css({opacity:'.35'});
                        $('#img38').fadeIn();
                    }

                    if (prev_scroll > 94.5*tenEms) {
                        $('#img38').css({opacity:'.35'});
                        $('#img39').fadeIn();
                    }

                    if (prev_scroll > 95.5*tenEms) {
                        $('#img39').css({opacity:'.35'});
                        $('#img40').fadeIn();
                    }

                    if (prev_scroll > 96.5*tenEms) {
                        $('#img40').css({opacity:'.35'});
                        $('#tiredofpeople').fadeIn();
                    }

                    if (prev_scroll > 97.5*tenEms) {
                        $('#tiredofpeople').css({opacity:'.35'});
                        $('#greendot').css({opacity:'0'});
                    }

                    if (prev_scroll > 100.5*tenEms) {                               // thread2
                        $('#lonely6').fadeIn();
                    }

                    if (prev_scroll > 101.5*tenEms) {
                        $('#lonely6').css({opacity: '.35'});
                        $('#lonely7').fadeIn();
                    }

                    if (prev_scroll > 102.5*tenEms) {
                        $('#lonely7').css({opacity: '.35'});
                        $('#lonely8').fadeIn();
                    }

                    if (prev_scroll > 103.5*tenEms) {
                        $('#lonely8').css({opacity: '.35'});
                        $('#lonely9').fadeIn();
                    }

                    if (prev_scroll > 104.5*tenEms) {
                        $('#lonely9').css({opacity: '.35'});
                    }

                    if (prev_scroll > 109.5*tenEms) {                            // strangers
                        $('#greendot').css({opacity:'1'});
                        $('#img41').fadeIn();
                    }

                    if (prev_scroll > 110.5*tenEms) {
                        $('#img41').css({opacity:'.35'});
                        $('#img42').fadeIn();
                    }                    

                    if (prev_scroll > 111.5*tenEms) {
                        $('#img42').css({opacity:'.35'});
                        $('#greendot').css({opacity:'0'});
                    }


                    if (prev_scroll > 119.5*tenEms) {                            // last
                        $('#greendot').css({opacity:'1'});
                        $('#img43').fadeIn();
                    }

                    if (prev_scroll > 121*tenEms) {
                        $('#img43').css({opacity:'.35'});
                        $('#greendot').css({opacity:'0'});
                    }
   

                    if (prev_scroll > 127*tenEms) {                               // thread3
                        $('#lonely11').fadeIn();
                    }

                    if (prev_scroll > 128.5*tenEms) {
                        $('#lonely11').css({opacity: '.35'});
                    }   

                    if (prev_scroll > 130*tenEms) {
                        $('#lonely10').fadeIn();
                    }           

                    if (prev_scroll > 131.5*tenEms) {
                        $('#lonely10').css({opacity: '.35'});
                    } 

                    if (prev_scroll > 132.5*tenEms) {
                        $('#lonely5').fadeIn();
                    }                          
                
                    if (prev_scroll > 135.5*tenEms) {
                        $('#lonely5').css({opacity: '.35'});
                    }                                      

                // scrolling up
                } else {
                    $('#greendot').css({opacity:'0'});

                    if (prev_scroll < 200) {                              // title
                        $(".firsttext").fadeOut();
                         // $(".title").fadeTo(400, 1);
                          $('.title').stop().fadeTo('fast', 1)
                    }

                    if (prev_scroll < 5.5*tenEms) {                              // tumblr
                        $("#img1").fadeOut();
                    }

                    if (prev_scroll < 6.5*tenEms) {                              
                        $("#img2").fadeOut();
                    }
            
                    if (prev_scroll < 7.5*tenEms) {
                        $("#img3").fadeOut();
                    }

                    if (prev_scroll < 8.5*tenEms) {
                        $("#img4").fadeOut();
                    }

                    if (prev_scroll < 9.5*tenEms) {
                        $('.tumblr').css({opacity: '.9'});
                        $('.tumblr').fadeTo(1);
                    }

                    if (prev_scroll < 15.25*tenEms) {                               // firstmessage
                        $('#img5').css({position: 'relative'})
                        $('.firstmessage').css({opacity: '.9'});
                    }

                    if (prev_scroll < 19*tenEms) {                               // banter
                        $('#img6').fadeOut();
                    }


                    if (prev_scroll < 20*tenEms) {                   
                        $('#img6').css({opacity: '.9'});
                        $('#img7').fadeOut();
                    }


                    if (prev_scroll < 21*tenEms) {
                        $('#img7').css({opacity: '.9'});
                        $('#img8').fadeOut();
                    }   

                    if (prev_scroll < 22*tenEms) {
                        $('#img8').css({opacity: '.9'});
                        $('#img9').fadeOut();
                    }

                    if (prev_scroll < 23*tenEms) {
                        $('#img9').css({opacity: '.9'});
                        $('#img10').fadeOut();
                    }

                    if (prev_scroll < 24*tenEms) {
                        $('#img10').css({opacity: '.9'});
                        $('#img11').fadeOut();
                    }

                    if (prev_scroll < 25*tenEms) {
                        $('#img11').css({opacity: '.9'});
                        $('#img12').fadeOut();
                    }

                    if (prev_scroll < 26*tenEms) {
                        $('#img12').css({opacity: '.9'});
                    }

                    if (prev_scroll < 29.5*tenEms) {                       //thread1
                        $('#lonely1').fadeOut();
                    }

                    if (prev_scroll < 30.5*tenEms) {
                        $('#lonely1').css({opacity: '.9'});
                        $('#lonely2').fadeOut();
                    }

                    if (prev_scroll < 31.5*tenEms) {
                        $('#lonely2').css({opacity: '.9'});
                        $('#lonely3').fadeOut();
                    }

                    if (prev_scroll < 32.5*tenEms) {
                        $('#lonely3').css({opacity: '.9'});
                        $('#lonely4').fadeOut();
                    }

                    if (prev_scroll < 33.5*tenEms) {
                        $('#lonely4').css({opacity: '.9'});
                    }


                    if (prev_scroll < 38.5*tenEms) {                             // banter2   
                        $('#img13').fadeOut();
                    }
                    

                    if (prev_scroll < 39.5*tenEms) {
                        $('#img13').css({opacity: '.9'});
                        $('#img14').fadeOut();
                    }   

                    if (prev_scroll < 40.5*tenEms) {
                        $('#img14').css({opacity: '.9'});
                        $('#img15').fadeOut();
                    }

                    if (prev_scroll < 41.5*tenEms) {
                        $('#img15').css({opacity: '.9'});
                        $('#img16').fadeOut();
                    }

                    if (prev_scroll < 42.5*tenEms) {
                        $('#img16').css({opacity: '.9'});
                        $('#img17').fadeOut();
                    }

                    if (prev_scroll < 43.5*tenEms) {
                        $('#img17').css({opacity: '.9'});
                        $('#img18').fadeOut();
                    }

                    if (prev_scroll < 44.5*tenEms) {
                        $('#img18').css({opacity: '.9'});
                        $('#img19').fadeOut();
                    }

                     if (prev_scroll < 45.5*tenEms) {
                        $('#img19').css({opacity: '.9'});
                    } 

                    if (prev_scroll < 48*tenEms) {                               // fiveyearstime
                        $('#img20').fadeOut();
                    }

                    if (prev_scroll < 49*tenEms) {                               
                        $('#img20').css({opacity: '.9'});
                    }

                    if (prev_scroll < 56*tenEms) {                               // goodnight
                        $('#img21').fadeOut();
                    }

                    if (prev_scroll < 57*tenEms) {                               
                        $('#img21').css({opacity: '.9'});
                        $('#img22').fadeOut();
                    }

                    if (prev_scroll < 58*tenEms) {
                        $('#img22').css({opacity: '.9'});
                        $('#img23').fadeOut();
                    }

                    if (prev_scroll < 59*tenEms) {
                        $('#img23').css({opacity: '.9'});
                        $('#img24').fadeOut();
                    }

                    if (prev_scroll < 60*tenEms) {
                        $('#img24').css({opacity: '.9'});
                    }

                    if (prev_scroll < 65*tenEms) {                               // girlfriend
                        $('#img25').fadeOut();
                    }

                    if (prev_scroll < 66*tenEms) {                               
                        $('#img25').css({opacity: '.9'});
                        $('#img26').fadeOut();
                    }

                    if (prev_scroll < 67*tenEms) {
                        $('#img26').css({opacity: '.9'});  
                    }                        

                    if (prev_scroll < 70.5*tenEms) {                               // flirting
                        $('#img27').fadeOut();
                    }

                    if (prev_scroll < 71.5*tenEms) {
                        $('#img27').css({opacity: '.9'});
                        $('#img28').fadeOut();
                    }

                    if (prev_scroll < 72.5*tenEms) {
                        $('#img28').css({opacity: '.9'});
                        $('#img29').fadeOut();
                    }

                    if (prev_scroll < 73.5*tenEms) {                               
                        $('#img29').css({opacity: '.9'});
                        $('#img30').fadeOut();
                    }

                    if (prev_scroll < 74.5*tenEms) {
                        $('#img30').css({opacity: '.9'});
                        $('#img31').fadeOut();
                    }

                    if (prev_scroll < 75.5*tenEms) {
                        $('#img31').css({opacity: '.9'});
                    }                  

                    if (prev_scroll < 82.5*tenEms) {                               // reallife
                        $('#img32').fadeOut();
                    }

                    if (prev_scroll < 83.5*tenEms) {
                        $('#img32').css({opacity: '.9'});
                        $('#img33').fadeOut();
                    }

                    if (prev_scroll < 84.5*tenEms) {
                        $('#img33').css({opacity: '.9'});
                        $('#img34').fadeOut();
                    }  

                    if (prev_scroll < 85.5*tenEms) {
                        $('#img34').css({opacity: '.9'});
                    }                  

                    if (prev_scroll < 91.5*tenEms) {                               // vulnerable
                        $('#img35').fadeOut();
                    }

                    if (prev_scroll < 92.5*tenEms) {
                        $('#img35').css({opacity: '.9'});
                        $('#img36').fadeOut();
                    }

                    if (prev_scroll < 93.5*tenEms) {
                        $('#img36').css({opacity: '.9'});
                        $('#img37').fadeOut();
                    }

                    if (prev_scroll < 94.5*tenEms) {
                        $('#img37').css({opacity: '.9'});
                        $('#img38').fadeOut();
                    }

                    if (prev_scroll < 95.5*tenEms) {
                        $('#img38').css({opacity: '.9'});
                        $('#img39').fadeOut();
                    }

                    if (prev_scroll < 96.5*tenEms) {
                        $('#img39').css({opacity: '.9'});                        
                        $('#img40').fadeOut();
                    }

                    if (prev_scroll < 97.5*tenEms) {
                        $('#img40').css({opacity: '.9'});
                        $('#tiredofpeople').fadeOut();
                    }                    

                    if (prev_scroll < 98.5*tenEms) {
                        $('#tiredofpeople').css({opacity: '.9'});    
                    }

                    if (prev_scroll < 101.5*tenEms) {                               // thread2
                        $('#lonely6').fadeOut();
                    }

                    if (prev_scroll < 102.5*tenEms) {
                        $('#lonely6').css({opacity: '.9'});
                        $('#lonely7').fadeOut();
                    }

                    if (prev_scroll < 103.5*tenEms) {
                        $('#lonely7').css({opacity: '.9'});
                        $('#lonely8').fadeOut();
                    }

                    if (prev_scroll < 104.5*tenEms) {
                        $('#lonely8').css({opacity: '.9'});
                        $('#lonely9').fadeOut();
                    }

                    if (prev_scroll < 105.5*tenEms) {
                        $('#lonely9').fadeOut();
                    }

                    if (prev_scroll < 110.5*tenEms) {                               // strangers
                        $('#img41').fadeOut();
                    }

                    if (prev_scroll < 111.5*tenEms) {
                        $('#img41').css({opacity: '.9'});
                        $('#img42').fadeOut();
                    }

                    if (prev_scroll < 112.5*tenEms) {
                        $('#img42').css({opacity: '.9'});
                    }


                    if (prev_scroll < 120*tenEms) {                               // last
                        $('#img43').fadeOut();
                    }

                    if (prev_scroll < 122*tenEms) {
                        $('#img43').css({opacity: '.9'});
                    }

                    if (prev_scroll < 128*tenEms) {                               // thread3
                        $('#lonely11').fadeOut();
                    }

                    if (prev_scroll < 129.5*tenEms) {
                        console.log(prev_scroll)
                        console.log(129*tenEms)
                        $('#lonely11').css({opacity: '.9'});
                    }   

                    if (prev_scroll < 131*tenEms) {
                        $('#lonely10').fadeOut();
                    }           

                    if (prev_scroll < 132.5*tenEms) {
                        $('#lonely10').css({opacity: '.9'});
                    } 

                    if (prev_scroll < 133.5*tenEms) {
                         $('#lonely5').fadeOut();
                    }                          
                
                    if (prev_scroll < 136.5*tenEms) {
                        $('#lonely5').css({opacity: '.9'});
                    }   



                }
            prev_scroll = window_top;
            });
        });