function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeli.indexOf(name) + 1) + " in line.";
}
function nowServing(katzDeliLine) {
  if(katzDeliLine.length < 1 || katzDeliLine === undefined) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(line) {
  if(line.length < 1 || line === undefined) {
    return "The line is currently empty.";
  } else {
    
  }
}