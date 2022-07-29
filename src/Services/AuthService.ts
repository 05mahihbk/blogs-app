import { sign, verify, SignOptions, VerifyOptions, TokenPayload } from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';
import { Users } from "../Entities/Users";

class Service{

    /**
	* Function for get token from given string.
	*
	* @param str:string
	* 
	* @return token
	*/
    getToken =  async (str:string) => {
        if(str){
            let strArr = str.split(' ');
            if(strArr[0] === 'Bearer'){
                if(strArr[1]){
                    return strArr[1];
                }
            }
        }
        return '';	
	}

    /**
	* Function for create token for given object.
	*
	* @param data:object
	* 
	* @return jwtauthtoken
	*/
    createJsonToken =  async (data:object) => {
		const privateKey = fs.readFileSync(path.join(__dirname, './../../private.pem'));

        const signInOptions: SignOptions = {
            algorithm: 'RS256',
            //expiresIn: '24h'
        };

        return sign(JSON.stringify(data), privateKey, signInOptions);
	}

    /**
	* Function for verify given token.
	*
	* @param token:string
	* 
	* @return decoded token data
	*/
    verifyJsonToken = async (token: string) => {
        return new Promise((resolve, reject) => {
    
            const privateKey = fs.readFileSync(path.join(__dirname, './../../private.pem'));
    
            const verifyOptions: VerifyOptions = {
                algorithms: ['RS256'],
            };
    
            verify(token, privateKey, verifyOptions, (error, decoded: TokenPayload) => {
                if (error){
                    return reject(error);
                }else{
                    resolve(decoded);
                }
            })
        });
    
    }

    /**
	* Function for check Authorization of request.
	*
	* @param headers:any
	* 
	* @return authorized user data.
	*/
    checkAuthorization    =  async (headers:any) => {
        if(headers.authorization){
            const token   = await this.getToken(headers.authorization);
            const user    = await this.verifyJsonToken(token);
            return await Users.findOneBy({ id:user['id'] });
        }else{
            return null;
        }
	}
};

export const AuthService    =    new Service();