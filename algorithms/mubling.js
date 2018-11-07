// Write a funtion that produces the following output:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

function accum(s) {
	return s.split('').map((next, i, arr) => {
    return next.toUpperCase() + next.toLowerCase().repeat(i);
  }, '').join('-');
}

module.exports = accum;