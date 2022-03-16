import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const foundUser = this.usersRepository.findByEmail(email);

    if (foundUser) {
      throw new Error("User with this e-mail already exists.");
    }

    const userCreated = this.usersRepository.create({ email, name });

    return userCreated;
  }
}

export { CreateUserUseCase };
