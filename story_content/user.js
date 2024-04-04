function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6VgbwIYCwHO":
        Script1();
        break;
      case "6YbF72jbHON":
        Script2();
        break;
      case "6l3yYtLaMHF":
        Script3();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('6awtuyrsPW4');
const duration = 500;
const easing = 'ease-out';
const id = '5vogyF059HL';
const growAmount = 0.2;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5gSpJGxQ6fh');
const duration = 750;
const easing = 'ease-out';
const id = '62JBsvRDtf2';
const growAmount = 0.2;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('5kaBw1T4FaD');
const duration = 500;
const easing = 'ease-out';
const id = '6golEY69mDc';
const growAmount = 0.2;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
