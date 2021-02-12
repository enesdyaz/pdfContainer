export const state = () => ({
    repairData:[]
})

export const mutations = {
    ADD_REPAIR_DATA(state, payload){
        console.log('ADD_REPAIR_DATA', payload)
        const data = state.repairData
        if(!data || data === undefined){ state.repairData = []}
        state.repairData.push(payload)
    }
}
export const actions = {
    addRepairData({commit}, payload){

    }
}