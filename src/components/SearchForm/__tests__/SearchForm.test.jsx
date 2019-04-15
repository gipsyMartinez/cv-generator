import React from "react";
import { mount } from "enzyme";
import SearchForm from "../index";

describe("> SearchForm/index.jsx", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <SearchForm
        handleSubmit={jest.fn()}
        handleChange={jest.fn()}
        value={"ABC"}
      />
    );
  });

  it("it should Call handleSubmit function When user submit data", () => {
    const submitFn = jest.fn();
    wrapper.setProps({ handleSubmit: submitFn });

    wrapper
      .find(".inputButton")
      .first()
      .simulate("submit");
    expect(submitFn).toBeCalled();
  });
});
