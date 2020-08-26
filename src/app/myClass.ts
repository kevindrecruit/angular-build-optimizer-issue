import { injectable } from 'inversify';

@injectable()
export class MyClass {
    public name = 'dependent';
}