// ---------------- giờ ngày tháng năm-------------//
// confirm('Wellcome to Hoan Xoai Lofi 🥰');

function timeClock() {
  setTimeout("timeClock()", 1000);
  var curDate = new Date();
  //giờ hiện tại
  var curHour = curDate.getHours();
  //phút hiệN tại
  var curMinute = curDate.getMinutes();
  //giây hiện tại
  var curSecond = curDate.getSeconds();
  // Ngày hiện tại
  var curDay = curDate.getDate();
  // Tháng hiện tại
  var curMonth = curDate.getMonth() + 1;
  // Năm hiện tại
  var curYear = curDate.getFullYear();
  // Gán vào thẻ HTML
  document.getElementById('current_time').innerHTML = curHour + ":" + curMinute + ":" + curSecond + "/" + curDay + "/" + curMonth + "/" + curYear;
  document.querySelector('.date_of_mess').innerHTML = curDay + "/" + curMonth + "/" + curYear;
  document.querySelector('.time_of_mess').innerHTML = curHour + ":" + curMinute + ":" + curSecond;
  if (curHour == 0 && curMinute == 0 && curSecond == 0) {
    confirm("Muộn rồi mà sao còn...?");
  }
  if (curHour == 0 && curMinute == 30 && curSecond == 0) {
    alert('nếu cảm thấy khó ngủ quá, hãy gọi cho Cường, tớ sẽ kể chuyện buồn cho cậu cười 🥰');
    alert('0775.292.262- số của tớ nè >>-<<');
  }
  if (curHour == 0 && curMinute == 59 && curSecond == 20) {
    alert('cảm ơn cậu đã đồng hành cùng tớ tới giờ phút này 🥰 ');
    alert('nhưng hãy giữ gìn sức khoẻ của mình nhé');
    alert('cậu ốm tớ ứ chăm đâuuuuuuuu >-<')

  }
  if (curHour == 3 && curMinute == 0 && curSecond == 0) {
    alert('3 giờ sáng rồi đó bạn nhỏ, nghỉ sớm giữ gìn sức khoẻ nào 😒');
  }
  if (curHour == 4 && curMinute == 0 && curSecond == 0) {
    alert(' tại sao lại thức đến giờ này, HẢAAA???????');
    alert('có biết là muộn lắm rồi khumm ???');
    alert('đi ngủ điiiiii :((((');
  }
  if (curHour == 4 && curMinute == 30 && curSecond == 0) {
    alert('ông bà nào thức tới giờ này xứng đáng bị tui cho ăn đòn á. Ghéc thật 😒');
  }
  if (curHour >= 5 && curMinute >= 30 && curSecond >= 0 && curHour < 8 && curMinute == 30 && curSecond == 0) {
    alert('Chào buổi sáng bạn nhỏ 🥰');
    alert('Wellcome to back my Web 😘')
  }
  if (curHour == 9 && curMinute == 00 && curSecond == 0) {
    alert('Chúc cậu 1 ngày tràn đầy năng lượng 🥰');
  }
  if (curHour == 12 && curMinute == 0 && curSecond == 0) {
    alert('nghỉ tay ăn trưa thôi nàoooooo ');
  }
  if (curHour == 13 && curMinute == 37 && curSecond == 30) {
    alert('caỳ tiền thôi nàooo bạn nhỏ cụa tuii 😘');
  }
  if (curHour == 19 && curMinute == 54 && curSecond == 0) {
    alert('tan làm cả rồi chứ My bae ..?');
  }
  if (curHour == 20 && curMinute == 30 && curSecond == 0) {
    confirm('Hôm nay đi làm có mệt không nào ?');
  }
  if (curHour == 21 && curMinute == 30 && curSecond == 0) {
    prompt('Ngày hôm nay của cậu thế nào...?');
    alert('cảm ơn đã cho tớ biết 😘');
  }
  // if (curHour >= 20 && curMinute >= 30 && curSecond >= 0 || curHour >= 0 && curMinute >= 0 && curSecond >= 0 && curHour <= 5 && curMinute <= 0 && curSecond <= 0) {
  //     document.querySelector('#container').header.div.querySelector("#dark").style.opacity = "2"
  // }
}
timeClock();


//----------dark mode--------//

  const container = document.querySelector("#container");
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
  container.classList.toggle("dark")
    // đổi icon snag ban đêm
    ? (toggle.firstElementChild.className = "far fa-moon") : (toggle.firstElementChild.className = "bx bx-sun");
})

//------------background rain------------//
function volume_rain(){
setTimeout ("volume_rain()",0.001);
 
const volumerain = document.querySelector("#rain");


const summerStormaudio = document.querySelector("#summerStormaudio");
const summerStormvolume  = document.querySelector(".summerStormvolume");
summerStormaudio.volume = summerStormvolume.value; 
if(summerStormvolume.value>0){
  summerStormaudio.play(); 
}

if(volumerain.value>0.5){
  console.log("value>50");
  container.classList.add("ranimode")
}else if (volumerain.value>0.10&&volumerain.value<0.48) {
  console.log("value>0");
  container.classList.add("ranidark")
}
else {
  container.classList.remove("ranidark")
  container.classList.remove("ranimode")
}

}






//----------------slick slider----------------//
// $(document).ready(function () {
//     $(".text_bot").slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 1000,
//         infinite: true,
//         arrows: false,
//         dots:false,

//     });
// });


//------------thười tiết---------------//
var css_file = document.createElement("link");
var widgetUrl = location.href; css_file.setAttribute("rel", "stylesheet");
css_file.setAttribute("type", "text/css");
css_file.setAttribute("href", 'https://s.bookcdn.com/css/w/booked-wzs-prime-vertical-one.css?v=0.0.1');
document.getElementsByTagName("head")[0].appendChild(css_file);
function setWidgetData_60728(data) {
  if (typeof (data) != 'undefined' && data.results.length > 0) {
    for (var i = 0; i < data.results.length; ++i) {
      var objMainBlock = document.getElementById('m-booked-vertical-one-prime-60728');
      if (objMainBlock !== null) {
        var copyBlock = document.getElementById('m-bookew-weather-copy-' + data.results[i].widget_type);
        objMainBlock.innerHTML = data.results[i].html_code;
        if (copyBlock !== null) objMainBlock.appendChild(copyBlock);
      }
    }
  } else { alert('data=undefined||data.results is empty'); }
}
var widgetSrc = "https://widgets.booked.net/weather/info?action=get_weather_info;ver=7;cityID=;type=7;scode=124;ltid=3458;domid=1180;anc_id=64762;countday=undefined;cmetric=1;wlangID=32;color=137AE9;wwidth=320;header_color=ffffff;text_color=333333;border_form=1;transparent=0";
widgetSrc += ';ref=' + widgetUrl; widgetSrc += ';rand_id=60728';
var weatherBookedScript = document.createElement("script");
weatherBookedScript.setAttribute("type", "text/javascript");
weatherBookedScript.src = widgetSrc;
document.body.appendChild(weatherBookedScript)
//----------------close date---------------//



document.querySelector('.current_time_fixed_content').style.display = "none"
function closedate() {
  var x = document.querySelector('.current_time_fixed_content');
  if (x.style.display == "block") {
    x.style.display = "none"

  } else {
    x.style.display = "block"
    x.style.zIndex = "100"

  }
}

  
//-------------sign Up----------------//
document.querySelector('#SignUp').style.display = "none"
function signup() {
  var y = document.querySelector('#SignUp');
  if (y.style.display == "block") {
    y.style.display = "none"

  } else {
    y.style.display = "block"
    y.style.zIndex = "100"
  }
}
//-----------------repass--------------//
document.querySelector('.repass').style.display = "none"
function repass() {
  var z = document.querySelector('.repass');

  if (z.style.display == "none") {
    z.style.display = "block"
  }
}
//------------validate----------//

