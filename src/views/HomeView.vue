<template>
   <div class=" wholeContainer">
    <HeaderComponent></HeaderComponent>
    <CalenderComponent class="calender" />
    <TimeComponent class="mt-5" />
    <LocationVote class="mt-5" />
    <PlanSummary class="mt-5" />
   </div>
</template>

<script>
    import HeaderComponent from '@/components/HeaderComponent.vue';
    import CalenderComponent from '@/components/CalenderComponent.vue';
    import TimeComponent from '@/components/TimeComponent.vue';
    import LocationVote from '@/components/LocationVote.vue';
    import PlanSummary from '@/components/PlanSummary.vue'
    export default{
        components:{HeaderComponent, CalenderComponent,TimeComponent,LocationVote,PlanSummary},
        setup(){

        }
    }

</script>

<style>
    .calender{
        display: none;
    }
</style>