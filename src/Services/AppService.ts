import { APP_KEY } from "../config";

class Service{

    /**
	* Function for check if request has valid app-key in headers.
	*
	* @param headers
	* 
	* @return boolean
	*/
    checkValidRequest =  async (headers:any) => {
        if(headers['app-key'] != APP_KEY){
            return false;
        }
        return true;
	}
};

export const AppService    =    new Service();