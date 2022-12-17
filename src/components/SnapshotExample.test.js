import { render } from "@testing-library/react"
import { createRenderer } from "react-dom/test-utils"
import renderer from "react-test-renderer"
import App from "../App"
import Todos from "./Todos"
describe("snapshot testing", () => {
    test("snapshot for App component", () => {
        //convert component into json format nd save as snapshot
        //if snapshot already exist than it compares it and update it.if not then create new snapshot
        const renderedComponent = renderer.create(<App/>).toJSON()
        expect(renderedComponent).toMatchSnapshot();
    })

    test("snapshot for Todos component", () => {
        const renderedComponent = renderer.create(<Todos/>).toJSON()
        expect(renderedComponent).toMatchSnapshot();
    })
})