function validate() {
  var userName = document.getElementById('username');
  var email = document.getElementById('email');
  var pass = document.getElementById('pass');
  var repass = document.getElementById('repass');
  flag = true;
  if (pass.value != repass.value) {
    alert('password incorrect! ');
    flag = false;
  }
  else {
    alert('Thanks Bro!')
    flag = true;
  }

  return flag;
}
//-------------share---------------//
document.querySelector('.share_fixed_content').style.display = "none"
function closeShare() {
  var a = document.querySelector('.share_fixed_content');
  if (a.style.display == "block") {
    a.style.display = "none"
  } else {
    a.style.display = "block"

  }
}

//-----------------full screen--------//
let mydocument = document.documentElement;
let btnFull = document.getElementById('btn_full');
btnFull.addEventListener("click", () => {
  if (btnFull.className == "bx bx-fullscreen") {
    if (mydocument.requestFullscreen) {
      mydocument.requestFullscreen();
    } else if (mydocument.msRequestFullscreen) {
      mydocument.msRequestFullscreen();
    } else if (mydocument.mozRequestFullscreen) {
      mydocument.mozRequestFullscreen();
    } else if (mydocument.webkitRequestFullscreen) {
      mydocument.webkitRequestFullscreen();
    }
    btnFull.className = "bx bx-exit-fullscreen";
  }
  else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msexitFullscreen) {
      document.msexitFullscreen();
    } else if (document.mozexitFullscreen) {
      document.mozexitFullscreen();
    } else if (document.webkitexitFullscreen) {
      document.webkitexitFullscreen();
    }
    btnFull.className = "bx bx-fullscreen";
    btnFull.textContent = ""
  }
})

//------------volume all------------//
let btnvolume = document.getElementById('btn_volume');

btnvolume.onclick = () => {

  if (btnvolume.className == "bx bx-volume-full") {
    btnvolume.textContent = ""
    btnvolume.className = "bx bx-volume-mute";
    keyboard_audio.pause();
    summerStormaudio.pause();
    oceanaudio.pause();
    audiochinh.pause();
    boleroaudio.pause();
    audiomixi.pause();
    birdsaudio.pause();
    traficaudio.pause();
    eckaudio.pause();
    fanaudio.pause();
    fireaudio.pause();
    snowaudio.pause();
    windaudio.pause();
    stop.style.display = "none";
  play.style.display = "block";
  }
  else {

    btnvolume.className = "bx bx-volume-full";
    btnvolume.textContent = ""
   
  }
  
}
//----------------test vl--------------//

function testvolume() {
  let test = document.getElementById('testVL');
  let minVL = document.getElementById('min_volume')
  setTimeout("testvolume()", 1);
  
  if (test.value == "0") {
    minVL.className = "bx bx-volume-mute"
  }
  else {
    minVL.className = "bx bx-volume-low"
    minVL.textContent = ""
  }
} testvolume()



//------------mixer--------//
document.querySelector('.mixer_fixed_content').style.display = "none"
function mixer_mid() {
  var mix = document.querySelector('.mixer_fixed_content');
  if (mix.style.display == "block") {
    mix.style.display = "none"
  } else {
    mix.style.display = "block"

  }
}
//----------mix mode------------//

document.querySelector('.mixer_all').style.display = "none"
function mixMode() {
  var mixvlall = document.querySelector('.mixer_all');
  if (mixvlall.style.display == "block") {
    mixvlall.style.display = "none"
  } else {
    mixvlall.style.display = "block"

  }
}
//------------templates------------//
let templates = document.querySelector('.templates')
templates.addEventListener("click", () => {
  alert("Rất xin lỗi cậu. Chức năng này tớ đang hoàn thiện");
  confirm('Cậu thử các chức năng khác nhé .Chúc cậu 1 ngày vui vẻ🥰')
})

