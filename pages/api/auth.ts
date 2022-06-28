
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  msg: string,
  data? : any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if(req.method === 'POST'){
      const {body} = req;

      let {username, password} = body;
      
      if(!username || !password){
          res.json({msg : "username or password required"});
          return;
      }

      if(username === "admin@edmundpbx.com" && password === "edmundLock"){
          res.json({msg : "Successful Login", data : { username : "Eddie"}});
          return;
      }else{
          res.json({msg : "Invalid Credentials"})
      }

    }
    
}
