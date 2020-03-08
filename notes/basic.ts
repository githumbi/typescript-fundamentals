// function fun(a: string, b: string, ...c: number[]) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// fun("gdd", "boy", 35, 53, 3553, 533);

// //using arrow funvtion variant
// const totals = (a: string, b: string, ...c: number[]) => {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// };

// totals("gdd", "boy", 35, 53, 3553, 533);
import { HasEmail, HasPhoneNumber } from "./1-basics";

// (2) or the arrow-function variant
const sendTextMessage = (
  to: HasPhoneNumber
): { recipient: string; body: string } => {
  return {
    recipient: `${to.name} <${to.phone}>`,
    body: "You're pre-qualified for a loan!"
  };
};
