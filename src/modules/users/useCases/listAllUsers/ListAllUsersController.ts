import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.headers;

    let users: User[];

    try {
      if (!Array.isArray(user_id)) {
        users = this.listAllUsersUseCase.execute({ user_id });
      }

      return response.status(200).json(users);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListAllUsersController };
