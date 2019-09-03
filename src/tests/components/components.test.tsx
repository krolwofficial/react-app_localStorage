import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import InputRange from "../../components/Dashboard/Form/InputRange";
import InputSelect from "../../components/Dashboard/Form/InputSelect";
import Form from "../../components/Dashboard/Form";
import Preview from "../../components/Dashboard/Preview";
import Dashboard from "../../components/Dashboard";
import NavBar from "../../components/NavBar";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("Should render Dashboard component", () => {
  const wrapper = shallow(<Dashboard />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("Should render Form component", () => {
  const wrapper = shallow(<Form />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("Should render Preview component", () => {
  const wrapper = shallow(<Preview />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("Should render InputRange component", () => {
  const wrapper = shallow(
    <InputRange handleChange={() => []} max={200} text={"width"} />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("Should render InputSelect component", () => {
  const wrapper = shallow(<InputSelect handleChange={() => []} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("Should render NavBar component", () => {
  const wrapper = shallow(<NavBar />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
