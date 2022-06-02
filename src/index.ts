interface Animal {
  eat(): void
}

class Human {
  name: string = 'baby'
  humanEat(): void {
    console.log('humanEat')
  }
}

interface HumanInterface extends Human {
  cry(): void
}

class Baby implements HumanInterface {
  name: string
  humanEat(): void {
    
  }
  cry(): void {
    
  }
}