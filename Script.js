$('.nav-link').on('click', function(e){
    
    //ambil isi href
    var tujuan = $(this).attr('href');
    //tangkap elemen
    var elementujuan = $(tujuan);

    //pindahkan scroll
    $('html, body').animate({
        scrollTop : elementujuan.offset().top - 50
    });
});

$(window).on('load',function(){
    $('.dimain').addClass('muncul');
});

$(window).scroll(function(){

    var wscroll = $(this).scrollTop();

    if(wscroll > $('.content1').offset().top +150){
        $('.ilang').addClass('ada');
    }
    if(wscroll > $('.card-conten').offset().top -120){
        $('.ilang1').addClass('ada1');
    }

    if(wscroll > $('.culture').offset().top -220){
        $('.ilang2').addClass('ada2');
    }


    //3 Content Image
    if(wscroll > $('.content-img').offset().top -300){
        $('.sisi1').addClass('adasisi1');
    }
    if(wscroll > $('.content-img1').offset().top -300){
        $('.sisi2').addClass('adasisi2');
    }
    if(wscroll > $('.content-img2').offset().top -300){
        $('.sisi3').addClass('adasisi3');
    }


    //thubnail
    if(wscroll > $('.writer').offset().top -200){
        $('.ilang-bawah').each(function(i){
            setTimeout(function(){
                $('.ilang-bawah').eq(i).addClass('ada-bawah');
            }, 300 * (i+1));
        });
        
    }
});
