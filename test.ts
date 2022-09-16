export class MyClass1 {
  public static fizzBuzz(n: number): void {
    for (let i: number = 1; i <= n; i++) {
      if (n % 3 == 0 && n % 5 == 0) {
        console.log(`FizzBuzz`);
      } else if (n % 3 == 0 && n % 5 != 0) {
        console.log(`Fizz`);
      } else if (n % 3 != 0 && n % 5 == 0) {
        console.log(`Buzz`);
      } else {
        console.log(`FizzBuss`);
      }
    }
  } // f
  public Hello(name: string | null): string | null {
    return `Hello ${name}`;
  }
}
export class MyClass2 {
  public Hello(name: string | null): string | null {
    return `Hello ${name}`;
  }
}
