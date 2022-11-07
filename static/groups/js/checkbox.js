let count = 0;
$(document).ready(function () {
    cleanSongs();
});

jQuery($ => {
    $(".box").on('click', function () {
        let clicked = localStorage.getItem("song_checks");  
        if(clicked !== null){
            if(!(clicked.includes($(this).attr('id').toString())) && count <= 3)
            {
                localStorage.setItem("song_checks", $(this).attr('id').toString() + "," + clicked);
                updateInput();
            }
            else{
                localStorage.setItem("song_checks", clicked.replace($(this).attr('id').toString()+",",''));
                updateInput();
            }
        }
    });
  });

//localStorage.setItem('name',string.replace(substring,''));

function updateInput(){
    document.getElementById('songs_input_id').value = localStorage.getItem("song_checks");
}

function clearLocal() {
    localStorage.removeItem("song_checks");
}

function cleanSongs() {
    let curr = localStorage.getItem("song_checks");
    if (curr === null){
        localStorage.setItem("song_checks", "");
    }
    if(curr !== "" && curr !== null){
        if(curr[curr.length] == ","){
            localStorage.setItem("song_checks", curr.substring(0, curr.length-1));
        }
        const myArray = localStorage.getItem("song_checks").split(",").filter(Boolean);
        for(var i = 0; i < myArray.length; i++) {
            let el;
            if(document.getElementById(myArray[i])){
                el = document.getElementById(myArray[i]);
                el.checked = true;
            }
        }
    }
}