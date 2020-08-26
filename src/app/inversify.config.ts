import 'reflect-metadata';
import { Container } from 'inversify';
import { MyClass } from './myClass';
import { MyOtherClass } from './myOtherClass';

export const container = new Container();
container.bind<MyClass>(MyClass).toSelf();
container.bind<MyOtherClass>(MyOtherClass).toSelf();