<template>
    <div class="containerBox">
      <div class="headerTitle">
            <p>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"/></svg>
              </span>
            </p>
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" class="colonIcon" width="25" height="25" viewBox="0 0 20 20"><g transform="rotate(180 10 10)"><path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.876 3.101c-.234.868-.564 1.595-.959 2.175C9.875 13.938 8.84 14.5 7.75 14.5a.75.75 0 0 0 0 1.5c1.671 0 3.137-.883 4.156-2.38c1.01-1.486 1.594-3.583 1.594-6.12Z"/></g></svg>
                အားတဲ့ရက်လေးတွေ မစ ပေးကြပါဦး
                <svg xmlns="http://www.w3.org/2000/svg" class="colonIcon" width="25" height="25" viewBox="0 0 20 20"><path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.876 3.101c-.234.868-.564 1.595-.959 2.175C9.875 13.938 8.84 14.5 7.75 14.5a.75.75 0 0 0 0 1.5c1.671 0 3.137-.883 4.156-2.38c1.01-1.486 1.594-3.583 1.594-6.12Z"/></svg>
            </p>
        </div>
     <div class="wrapper">
       <header>
         <p class="currentDate">{{ currentDate }}</p>
         <div class="icons">
           <span class="material-symbols-rounded" @click="changeMonth(-1)">chevron_left</span>
           <span class="material-symbols-rounded" @click="changeMonth(1)">chevron_right</span>
         </div>
       </header>
 
       <div class="calender">
         <ul class="weeks">
          <li v-for="(week, index) in weeksValue" :key="index">
           {{ week }}
         </li>
         </ul>
         <ul class="days">
           <li v-for="(day, index) in days" :key="index" :class="day.class" @click="handleDateClick(day)">
             {{ day.label }}
           </li>
         </ul>
       </div>
     </div>
     
     <div class="btnContainer text-center">
      <button class="dateConfirmBtn" @click="confirmDate">အဲ့ရက်တွေ အားတယ်</button>
     </div>
    </div>
 </template>
 <script>
 import { ref } from 'vue'
 export default {
   name: 'HelloWorld',
   setup(){
 
     let weeksValue = ref([
       'Sun', 'Mon', 'Tues ', 'Wed ', 'Thurs ', 'Fri ', 'Sat'
     ]);
 
     let monthsValue = ref([
     'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
     ])
     let days = ref([]);
     let date =ref( new Date())
     let currentMonth = ref(  new Date().getMonth() )
     let currentYear = ref(new Date().getFullYear())
     let currentDate = ref('');
     let clickedDaysContainer = ref([]);
     // function to render calender 
     const loadCalender = () =>{
       const firstDayOfMonth = new Date(currentYear.value, currentMonth.value, 1).getDay();
       const lastDateOfMonth = new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
       const lastDateOfLastMonth = new Date(currentYear.value, currentMonth.value, 0).getDate();
       const newDays = [];
       for (let i = firstDayOfMonth; i > 0; i--) {
         newDays.push({ label: lastDateOfLastMonth - i + 1, class: 'inactive' });
       }
 
       for (let i = 1; i <= lastDateOfMonth; i++) {
         const isToday = i === new Date().getDate() && currentMonth.value === new Date().getMonth() && currentYear.value === new Date().getFullYear();
         newDays.push({ label: i, class: isToday ? 'active' : '' });
       }
 
       for (let i = lastDateOfMonth; i < 6; i++) {
         newDays.push({ label: i - lastDateOfMonth + 1, class: 'inactive' });
       }
 
       console.error("Last Date of Month", lastDateOfLastMonth);
       currentDate.value = `${monthsValue.value[currentMonth.value]} ${currentYear.value}`
       days.value = newDays;
      
     }
 
     // function for handle click event in days in calender 
     const handleDateClick = (day)=>{
       day.class = 'active';
       let selectedDate = day.label;
       let clickedDateValue = new Date(currentYear.value, currentMonth.value, selectedDate);
       clickedDaysContainer.value.push(clickedDateValue);
       console.warn("Selected Days =>>>", clickedDaysContainer.value);
 
     }
 
     // function to change month and year value when click prev or next btn  
     const changeMonth = (changedIndex) =>{
       currentMonth.value += changedIndex;
 
       if (currentMonth.value < 0 || currentMonth.value > 11) {
         const date = new Date(currentYear.value, currentMonth.value);
         currentYear.value = date.getFullYear();
         currentMonth.value = date.getMonth();
       } else {
         const date = new Date();
       }
 
       loadCalender();
       console.log("Current Month Value=>", currentMonth.value)
     }
 
     loadCalender();
     console.log(`${date.value},${currentMonth.value},${currentYear.value}`)
     
     let confirmDate = () =>{
      console.log("Confirm Date ==>>>", clickedDaysContainer.value)
     }



     return {
       days,
       weeksValue,
       date,
       currentMonth,
       currentYear,
       currentDate,
       monthsValue,
       changeMonth,
       clickedDaysContainer,
       handleDateClick,
       confirmDate
     }
   }
  
 }
 </script>
 
 <style >
   .wrapper{
     justify-content: center;
     align-items: center;
 
     background: #fff;
     border-radius: 1rem;
     margin-top: 2rem;
   }
 
   header{
     display: flex;
     align-items: center;
     justify-content: space-between;
 
     padding: 25px 30px 10px;
   }
 
   header .currentDate{
     font-size: 1rem;
     font-weight: 700;
 }
 
   header .icons span{
     height: 40px;
     width: 40px;
     font-size: 2rem;
     font-weight: bold;
     cursor: pointer;
     text-align: center;
     line-height: 40px;
     margin-right: 0.5rem;
     border-radius: 50%;
 }
 
  .calender{
   /* display: inline-block; */
   width: 400px;
   justify-content: center;
   align-items: center;
  }
 
  .calender ul{
   display: flex;
   list-style: none;
   text-align: center;
 
   flex-wrap: wrap;
   padding-left: 0rem;
  }
 
  .calender ul li{
    font-size: 14px;
    /* padding: 0.5rem; */
   list-style: none;
   width: calc(100% / 7);
   margin-bottom: 1.3rem;
  }
 
  .calender .days li{
     margin-top: 20px;
     position: relative;
     cursor: pointer;
     z-index: 1;
 }

 .days li::before{
    position: absolute;
    content: "";
    left: 50%;
    top: 50%;
    height: 40px;
    width: 40px;
    z-index: -1;
    border-radius: 50%;
    transform: translate(-50%, -50%);
}

/* .calender .days li:hover::before{
    background: #f2f2f2;
} */

.calender .days li.active{
     color: #fff;
  
}

.calender .days li.inactive{
    color: #aaa;
}

.days .active::before{
    background-color: tomato;
}

.days li:not(.active):hover::before{
    background: #f2f2f2;
  }

  .dateConfirmBtn{
    padding: 20px 40px;
    border-radius: 1rem;
    border: none;
    color: #fff;
    background: var(--titleColor  );
   font-size: 1rem;
   font-weight: 600;
  }

  .dateConfirmBtn:hover{
    color: var(--background);
    background: var(--titleColor);
  }

 </style>
 