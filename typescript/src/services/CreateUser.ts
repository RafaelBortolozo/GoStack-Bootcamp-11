interface TechObject {
  title: string,
  experience: number
}

interface CreateUserData {
  name?: string //opcional
  email: string
  password: string
  techs: Array<string | TechObject> //se for apenas um tipo de dado, pode usar "string[]"
}

export default function createUser({ name='', email, password }: CreateUserData){
  const user = {
    name,
    email,
    password
  }

  return user;
}

