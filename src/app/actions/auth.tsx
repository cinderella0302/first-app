import { SignupFormSchema, FormState } from '@/app/lib/definitions'
import { createSession } from '@/app/lib/session'
import bcrypt from 'bcrypt'

export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })
 
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // 2. Prepare data for insertion into database
  const { name, email, password } = validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)

  // 3. Insert user data into database
  // return {
  //   message: "An error occurred",
  // }
  // await createSession(user.id)
  // redirect('/profile')
 
  // Call the provider or db to create a user...
}