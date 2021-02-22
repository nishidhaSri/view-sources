// import * as React from "react";
// import { shallow } from "enzyme";
// import Home from "../index";

// describe("Pages", () => {
//   describe("Index", () => {
//     it("should render without throwing an error", function () {
//       expect(1 + 2).toEqual(3);
//     });
//   });
// });

// test("App is mounted", () => {
//   const wrapper = shallow(<Home />);
//   expect(wrapper).toMatchSnapshot();
// });

// import Home from "../pages/index";

// // Mock the getContent function which I don't know where it comes from.
// jest.mock("../pages/index.js", () => ({
//   callApi: () => Promise.reject(),
// }));

// describe("Home categories", () => {
//   var wrapper;

//   // beforeEach(async () => {
//   //   const props = await Home.getInitialProps();
//   //   // console.log(props);
//   //   wrapper = shallow(<Home {...props} />);
//   // });

//   it("populates the categories", async () => {
//     // Inject anything you want to test
//     // const props = await Home.getInitialProps();
//     const props = await Home.getInitialProps();
//     // And make sure it results in what you want.
//     expect(props).toBe({
//       categories: [],
//       // alert: "There was an error loading data, please try again."
//     });
//     // expect(wrapper.find("h3.categoryName1").text()).toBe("ReactJS");
//   });
// });
