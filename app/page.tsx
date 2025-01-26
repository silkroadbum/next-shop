import {
  Container,
  Filters,
  ProductCard,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container>
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/*Список товаров*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 8,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 9,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif",
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />

              <ProductsGroupList
                title="Завтраки"
                items={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 8,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 9,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif",
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
