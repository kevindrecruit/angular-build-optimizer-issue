import { injectable, inject } from 'inversify';
import { MyClass } from './myClass';

@injectable()
export class MyOtherClass {
    public name;
    // Below line is broken by the build-optimizer script
    constructor(@inject(MyClass) myClass) {
        this.name = myClass.name;
    }
}