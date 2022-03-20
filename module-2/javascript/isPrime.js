let num=123456791;
let isPrime=1;
for(let i=2;i*i<num;i++)
{
  if(num%i==0)
  {
      isPrime=0;
      break;
      }
}
if(isPrime==1)
console.log("No. is Prime");
else
console.log("number is not prime");