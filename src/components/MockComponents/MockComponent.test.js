import { render, container } from "@testing-library/react";
import React from "react";
import MockComponent from "./MockComponent";

jest.mock("./Component1",() => () => <div id="mockComponent1">Hello Mock Component1</div>)
jest.mock("./Component2",() => () => <span id="mockComponent2">Hello Mock Component2</span>)

describe("Mock Component tests", () => {
    test("mocked components in react", () => {
        //create instance of mockcomponent
        const { container } = render(<MockComponent/>)
        //create html
        //here we reference component1,2 into 3(1 and 2 are real component)
        //we want mock component for 1 and 2 using jest mock
        console.log(container.outerHTML)
        
        //query for html element
        const mockComponent1 = container.querySelector("div#mockComponent1");
        const mockComponent2 = container.querySelector("span#mockComponent2");

        //assert
        expect(mockComponent1).toBeInTheDocument();
        expect(mockComponent2).toBeInTheDocument();
    })
})