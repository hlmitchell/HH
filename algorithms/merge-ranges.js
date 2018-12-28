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