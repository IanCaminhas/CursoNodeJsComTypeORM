import { EntityRepository, Repository } from 'typeorm';
import UserToken from '../entities/UserToken';

@EntityRepository(UserToken)
//Repository de tokens para recuperacao de senhas
class UserTokensRepository extends Repository<UserToken> {
  //Pesquisar pelo token
  public async findByToken(token: string): Promise<UserToken | undefined> {
    const userToken = await this.findOne({
      where: {
        token,
      },
    });

    return userToken;
  }
  // Criar um token
  public async generate(user_id: string): Promise<UserToken> {
    const userToken = await this.create({
      user_id,
    });

    await this.save(userToken);

    return userToken;
  }
}

export default UserTokensRepository;
