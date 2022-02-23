# Ejercicio teórico

## 1 - Problemas detectados

En este ejemplo propuesto, nos encontramos ante dos violaciones de los principios SOLID:

- Principio de Liskov: una subclase debe ser sustituible por su superclase, y si al hacer esto el programa falla, estaremos violando dicho principio.
- Principio de abierto/cerrado: las entidades deberían estar abiertas a su extensión pero cerradas a su modificación.

Como vemos el programa debería de poder conocer cada tipo de servicio y llamar al método de precio u obtener dicho precio, si añadiesemos un tipo nuevo de servicio tendríamos que reajustar dicha clase con más condiciones, lo cual impediría la automatización del mismo.

Además la extensión dicho lo anterior, parece más compleja que si definimos unos modelos más genéricos y los vamos extendiendo en función de nuestras necesidades.

Podríamos generar una clase básica de contenido sobre la cual extender Multimedia y Premium y obtener los precios en función de recargo o no.

Para la parte de los servicios, podemos crear una interfaz para obligar a establecer un acuerdo común, y luego desarrollar mediante clases (Streaming o Download) los servicios correspondientes y los detalles que necesite cada uno.

En el siguiente punto se propone un pequeño ejemplo para la corrección de la **clase RegisteredUser**.

## 2 - Solución alternativa

```typescript
class Content {
  title: string;
  duration: number;
  adult: boolean;
  size: number;
  price: number;
  premiumFee: number | undefined;
  constructor(
    title: string,
    duration: number,
    adult: boolean,
    size: number,
    price: number
  ) {
    this.title = title;
    this.duration = duration;
    this.adult = adult;
    this.size = size;
    this.price = price;
  }
}

class MultimediaContent extends Content {
  getPrice() {
    return this.price;
  }
}

class PremiumContent extends Content {
  premiumFee: number;
  constructor(
    title: string,
    duration: number,
    adult: boolean,
    size: number,
    price: number,
    premiumFee: number
  ) {
    super(title, duration, adult, size, price);
    this.premiumFee = premiumFee;
  }

  getPrice() {
    return this.price + this.premiumFee;
  }
}

type TContent = MultimediaContent | PremiumContent;

interface IService {
  timestamp: number;
  content: TContent;
  getContent(): TContent;
}

class StreamingService implements IService {
  timestamp: number = Date.now();
  content: TContent;
  constructor(content: TContent) {
    this.content = content;
  }
  getContent(): TContent {
    return this.content;
  }
}

class DownloadService implements IService {
  timestamp: number = Date.now();
  content: TContent;
  constructor(content: TContent) {
    this.content = content;
  }
  getContent(): TContent {
    return this.content;
  }
}

class RegisteredUser {
  services: IService[];
  constructor(services: IService[]) {
    this.services = services;
  }
  get totalPrice(): number {
    return this.services.reduce(
      (acc, curr) => acc + curr.content.getPrice(),
      0
    );
  }
}

const spiderman = new PremiumContent("Spiderman", 120, false, 1024, 10, 6);
const batman = new MultimediaContent("Batman", 120, false, 1024, 10);
const joker = new PremiumContent("joker", 120, false, 20, 40, 5);

const User1 = new RegisteredUser([
  new StreamingService(spiderman),
  new DownloadService(batman),
  new DownloadService(joker),
  new StreamingService(joker),
]);
```
