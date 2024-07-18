import { MongoHelper } from '@/adapters/repositories'
import { type ILogErrorRepository } from '@/core'

export class LogRepository implements ILogErrorRepository {
  async logError (stack: string): Promise<void> {
    const errorCollection = MongoHelper.getCollection('users_logs')
    await errorCollection.insertOne({
      data: stack,
      date: new Date()
    })
  }
}
