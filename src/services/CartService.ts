import { DishEntity } from "../entites/DishEntity";
import { Cart } from "../entites/Cart";
import { CountableIngridientEntity } from "../entites/CountableIngridientEntity";

export class CartService {
  public createCart(dishes: DishEntity[]): Cart {
    const ingridients = dishes.flatMap((dish) => dish.ingridients);

    const mergedIngridients = ingridients.reduce(
      (ingridientsInCart, countableIngradient) => {
        const ingridientInCartIndex = ingridientsInCart.findIndex(
          (ingridient) => ingridient.equals(countableIngradient)
        );
        const ingridientInCart = ingridientsInCart[ingridientInCartIndex];

        if (ingridientInCart.canMerge(countableIngradient)) {
          ingridientsInCart[ingridientInCartIndex] =
            ingridientInCart.merge(countableIngradient);

          return ingridientsInCart;
        }

        ingridientsInCart.push(countableIngradient);

        return ingridientsInCart;
      },
      [] as CountableIngridientEntity[]
    );

    return new Cart(Math.random() * 1000, new Date(), mergedIngridients);
  }
}
