$(document).ready(function(){
    console.log('app running');
    $('.addNote').click(function(){
        var newNote = $('#noteText').val();
        var noteHTML = '<li>'+newNote+'</li>';
        if(newNote.length>0){
            $('.orderNotesList').append(noteHTML);
            $('#noteText').val('');
        };
    });

    
});