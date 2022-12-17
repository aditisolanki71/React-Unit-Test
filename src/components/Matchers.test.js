import { render} from "@testing-library/react";
import Matchers, { compileCode, sum } from "./Matchers"

test("truthy/falsy matchers", () => {
    render(<Matchers/>)
    const val = sum(2,3)
    expect(val).toBeTruthy();

    const val2 = sum(0,0);
    //expect(val2).toBeTruthy();
    expect(val2).not.toBeTruthy();
    expect(val2).toBeFalsy();
    expect(false).toBeFalsy();

    const n = null;
    expect(n).toBeNull();
    //expect(n).not.toBeDefined();
})

test("number matchers",() => {
    render(<Matchers/>)
    const val = sum(2,3)
    expect(val).toBe(5);
    expect(val).toBeGreaterThan(4);
})

test("object matchers", () => {
    const person = {name: "aditi", age: 25};
    expect(person).toStrictEqual({name: "aditi", age: 25});
    expect(person).toEqual({name: "aditi", age: 25});
})

test("string matchers", () => {
    expect("aditi").toMatch('aditi')
    expect("aditi solanki").toMatch('olank')
    expect("Aditi").not.toMatch('solanki')
})

test("Array matchers", () => {
    const name = ["Aditi", "Arjun", "Moni"]
    expect(name).toHaveLength(3);
    //expect(name).toContain("arjun")
    expect(name).toContain("Moni");
    expect(name).not.toContain("bholu")
})

test("Exception matcher",() => {
    expect(() => compileCode()).toThrow();
    expect(() => compileCode()).toThrow(Error)
    expect(() => compileCode()).toThrow("something went wrong!!!")
})