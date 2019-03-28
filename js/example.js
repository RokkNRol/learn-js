var qualificationDistance = 200;
var attempts = [120, 150, 160, 201, 203, 180, 202];
var qualified = false;
var averageBest = 0;

for (var i = 0; i <= attempts.length - 2; i++) {
   for (var j = i + 1; j <= attempts.length - 1; j++) {
      var min = attempts[i];
      if (attempts[j] < min) {
         min = attempts[j];
         var swap = attempts[i];
         attempts[i] = min;
         attempts[j] = swap;

      }
   }
}
console.log(attempts);
averageBest = (attempts[attempts.length - 1] + attempts[attempts.length - 2] + attempts[attempts.length - 3]) / 3;
if (averageBest > qualificationDistance) {
   qualified = true;
} else {
   qualified;
}
