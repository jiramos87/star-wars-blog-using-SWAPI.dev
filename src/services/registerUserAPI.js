const env = process.env.NODE_ENV || 'development'
const baseUrl = env === 'development' ? 'http://localhost:5000' : 'http://herokuasdf.com'

const registerUserAPI = async (registerFormData) => {
    const body = JSON.stringify(registerFormData) 
    try{
        console.log(registerFormData)
        let call = await fetch(`${baseUrl}/register`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body
          })
          
          return call.json()
    } catch (error){
        console.error(error)    
    }

}

export default registerUserAPI