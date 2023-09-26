const insert = "SuNdAy";
const lowCase = insert.toLowerCase();
const weekDay = lowCase[0].toUpperCase() + lowCase.slice(1);
console.log(weekDay);

switch (weekDay) {
  case "Monday":
    console.log(`Today is ${weekDay}, well, it happens...`);
    break;
  case "Tuesday":
    console.log(`Today is ${weekDay}, at least it's not monday`);
    break;
  case "Wednesday":
    console.log(
      `Today is ${weekDay}, I know, it's tough, but you'll get thrugh`
    );
    break;
  case "Thursday":
    console.log(`Today is ${weekDay}, one more day!`);
    break;
  case "Friday":
    console.log(`Today is ${weekDay}, go get a beer!`);
    break;
  case "Saturday":
    console.log(`Today is ${weekDay}, stay in bed and get a beer`);
    break;
  case "Sunday":
    console.log(
      `Today is ${weekDay}, it's your last chance to get some beer, so do it now!`
    );
    break;
  default:
    console.log(
      `Hey you!! '${weekDay}' is not a day of the week!! So faster insert one!`
    );
}

const str = "Who let the dogs out";
const strLength =
  str.length >= 10
    ? "String length is bigger than 10"
    : "String length is smaller than 10";
console.log(strLength);

const strCap = str.toUpperCase();
console.log(strCap);
const strLow = str.toLowerCase();
console.log(strLow);

const strCopy = str.substring(12, 16);
console.log(strCopy);
const strCopy2 = str.slice(12, 16);
console.log(strCopy2);
const arr = str.split(" ");
const strCopy3 = arr[3];
console.log(strCopy3);
