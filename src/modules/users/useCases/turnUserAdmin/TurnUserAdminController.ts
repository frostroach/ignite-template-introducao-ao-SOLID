import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    try {
      const newAdminUser = await this.turnUserAdminUseCase.execute({ user_id });

      if (!newAdminUser) {
        return response.status(400).send();
      }

      return response.status(200).json(newAdminUser);
    } catch (err) {
      return response.status(404).json({ error: err.message });
    }
  }
}

export { TurnUserAdminController };
