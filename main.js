// day 1
//
// for (counter = 10; counter > 0; counter--) {
//   document.write('<p>Perulangan ke ' + counter + '</p>');

var username = prompt('username');
var password = prompt('password');

if (username == 'fiqri raditya') {
  if (password == 'raditya123') {
    document.write('<h2>selamat datang pak bos</h2>');
  } else {
    document.write('<p>password anda salah , silakan coba lagi</p>');
  }
} else {
  document.write('<p>anda tidak terdaftar</p>');
}
