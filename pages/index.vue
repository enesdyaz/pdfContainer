<template>
<div>
<v-form @submit.prevent='onSubmit'>
    <v-container class='subtitle-1 font-weight-bold'>
        <div>REPAIR ORDER FORM</div>
        <hr>
    <br>
    <div style='margin-left: 15px;'>
        <v-text-field v-model='name' class='caption' single-line dense hide-details="true" placeholder="First and Last Name"></v-text-field>
        <v-text-field v-model='phone' class='caption' single-line dense hide-details="true" placeholder="Phone Number"></v-text-field>
        <v-text-field v-model='email' class='caption' single-line dense hide-details="true" placeholder="Email address"></v-text-field>
    </div>
    </v-container>
    <br>



    <section style='margin-left: 15px;'>

    <v-container class='subtitle-1 font-weight-bold'>
        <div>DEVICE DETAILS</div>
        <hr>
    
        <v-chip-group v-model="select1" active-class="teal white--text"  >
            <v-chip v-for="size in ManufacturerData" :key="size"  :value="size" small>  {{ size }} </v-chip>
        </v-chip-group>

        <div v-if="select1">
            <v-chip-group v-model="select2" active-class="teal white--text" >
                <v-chip v-for="size in ModelData" :key="size" :value="size" small>  {{ size }} </v-chip>
            </v-chip-group>
        </div>

        <div v-if="select2">
            <v-chip-group v-model="select3" multiple active-class="teal white--text" >
                <v-chip v-for="size in ProblemData" :key="size" :value="size" small> {{ size }} </v-chip>
            </v-chip-group>
        </div>
    </v-container>
    </section>


    <section>
        <v-container class='subtitle-1 font-weight-bold'>
            <div>PRICE</div>
            <hr>
        <div style='margin-left: 15px;'>
            ${{ValueData}}
        </div>
        </v-container>
        <br>
    </section>

    <v-container>
        <v-btn type='submit' small color='primary' outlined>save</v-btn>
    </v-container>

    <section>
        <div v-if='repairData?repairData.length>0:""'>
            <v-container>

                <v-list two-line>
                    <template v-for='(item, index) in repairData' >
                        <v-list-item :key="index" >

                        <v-list-item-content>
                            <v-list-item-title>NAME: {{item.name }}, EMAIL: {{item.email}}</v-list-item-title>
                            <v-list-item-subtitle>DEVICE: {{item.select1}} - {{item.select2}} | ${{item.numberList}}</v-list-item-subtitle>
                        </v-list-item-content>
                        </v-list-item>
                    </template>
                    </v-list>

                    <v-btn to='/html2pdf'>PDF FILE</v-btn>
            
            </v-container>

        </div>
    </section>

</v-form>
</div>

</template>


<script>
export default {
data (){
    return{
    select1: '',
    select2: '',
    select3: '',
    numberList: 0,
    name: '',
    phone: '',
    email: '',
    Manufacturer: {
        apple: {
            iphone6: {
                battery: 59,
                screen: 69,
            },
            iphone7: {
                battery: 39,
                dock: 48,
            }
        },
        samsung: {
            galaxys8: {
                battery: 49,
                screen: 120,
            },
            galaxys10: {
                battery: 133,
                screen: 422,
            
            }
        },
        HTC: {
        htc10: {
            battery: 380,
            dockconnector: 280,
            screen: 450
        },
        htc11: {
            screen: 310,
            battery: 210,
            dock: 110,
            power: 240,
            sound: 110,
            home: 230,
            wifi: 110,
            gps: 100
        }
        }
    }
    
    }},
    methods:{
        onSubmit(){
            this.$store.commit('repairForm/ADD_REPAIR_DATA', {
                name: this.name,
                phone: this.phone,
                email: this.email,
                select1: this.select1,
                select2: this.select2,
                select3: this.select3,
                numberList: this.numberList,
            })
        }
    },
    computed: {
        ManufacturerData(){
            return Object.keys(this.Manufacturer) 
        }, 
        ModelData(){
            if(this.select1===''){
                return null
            }else{
                return Object.keys(this.Manufacturer[this.select1])
            }
        },
        ProblemData(){
            if(this.select2===''){
                return null
            }else{
                    return Object.keys(this.Manufacturer[this.select1][this.select2])
            }
        },
        ValueData(){
            if(this.select3===''){
                return null
            }else{
                this.numberList=0
                for(var i=0; i<this.select3.length;i++){
                this.numberList += Number(this.Manufacturer[this.select1][this.select2][this.select3[i]])
                }
                return this.numberList
                }
        },
        repairData(){
            const data = this.$store.state.repairForm.repairData
            // if(!data || data===undefined || Object.entries(data).length===0) return
            console.log('repairData', data)
            return data
        }
    },
    watch: {
        select1(){
        console.log(this.select1)
        this.select2=''
        this.select3=''
        }
    }
}
</script>

<style>
</style>