
class Consumer{
    constructor(apiService){
        this.apiService = apiService;
    }
    async getData(params=1){
        try{
            let  response = await this.apiService.getTodos(params);
            if(this.isValidResponse(response)){
                //Do something with response
                return response.data;
            }else{
                return {
                    error:`Invalid response`,
                    data:undefined,
                    response
                };
            }
        }catch(ex){
            return {
                error:{...ex}
            };
        };
    }
    isValidResponse(res){
        return typeof res !=='undefined' &&
        typeof res.status!=='undefined' &&
        res.status===200; //Assuming that 200 is the only acceptable status
    }
}


module.exports = Consumer;