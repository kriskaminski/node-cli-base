import {} from 'dotenv/config'
import program from 'commander'
import chalk from 'chalk'

import {testConnection} from './connection'
import cry from './cry'
// Ui elements
import { banner, banner2} from './ui'

let cli = async args =>{
  banner()  
  program
  .option('-d, --debug', 'output extra debugging')
  .option('-t, --test', 'test connection')
  .option('-c, --cry', 'test connection')
  .parse(args);

  if (program.debug) {
    console.log(program.opts())
    console.log(args);
  } 
  if (program.cry) cry()
  if (program.test) {
    console.log('Testing...')
    let result = await testConnection()
    console.log(result)
  } else console.log('No command line arguments provided')
}

export {cli}