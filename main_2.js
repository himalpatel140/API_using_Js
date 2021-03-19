let wordList = [];
$(document).ready(function() {

    $('#word').keyup(function() {
        let word = $('#word').val().trim();
        let inArray = wordList.includes(word);
        if (inArray) {
            $('#inArray').text('yes');
            $('#addToList').attr('disabled', 'disabled');
        } else {
            $('#inArray').text('No');
            $('#addToList').removeAttr('disabled');

        }
    });

    $('#addToList').click(function() {
        let word = $('#word').val().trim();
        wordList.push(word);
        $('#result').text(wordList);
        console.log(wordList);
        $('#word').val("");
    });

    $('#para').keyup(function() {
        let para = $('#para').val();
        // console.log(para);
        wordList.forEach(function(each) {
            para = para.replaceAll(each, '****');
        });
        $('p').text(para);
    });

})