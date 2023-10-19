<template>
    <div class="col-12 timePickContainer">
        <div class="headerTitle timePickTitle">
            <p><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path fill="#f6ce4b" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"/><rect width="2" height="7" x="11" y="6" fill="#f6ce4b" rx="1"><animateTransform attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></rect><rect width="2" height="9" x="11" y="11" fill="#f6ce4b" rx="1"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></rect></svg></p>
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" class="colonIcon" width="25" height="25" viewBox="0 0 20 20"><g transform="rotate(180 10 10)"><path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.876 3.101c-.234.868-.564 1.595-.959 2.175C9.875 13.938 8.84 14.5 7.75 14.5a.75.75 0 0 0 0 1.5c1.671 0 3.137-.883 4.156-2.38c1.01-1.486 1.594-3.583 1.594-6.12Z"/></g></svg>
                မင်း အားတဲ့အချိန် ပေးချင်တဲ့အချိန် တစ်ချက် ရွေးပေး
                <svg xmlns="http://www.w3.org/2000/svg" class="colonIcon" width="25" height="25" viewBox="0 0 20 20"><path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.876 3.101c-.234.868-.564 1.595-.959 2.175C9.875 13.938 8.84 14.5 7.75 14.5a.75.75 0 0 0 0 1.5c1.671 0 3.137-.883 4.156-2.38c1.01-1.486 1.594-3.583 1.594-6.12Z"/></svg>
           
            </p>
        </div>
        <div class="row headerBodyText timePickBodyText">
         
            <button 
                v-for="(time, index) in freeTime"
                class="timePickerBtn"
                 :class="{'active': isActive[time.value]}"

                :key="index"
                @click="pickTime(time.value)"
                >
                {{ time.label }} 
            </button>
           
            
        </div>
    </div>
</template>

<script>
    import { reactive, ref } from 'vue';
    export default{
        setup(){
            const isActive = reactive({});
            const selectedFreeTime = ref([]);
            // const isActive = ref(false);
            const freeTime = ref([
                {label: 'မနက်', value:'morning'},
                {label: 'နေ့လည်', value:'noon'},
                {label: 'ညနေပိုင်းပဲ', value:'evening'},
                {label: 'တစ်နေကုန်', value:'wholeday'},
                {label: 'ညအိပ်ပိုကောင်း', value:'nightstay'},
            ]);

            let pickTime = (data) =>{
                // console.warn("Clicked Value", time);
                isActive[data] = !isActive[data];
                if(selectedFreeTime.value.includes(data)){
                    selectedFreeTime.value = selectedFreeTime.value.filter((d)=> d !== data);
                    console.log("The value is already added")
                }else{
                    selectedFreeTime.value.push(data); 
                    console.log("This value is new")
                }
               console.log("Free Time =>", selectedFreeTime.value)

            }


            return{freeTime, pickTime,isActive}
        }
    }
</script>

<style scoped>

.timePickerBtn{
    width: 8rem;
    color: var(--titleColor);
    background: var(--textColor);

    font-family: 'MyanmarTagu';
    margin: 0.2rem;
    font-size: 16px;
    font-weight: 600;

    border: none;
    padding: 1rem;
    border-radius: 0.5rem;
}

.active{
    width: 8rem;
    background: var(--titleColor);
    color: var(--textColor);
}

</style>