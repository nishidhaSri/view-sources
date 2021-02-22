// import { mount, shallow } from "enzyme";
// import Register from "../register";
// import { act } from "react-dom/test-utils";

// describe("Register Component", () => {
//   it("should render a name input tag", () => {
//     const wrapper = shallow(<Register />);
//     expect(wrapper.find('input[name="name"]').exists()).toBe(true);
//   });
//   it("should render an email input tag", () => {
//     const wrapper = shallow(<Register />);
//     expect(wrapper.find('input[name="email"]').exists()).toBe(true);
//   });

//   it("should render a password input tag", () => {
//     const wrapper = shallow(<Register />);
//     expect(wrapper.find('input[name="password"]').exists()).toBe(true);
//   });

//   it("All checkbox should be false initially", () => {
//     const wrapper = shallow(<Register />);
//     expect(
//       wrapper.find('input[name="checkbox"]').forEach((node) => {
//         expect(node.props().checked).toEqual(false);
//       })
//     );
//   });

//   it("should render a submit button", () => {
//     const wrapper = shallow(<Register />);
//     expect(wrapper.find('button[name="submit"]').exists()).toBe(true);
//   });

//   it("the default value for both fields should be empty", () => {
//     const wrapper = shallow(<Register />);
//     expect(wrapper.find('input[name="name"]').prop("value")).toBe("");
//     expect(wrapper.find('input[name="email"]').prop("value")).toBe("");
//     expect(wrapper.find('input[name="password"]').prop("value")).toBe("");
//   });

//   it("on change of value in the field, the state of that field in the component should be updated", () => {
//     const wrapper = shallow(<Register />);

//     /* if the simulated event value and the field value is same then the state is updating on event trigger */
//     wrapper.find('input[name="name"]').simulate("change", {
//       target: {
//         value: "email",
//       },
//     });
//     expect(wrapper.find('input[name="name"]').prop("value")).toBe("email");
//     wrapper.find('input[name="email"]').simulate("change", {
//       target: {
//         value: "email@id.com",
//       },
//     });
//     expect(wrapper.find('input[name="email"]').prop("value")).toBe(
//       "email@id.com"
//     );
//     wrapper.find('input[name="password"]').simulate("change", {
//       target: {
//         value: "somepassword",
//       },
//     });
//     expect(wrapper.find('input[name="password"]').prop("value")).toBe(
//       "somepassword"
//     );
//   });
// });

// import React from "react";

// describe("Register", () => {
//   describe("on start", () => {
//     test("should fetch data on mount", () => {
//       let component;
//       act(() => {
//         component = mount(<Register />);
//       });
//       expect(
//         component.find("label.checkbox").forEach((node) => {
//           expect(node.text().exists()).toBe(true);
//         })
//       );
//     });
//   });
// });
