const env = process.env.NODE_ENV || 'development'
const baseUrl = env === 'development' ? 'http://localhost:5000' : 'http://herokuasdf.com'

const loginUserAPI = async (loginFormData) => {
    console.log('loginFormData', loginFormData)
    const body = JSON.stringify(loginFormData) 
    try{
        let call = await fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body
          })
          
          
          if(!call.ok) throw Error("There was a problem in the login request")

          if(call.status === 401){
            throw("Invalid credentials")
          }
          else if(call.status === 400){
            throw ("Invalid email or password format")
        }
        return call.json()
    } catch (error){
        console.error(error)    
    }

}

export default loginUserAPI