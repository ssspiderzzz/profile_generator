const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {};

rl.question('What\'s your name?\n', (answer) => {
  profile.name = answer;
  rl.question("What's an activity you like doing?\n", (answer) => {
    profile.activity = answer;
    rl.question("What do you listen to while doing that?", (answer) => {
      profile.music = answer;
      rl.question("Which meal is your favorite?", (answer) => {
        profile.favMeal = answer;
        rl.question("What is your favorite thing to eat for that meal?", (answer) => {
          profile.favFood = answer;
          rl.question("Which sport is your favorite?", (answer) => {
            profile.favSport = answer;
            console.log("\nSurvey Summary:");
            for (let property in profile) {
              console.log(`${property}: ${profile[property]}`);
            }
            rl.close();
          });
        });
      });
    });
  });
});

