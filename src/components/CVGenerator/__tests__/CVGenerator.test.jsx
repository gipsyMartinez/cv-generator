import React from "react";
import { mount } from "enzyme";
import CVGenerator from "../index";
import SearchForm from "../../SearchForm";
import DataList from "../../DataList";

describe("> CVGenerator/index.jsx", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<CVGenerator />);
  });

  it("should render SearchForm child component on initial load", () => {
    expect(wrapper.find(SearchForm).length).toBe(1);
  });

  it("should not render DataList child component on initial load", () => {
    expect(wrapper.find(DataList).length).toBe(0);
  });

  it("should render DataList child component when userData obj is not empty", () => {
    const data = {
      avatar_url: "https://avatars3.githubusercontent.com/u/531683?v=4",
      bio: "Front End/RoR Developer",
      blog: "",
      company: "WellCode",
      created_at: "2010-12-21T09:22:23Z",
      email: null,
      events_url: "https://api.github.com/users/gipsy/events{/privacy}",
      login: "gipsy",
      html_url: "https://github.com/gipsy/"
    };

    wrapper.setState({ userData: data });

    expect(wrapper.find(DataList).length).toBe(1);
  });

  it("should render an error notification when error is not empty", () => {
    const errorMessage = "An error message";
    wrapper.setState({ error: errorMessage });
    expect(wrapper.find(".errorNotification").length).toBe(1);
  });
});
