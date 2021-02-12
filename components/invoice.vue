<template>
<div>

    <section style='margin-top: 30px; '> 
        <div style='float: left; margin-left: 30px;'>
            <h2>REPAIR FORM</h2> 
        </div>

        <table class='table-b' style='float: right; font-size: 0.8rem; width: 300px; margin-bottom: 70px;'>
            <tr>
                <th>NAME:</th>
                <td>{{repairData.name}}</td>
            </tr>
            <tr>
                <th>PHONE: </th>
                <td>{{repairData.phone}}</td>
            </tr>
            <tr>
                <th>EMAIL: </th>
                <td>{{repairData.email}}</td>
            </tr>
            <tr>
                <th>DEVICE DETAIL:</th>
                <td>{{repairData.select1}} > {{repairData.select2}}</td>
            </tr>
            <tr>
                <th>REPAIR PRICE: </th>
                <td>${{repairData.numberList}}</td>
            </tr>
        </table>
    </section>


    <table class='table-a' style='width: 766px;'>
        <tr>
            <th>Problem</th>
            <th>Status</th>
            <th>Details</th>
        </tr>
        <tr v-for="(item, index) in items" :key="index">
            <td>{{index+1}}. {{ item.problem }}</td>
            <td style='text-align: center; padding: 0;'><span>{{item.status}}</span></td>
            <td >
                <select v-if="items[index].status === 'no work'" v-model="items[index].issueSelect" multiple column active-class="primary">              
                        <option  v-for="i in item.issue" :key="i" x-small>{{i}}</option>
                </select> 
            </td>
        </tr>
</table>
</div>
</template>

<script>
export default {
    data () {
    return {
        detailList: [],
        items: [
        {
            problem: 'Screen',
            status: 'work',
            issue: ['light broken','heavy borken','no screen','half screen', 'smashed'],    
            issueSelect: [],
        },
            {
            problem: 'Battery',
            status: 'work',
            issue: ['light broken','heavy borken','no screen'],  
            issueSelect: [],
        },
        {
            problem: 'Dock Connector',
            status: 'work',
            issue: ['light broken','heavy borken','no screen'],
            issueSelect: [],   
        },
        {id: 4,
            problem: 'Earphone',
            status: 'work',
            issue: ['light broken','heavy borken','no screen'],
            issueSelect: [],  
        },
        {id: 5,
            problem: 'Microphone',
            status: 'work',
            issue: ['light broken','heavy borken','no screen'],
            issueSelect: [],  
        },
        {id: 6,
            problem: 'Wifi/GPS',
            status: 'work',
            issue: ['light broken','heavy borken','no screen'],
            issueSelect: [],  
        },
        {id: 7,
            problem: 'Volume issue',
            status: 'work', 
            issue: ['light broken','heavy borken','no screen'],
            issueSelect: [],  
        },
        {id: 8,
            problem: 'Front Camera',
            status: 'work',
            issue: ['light broken','heavy borken','no screen'],
            issueSelect: [],  
        },
        {id: 9,
            problem: 'Rear Camera',
            status: 'work',
            issue: ['light broken','heavy borken','no screen'],
            issueSelect: [],  
        },
        {id: 10,
            problem: 'Rear Side',
            status: 'work',
            issue: ['light broken','heavy borken','no screen'],
            issueSelect: [],  
        },
        {id: 11,
            problem: 'Seonsor',
            status: 'work',
            issue: ['light broken','heavy borken','no screen'],
            issueSelect: [],  
        },
        {id: 12,
            problem: 'Water Damage',
            status: 'work',
            issue: ['light broken','heavy borken','no screen'],
            issueSelect: [],  
        },
        ]
    }
},
computed: {
    repairData(){
        return this.$store.state.repairForm.repairData[0]
    },
    status() {
        
        for (var i=0;i<this.items.length;i++){
            
            if(this.items[i].status === 'true'){
                
                this.detailList.push(this.items[i].issue.reason)
            }
        }
        console.log(this.detailList)
        
        }
    },
    methods:{
    onClick(index){
    
        if(this.items[index].status==='work'){
            this.items[index].status = 'no work'
        } else {
        this.items[index].status = 'work'
        }
    }
    }
    
};
</script>

<style lang='scss' scoped>
.table-a {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    
    
    th {
    border: 1px solid #ccc;
    text-align: center;
    margin: 0;
    line-height: 200%;
    }
    td{
    border: 1px solid #ccc;
    text-align: left;
    margin: 0;
    line-height: 200%;
    text-align: left;
    padding-left: 20px;
    }

    tr:nth-child(even) {
        background-color: #dddddd;
    }
}

.table-b{
    
    td{
        padding-left: 10px;
    }
}


</style>