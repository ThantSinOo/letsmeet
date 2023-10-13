<template>
    <VCalneder :attributes="attributes"  />
    <!-- <VDatePicker :attributes="attributes" /> -->
</template>

<script>
    import { ref } from 'vue';
    export default{
        setup(){
        
        const attributes = ref([
            {
                highlight: true,
                dates: [
                
            ]
            }
        ])

        let datePicker = () =>{

        }

        if (attributes.length > 0) {
        // Access and console log the 'dates' array of the first item
        console.log(attributes[0].dates);
        } else {
        console.log("No items in the 'attributes' array.");
        }

        return{attributes,datePicker}
        }
    }
</script>