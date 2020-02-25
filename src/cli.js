import {} from 'dotenv/config'

let cli = args => {
  console.log(args);
  console.log(process.env.SERVER);
}

export { cli }