//--------scenes----------//
let scenes = document.querySelector('.scenes')
scenes.addEventListener("click", () => {
  alert("Rất xin lỗi cậu. Chức năng này tớ đang hoàn thiện");
  confirm('Cậu thử các chức năng khác nhé .Chúc cậu 1 ngày vui vẻ🥰')
})
//---------tools----------//
let tools = document.querySelector('.tools')
tools.addEventListener("click", () => {
  alert("Rất xin lỗi cậu. Chức năng này tớ đang hoàn thiện");
  confirm('Cậu thử các chức năng khác nhé .Chúc cậu 1 ngày vui vẻ🥰')
})


/* audio */
const musics = [
     
      "./src/audio/lofi.mp3",
      "./src/audio/lofireal.mp3",
      "./src/audio/songnao.mp3",
      "./src/audio/bolero1945.mp3",
      "./src/audio/chill_6.mp3"
];

console.log(musics);

const play = document.querySelector(".bot .control img:nth-child(2)");
const next = document.querySelector(".bot .control img:nth-child(4)");
const prev = document.querySelector(".bot .control img:nth-child(1)");
const stop = document.querySelector(".bot .control img:nth-child(3)");
const audio = document.querySelector("#audiochinh");
const index=0;
var len = musics.length;
var len = musics.length-1;

prev.onclick = ()=>{

  if(len > 0){
    len--;
    audio.src = musics[len];
    stop.style.display = "block";
  play.style.display = "none";
  }else {
    len = musics.length - 1;
    audio.src = musics[len];
    stop.style.display = "block";
  play.style.display = "none";
  }

}

next.onclick = () => {
  if (len >= musics.length-1 ) {
    len = 0;
    audio.src = musics[len];
    stop.style.display = "block";
  play.style.display = "none";
} else {
    len++;
    audio.src = musics[len]
    stop.style.display = "block";
  play.style.display = "none";
}
}



// play

play.onclick = () => {
  audio.play();
  play.style.display = "none";
  stop.style.display = "block";
  audiomixi.pause();
  boleroaudio.pause();
}
stop.style.display = "none";
stop.onclick= () => {
  audio.pause();
  stop.style.display = "none";
  play.style.display = "block";
}
const inputVL = document.getElementById("testVL");
inputVL.oninput = () => {
  audio.volume = inputVL.value;
}



//__________________mix volume change_______//
const audioKeyboard = document.querySelector("#keyboard_audio");
const volumekeyboard  = document.querySelector("#Keyboard");
volumekeyboard.oninput = () => {
audioKeyboard.volume = volumekeyboard.value; 
if(volumekeyboard.value>0){
  audioKeyboard.play(); 
}
}

const birdsaudio = document.querySelector("#birdsaudio");
const birdsvolume  = document.querySelector("#birdsvolume");
birdsvolume.oninput = () => {
  birdsaudio.volume = birdsvolume.value; 
if(birdsvolume.value>0){
  birdsaudio.play(); 
}
}




const traficaudio = document.querySelector("#traficaudio");
const trafficvolume  = document.querySelector("#trafficvolume");
trafficvolume.oninput = () => {
  traficaudio.volume = trafficvolume.value; 
if(trafficvolume.value>0){
  traficaudio.play(); 
}
}




const eckaudio = document.querySelector("#eckaudio");
const eckvolume  = document.querySelector("#eckvolume");
eckvolume.oninput = () => {
  eckaudio.volume = eckvolume.value; 
if(eckvolume.value>0){
  eckaudio.play(); 
}
}



const oceanaudio = document.querySelector("#oceanaudio");
const Oceean  = document.querySelector("#Oceean");
Oceean.oninput = () => {
  oceanaudio.volume = Oceean.value; 
if(Oceean.value>0){
  oceanaudio.play(); 
}
}


const fanaudio = document.querySelector("#fanaudio");
const fanvolume  = document.querySelector("#fanvolume");
fanvolume.oninput = () => {
  fanaudio.volume = fanvolume.value; 
if(fanvolume.value>0){
  fanaudio.play(); 
}
}




