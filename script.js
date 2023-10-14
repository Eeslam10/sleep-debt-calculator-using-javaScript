// Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

// The program will determine the actual and ideal hours of sleep for each night of the last week.

// Finally, it will calculate, in hours, how far you are from your weekly sleep goal.


const getSleepHours = day => {
    switch(day){
      case 'monday':
        return 8;
      case 'tuesday':
        return 9;
      case 'wednesday':
        return 7;
      case 'thursday':
        return 11;
      case 'friday':
        return 5;
      case 'saturday':
        return 13;
      case 'sunday':
        return 11;
      default:
        return 'Invalid'
    }
  }
  
  const getActualSleepHours  = () => {
    return (
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday') 
    )
  };
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if(actualSleepHours === idealSleepHours){
      console.log('You got a perfect amount of sleep');
    } else if (actualSleepHours > idealSleepHours){
      console.log('You got more sleep than needed');
    } else{
      console.log('You should get some rest');
    }
  };
  
  calculateSleepDebt()
  
  
    


// For extra practice, try these:

// getActualSleepHours() could be implemented without calling getSleepHours(). Use literal numbers and the + operator to rewrite getActualSleepHours(). It should still return the total actual hours slept in the week.

// Some people need to sleep longer than others. Rewrite getIdealSleepHours() so that you can pass it an argument, like getIdealSleepHours(8) where 8 is the ideal hours per night. Update the call to getIdealSleepHours() in calculateSleepDebt() too.

// To see the solutions, open the hint.


// Hint
// Put the daily sleep hours directly into getActualSleepHours().

// const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;

// Make idealHours a parameter and multiply it by 7.

// const getIdealSleepHours = idealHours => idealHours * 7;

// When you call the updated function in calculateSleepDebt(), call it like this:

// const calculateSleepDebt = () => {
//   ...

//   const idealSleepHours = getIdealSleepHours(8);
  
//   ...
// };
