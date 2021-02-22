//login.test.js

import { configure, shallow, mount } from "enzyme";
import React from "react";
import Login from "./login";
import axios from 'axios';
import { API } from "../config";
import MockAdapter from 'axios-mock-adapter';
import Router from 'next/router';
import { act } from "react-dom/test-utils";
import {isAuth} from "../helpers/auth";


jest.mock('next/router',()=>(
  {
    basePath: '/',
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
    push: jest.fn(() => Promise.resolve(true)),
    replace: jest.fn(() => Promise.resolve(true)),
    reload: jest.fn(() => Promise.resolve(true)),
    prefetch: jest.fn(() => Promise.resolve()),
    back: jest.fn(() => Promise.resolve(true)),
    beforePopState: jest.fn(() => Promise.resolve(true)),
    isFallback: false,
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
  }
));

describe("Login Component", () => {

  beforeEach(()=>{
    Router.push.mockReset();
  })

  it("should render an email input tag", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[name="email"]').exists()).toBe(true);
  });

  it("should render a password input tag", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[name="password"]').exists()).toBe(true);
  });

  it("should render a submit button", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('button[name="submit"]').exists()).toBe(true);
  });

  it("the default value for both fields should be empty", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[name="email"]').prop("value")).toBe("");
    expect(wrapper.find('input[name="password"]').prop("value")).toBe("");
  });

  it("should login as a user correctly",async ()=>{


    var mock = new MockAdapter(axios);
    const data = { 
      token:"12345urjansajf",
      user:{
        role:"user"
      }
     };

  mock.onPost(`${API}/login`).reply(200, data);

  const wrapper=mount(<Login/>);

  wrapper.find(`input[name="email"]`).simulate("change", {
    target: {
      value:"nishidha@sri.com"
    },
  });

    wrapper.find(`input[name="password"]`).simulate("change", {
      target: {
        value:"123456"
      },
    });

   await act(async () => {
     await wrapper.find(`form`).simulate("submit");
    });

    expect(Router.push).toHaveBeenCalledWith('/user');
   
  })


  it("should login as an admin correctly",async ()=>{

    process.browser=true;

    var mock = new MockAdapter(axios);
    const data = { 
      token:"12345urjansajf",
      user:{
        role:"admin"
      }
     };

  mock.onPost(`${API}/login`).reply(200, data);

  const wrapper=mount(<Login/>);

  wrapper.find(`input[name="email"]`).simulate("change", {
    target: {
      value:"nishidha@sri.com"
    },
  });

    wrapper.find(`input[name="password"]`).simulate("change", {
      target: {
        value:"123456"
      },
    });

   await act(async () => {
     await wrapper.find(`form`).simulate("submit");
    });

    expect(Router.push).toHaveBeenCalledWith('/admin');
   
  })

});
