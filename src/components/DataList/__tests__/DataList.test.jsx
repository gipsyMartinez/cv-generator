import React from "react";
import { shallow } from "enzyme";
import DataList from "../index";
import LanguagesCharts from "../../LanguagesCharts";

describe("> DataList/index.jsx", () => {
  let wrapper;
  const props = {
    avatar_url: "https://avatars0.githubusercontent.com/u/22090622?v=4",
    bio: "Ruby and JS 🦄",
    hireable: null,
    html_url: "https://github.com/gipsyMartinez",
    login: "gipsyMartinez",
    name: "Gipsy Martínez",
    url: "https://api.github.com/users/gipsyMartinez",
    userLanguages: []
  };

  beforeEach(() => {
    wrapper = shallow(<DataList {...props} />);
  });

  it("it should make conditional rendering for company, blog, email and location", () => {
    expect(wrapper.find(".company").length).toBe(0);
    expect(wrapper.find(".blog").length).toBe(0);
    expect(wrapper.find(".email").length).toBe(0);
    expect(wrapper.find(".location").length).toBe(0);

    // Setting props
    wrapper.setProps({
      company: "Company name",
      blog: "https://gipsyMartinez.com",
      email: "gipsy.martinez@gmail.com",
      location: "Santiago"
    });
    // Validating conditional rendering
    expect(wrapper.find(".company").length).toBe(1);
    expect(wrapper.find(".blog").length).toBe(1);
    expect(wrapper.find(".email").length).toBe(1);
    expect(wrapper.find(".location").length).toBe(1);
  });

  it("it should render LanguagesCharts components only when user owns repositories", () => {
    expect(wrapper.find(LanguagesCharts).length).toBe(0);
    // Setting props
    wrapper.setProps({ userLanguages: ["Java", "Phyton"] });
    expect(wrapper.find(LanguagesCharts).length).toBe(1);
  });
});
