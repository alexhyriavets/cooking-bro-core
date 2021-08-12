import { CountableIngridientEntity } from "./entites/CountableIngridientEntity";
import { DishEntity } from "./entites/DishEntity";
import { IngridientEntity } from "./entites/IngridientEntity";
import { Unit } from "./enums/Unit";
import { getCartRepository } from "./factories/cartRepositoryFactory";
import { CreateCartUseCase } from "./use-cases/CreateCartUseCase";

const getId = () => Math.round(Math.random() * 100000000);

const potato: IngridientEntity = new IngridientEntity(getId(), "potato");
const tomato: IngridientEntity = new IngridientEntity(getId(), "tomato");
const orange: IngridientEntity = new IngridientEntity(getId(), "orange");

const potato2: CountableIngridientEntity = new CountableIngridientEntity(
  potato,
  2,
  Unit.Kilogram
);
const potato3: CountableIngridientEntity = new CountableIngridientEntity(
  potato,
  3,
  Unit.Kilogram
);
const tomato1: CountableIngridientEntity = new CountableIngridientEntity(
  tomato,
  1,
  Unit.Unit
);
const tomato2: CountableIngridientEntity = new CountableIngridientEntity(
  tomato,
  2,
  Unit.Unit
);
const orange5: CountableIngridientEntity = new CountableIngridientEntity(
  orange,
  5,
  Unit.Kilogram
);

const dish1 = new DishEntity(getId(), "Borshch", [potato3, tomato1]);
const dish2 = new DishEntity(getId(), "Sup", [potato2, tomato2, orange5]);

const createCart = new CreateCartUseCase().execute;

const cartRepository = getCartRepository();

(async () => {
  await createCart([dish1, dish2]);
  await createCart([dish1]);

  const savedCard = await cartRepository.getAll();

  console.log("saved", savedCard);
})();