const fireaudio = document.querySelector("#fireaudio");
const firevolume  = document.querySelector("#firevolume");
firevolume.oninput = () => {
  fireaudio.volume = firevolume.value; 
if(firevolume.value>0){
  fireaudio.play(); 
}
}



const snowaudio = document.querySelector("#snowaudio");
const snowvolume  = document.querySelector("#snowvolume");
snowvolume.oninput = () => {
  snowaudio.volume = snowvolume.value; 
if(snowvolume.value>0){
  snowaudio.play(); 
}
}




const windaudio = document.querySelector("#windaudio");
const volumewwind  = document.querySelector("#volumewwind");
volumewwind.oninput = () => {
  windaudio.volume = volumewwind.value; 
if(volumewwind.value>0){
  windaudio.play(); 
}
}
//---------------end mix volume --------------------//\
//--------------copy -----//

const link = document.querySelector(".btn_share p");
const copy = document.querySelector(".bx.bx-copy");
copy.onclick = () => {
  navigator.clipboard.writeText(link.innerText);
  alert("Copy successfully ");
}

link.onclick = () => {
  navigator.clipboard.writeText(link.innerText);
  alert("Copy successfully ");
}

//------------end--copy --------------//



// ------------mixi lofi1------------//
const mixi = document.querySelector(".mixi");
const audiomixi = document.querySelector("#mixiaudio");

mixi.onclick = () => {
  audiomixi.play();
  boleroaudio.pause();
audiochinh.pause();
play.style.display = "none";
stop.style.display = "block";
stop.onclick= () => {
  audiomixi.pause();
  stop.style.display = "none";
  play.style.display = "block";
}
play.onclick= () => {
  audiomixi.play();
  boleroaudio.pause();
audiochinh.pause();
play.style.display = "none";
stop.style.display = "block";
}
next.onclick= () => {
  audiochinh.pause();
  boleroaudio.pause();
  }
  prev.onclick= () => {
    audiochinh.pause();
  boleroaudio.pause();
  }
const inputVL = document.getElementById("testVL");
inputVL.oninput = () => {
  audiomixi.volume = inputVL.value;
}
//---------------bolero audio --------------------//
}
const bolero = document.querySelector(".bolero");
const boleroaudio = document.querySelector("#bolerolofi");

bolero.onclick = () => {
  boleroaudio.play();
audiochinh.pause();
audiomixi.pause();
play.style.display = "none";
stop.style.display = "block";
stop.onclick= () => {
  boleroaudio.pause();
  stop.style.display = "none";
  play.style.display = "block";
}
play.onclick= () => {
  boleroaudio.play();
  audiochinh.pause();
  audiomixi.pause();
  play.style.display = "none";
  stop.style.display = "block";
  
}
next.onclick= () => {
audiochinh.pause();
audiomixi.pause();
}
prev.onclick= () => {
  audiochinh.pause();
audiomixi.pause();
}
const inputVL = document.getElementById("testVL");
inputVL.oninput = () => {
  boleroaudio.volume = inputVL.value;
}

}

//--------------- chill ---------///

stop.style.display = "none";
const chill = document.querySelector(".chill");
chill.onclick = () => {
  
    audio.play();
    play.style.display = "none";
    stop.style.display = "block";
    audiomixi.pause();
    boleroaudio.pause();
  
  
  stop.onclick= () => {
    audio.pause();
    stop.style.display = "none";
    play.style.display = "block";
  }
  const inputVL = document.getElementById("testVL");
  inputVL.oninput = () => {
    audio.volume = inputVL.value;
  }
  
  
}

//--------------upload file-------//


document.querySelector('.content_upload_file').style.display = "none"
function upload() {
  var x = document.querySelector('.content_upload_file');
  if (x.style.display == "block") {
    x.style.display = "none"

  } else {
    x.style.display = "block"
    x.style.zIndex = "0"
    alert('You are in chill function');
    chill.onclick = () => {
      alert('You are in chill function');
    }
  }
}

