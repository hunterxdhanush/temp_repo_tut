const os =require('os')
const user =os.userInfo()
console.log(`the system uptime is ${os.uptime()} seconds`)
const cos={
    na:os.type(),
    re:os.release(),
    tmem:os.totalmem(),

}
console.log(cos)