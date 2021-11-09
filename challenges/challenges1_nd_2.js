// Test Data 1:
const markHeight1 = 1.69;
const markWeight1 = 78;

const johnHeight1 = 1.95;
const johnWeight1 = 92;

const markBMI1 = markWeight1 / (markHeight1 * markHeight1);
const johnBMI1 = johnWeight1 / (johnHeight1 * johnHeight1);

const markHigherBMI1 = markBMI1 > johnBMI1;
console.log("mark bmi is higher than johnbmi : " + markHigherBMI1);

if (markBMI1 > johnBMI1) {
  console.log("Mark's BMI is higher than John's BMI");
} else {
  console.log("John's BMI is higher than Mark's BMI");
}

// Test Data 2:
const markHeight2 = 1.88;
const markWeight2 = 95;

const johnHeight2 = 1.76;
const johnWeight2 = 85;

const markBMI2 = markWeight2 / (markHeight2 * markHeight2);
const johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);

const markHigherBMI2 = markBMI2 > johnBMI2;
console.log("mark bmi is higher than johnbmi : " + markHigherBMI2);

if (markBMI2 > johnBMI2) {
  console.log("Mark's BMI is higher than John's BMI");
} else {
  console.log("John's BMI is higher than Mark's BMI");
}
