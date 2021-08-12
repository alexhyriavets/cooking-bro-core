import { CartEntity } from "../entites/CartEntity";
import { CountableIngridientEntity } from "../entites/CountableIngridientEntity";
import { DishEntity } from "../entites/DishEntity";
import { getCartRepository } from "../factories/cartRepositoryFactory";

export class CreateCartUseCase {
  execute(dishes: DishEntity[]): Promise<CartEntity> {
    const ingridients = dishes.flatMap((dish) => dish.ingridients);

    const mergedIngridients = ingridients.reduce(
      (ingridientsInCart, countableIngradient) => {
        const ingridientInCartIndex = ingridientsInCart.findIndex(
          (ingridient) => ingridient.equals(countableIngradient)
        );
        const ingridientInCart = ingridientsInCart[ingridientInCartIndex];

        if (
          ingridientInCart &&
          ingridientInCart.canMerge(countableIngradient)
        ) {
          ingridientsInCart[ingridientInCartIndex] =
            ingridientInCart.merge(countableIngradient);

          return ingridientsInCart;
        }

        ingridientsInCart.push(countableIngradient);

        return ingridientsInCart;
      },
      [] as CountableIngridientEntity[]
    );

    const cartRepository = getCartRepository();

    const newCart = new CartEntity(
      Math.round(Math.random() * 1000),
      new Date(),
      mergedIngridients
    );

    return cartRepository.saveOne(newCart);
  }
}
