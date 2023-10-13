<template>
     <div class="headerContainer">
        <div class="headerTitle">
            <p><span>
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 20 20"><path fill="tomato" d="M14.95 13.955a7.005 7.005 0 0 0 0-9.904a6.998 6.998 0 0 0-9.9 0a7.005 7.005 0 0 0 0 9.904l1.521 1.499l2.043 1.985l.133.118c.775.628 1.91.588 2.64-.118l2.435-2.37l1.128-1.114ZM10 12a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"/></svg></span></p>
            <p class="mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="colonIcon" width="25" height="25" viewBox="0 0 20 20"><g transform="rotate(180 10 10)"><path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.876 3.101c-.234.868-.564 1.595-.959 2.175C9.875 13.938 8.84 14.5 7.75 14.5a.75.75 0 0 0 0 1.5c1.671 0 3.137-.883 4.156-2.38c1.01-1.486 1.594-3.583 1.594-6.12Z"/></g></svg>
                ဆုံရပ်
                <svg xmlns="http://www.w3.org/2000/svg" class="colonIcon" width="25" height="25" viewBox="0 0 20 20"><path fill="currentColor" d="M13.5 7.5a3.5 3.5 0 1 0-1.876 3.101c-.234.868-.564 1.595-.959 2.175C9.875 13.938 8.84 14.5 7.75 14.5a.75.75 0 0 0 0 1.5c1.671 0 3.137-.883 4.156-2.38c1.01-1.486 1.594-3.583 1.594-6.12Z"/></svg>
            </p>
        </div>
        <div class="headerBodyText">
           <div class="col-12 row mb-3"
                v-for="(place,index) in combinedData" 
                :key="index"
            >
                <div 
                    class="col-6">
                    <img  :src="place.image" width="200" height="100" class="placeImage" />
                </div>
                <div class="col-5 locationInfo">
                    <h5 >{{ place.title }}</h5>
                    <button
                        class="linkBtn" 
                        >
                        <a :href="place.link">နေရာကြည့်ရန် နှိပ်ပါ</a>
                    </button>
                </div>
           </div>
        </div>
    </div>
</template>

<script>
import { ref,computed } from 'vue'
    export default{
        setup(){
            const placeInfo = ref([
            {
                title: 'Thiri San Motel',link: 'https://www.google.com/maps/place/Thiri+San+Motel/@16.7944298,96.1199946,17z/data=!3m1!4b1!4m6!3m5!1s0x30c1eb170ea94a0d:0x38735996f9962a5f!8m2!3d16.7944247!4d96.1225695!16s%2Fg%2F1pwfx706w?entry=ttu', 
            },
            {
                title: '101 Mile Resort',link: 'https://www.google.com/maps/place/%E2%80%8B%E1%80%90%E1%80%B1%E1%80%AC%E1%80%BA%E1%80%9D%E1%80%84%E1%80%BA+%E2%80%8B%E1%80%9B%E1%80%BD%E1%80%BE%E1%80%B1%E1%80%9B%E1%80%BE%E1%80%AF%E1%80%81%E1%80%84%E1%80%BA%E1%80%B8%E1%80%9F%E1%80%AD%E1%80%AF%E1%80%90%E1%80%9A%E1%80%BA/@16.8787765,96.1633051,15z/data=!4m9!3m8!1s0x30c193914a6fc913:0xc729d88ec47294e2!5m2!4m1!1i2!8m2!3d16.8833333!4d96.1683333!16s%2Fg%2F11b6dpb4fm?entry=ttu', 
            }
        ])
           
            const imageList = ref([]);
            const loadImages = () =>{
                imageList.value = [
                    require('../assets/images/place1.jpg'),
                    require('../assets/images/place2.jpg'),

                ]
            }

            loadImages();

             // Combine placeInfo and imageList into a single computed ref
            const combinedData = computed(() => {
            return placeInfo.value.map((place, index) => {
                return {
                ...place,
                image: imageList.value[index],
                };
            });
            });

        return{
            placeInfo,imageList, loadImages,combinedData
        }
        }
    }
</script>