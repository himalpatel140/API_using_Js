$(document).ready(function() {

    console.log("Document Loaded");

    $('#name').keyup(function() {
        console.log("Clicked");
        let currentValue = $('#name').val();

        let newValue = currentValue.includes('fuck') ? currentValue.replace('fuck', 'f***') : currentValue;
        newValue = newValue.toUpperCase();
        // currentValue = currentValue + " " + currentValue.length;
        $('#result').text(newValue);
    });

    $('#text2').keyup(function() {
        let value = $('#text2').val();
        let url = "https://avatars.dicebear.com/4.5/api/avataaars/" + value + ".svg";
        url = url.trim();
        console.log(url);
        $('#user_img').attr('src', url);

    });

    $('input').blur(function() {
        $('input').val('');
        $('#user_img').attr('src', '');
    });

});



// $(document).ready(function() {

//     $("#my_number").keyup(function() {
//         let enteredNum = $('#my_number').val() * 10;
//         $('#result').text(enteredNum);
//     });

// })


// -------------------------------------
// > Input - > Small Case - > replace workd with ** ** -(10)