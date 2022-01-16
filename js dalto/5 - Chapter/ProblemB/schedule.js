
// Creating a class for the days of the week with their activities like atributtes.
class daySchedule {
    constructor(d,hs,hpw,hw,hh) {
        this.day = d;
        this.hourStudy = hs;
        this.hourPracticalWork = hpw;
        this.hourWork = hw;
        this.hourHouse = hh;
    } 

    // The methods are for showing the info in console and make changes in the weekly-routine.
    showInfo () {
        console.groupCollapsed(`%c${this.day}:`,"text-decoration:underline;font-size:16px;")
        console.log(`   %cToday's hours of study: `+ this.hourStudy,"color:cyan;")
        console.log(`   %cToday's hours of practical works: `+ this.hourPracticalWork,"color:violet;")
        console.log(`   %cToday's hours of work: `+ this.hourWork,"color:orange;")
        console.log(`   %cToday's hours of house activities: `+ this.hourHouse,"color:greenyellow;")
        console.groupEnd()
    }

    setHourStudy(hrs) {
        this.hourStudy = hrs;
    }

   setHourPractical(hrpw) {
        this.hourPracticalWork = hrpw;
    }

    setHourHouse (hrh) {
        this.hourHouse = hrh;
    }
}

// Pre-seting the days with a standard routine.
const Monday = new daySchedule("Monday",4,0,8,0);
const Tuesday = new daySchedule("Tuesday",4,4,8,0);
const Wednesday = new daySchedule("Wednesday",4,4,8,4);
const Thursday = new daySchedule("Thursday",4,4,8,2);
const Friday = new daySchedule("Friday",4,4,8,2);
const Saturday = new daySchedule("Saturday",4,4,0,3);
const Sunday = new daySchedule("Sunday",0,4,0,3);

// Pushing all the days into an array "week"
var week = [Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday];

const main = () => {
    let askChanges = prompt('Do you want to make changes in your weekly-routine? (y/n)','');
    if ((askChanges == 'y') || (askChanges == 'Y')) {
        makeChanges();
    } 
    
    for (day in week) {
        week[day].showInfo();
    }
}

const makeChanges = () => { // If the user needs to make changes in their weekly-routine (If they want to, they have to change the hours of the activity of the all days)
    askStudy = prompt('Do you want to change your study-time? (y/n):  ');
    if ((askStudy == 'y') || (askStudy == 'Y')) {
        for (day in week) {
            let newStudy = prompt(`Enter the study-time for ${week[day].day}: `);
            week[day].setHourStudy(newStudy);
        }
    }

    askPractical = prompt('Do you want to change your practical works-time? (y/n):  ');
    if ((askPractical == 'y') || (askPractical == 'Y')) {
        for (day in week) {
            let newPractical = prompt(`Enter the practical work-time for ${week[day].day}: `);
            week[day].setHourPractical(newPractical);
        }
    }

    askHouse = prompt('Do you want to change your study-time? (y/n):  ');
    if ((askHouse == 'y') || (askHouse == 'Y')) {
        for (day in week) {
            let newHouse = prompt(`Enter the house-time for ${week[day].day}: `);
            week[day].setHourHouse(newHouse);
        }
    }

}

main ();