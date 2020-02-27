import chalk from 'chalk'
import figlet from 'figlet'

const banner = ()=>{
    console.log(chalk.green(figlet.textSync('Test')))
}
const banner2 = ()=>{
    console.log(figlet.textSync('Test2'))
}
export { banner, banner2 }