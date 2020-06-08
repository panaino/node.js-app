$('#btn_register').on('click', function(){

    let selectedElemnt = $('#register_personality_list');
    let personalityArray = ['いじっぱり','ようき','ひかえめ','おくびょう','ずぶとい'];
    selectedElemnt.find($('.registerPersonalityItem')).remove();
    personalityArray.forEach(function(val){
        selectedElemnt.append('<option class="registerPersonalityItem" val="' + val + '">' + val + '</option>');
    });
    $('.modal_full').show();
});

$('.modal_bg').on('click', function(){
    $('.modal_full').hide();
});