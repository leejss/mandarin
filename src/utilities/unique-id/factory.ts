type IdGenerator = () => string;
// HoC: make fn using prefix parameter
type IdGeneratorFactory = (prefix: string) => IdGenerator;
type prefix = string;

// Id generator factory
export class UniqueIdFactory {
  private idGeneratorFactory: IdGeneratorFactory;
  // store id generators per prefix
  private idGenerators: Record<prefix, IdGenerator> = {};

  // Accepts generator factory
  constructor(idGeneratorFactory: IdGeneratorFactory) {
    this.idGeneratorFactory = idGeneratorFactory;
  }

  nextId(prefix: string): string {
    // Create unique id by using id generator
    if (!this.idGenerators[prefix]) {
      // id generator factory에 prefix를 전달한다.
      this.idGenerators[prefix] = this.idGeneratorFactory(prefix);
    }
    // return unique id
    return this.idGenerators[prefix]();
  }
}

// Globally used id generator
export function globalIdGeneratorFactory(prefix = '') {
  // eslint-disable-next-line prefer-const
  let index = 1;
  return () => `Salda${prefix}${index}++`;
}