// Bắt đầu thực hiện khi DOM được load hoàn thành
window.onload = function() {
  // Lấy file, audio và canvas element
  var fileElm = document.querySelector("#input-file");
  var audioElm = document.querySelector("#audiochinh");
  
  var canvasElm = document.querySelector("#canvas");
  canvasElm.width = window.innerWidth;
  canvasElm.height = window.innerHeight;
  // console.log(canvasElm);   
  
  fileElm.onchange = function() {
    // Gắn đường source cho audio element với file đầu tiên trong danh sách các file đã chọn
    // File object thường là 1 array do input type file có thể chấp nhận thuộc tính multiple
    // để chúng ta có thể chọn nhiều hơn một file. URL.createObjectURL sẽ giúp chúng ta tạo ra một
    audioElm.src = URL.createObjectURL(this.files[0]);
    
    // Tiếp theo, tải file và thực hiện play file đã được chọn
    audioElm.load();
    audioElm.play();
    stop.style.display = "block";
    play.style.display = "none";
    // Tiếp, khởi tạo AudioContext
    var audioContext = new AudioContext();
    // Khởi tạo AudioContext source
    var audioContextSrc = audioContext.createMediaElementSource(audio);
    // Khởi tạo Analyser
    var audioAnalyser = audioContext.createAnalyser();
    // Khởi tạo 2D canvas
    canvasContext = canvasElm.getContext("2d");
    
    // Kết nối AudioContext source với Analyser
    audioContextSrc.connect(audioAnalyser);
    // Kết nối Analyser với AudioDestinationNode
    audioAnalyser.connect(audioContext.destination);
    
    // Gán FFT size là 256 cho Analyser
    audioAnalyser.fftSize = 256;
    
    // Lấy dữ liệu tần số từ Analyser
    var analyserFrequencyLength = audioAnalyser.frequencyBinCount;
    
    // Khởi tạo một mảng số nguyên dương 8-bit có số lượng phần tử bằng analyserFrequencyLength
    var frequencyDataArray = new Uint8Array(analyserFrequencyLength);
    
    // Lấy width và height của canvas
    var canvasWith = canvasElm.width;
    var canvasHeight = canvasElm.height;
    
    // Tính toán barWidth và barHeight
    var barWidth = (canvasWith / analyserFrequencyLength) * 1.5;
    var barHeight;
    var barIndex = 0;
    
    function renderFrame() {
      // Thông báo với trình duyệt rằng chúng ta đang chuẩn bị thực hiện một animation với method là như này. Hãy chuẩn bị đi =)

      window.requestAnimationFrame(renderFrame);
      
      // Reset lại barIndex trở về 0
      barIndex = 0;
      
      // Điền dữ liệu tần số vào mảng
      audioAnalyser.getByteFrequencyData(frequencyDataArray);
      
      // Vẽ một hình chữ nhật với nền màu đen
      canvasContext.fillStyle = "#000";
      canvasContext.fillRect(0, 0, canvasWith, canvasHeight);
      
      // Chạy lần lượt từ 0 đến hết dữ liệu tần số của Analyser
      for (var i = 0; i < analyserFrequencyLength; i++) {
        barHeight = frequencyDataArray[i];
        // Tạo màu cho thanh bar
        var rgbRed = barHeight + (25 * (i / analyserFrequencyLength));
        var rgbGreen = 250 * (i / analyserFrequencyLength);
        var rgbBlue = 50;
        
        // Điền màu và vẽ bar
        canvasContext.fillStyle = "rgb("+ rgbRed +", "+ rgbGreen +", "+ rgbBlue +")";
        canvasContext.fillRect(barIndex, (canvasHeight - barHeight), barWidth, barHeight);

        barIndex += (barWidth + 1);
      }
    }
    // Gọi method để render vào canvas
    renderFrame();
  }
}
