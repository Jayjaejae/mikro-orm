import { ensureDir, writeFile } from 'fs-extra';
import { NamingStrategy, Utils } from '@mikro-orm/core';
import { DatabaseSchema, DatabaseTable, EntityManager } from '@mikro-orm/knex';
import { SourceFile } from './SourceFile';

export class EntityGenerator {

  private readonly config = this.em.config;
  private readonly driver = this.em.getDriver();
  private readonly platform = this.driver.getPlatform();
  private readonly helper = this.platform.getSchemaHelper()!;
  private readonly connection = this.driver.getConnection();
  private readonly sources: SourceFile[] = [];

  constructor(private readonly em: EntityManager) { }

  async generate(options: { baseDir?: string; save?: boolean, namingStrategy?: NamingStrategy, tableWhitelistRegex?: string, tableBlacklistRegex?: string } = {}): Promise<string[]> {
    const baseDir = Utils.normalizePath(options.baseDir || this.config.get('baseDir') + '/generated-entities');
    const schema = await DatabaseSchema.create(this.connection, this.helper, this.config);
    schema.getTables()
      .filter(table => {
        const whitelistIncluded = options.tableWhitelistRegex && !!table.name.match(options.tableWhitelistRegex);
        const blacklistIncluded = options.tableBlacklistRegex && !!table.name.match(options.tableBlacklistRegex);

        if (whitelistIncluded === true && blacklistIncluded === true) {
          throw new Error('Cannot be included in blacklist and whitelist at the same time');
        }
        return whitelistIncluded || !blacklistIncluded;
      })
      .forEach(table => this.createEntity(table, options.namingStrategy || this.config.getNamingStrategy()));

    if (options.save) {
      await ensureDir(baseDir);
      await Promise.all(this.sources.map(file => writeFile(baseDir + '/' + file.getBaseName(), file.generate())));
    }

    return this.sources.map(file => file.generate());
  }

  createEntity(table: DatabaseTable, namingStrategy: NamingStrategy): void {
    const meta = table.getEntityDeclaration(namingStrategy, this.helper);
    this.sources.push(new SourceFile(meta, namingStrategy, this.helper));
  }

}
