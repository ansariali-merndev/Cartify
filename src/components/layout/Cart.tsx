import { useUser } from "@/Context/UserContext";
import { Title } from "../block/Title";

export const Cart = () => {
  const { cartState } = useUser();

  console.log(cartState);

  return (
    <section>
      <Title title="Review Your Order" />
      <div>
        <div>
          {cartState.map((item) => (
            <p>{item.id}</p>
          ))}
        </div>
        <div></div>
      </div>
    </section>
  );
};
