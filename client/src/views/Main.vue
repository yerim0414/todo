<template>
    <div>
        <div v-for="(val) in values">
            <div>{{val.title}}</div>
        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    import * as todoApi from '@/api/todo'

    export default {
        data(){
            return{
                values :[{
                    rows:[]
                }]
            }
        },
        methods: {
            getDataLoad(){
                console.log("start")
                this.values = []
                todoApi.getAllList().then(res =>{
                    // console.log(res.data);
                    res.data.forEach(element =>{

                        console.log(element);
                        this.values.push(element);
                    }
                    )
                });
            },
        },
        created(){
            this.getDataLoad();
        }
    }


</script>