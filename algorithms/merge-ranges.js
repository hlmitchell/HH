// Your company built an in-house calendar tool called HiCal. You want to add a feature to see the 
// times in a day when everyone is available.

// To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as 
// objects ↴ with integer properties startTime and endTime. These integers represent the number of 
// 30-minute blocks past 9:00am.

// For example:

// { startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
// { startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm

// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns 
// an array of condensed ranges.

// Do not assume the meetings are in order. The meeting times are coming from multiple teams.

function mergeRanges(meetings) {
  const sorted = meetings.sort((a, b) => a.startTime > b.startTime);
  const output = [sorted[0]];

  for (let i = 1; i < sorted.length; i++) {
    const tracker = output.length - 1;
    if (output[tracker].endTime >= sorted[i].startTime) {
      if (output[tracker].endTime < sorted[i].endTime) output[tracker].endTime = sorted[i].endTime;
    }
    else output.push(sorted[i]);
  }

  return output;
}

const input = [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]

// console.log(mergeRanges(input));

// output =>   [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ]

const input2 =   [
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 6 },
  { startTime: 3, endTime: 5 },
  { startTime: 7, endTime: 9 },
]

console.log(mergeRanges(input2));

// output => [ { startTime: 1, endTime: 10 } ]

