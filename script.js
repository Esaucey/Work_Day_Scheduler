var time = $('#currentDay');
var noteBlock = [
    $('.note1'),
    $('.note2'),
    $('.note3'),
    $('.note4'),
    $('.note5'),
    $('.note6'),
    $('.note7'),
    $('.note8'),
    $('.note9')
];
var btn = [
    $('.saveBtn1'),
    $('.saveBtn2'),
    $('.saveBtn3'),
    $('.saveBtn4'),
    $('.saveBtn5'),
    $('.saveBtn6'),
    $('.saveBtn7'),
    $('.saveBtn8'),
    $('.saveBtn9')
];

function setDate(){
    var timeDisplay = moment().format("MMMM Do, YYYY");
    time.text(timeDisplay);
}

// var past = moment('09:00:00', "hh:mm:ss").format("h a");
// var now = moment();
// var hourAgo = moment().subtract(1, 'hour').calendar();
// $('.9AM').text(hourAgo);

function renderLastRegistered() {
   var textDisplay = [
       localStorage.getItem("noteSave1"),
       localStorage.getItem("noteSave2"),
       localStorage.getItem("noteSave3"),
       localStorage.getItem("noteSave4"),
       localStorage.getItem("noteSave5"),
       localStorage.getItem("noteSave6"),
       localStorage.getItem("noteSave7"),
       localStorage.getItem("noteSave8"),
       localStorage.getItem("noteSave9"),
    ];
  for (var i = 0; i < 9; i++) {
      noteBlock[i].text(textDisplay[i]);
  }
}

btn[0].on('click', function () {
    var noteSave = noteBlock[0].val();
    localStorage.setItem("noteSave1", noteSave);

    renderLastRegistered();
})

btn[1].on('click', function () {
    var noteSave = noteBlock[1].val();
    localStorage.setItem("noteSave2", noteSave);

    renderLastRegistered();
})

btn[2].on('click', function () {
    var noteSave = noteBlock[2].val();
    localStorage.setItem("noteSave3", noteSave);

    renderLastRegistered();
})

btn[3].on('click', function () {
    var noteSave = noteBlock[3].val();
    localStorage.setItem("noteSave4", noteSave);

    renderLastRegistered();
})

btn[4].on('click', function () {
    var noteSave = noteBlock[4].val();
    localStorage.setItem("noteSave5", noteSave);

    renderLastRegistered();
})

btn[5].on('click', function () {
    var noteSave = noteBlock[5].val();
    localStorage.setItem("noteSave6", noteSave);

    renderLastRegistered();
})

btn[6].on('click', function () {
    var noteSave = noteBlock[6].val();
    localStorage.setItem("noteSave7", noteSave);

    renderLastRegistered();
})

btn[7].on('click', function () {
    var noteSave = noteBlock[7].val();
    localStorage.setItem("noteSave8", noteSave);

    renderLastRegistered();
})

btn[8].on('click', function () {
    var noteSave = noteBlock[8].val();
    localStorage.setItem("noteSave9", noteSave);

    renderLastRegistered();
})

//set up a function to compare current hour with noteblockl hour
function timeCompare () {
   
    //if moment hour is equal to our note block then note block must be current
    //if moment hour is greater than our notblock then our noteblock must be past 
    //if moment is less than our notblock trhen our noteblock must be future
}
renderLastRegistered();
setDate();
timeCompare();